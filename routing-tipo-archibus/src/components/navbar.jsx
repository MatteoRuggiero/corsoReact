import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img src="vite.svg" alt="burger" />
      </div>
      <ul className="navbar__list">
          <div className="navbar__li-box" >
            <img
              src="vite.svg"
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              <NavLink
                  to="/Lorenzo"
                  className={({ isActive }) =>
                    isActive ? "link active mx-3" : "link mx-3"
                  }
             >
              Lorenzo
              </NavLink>
            </li>
          </div> <div className="navbar__li-box" >
            <img
              src="vite.svg"
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              <NavLink
                  to="/Mauro"
                  className={({ isActive }) =>
                    isActive ? "link active mx-3" : "link mx-3"
                  }
             >
              Mauro
              </NavLink>
            </li>
          </div> <div className="navbar__li-box" >
            <img
              src="vite.svg"
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              <NavLink
                  to="/Matteo"
                  className={({ isActive }) =>
                    isActive ? "link active mx-3" : "link mx-3"
                  }
             >
              Matteo
              </NavLink>
            </li>
          </div>
      </ul>
    </nav>
  );
};

export default Navbar;
