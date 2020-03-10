import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ProjectDetails = ({ match }) => {
  useFirestoreConnect("projects");
  const id = match.params.id;
  const projects = useSelector(state => state.firestore.data.projects);
  const project = projects ? projects[id] : null;

  if (!project) {
    return (
      <div className='container center'>
        <p>Loading project...</p>
      </div>
    );
  }

  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{project.title}</span>
            <p>{project.title}</p>
          </div>
          <div className='card-action grey-lighten-4 grey-text'>
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div> {moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectDetails;
