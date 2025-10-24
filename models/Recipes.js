const mongoose=require('mongoose');

const ingredientSchema = new mongoose.Schema({
name: { type: String, required: true, trim: true },
quantity: { type: String, required: false },
});

const recipeSchema = new mongoose.Schema(
{
title: { type: String, required: true, trim: true, maxlength: 200 },
description: { type: String, required: true, trim: true },
ingredients: { type: [ingredientSchema], default: [] },
steps: { type: [String], default: [] },
prepTimeMinutes: { type: Number, min: 0 },
cookTimeMinutes: { type: Number, min: 0 },
servings: { type: Number, min: 1, default: 1 },
tags: { type: [String], default: [] },
},
{ timestamps: true });

module.exports = mongoose.model('Recipes', recipeSchema, 'recipesapp');