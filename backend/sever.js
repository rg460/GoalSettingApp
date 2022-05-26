const express = require('express');
const dotenv = require('dotenv').config();   

const port =process.env.PORT || 3000;

const app = express();

app.get('/api/goals', (req, res) =>{
    res.json({message:'Get goals'});
})

app.listen(port , () => console.log(`server listening on ${port}`));