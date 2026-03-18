const express = require('express');
const connectDB = require('../src/config/dbConnection');
const dotenv = require('dotenv');

//load config
dotenv.config();

//Connect to database
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});

const studentRoutes = require('./routes/studentRoute');

app.use('/api/students', studentRoutes);