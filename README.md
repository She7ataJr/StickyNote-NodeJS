# StickyNote-NodeJS
The Sticky Note App - Backend is the server-side component of a web application that allows users to create, edit, and delete virtual sticky notes. This application is built using Node.js and Express.

## Installation
To install the app, follow these steps:
Clone the repository to your local machine using git clone.
Install the required dependencies using npm install.
Create a .env file in the root directory with the following environment variables:
bash
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/sticky-note-app
Start the server using npm start.
Usage
To use the app, follow these steps:

Open your web browser and navigate to http://localhost:5000.
Use a tool like Postman or curl to make HTTP requests to the following endpoints:
POST/auth/signup: to sign up 
POST/auth/login : to login
GET /notes: Returns a list of all sticky notes.
POST /notes: Creates a new sticky note.
GET /notes/:id: Returns a specific sticky note.
PUT /notes/:id: Updates a specific sticky note.
DELETE /notes/:id: Deletes a specific sticky note.
Each of these endpoints requires an authorization token to be included in the request headers. To obtain a token, send a POST request to /auth/login with a valid username and password in the request body.

# Contributing
Contributions to the Sticky Note App - Backend are welcome! To contribute, follow these steps:

Fork the repository on GitHub.
Create a new branch for your changes.
Make changes to the code and commit them to your branch.
Push your branch to your forked repository.
Create a pull request to merge your changes into the main repository.

#Credits
The Sticky Note App - Backend was created by Muhammad Shehata. Special thanks to Mahmoud Elwan and May Awad for their help.
