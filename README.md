# SoftGrowTech Project 1 - Simple REST API

## 📌 Overview
This is my first REST API built using **Node.js** and **Express** as part of my virtual internship program at **SoftGrowTech**.  
The project demonstrates basic CRUD operations and follows a clean modular folder structure.

## 🚀 Features
- Basic REST API endpoints
- CRUD operations (Create, Read, Update, Delete)
- Modular structure with routes, controllers, and models
- Environment variables managed via dotenv
- Nodemon for development auto-restart

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose** 
- **dotenv** for environment variables

  SoftGrowTech-project-1/
│
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (PORT, DB_URI, etc.)
├── server.js             # Entry point (starts Express server)
│
├── config/               # Configuration files
│   └── db.js             # Database connection (MongoDB / Mongoose)
│
├── routes/               # API route definitions
│   └── userRoutes.js     # Routes for user CRUD
│
├── controllers/          # Business logic
│   └── userController.js # Functions for create/read/update/delete
│
├── models/               # Database schemas
│   └── userModel.js      # Mongoose schema for User
│
├── middleware/           # Middlewares (optional now, later for auth)
│   └── errorHandler.js   # Centralized error handling
│
└── utils/                # Helper functions
    └── logger.js         # Example utility (logging, etc.)

