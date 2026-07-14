# Job Portal Server

This folder contains the backend API for the MERN job portal application.
It is built with Node.js, Express, and MongoDB and provides authentication,
job posting and management, and user-related endpoints.

## Server structure

- `package.json` - project metadata, dependencies, and npm scripts.
- `./src/server.js` - main entry point that initializes Express,
  connects to the database, loads middleware, and starts the HTTP server.
- `config/db.js` - MongoDB connection helper and database setup.
- `models/` - Mongoose schema definitions for collections such as users and jobs.
- `routes/` - Express routers grouping API endpoints by resource (auth, jobs,
  users, etc.).
- `controllers/` - request handlers implementing business logic for each route.
- `middleware/` - custom middleware for authentication, error handling, and
  request validation.
- `utils/` - helper functions such as JWT token generation or response formatting.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file at the root of the server folder.
3. Set required environment variables, typically:

   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   JWT_EXPIRES_IN=7d
   NODE_ENV=development
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Common scripts

- `npm start` - start the server in production mode.
- `npm run dev` - start the server with hot reload (usually using nodemon).
- `npm test` - run backend tests if available.

## Expected API endpoints

Typical endpoints exposed by this server include:

- `POST /api/auth/register` - register a new user.
- `POST /api/auth/login` - log in an existing user and return a token.
- `GET /api/jobs` - retrieve available job postings.
- `POST /api/jobs` - create a new job posting (authenticated).
- `PUT /api/jobs/:id` - update a job posting (authenticated).
- `DELETE /api/jobs/:id` - delete a job posting (authenticated).

## Implementation details

- Authentication is usually handled with JWT tokens and middleware that
  protects routes.
- Controllers separate request handling from route definitions.
- Error handling middleware sends consistent JSON error responses.
- The server connects to MongoDB before listening on the configured port.

## Notes

- This server is intended for learning and demonstration purposes only.
- It is not intended for production use.
- It is not optimized for performance or security.
- It is not intended to be a full-fledged job portal backend API.
