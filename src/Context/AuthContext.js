import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth/add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state;
    }
}

const signin = dispatch => {
    return async ({ email, password }) => {
        //Signin by making an api request
        //Handle success by updating state
        //Handle error by showing error msg somehow
    }
}
const signup = dispatch => async ({ email, password }) => {
    //Signup by making an api request
    console.log("inside signup")
    try {
        const response = await trackerApi.post("/signup", { email, password })
        //store token in the device for further use
        await AsyncStorage.setItem('token', response.data.token);
        //Handle success by updating state
        dispatch({
            type: 'signup',
            payload: response.data.token
        })
    } catch (err) {
        //Handle error by showing error msg 
        dispatch({
            type: 'auth/add_error',
            payload: 'Something went wrong with Signup'
        })
        console.log(err.response.data)
    }
}
const signout = dispatch => {
    return () => {
        //signout somehow
    }
}

export const { Context, ContextProvider } = createDataContext(
    { token: null, errorMessage: "" },
    authReducer,
    { signin, signout, signup }
)