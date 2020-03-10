import { SIGN_IN, SIGN_IN_ERROR, SIGNOUT, SIGNUP, SIGNUP_ERROR } from "../actions/authActions";

const initState = {
  authError: null
}



const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log('logiin');
      return {
        authError: null,
      }
    case SIGN_IN_ERROR:

      return {
        ...state,
        authError: 'Login failed!'
      }
    case SIGNUP:
      console.log('signup sucess');
      return {
        ...state,
        authError: null
      }

    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error.message
      }

    case SIGNOUT:
      console.log('signout sucess');
      return state
    default:
      return state;
  }

}
export default authReducer