import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/projectActions'


const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah blah' },
    { id: '2', title: 'You tryna smoke a blunt...', content: 'blah blah blah blah' },
    { id: '3', title: 'Anybody up for some dank stone?', content: 'blah blah blah blah' }
  ]
}



const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log(action.project)
      return state
    case CREATE_PROJECT_ERROR:
      console.log('Create Project Error', action.error);
      return state
    default:
      return state
  }
}
export default projectReducer