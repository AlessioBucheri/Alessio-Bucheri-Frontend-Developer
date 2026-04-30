import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const { titleRef, handleMouseMove, handleMouseLeave } = useBoundingTitle();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <Nav>
      <NavTitle
        to='/'
        ref={titleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        &copy; Code by Alessio Bucheri
      </NavTitle>
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <MobileMenu $isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>x</CloseButton>
        <NavItem
          to='/about'
          onClick={toggleMenu}
          $active={location.pathname === "/about"}
          aria-current={location.pathname === "/about" ? "page" : undefined}
        >
          About
        </NavItem>
        <NavItem
          to='/projects'
          onClick={toggleMenu}
          $active={location.pathname === "/projects"}
          aria-current={location.pathname === "/projects" ? "page" : undefined}
        >
          Projects
        </NavItem>
        <NavItem
          to='/contact'
          onClick={toggleMenu}
          $active={location.pathname === "/contact"}
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </NavItem>
      </MobileMenu>
      <ul>
        <NavItem
          to='/about'
          $active={location.pathname === "/about"}
          aria-current={location.pathname === "/about" ? "page" : undefined}
        >
          About
        </NavItem>
        <NavItem
          to='/projects'
          $active={location.pathname === "/projects"}
          aria-current={location.pathname === "/projects" ? "page" : undefined}
        >
          Projects
        </NavItem>
        <NavItem
          to='/contact'
          $active={location.pathname === "/contact"}
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </NavItem>
      </ul>
    </Nav>
  );
}
