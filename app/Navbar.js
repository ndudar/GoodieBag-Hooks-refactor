import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <NavLink to="/candies">Show Me the Candies!</NavLink>
        <NavLink to="/">Home, Please</NavLink>
    </div>
  );
};

export default Navbar;
