//import express module
const express=require('express');
const recipesRouter = require('./routes/recipesRoutes');

// create an express application
const app=express();

app.use(express.json());


app.use('/recipesapp',recipesRouter);

module.exports=app;