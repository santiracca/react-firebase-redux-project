import React, { useState } from "react";
import { signUp } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      signUp({
        email,
        password,
        firstName,
        lastName
      })
    );
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
        <div className='input-field'>
          <input
            type='text'
            id='firstName'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <label htmlFor='firstName'>First Name</label>
        </div>
        <div className='input-field'>
          <input
            type='text'
            id='lastName'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
          <label htmlFor='lastName'>Last Name</label>
        </div>

        <div className='input-field'>
          <input
            type='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
