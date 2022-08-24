import { FETCH_ALL_NUTRITION,CREATE_RECIPE,UPDATE_RECIPE,DELETE_RECIPE } from '../constants/actionTypes';
import * as api from '../api'

export const getNutrition = () => async(dispatch) =>{
try {
    const {data} = await api.fetchNutrition();
    dispatch({ type:FETCH_ALL_NUTRITION, payload: data})
} catch (error) {
    console.log(error)
}}


export const createRecipe = (recipe) => async(dispatch) =>{
try {
    const {data} = await api.postRecipe(recipe);
    dispatch({ type:CREATE_RECIPE, payload: data})
} catch (error) {
    console.log(error)
}}


export const updateRecipe =(id, updatedRecipe) => async(dispatch)=>{
try {
    const {data} = await api.patchRecipe(id, updatedRecipe);
    dispatch({type:UPDATE_RECIPE, payload:data})
} catch (error) {
    console.log(error)
}}


export const deleteRecipe = (id) => async(dispatch) =>{
try {
    await api.deleteRecipe(id);
    dispatch({ type:DELETE_RECIPE, payload: id})
} catch (error) {
    console.log(error)
}}


