import {authApi} from "../api/api";


const REGISTRATION = "REGISTRATION"

const initialState = {
    nickname : '',
    birthday : '',
    email : '',
    password : ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
const registrationSuccess = (data) => ({type: REGISTRATION, data })

export const registrationThunk = (data) => async (dispatch) => {
       const response = await  authApi.register(data)

    console.log(data)




}

export default authReducer