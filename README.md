# Atendimento Node.js API

This is a Simple Node.js API for managing users, authentication, and atendimentos (services). It uses Express, Sequelize, and Swagger for documentation.

## Features

### Routes

Routes define the endpoints of the API, specifying how the client can interact with the server. Each route corresponds to a specific functionality, such as retrieving data, creating new records, updating existing ones, or deleting them.

#### User Routes
- **GET /api/v1/users**: Retrieve a list of users.
- **GET /api/v1/users/:id**: Retrieve a specific user by ID.
- **POST /api/v1/users**: Create a new user.
- **PUT /api/v1/users/:id**: Update a user by ID.
- **DELETE /api/v1/users/:id**: Delete a user by ID.

#### Authentication Routes
- **POST /api/v1/auth/register**: Register a new user.
- **POST /api/v1/auth/login**: Authenticate a user and return a JWT token.

#### Atendimento Routes
- **GET /api/v1/atendimentos**: Retrieve a list of atendimentos.
- **GET /api/v1/atendimentos/:id**: Retrieve a specific atendimento by ID.
- **POST /api/v1/atendimentos**: Create a new atendimento.
- **PUT /api/v1/atendimentos/:id**: Update an atendimento by ID.
- **DELETE /api/v1/atendimentos/:id**: Delete an atendimento by ID.

### Models

Models represent the structure of the data in the application. They define the schema, relationships, and behavior of the data entities, serving as a bridge between the database and the application logic.

#### User Model
- **username**: String, unique, required.
- **password**: String, hashed before saving.
- **role**: Enum ("admin", "user"), default is "user".

#### Atendimento Model
- **id**: Integer, primary key, auto-increment.
- **service**: String.
- **client**: String.
- **status**: Enum ("Activo", "Pendente", "Concluido", "Cancelado"), default is "Activo".

### Middlewares

Middlewares in this context refer to functions that execute during the request-response cycle in a JavaScript application. They are used to process requests, modify responses, handle errors, or perform other tasks such as authentication, logging, or data validation before the final response is sent to the client.

#### Auth Middleware
- Verifies the JWT token provided in the `Authorization` header.
- Adds the `userId` to the request object if the token is valid.

#### Admin Middleware
- Verifies the JWT token and checks if the user has the "admin" role.
- Denies access if the user is not an admin.

### Configuration

#### Environment Variables
- **DB_HOST**: Database host.
- **DB_PORT**: Database port.
- **DB_USER**: Database username.
- **DB_PASSWORD**: Database password.
- **DB_DATABASE**: Database name.
- **DB_DIALECT**: Database dialect (e.g., `mysql`, `postgres`).
- **JWT_SECRET**: Secret key for signing JWT tokens.
- **JWT_EXPIRES_IN**: Expiration time for JWT tokens.
- **PORT**: Port for the server (default is 3000).

### Packages

- **express**: Web framework for Node.js.
- **sequelize**: ORM for database management.
- **mysql2**: MySQL database driver.
- **pg**: PostgreSQL database driver.
- **pg-hstore**: PostgreSQL hstore support.
- **bcryptjs**: Password hashing.
- **jsonwebtoken**: JWT token generation and verification.
- **dotenv**: Environment variable management.
- **swagger-jsdoc**: Swagger documentation generation.
- **swagger-ui-express**: Swagger UI for API documentation.
- **cors**: Cross-Origin Resource Sharing.

### Documentation

The API is documented using Swagger. You can access the documentation at: https://atendimento-node-js.onrender.com/api/v1/docs


### How to Run

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
3. Create a .env file with the required environment variables.
4. Start the server: 
   ```sh
   npm start
5. For development: use: 
   ```sh
   npm run dev 

### Database Synchronization

The database is automatically synchronized when the server starts. Ensure your database is properly configured in the .env file

### Thanks 🙏

Thank you for using the Atendimento Node.js API! If you have any questions, suggestions, or feedback, feel free to reach out. Your support is greatly appreciated! @auriocole😊