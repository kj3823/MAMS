# MBITS Asset Management System (MAMS)
This is an Asset Management System built using React and Node.js. The system allows users to track and manage assets within an organization. It provides features such as asset creation, updating, deletion, and searching. The system is designed to be user-friendly and efficient, providing a seamless experience for asset management.

 ## Features:
- User authentication: Users can sign up, log in, and manage their accounts.
- Asset creation: Users can create new assets by providing relevant information such as name, description, and quantity.
- Asset updating: Users can update existing assets by modifying their information.
- Asset deletion: Users can delete assets that are no longer needed.
- Asset searching: Users can search for specific assets based on various criteria, such as name or category.
- User roles and permissions: The system supports different user roles with different levels of permissions, allowing for proper access control.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment that executes JavaScript code outside of a web browser.
- Express: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing asset and user information.
- Mongoose: A MongoDB object modeling tool for Node.js.
- JSON Web Tokens (JWT): Used for user authentication and authorization.
- bcrypt.js: A library for hashing and comparing passwords.

## Installation:
1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd asset-management-system
3. Install the dependencies for the server:
```
cd server
npm install
```

4. Install the dependencies for the client:
```
cd ../client
npm install
```

5. Set up the environment variables:
Create a .env file in the server directory.
Define the following variables in the .env file:
```
PORT=3001
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

6. Start the server:
```
cd ../server
npm start
```

7. Start the client:
```
cd ../client
npm start
```

The server will run on http://localhost:3001 and the client will run on http://localhost:3000.

## Usage
1. Open the application in your web browser at http://localhost:3000.
2. Sign up for a new account or log in with an existing account.
3. Once logged in, you will be able to create, update, and delete assets.
4. You can also search for assets using the provided search functionality.
5. Log out when you're done using the system.
   
## Contributing
Contributions to the Asset Management System are welcome. If you find any bugs or have suggestions for improvements, please submit an issue or create a pull request.






