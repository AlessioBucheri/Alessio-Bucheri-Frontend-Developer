import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
  background: var(--color-bg);
  color: var(--color-accent);
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
  color: var(--color-accent);
  font-size: 2rem;
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: clamp(112px, 12vw, 136px) clamp(20px, 4vw, 48px) 88px;

  h1 {
    align-self: flex-start;
    max-width: none;
    width: 100%;
    font-size: clamp(1.9rem, 3.1vw, 2.95rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
    padding: 0;
    margin-bottom: 34px;
    font-family: "Copenhagen-Bold";
    white-space: nowrap;
    animation: ${slideIn} 1s ease-out;
  }

  .animate {
    animation: ${slideIn} 1s ease-out;
  }

  @media (max-width: 768px) {
    padding: 108px 16px 72px;

    h1 {
      max-width: 11ch;
      white-space: normal;
      text-align: left;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  width: min(840px, 100%);
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  color: var(--color-text);
  font-size: 1rem;
  padding: clamp(24px, 3vw, 38px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  animation: ${slideDown} 1s ease-out;

  label {
    font-size: clamp(0.84rem, 0.74rem + 0.2vw, 0.96rem);
    align-self: flex-start;
    padding: 0 0 8px;
    margin-bottom: 0;
    font-family: "Copenhagen-Bold";
    animation: ${slideDown} 1s ease-out;
    color: var(--color-text);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: clamp(0.98rem, 0.8rem + 0.32vw, 1.08rem);
    padding: 6px 0 16px;
    background: transparent !important;
    align-self: start;
    margin-bottom: 16px;
    width: 100%;
    font-family: "Copenhagen";
    color: var(--color-text-soft);
    line-height: 1.72;
    animation: ${slideDown} 1s ease-out;
    transition: color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      box-shadow: inset 0 -2px 0 var(--color-accent);
      color: var(--color-text);
    }

    &::placeholder {
      color: rgba(98, 94, 87, 0.58);
      height: auto;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: rgba(57, 57, 58, 0.1);
    border: none;
    margin-bottom: 18px;
    animation: ${slideDown} 1s ease-out;
  }

  hr:first-of-type {
    display: none;
  }

  textarea {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: clamp(0.98rem, 0.8rem + 0.32vw, 1.08rem);
    background: transparent !important;
    align-self: start;
    padding: 6px 0 16px;
    margin-bottom: 16px;
    width: 100%;
    font-family: "Copenhagen";
    color: var(--color-text-soft);
    resize: none;
    min-height: 8.5em;
    line-height: 1.72;
    animation: ${slideDown} 1s ease-out;
    transition: color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      box-shadow: inset 0 -2px 0 var(--color-accent);
      color: var(--color-text);
    }

    &::placeholder {
      color: rgba(98, 94, 87, 0.58);
    }
  }
`;

export const ContactButton = styled.button`
  align-self: flex-end;
  background-color: var(--color-text);
  border-radius: 50%;
  border: none;
  color: var(--color-surface);
  width: clamp(98px, 12vw, 126px);
  height: clamp(98px, 12vw, 126px);
  line-height: 1;
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.4s ease;
  animation: ${slideDown} 1s ease-out;
  --magnetic-x: 0px;
  --magnetic-y: 0px;
  --button-scale: 1;
  transform: translate(var(--magnetic-x), var(--magnetic-y))
    scale(var(--button-scale));
  margin-top: 6px;
  box-shadow: 0 18px 36px rgba(18, 18, 20, 0.16);

  &:hover {
    --button-scale: 1.06;
    color: var(--color-surface);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.8;
  }

  .btn-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background-color: var(--color-accent);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.8s ease;
    z-index: 0;
  }

  &:hover .btn-fill {
    transform: translate(-50%, -50%) scale(1);
  }

  .btn-text {
    position: relative;
    line-height: 1.1;
    z-index: 1;
    font-family: "Copenhagen";
    font-size: clamp(0.72rem, 0.64rem + 0.2vw, 0.82rem);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const ConfirmationMessage = styled.p`
  color: var(--color-text);
  font-size: 0.95rem;
  margin-top: 24px;
  padding: 10px 14px;
  border-radius: var(--radius-pill);
  background: rgba(251, 251, 255, 0.94);
  animation: ${slideDown} 1s ease-out;
`;
