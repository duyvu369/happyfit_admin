import { FETCH_ALL_EXERCISES,CREATE_EXERCISE,UPDATE_EXERCISE,DELETE_EXERCISE } from '../constants/actionTypes';

export default(exercises=[],action) => {
    switch (action.type){
        case FETCH_ALL_EXERCISES:
            return action.payload;
        case CREATE_EXERCISE:
            return [...exercises, action.payload];
        case DELETE_EXERCISE:
            return exercises.filter((exercise) => exercise._id !== action.payload);
        case UPDATE_EXERCISE:
            return exercises.map((exercise)=>exercise._id=== action.payload.id ? action.payload : exercise)
        default:
            return exercises;
    }
}