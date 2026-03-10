# node-auth-secure-api
This is a RESTful Authentication API built with Node.js and Express. The project demonstrates a secure login flow by retrieving user data from a local JSON "database" and verifying identities using Bcrypt password encryption. It is designed for developers to practice backend routing, controller-based logic, and API testing via Postman.
# Secure Auth Node API

A simple, secure backend for user authentication using Node.js and Express.

## 🚀 Quick Start
1. **Setup:** Run `npm install` to download dependencies.
2. **Launch:** Run `npm start` to fire up the server with Nodemon.
3. **Test:** Open Postman and send a `POST` request to `http://localhost:3000/auth/login`.

## 🛠 Tech Stack
- **Node.js & Express:** Server framework.
- **Bcrypt.js:** For hashing and comparing encrypted passwords.
- **Nodemon:** For automatic server restarts during development.
- **JSON:** Local file-based data storage.

## 📂 Folder Structure
- `src/index.js`: Entry point of the application.
- `src/controller/`: Contains the logic for login and user validation.
- `src/routes/`: Defines the API endpoints (e.g., /login).
- `src/database/`: Stores `user.json` with encrypted credentials.

## 🔒 Security Features
- Prevents plain-text password storage.
- Handles "User Not Found" and "Invalid Credentials" errors separately.

