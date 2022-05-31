const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config(); 
const {errorHandler}  = require('./middleware/errorMiddleware')
const conectDB = require('./config/db')
const port =process.env.PORT || 3000;

conectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes.js'))

app.use(errorHandler)

app.listen(port , () => console.log(`server listening on ${port}`));

// MongoDB working


