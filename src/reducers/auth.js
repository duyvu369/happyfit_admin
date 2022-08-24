import { LOGIN, LOGOUT } from '../constants/actionTypes';

const authReducer = (state ={authData: null}, action) => {
    switch (action.type){
        case LOGIN:
            console.log(action?.data);
            return localStorage.setItem('profile',JSON.stringify)
        default:
            return state
    }
}

export default authReducer;