// Importing the required controller functions from "../Controller/phoneController.js"
import {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getGroups,
    getContactsByGroup
  } from "../Controller/phoneController.js";
  
  const phoneRoutes = (app) => {
    // Routes for handling contacts
  
    // GET and POST requests for '/contacts' route
    app.route('/contacts')
      .get(getContacts) // Handler function to retrieve all contacts
      .post(createContact); // Handler function to create a new contact
  
    // GET, PUT, and DELETE requests for '/contacts/:id' route
    app.route('/contacts/:id')
      .get(getContact) // Handler function to retrieve a specific contact by ID
      .put(updateContact) // Handler function to update a specific contact
      .delete(deleteContact);
      
    // GET request for '/contacts/group/:group_name route
    app.route('/groups')
      .get(getGroups); // Handler function to retrieve all contacts in a specific group

    // Routes for handling groups
    app.route('/groups/:group_name')
      .get(getContactsByGroup); // Handler function to retrieve all contacts in a specific group
  };
  
  // Exporting the phoneRoutes function as the default export of the module
  export default phoneRoutes;
  