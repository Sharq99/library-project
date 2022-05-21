import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    // <nav
    //   className="navbar navbar-expand-lg bg-secondary text-uppercase "
    //   id="mainNav"
    // >
    //   <div className="container">
    //     <NavLink className="navbar-brand" to="/">
    //       Home
    //     </NavLink>

    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item mx-0 mx-lg-1">
    //           <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/MemberPage">
    //             Members
    //           </NavLink>
    //         </li>
    //         <li className="nav-item mx-0 mx-lg-1">
    //           <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/BookPage">
    //             Books
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className="nav-specs"
      id="mainNav"
    >
      <div className="container">
        <NavLink to="/">
          Home
        </NavLink>

        <div id="navbarResponsive">
          <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/member-page">
              Members
          </NavLink>
          <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/book-page">
              Books
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
