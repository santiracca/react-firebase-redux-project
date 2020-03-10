
export const CREATE_PROJECT = "CREATE_PROJECT"
export const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR";


export const createProject = (project) => {

  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    try {
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      dispatch({ type: CREATE_PROJECT, project })
    } catch (error) {
      dispatch({ type: CREATE_PROJECT_ERROR, error })
    }

  }
}