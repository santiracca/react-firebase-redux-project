import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject';


function App() {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {auth.uid ?
          <Switch>
            <Route exact
              path='/' component={Dashboard} />
            <Route path="/create" component={CreateProject} />
            <Route path='/projects/:id' component={ProjectDetails} />
            <Redirect to="/" />
          </Switch> :
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/signin" />
          </Switch>}
      </div>
    </BrowserRouter>
  );
}

export default App;
