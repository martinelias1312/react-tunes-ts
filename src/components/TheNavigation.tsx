import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from "./TheNavigation.module.scss";

type Props = {};

const TheNavigation = (props: Props) => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#61dafb",
              }
            : {}
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/tunes"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#61dafb",
              }
            : {}
        }
      >
        Tunes
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#61dafb",
              }
            : {}
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default TheNavigation;
