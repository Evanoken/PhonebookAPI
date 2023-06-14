import sql from 'mssql';
import config from '../Db/config.js';

// Getting all Contacts
export const getContacts = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("SELECT * FROM contacts");
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'An error occurred while retrieving contacts' });
    } finally {
        sql.close(); // Close the connection pool to release resources
    }
}


// Getting one Contact
export const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await sql.connect(config.sql);
        const query = "SELECT * FROM contacts WHERE id = @id";
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(query);
        
        if (!result.recordset[0]) {
            res.status(404).json({ message: 'Contact not found' });
        } else {
            res.status(200).json(result.recordset);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the contact' });
    } finally {
        sql.close();
    }
};

// Creating a contact
export const createContact = async (req, res) => {
    try {
      const { full_name, mobile_no, work_no, email, address, group_id } = req.body;
  
      const pool = await sql.connect(config.sql);
  
      const query = `
        INSERT INTO contacts (full_name, mobile_no, work_no, email, address, group_id)
        VALUES (@full_name, @mobile_no, @work_no, @email, @address, @group_id);
      `;
  
      const request = pool.request()
        .input("full_name", sql.VarChar, full_name)
        .input("mobile_no", sql.VarChar, mobile_no)
        .input("work_no", sql.VarChar, work_no)
        .input("email", sql.VarChar, email)
        .input("address", sql.VarChar, address)
        .input("group_id", sql.VarChar, group_id);
  
      await request.query(query);
  
      res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create the contact' });
    } finally {
      sql.close();
    }
  };
  

// Updating a contact
export const updateContact = async (req, res) => {
    try {
      const { id } = req.params;
      const { full_name, mobile_no, work_no, email, address, group_id } = req.body;
  
      let pool = await sql.connect(config.sql);
      await pool
        .request()
        .input("id", sql.Int, id)
        .input("full_name", sql.VarChar, full_name)
        .input("mobile_no", sql.VarChar, mobile_no)
        .input("work_no", sql.VarChar, work_no)
        .input("email", sql.VarChar, email)
        .input("address", sql.VarChar, address)
        .input("group_id", sql.VarChar, group_id)
        .query("UPDATE contacts SET full_name = @full_name, mobile_no = @mobile_no, work_no = @work_no, email = @email, address = @address, group_id = @group_id WHERE id = @id");
  
      res.status(200).json({ message: 'Contact updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the contact' });
    } finally {
      sql.close();
    }
  };
  

//deleting a contact
  export const deleteContact = async (req, res) => {
    try {
      const { id } = req.params;
  
      const pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM Contacts WHERE id = @id");
  
      if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ error: 'Contact not found' });
      }
  
      return res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('An error occurred while deleting the contact:', error);
      return res.status(500).json({ error: 'Internal server error' });
    } finally {
      sql.close();
    }
  };
  
  