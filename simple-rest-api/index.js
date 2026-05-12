// index.js
require('dotenv').config();
const connectDB = require('./config/db');

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/simpleapi')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// use routes
app.use('/users', userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));