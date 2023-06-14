import sql from 'mssql';
import config from '../Db/config.js';

// Getting all Contacts
export const getContacts = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("SELECT * FROM contacts");
        res.status(200).json(result.recordset);

    } catch (error) {
        res.status(201).json({ error: 'an error occurred while retrieving contacts' });
    } finally {
        sql.close();
    }
}

// Getting one Contact
export const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query("select * from contacts where id = @id");
        !result.recordset[0] ? res.status(404).json({ message: 'Contact not found' }):
            res.status(200).json(result.recordset);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving Contact' });
    } finally {
        sql.close();
    }
};

// Creating a contact
export const createContact = async (req, res) => {
    try {
        const { full_name, mobile_no, work_no, email, address, group_id } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("full_name", sql.VarChar, full_name) // Insert the description into the SQL query
            .input("mobile_no", sql.VarChar, mobile_no)
            .input("work_no", sql.VarChar, work_no)
            .input("email", sql.VarChar, email)
            .input("address", sql.VarChar, address)
            .input("group_id", sql.VarChar, group_id)
            .query("insert into contacts (full_name, mobile_no, work_no, email, address, group_id) values (@full_name, @mobile_no, @work_no, @email, @address, @group_id)"); // Execute the SQL query
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the a contact' });
    } finally {
        sql.close();   // Close the SQL connection
    };
}

// Updating a contact
export const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name,  work_no, group_id } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("id", sql.Int, id)
            .input("full_name", sql.VarChar, full_name)
            // .input("mobile_no", sql.VarChar, mobile_no)
            .input("work_no", sql.VarChar, work_no)
            // .input("email", sql.VarChar, email)
            // .input("address", sql.VarChar, address)
            .input("group_id", sql.VarChar, group_id)
            .query("UPDATE contact SET full_name = @full_name,  work_no = @work_no, group_id = @group_id WHERE id = @id");
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the contact' });
    } finally {
        sql.close();
    }
}


export const deleteContact = async (req, res) => {
    let connection;
    try {
      const { id } = req.params;
  
      connection = await sql.connect(config.sql);
      const result = await connection.request().query(`
        DELETE FROM Contacts
        WHERE id  ${id};
      `);
  
      res.send(result);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the contact' });
    } finally {
      if (connection) {
        connection.close();
      }
    }
  };