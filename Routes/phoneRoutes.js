// Importing the required controller functions from "../Controller/phoneController.js"
import { getContacts, getContact, createContact, updateContact, deleteContact, getGroups, getContactsByGroup } from "../Controller/phoneController.js";
import { register, login, loginRequired } from "../Controller/userController.js";
  
  const phoneRoutes = (app) => {
    // Routes for handling contacts
  
    // GET and POST requests for '/contacts' route
    app.route('/contacts')
      .get(loginRequired, getContacts) // Handler function to retrieve all contacts
      .post(createContact); // Handler function to create a new contact
  
    // GET, PUT, and DELETE requests for '/contacts/:id' route
    app.route('/contacts/:id')
    
      .get(loginRequired, getContact) // Handler function to retrieve a specific contact by ID
      .put(loginRequired, updateContact) // Handler function to update a specific contact
      .delete(loginRequired, deleteContact);
      
    // GET request for '/contacts/group/:group_name route
    app.route('/groups')
      .get(loginRequired, getGroups); // Handler function to retrieve all contacts in a specific group

    // Routes for handling groups
    app.route('/groups/:group_name')
      .get(loginRequired, getContactsByGroup); // Handler function to retrieve all contacts in a specific group


    // Auth routes
    app.route('/auth/register')
      .post(register); // Handler function to register a new user

    app.route('/auth/login')
      .post(login); // Handler function to login a user

};

export default phoneRoutes;
