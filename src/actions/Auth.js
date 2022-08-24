import { LOGIN, LOGOUT } from '../constants/actionTypes';
import * as api from '../api'

export const userLogin = (credential) => async (dispatch) => {
    try {
    const {data} = await api.loginUser(credential);
    console.log(data)
    } catch (error) {
        console.log("Login unsuccessfully! ", error)
    }
}