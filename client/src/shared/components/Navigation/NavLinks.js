import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/events" exact>
            ALL EVENTS
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY EVENTS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD EVENT</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink onClick={auth.logout} to="/">LOGOUT</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
