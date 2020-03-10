
export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
export const SIGNOUT = 'SIGNOUT';
export const SIGNUP = 'SIGNUP'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email, credentials.password
      )
      dispatch({ type: SIGN_IN })
    } catch (error) {
      dispatch({ type: SIGN_IN_ERROR, error })
    }
  }
}

export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(
          newUser.email, newUser.password
        )
      await firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
      dispatch({ type: SIGNUP })
    } catch (error) {
      dispatch({ type: SIGNUP_ERROR, error })
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
      dispatch({ type: SIGNOUT })
    } catch (error) {

    }
  }
}