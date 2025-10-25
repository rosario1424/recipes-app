const express=require('express');
const { getAllRecipes, createRecipesApp, getRecipesById, updateRecipes, deleteRecipes } = require('../controllers/recipesControllers');
const { isAuthenticated } = require('../middlewares/auth');
const recipesRouter=express.Router();

recipesRouter.post('/',createRecipesApp);
recipesRouter.get('/',isAuthenticated, getAllRecipes);
recipesRouter.get('/:id', getRecipesById);
recipesRouter.put('/:id', updateRecipes);
recipesRouter.delete('/:id', deleteRecipes);

module.exports=recipesRouter;