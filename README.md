# Phonebook API

This is a phonebook API that allows users to manage contact details of individuals, including their full name, mobile number, work number, email, home address, and group ID. Users can perform CRUD operations (Create, Read, Update, Delete) on the contacts and assign them to specific groups.
<br>
![DancingByTheFireKiGIF](https://github.com/Evanoken/PhonebookAPI/assets/95754975/9bd19b21-9223-4168-ac49-7320e349a432)
<br>

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd phonebook-api`
3. Install dependencies: `npm install`
<br>
<br>
## Database Setup

This project uses SQL Server as the database. Before running the application, make sure you have SQL Server installed and create a new database for the phonebook API.

1. Open SQL Server Management Studio (SSMS) and connect to your SQL Server instance.
2. Create a new database: `CREATE DATABASE PhonebookDB;`
<br>

## Configuration

1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file and update the database connection details with your SQL Server configuration.

## Usage
### When running in localhost
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

Its free licence

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
![WhiskeyEiSuoiAmiciCoccoleSonoreGIF](https://github.com/Evanoken/PhonebookAPI/assets/95754975/da6b9803-3c7b-4f9a-bf10-5ba7d8ff46f6)


