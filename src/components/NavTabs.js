import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/global.css";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light customNav">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="about"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="projects"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Projects
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="cv"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                CV
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="contact"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Contact
                </NavLink>
            </li>
        </ul>
    </div>
    </nav>
  );
}

export default NavTabs;
