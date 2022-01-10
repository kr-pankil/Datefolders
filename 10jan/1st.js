const express = require('express');

// Initializing the app.
const app = express();

// Getting the path request and sending the response with text
app.get('/', (req,res)=>{
    req.send('Hi, your request has been received')
})

// Listen on port 2000
app.listen(2000, ()=>{
    console.log('listening at http://localhost:2000')
})