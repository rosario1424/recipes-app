const Recipes = require('../models/Recipes');

const createRecipesApp = async (req, res) => {
     try {
       const newRecipes = new Recipes(req.body);
       const savedRecipes = await newRecipes.save();
       res.status(201).json({ message: 'Recipes created', recipesapp: savedRecipes });
     } catch (error) {
          res.status(500).json({ message: 'Creating recipes failed', error: error.message });
     }
}
   

const getAllRecipes=async(req, res) =>{
     try {
       const recipesapp = await Recipes.find().select('-__v');
       res.status(200).json({ recipesapp});
     } catch (error) {
          res.status(500).json({ message: 'Fetching recipes failed...', error: error.message });
     }
}

const getRecipesById = async (req, res) => {
try {
     const id = req.params.id;
     const recipes = await Recipes.findById(id).select('-__v');

     if (!recipes) {
     return res.status(404).json({message: 'Recipes not found'});
     }

     res.status(200).json({ recipes });
  } catch (error) {
     res.status(500).json({message:'Fetching recipes failed...', error: error.message });
  }
}



module.exports={getAllRecipes, createRecipesApp, getRecipesById}