import express from "express";
const userRoutes = express.Router();
import { getUsers, addUser, generatePassword } from "../controller/userController.js";

// Get all users
userRoutes.get('/', getUsers);

// Add a new user
userRoutes.post('/', addUser);

// Generate random password for a user
userRoutes.post('/generate-password/:id', generatePassword);

// Error handling middleware
userRoutes.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default userRoutes;
