import express from "express";
import config from "./Db/config.js";
import phoneRoutes from './Routes/phoneRoutes.js'

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

phoneRoutes(app);

app.get("/", (req, res) => {
    res.send("Welcome to the Matrix....!!!");
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.url}`);
});