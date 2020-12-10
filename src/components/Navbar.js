import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <Link to="/" className="navbar-brand">
        React Contacts
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">My Contacts</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
