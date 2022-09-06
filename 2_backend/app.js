const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
//  -- signup (registration)
app.post('/api/users', (req, res)=> {
    res.json("nothing to see here yet")
})


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));