import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--color-bg);
  min-height: auto;
  padding: 0 var(--page-gutter) 24px;
  color: var(--color-accent);
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const FooterHeader = styled.h1`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: clamp(0.92rem, 0.76rem + 0.44vw, 1.08rem);
  margin: 0;
  padding: 24px 0 0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  min-width: 0;
  overflow-wrap: anywhere;

  .material-symbols-outlined {
    font-size: 1.1em;
  }
`;

export const FooterText = styled.div`
  width: 100%;
  text-align: left;
  overflow: hidden;
  min-width: 0;

  h1 {
    max-width: none;
    font-size: clamp(1.9rem, 5.2vw, 5rem);
    line-height: 0.92;
    letter-spacing: -0.06em;
    padding: 14px 0 0;
    margin: 0;
    font-family: "Copenhagen-Bold";
    white-space: nowrap;
    overflow-wrap: anywhere;
  }

  @media (max-width: 430px) {
    h1 {
      white-space: normal;
      text-wrap: balance;
    }
  }
`;

export const FooterEmail = styled.p`
  font-size: clamp(1.05rem, 1.5vw, 1.8rem);
  color: rgba(253, 184, 51, 0.84);
  padding: 10px 0 20px;
  overflow: hidden;
  margin-bottom: 10px;
  overflow-wrap: anywhere;

  a {
    text-decoration: none;
    color: var(--color-accent-soft);
    border-bottom: 1px solid rgba(253, 184, 51, 0.35);
    padding-bottom: 3px;
    transition: color 0.25s ease, border-color 0.25s ease;
    overflow-wrap: anywhere;
  }

  a:hover {
    color: rgba(253, 184, 51, 1);
    border-color: rgba(253, 184, 51, 0.7);
  }
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-height: clamp(40px, 6vh, 52px);
  border-top: 1px solid rgba(251, 251, 255, 0.2);
  border-bottom: 1px solid rgba(251, 251, 255, 0.12);
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.03),
    rgba(251, 251, 255, 0.015)
  );
  border-radius: 28px;
  overflow: hidden;
  min-width: 0;

  .contact-linkedin {
    border-right: 1px solid rgba(251, 251, 255, 0.2);
  }

  #contact-github {
    border-right: 1px solid rgba(251, 251, 255, 0.2);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .contact-linkedin,
    #contact-github {
      border-right: none;
      border-bottom: 1px solid rgba(251, 251, 255, 0.2);
    }
  }
`;

export const FooterSocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(40px, 6vh, 52px);
  font-size: clamp(0.98rem, 1.35vw, 1.3rem);
  text-align: center;
  text-decoration: none;
  color: var(--color-surface);
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  --fill-color: var(--color-accent);
  --fill-start: -112%;
  --fill-skew: -10deg;
  --highlight-start: -38%;
  --highlight-end: 42%;
  transition: color 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease;
  min-width: 0;

  &.contact-linkedin {
    --fill-start: -112%;
    --fill-skew: -10deg;
    --highlight-start: -38%;
    --highlight-end: 42%;
  }

  &#contact-github {
    --fill-color: var(--color-text);
    --fill-start: 0;
    --fill-skew: 0deg;
    --highlight-start: -28%;
    --highlight-end: 28%;
  }

  &#contact-instagram {
    --fill-start: 112%;
    --fill-skew: 10deg;
    --highlight-start: 38%;
    --highlight-end: -42%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(251, 251, 255, 0.18) 42%,
      transparent 70%
    );
    opacity: 0;
    transform: translateX(var(--highlight-start));
    transition: opacity 0.35s ease,
      transform 0.76s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    color: var(--color-surface);
    background-color: rgba(251, 251, 255, 0.04);
    box-shadow: inset 0 0 0 1px rgba(251, 251, 255, 0.08);
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(var(--highlight-end));
  }

  .btn-fill {
    position: absolute;
    inset: -2px -18%;
    width: auto;
    height: auto;
    background:
      linear-gradient(
        110deg,
        transparent 0%,
        rgba(251, 251, 255, 0.16) 10%,
        transparent 24%
      ),
      var(--fill-color);
    border-radius: inherit;
    box-shadow: inset 0 1px 0 rgba(251, 251, 255, 0.14);
    transform: translateX(var(--fill-start)) skewX(var(--fill-skew));
    transform-origin: center;
    transition: transform 0.72s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 0;
  }

  &#contact-github .btn-fill {
    transform: translateY(105%) skewX(var(--fill-skew));
  }

  &:hover .btn-fill {
    transform: translateX(0) skewX(var(--fill-skew));
  }

  &#contact-github:hover .btn-fill {
    transform: translateY(0) skewX(var(--fill-skew));
  }

  .btn-text {
    position: relative;
    padding: 6px 10px;
    z-index: 2;
    letter-spacing: -0.03em;
    overflow-wrap: anywhere;
    transition: transform 0.35s ease, text-shadow 0.35s ease;
  }

  &:hover .btn-text {
    transform: translateY(-1px);
    text-shadow: 0 8px 22px rgba(18, 18, 20, 0.22);
  }

  @media (max-width: 768px) {
    min-height: 40px;
  }
`;
