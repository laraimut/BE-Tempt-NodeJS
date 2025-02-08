#Project Documentation

Backend

Structure

/models - Contains database models

/routes - Contains API route handlers

/controllers - Contains business logic for routes

server.js - Main server file

Setup and Run

Install dependencies:

npm install

Start the backend server:

npm start

Default server runs on http://localhost:5000

📌 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/items	Get all items
POST	/api/items	Create an item
PUT	/api/items/:id	Update an item
DELETE	/api/items/:id	Delete an item

📌 Notes
Ensure MongoDB is running locally or use MongoDB Atlas.
CORS is enabled for frontend-backend communication.
Modify MONGO_URI in .env if using a cloud database.
