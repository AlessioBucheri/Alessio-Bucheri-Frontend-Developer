import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: clamp(18px, 2.4vw, 30px) var(--page-gutter);
  z-index: 20;

  ul {
    display: flex;
    align-items: center;
    gap: clamp(20px, 2vw, 32px);
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const NavTitle = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 56px;
  font-size: clamp(0.95rem, 0.6rem + 0.9vw, 1.2rem);
  font-weight: 700;
  line-height: 1;
  padding: 0 28px;
  cursor: pointer;
  transition: transform 0.22s ease-out, background-color 0.3s ease,
    box-shadow 0.3s ease;
  will-change: transform;
  --mouse-x: 0px;
  --mouse-y: 0px;
  text-decoration: none;
  color: var(--color-accent);
  border: 1px solid rgba(251, 251, 255, 0.35);
  border-radius: var(--radius-pill);
  background: rgba(251, 251, 255, 0.84);
  box-shadow: 0 12px 30px rgba(18, 18, 20, 0.08);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  backface-visibility: hidden;
  white-space: nowrap;
  text-align: center;

  &:hover {
    transform: translate(var(--mouse-x), var(--mouse-y));
    background: rgba(251, 251, 255, 0.94);
  }

  &:visited {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    min-height: 48px;
    padding: 0 20px;
  }
`;

export const NavItem = styled(Link)`
  display: inline-block;
  font-weight: 700;
  font-size: clamp(0.88rem, 0.72rem + 0.32vw, 1rem);
  line-height: 1.5;
  cursor: pointer;
  padding: 10px 0;
  text-decoration: none;
  color: ${({ $active }) =>
    $active ? "var(--color-accent)" : "rgba(246, 62, 2, 0.78)"};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  transition: color 0.25s ease;

  &:hover {
    color: var(--color-accent);
  }

  &:visited {
    color: ${({ $active }) =>
      $active ? "var(--color-accent)" : "rgba(246, 62, 2, 0.78)"};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    border-radius: var(--radius-pill);
    background: var(--color-accent);
    transform: translateX(-50%);
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  position: absolute;
  top: 24px;
  right: 24px;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  border-radius: 14px;
  background: rgba(251, 251, 255, 0.88);
  box-shadow: 0 14px 30px rgba(18, 18, 20, 0.12);

  div {
    width: 25px;
    height: 3px;
    background-color: var(--color-accent);
    margin: 4px 0;
    transition: 0.4s;
    border-radius: 999px;
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
  background: linear-gradient(
    135deg,
    rgba(246, 62, 2, 0.96),
    rgba(185, 46, 8, 0.92)
  );
  padding: 28px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 1000;
  gap: 10px;

  @media (min-width: 769px) {
    display: none;
  }

  ${NavItem} {
    display: block;
    color: var(--color-surface);
    padding: 18px 0;
    font-size: clamp(1.7rem, 6vw, 2.3rem);
    text-align: center;

    &:hover {
      color: var(--color-surface);
    }

    &:visited {
      color: var(--color-surface);
    }

    &::after {
      background: var(--color-surface);
    }
  }
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-surface);
  padding: 4px 10px;
  border: 1px solid rgba(251, 251, 255, 0.45);
  border-radius: var(--radius-pill);
`;
