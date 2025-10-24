const express=require('express');
const { getAllRecipes, createRecipesApp, getRecipesById } = require('../controllers/recipesControllers');
const recipesRouter=express.Router();

recipesRouter.post('/',createRecipesApp);
recipesRouter.get('/',getAllRecipes);
recipesRouter.get('/:id', getRecipesById);

module.exports=recipesRouter;