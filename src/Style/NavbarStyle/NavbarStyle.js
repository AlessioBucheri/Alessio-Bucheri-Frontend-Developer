import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const NavTitle = styled(Link)`
  font-size: 2vw;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  transform-style: preserve-3d;
  --mouse-x: 0px;
  --mouse-y: 0px;
  text-decoration: none;
  color: #F63E02;

  &:hover {
    transform: translate(var(--mouse-x), var(--mouse-y));
  }

  &:visited {
    color: #F63E02;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const NavItem = styled(Link)`
  display: inline-block;
  list-style: none;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.5;
  cursor: pointer;
  padding: 20px;
  text-decoration: none;
  color: #F63E02;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-thickness: 0.1rem;
  }

  &:visited {
    color: #F63E02;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #f63e02;
    margin: 4px 0;
    transition: 0.4s;
  }

  @media (max-width: 769px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246, 62, 2, 0.9);
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }

  ${NavItem} {
    display: block;
    color: #fbfbff;
    padding: 20px;
    font-size: 2rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #fbfbff;
    }
  }
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 2rem;
  color: #fbfbff;
`;
