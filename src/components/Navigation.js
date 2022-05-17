import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>

        <li className="nav-products">
          mes produits
          <ul className="nav-products-ul">
            <NavLink
              to="/gateaux"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>gateaux</li>
            </NavLink>
            <NavLink
              to="/buches"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>bûches</li>
            </NavLink>
            {/* <NavLink
              to="/cupcakes"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>cupcakes</li>
            </NavLink>
            <NavLink
              to="/patisseries"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>patisseries</li>
            </NavLink> */}
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
