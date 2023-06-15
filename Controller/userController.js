import sql from 'mssql';
import config from '../Db/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const loginRequired = async (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized User.!!!' });
    }
};


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input("username", sql.VarChar, username)
            .input("email", sql.VarChar, email)
            .query("SELECT * FROM users WHERE username = @username OR email = @email");
            const user = result.recordset[0];
            if (user) {
                res.status(409).json({ message: 'User already exists.!!!!!' });
            } else {
                await pool.request()
                    .input("username", sql.VarChar, username)
                    .input("email", sql.VarChar, email)
                    .input("password", sql.VarChar, hashedPassword)
                    .query("INSERT INTO users (username, email, password) VALUES (@username, @email, @password)");
                res.status(200).json({ message: 'User created successfully' });
            }
    } catch (error) {
        res.status(500).json({ Message: `Failed to create the user. ${error.message}` });
    } finally {
        sql.close();
    }
};


export const login = async (req, res) => {
    const { username, password } = req.body;
    let pool = await sql.connect(config.sql);
    let result = await pool.request()
        .input("username", sql.VarChar, username)
        .query("SELECT * FROM users WHERE username = @username");
    const user = result.recordset[0];
    if (!user) {
        res.status(401).json({ message: 'Invalid username.!!!!!!' });
    } else {
        if (!bcrypt.compareSync(password, user.password)) {
            res.status(401).json({ message: 'Invalid password.!!!!!' });
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
            res.status(200).json({ email: user.email, username: user.username, id: user.id, token: token });
        }
    }
};