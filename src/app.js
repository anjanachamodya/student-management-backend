const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv');

//load config
dotenv.config();

//Connect to database
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;


const studentRoutes = require('./routes/studentRoute');

app.use('/api/students', studentRoutes);

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});

const studentRoutes = require('./routes/studentRoute');

app.use('/api/students', studentRoutes);