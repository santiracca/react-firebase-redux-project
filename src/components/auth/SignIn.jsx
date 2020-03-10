import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authError = useSelector(state => state.auth.authError);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authActions.signIn({
        email,
        password
      })
    );
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
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
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
        <div className='red-text center'>{authError ? authError : null}</div>
      </form>
    </div>
  );
};

export default SignIn;
