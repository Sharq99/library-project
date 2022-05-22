import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <NavLink to="/">Home</NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/member-page"
              >
                Members
              </NavLink>
            </li>

            <li>
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/book-page"
              >
                Books
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
