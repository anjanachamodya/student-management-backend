const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv');
const errhandler = require('./middleware/errorhandler');
const cors = require('cors');
const logger = require('./middleware/logger');


//load config
dotenv.config();

//Connect to database

connectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors());

const PORT = process.env.PORT || 5000;


const studentRoutes = require('./routes/studentRoute');

app.use('/api/students', studentRoutes);
app.use(errhandler);

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});
