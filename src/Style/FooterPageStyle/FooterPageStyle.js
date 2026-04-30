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

  .material-symbols-outlined {
    font-size: 1.1em;
  }
`;

export const FooterText = styled.div`
  width: 100%;
  text-align: left;
  overflow: hidden;

  h1 {
    max-width: none;
    font-size: clamp(1.9rem, 5.2vw, 5rem);
    line-height: 0.92;
    letter-spacing: -0.06em;
    padding: 14px 0 0;
    margin: 0;
    font-family: "Copenhagen-Bold";
    white-space: nowrap;
  }
`;

export const FooterEmail = styled.p`
  font-size: clamp(1.05rem, 1.5vw, 1.8rem);
  color: rgba(253, 184, 51, 0.84);
  padding: 10px 0 20px;
  overflow: hidden;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: var(--color-accent-soft);
    border-bottom: 1px solid rgba(253, 184, 51, 0.35);
    padding-bottom: 3px;
    transition: color 0.25s ease, border-color 0.25s ease;
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
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: var(--color-surface);
    background-color: rgba(251, 251, 255, 0.04);
  }

  .btn-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180%;
    height: 180%;
    background-color: var(--color-accent);
    border-radius: 50%;
    transform: translate(-50%, -32%) scale(0);
    transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 0;
  }

  &:hover .btn-fill {
    transform: translate(-50%, -50%) scale(1);
  }

  .btn-text {
    position: relative;
    padding: 6px 10px;
    z-index: 1;
    letter-spacing: -0.03em;
  }

  @media (max-width: 768px) {
    min-height: 40px;
  }
`;
