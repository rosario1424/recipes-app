//import express module
const express=require('express');

// create an express application
const app=express();

app.get('/recipesapp', (req, res) =>{
     res.json({ message: 'Recipes API is running' });
});

module.exports=app;