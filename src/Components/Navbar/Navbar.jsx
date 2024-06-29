import React, { useState } from "react";
import useBoundingTitle from "../../Hooks/MainPageHooks/useBoundingTitle.js";
import {
  Nav,
  NavTitle,
  NavItem,
  HamburgerIcon,
  MobileMenu,
  CloseButton,
} from "../../Style/NavbarStyle/NavbarStyle.js";

export default function Navbar() {
  const { titleRef, handleMouseMove } = useBoundingTitle();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavTitle to='/' ref={titleRef} onMouseMove={handleMouseMove}>
        © Code by Alessio Bucheri
      </NavTitle>
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <MobileMenu $isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>✕</CloseButton>
        <NavItem to='/about' onClick={toggleMenu}>
          About
        </NavItem>
        <NavItem to='/projects' onClick={toggleMenu}>
          Projects
        </NavItem>
        <NavItem to='/contact' onClick={toggleMenu}>
          Contact
        </NavItem>
      </MobileMenu>
      <ul>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
      </ul>
    </Nav>
  );
}
