//import express module
const express=require('express');
const recipesRouter = require('./routes/recipesRoutes');

// create an express application
const app=express();

app.use('/',recipesRouter);

module.exports=app;