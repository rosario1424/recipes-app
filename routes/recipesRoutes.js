const express=require('express');
const recipesRouter=express.Router();

recipesRouter.get('/recipesapp', (req, res) =>{
     res.json({ message: 'Recipes API is running' });
});

module.exports=recipesRouter;