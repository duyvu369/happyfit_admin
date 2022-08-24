import { FETCH_ALL_NUTRITION,CREATE_RECIPE,UPDATE_RECIPE,DELETE_RECIPE } from '../constants/actionTypes';

export default(nutrition=[], action) => {
    switch (action.type){
        case FETCH_ALL_NUTRITION:
            return action.payload;
        case CREATE_RECIPE:
            return [...nutrition, action.payload];
        case DELETE_RECIPE:
            return nutrition.filter((recipe) => recipe._id !== action.payload);
        case UPDATE_RECIPE:
            return nutrition.map((recipe)=>recipe._id=== action.payload.id ? action.payload : recipe)
        default:
            return nutrition;
    }
}