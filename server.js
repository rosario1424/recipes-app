// import express module
const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();

// create an express application
const app=express();

app.get('/', (req, res) =>{
     res.json({ message: 'Recipes API is running' });
});

// Listen for incoming request (start the server)
app.listen(3001,'localhost',() => {
    console.log(`server is running on http://localhost:3001`);
});

// connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.error('could not connect to MongoDB', err));



