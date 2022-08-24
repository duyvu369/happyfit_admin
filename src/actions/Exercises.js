import { FETCH_ALL_EXERCISES,CREATE_EXERCISE,UPDATE_EXERCISE,DELETE_EXERCISE } from '../constants/actionTypes';
import * as api from '../api'

export const getExercises = () => async(dispatch) =>{
try {
    const {data} = await api.fetchExercises();
    dispatch({ type:FETCH_ALL_EXERCISES, payload: data})
} catch (error) {
    console.log(error)
}}


export const createExercise = (exercise) => async(dispatch) =>{
try {
    const {data} = await api.postExercise(exercise);
    dispatch({ type:CREATE_EXERCISE, payload: data})
} catch (error) {
    console.log(error)
}}


export const updateExercise =(id, updatedExercise) => async(dispatch)=>{
try {
    const {data} = await api.patchExercise(id, updatedExercise);
    dispatch({type:UPDATE_EXERCISE, payload:data})
} catch (error) {
    console.log(error)
}}


export const deleteExercise = (id) => async(dispatch) =>{
try {
    await api.deleteExercise(id);
    dispatch({ type:DELETE_EXERCISE, payload: id})
} catch (error) {
    console.log(error)
}}


