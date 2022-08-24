import axios from 'axios';
import jwt_decode from 'jwt-decode';

const config ={
    headers:{
      "Content-type":"application/json"
    }
  }
const exerciseUrl = "http://localhost:4000/exercises"
const nutritionUrl = "http://localhost:4000/nutrition"



//EXERCISES
export const fetchExercises = () => axios.get(exerciseUrl);

export const postExercise = (exercise) => axios.post(
    exerciseUrl,
    exercise,
    config);

export const patchExercise = (id, updateExercise) => axios.patch(
    `${exerciseUrl}/${id}`,
    updateExercise,
    config);

export const deleteExercise = (id) => axios.delete(
    `${exerciseUrl}/${id}`);



//NUTRITION
export const fetchNutrition = () => axios.get(nutritionUrl);

export const postRecipe = (recipe) => axios.post(
  nutritionUrl,
  recipe,
  config);

export const patchRecipe = (id, updatedRecipe) => axios.patch(
  `${nutritionUrl}/${id}`,
  updatedRecipe,
  config);

export const deleteRecipe = (id) => axios.delete(
  `${nutritionUrl}/${id}`);

  

//AUTH
export const loginUser = (credential) => axios.post(
"http://localhost:4000/auth/login",
credential,
config)
