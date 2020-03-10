import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({ profile }) => {
  const dispatch = useDispatch();

  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <a onClick={() => dispatch(signOut())}>Log Out</a>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
