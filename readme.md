Node.js API for Saving Contacts with User Authentication

This is a Node.js API that allows users to register, log in, and save contacts. The API is built using the Express.js framework and stores data in a MongoDB database. User authentication is implemented using JSON Web Tokens (JWT).

Prerequisites
Before you can use this API, you need to have the following software installed on your machine:

Node.js
npm (Node Package Manager)
MongoDB
Installation
To install the API and its dependencies, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the dependencies.
Usage
To start the API, run npm start in the project directory. This will start the API on port 3000.

User Authentication
To use the API, you first need to register a user and obtain an authentication token. To do this, send a POST request to the /users/register endpoint with a JSON object containing the user's email and password:

POST /users/register
Content-Type: application/json

{
"email": "user@example.com",
"password": "password123"
}
If the registration is successful, the API will respond with a JSON object containing the user's email and an authentication token:

Content-Type: application/json

{
"email": "user@example.com",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
To use the API for saving contacts, you need to include the authentication token in the Authorization header of your requests. Here's an example request to save a contact:

POST /contacts
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
"name": "John Doe",
"email": "johndoe@example.com",
"phone": "555-555-5555"
}
Saving Contacts
Once you have obtained an authentication token, you can use it to save contacts by sending a POST request to the /contacts endpoint. The request body should be a JSON object containing the contact information. Here's an example request:

POST /contacts
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
"name": "John Doe",
"email": "johndoe@example.com",
"phone": "555-555-5555"
}
The API will respond with a JSON object containing the saved contact information, including its unique ID:

Content-Type: application/json

{
"id": "1234567890abcdef",
"name": "John Doe",
"email": "johndoe@example.com",
"phone": "555-555-5555"
}
You can also retrieve a list of all saved contacts by sending a GET request to the /contacts endpoint. The API will respond with a JSON array containing all of the saved contacts.
