const express=require('express');
const { getAllRecipes } = require('../controllers/recipesControllers');
const recipesRouter=express.Router();

recipesRouter.get('/recipesapp',getAllRecipes);

module.exports=recipesRouter;