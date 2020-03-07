import React, { useState } from "react";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Create a Project</h5>
        <div className='input-field'>
          <input
            type='text'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor='email'>Project Title</label>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Project Description</label>
          <textarea
            className='materialize-textarea'
            type='text'
            onChange={e => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
