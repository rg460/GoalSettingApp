const  express = require('express');
const router = express.Router();

app.get('/api/goals', (req, res) =>{
    res.status(200).json({message:'Get goals'});
})

module.exports = router;