# Phonebook API

This is a phonebook API that allows users to manage contact details of individuals, including their full name, mobile number, work number, email, home address, and group ID. Users can perform CRUD operations (Create, Read, Update, Delete) on the contacts and assign them to specific groups.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd phonebook-api`
3. Install dependencies: `npm install`

## Database Setup

This project uses SQL Server as the database. Before running the application, make sure you have SQL Server installed and create a new database for the phonebook API.

1. Open SQL Server Management Studio (SSMS) and connect to your SQL Server instance.
2. Create a new database: `CREATE DATABASE PhonebookDB;`

## Configuration

1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file and update the database connection details with your SQL Server configuration.


## Database Migration

1. Run the database migration scripts to create the necessary tables in the database.


## Usage

1. Start the server: `npm start`
2. Access the API at: `http://localhost:8081`

## API Endpoints

- `GET /contacts`: Get all contacts
- `GET /contacts/:id`: Get contact details by ID
- `POST /contacts`: Create a new contact
- `PUT /contacts/:id`: Update contact details
- `DELETE /contacts/:id`: Delete a contact
- `POST /contacts/:id/groups`: Assign a contact to a group
- `GET /groups/:id/contacts`: Get contacts belonging to a specific group

## Technologies Used

- Node.js
- Express.js
- SQL Server

## Authors

- Lewis Muthaura
- Evans Ngugi
- Calvin Shawn
- Ian Muriuki
- Judith Muthui

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

