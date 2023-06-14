import express from "express"; // Importing the Express.js framework
import config from "./Db/config.js"; // Importing the configuration file
import phoneRoutes from './Routes/phoneRoutes.js' // Importing the phoneRoutes module

const app = express(); // Creating an instance of the Express application

// Middlewares
app.use(express.json()); // Parsing request bodies in JSON format
app.use(express.urlencoded({extended: true})); // Parsing URL-encoded request bodies

phoneRoutes(app); // Registering the phoneRoutes module with the app

// Handling the root route
app.get("/", (req, res) => {
    res.send("Welcome to the Matrix....!!!");
});

// Starting the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.url}`);
});
