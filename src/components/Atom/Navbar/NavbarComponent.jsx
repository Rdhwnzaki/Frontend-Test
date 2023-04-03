import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarComponent = ({ color = "light", text, className = "" }) => {
  return (
    <>
      <Navbar color={color}>
        <NavbarBrand className={className}>{text}</NavbarBrand>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
