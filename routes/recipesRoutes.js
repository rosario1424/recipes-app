const express=require('express');
const { getAllRecipes, createRecipesApp } = require('../controllers/recipesControllers');
const recipesRouter=express.Router();

recipesRouter.post('/',createRecipesApp);
recipesRouter.get('/',getAllRecipes);

module.exports=recipesRouter;