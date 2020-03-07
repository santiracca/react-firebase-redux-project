import React from "react";

const ProjectDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            magnam asperiores, cum totam consequatur aperiam ea voluptatum odio
            repellat nulla aliquam, aut error dicta eaque. Consequatur minus
            vero suscipit repellat.
          </p>
        </div>
        <div className='card-action grey-lighten-4 grey-text'>
          <div>Posted by MetaFit</div>
          <div>2nd Septemeber, 2 am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
