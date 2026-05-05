import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-accent);
  padding: 138px clamp(20px, 4vw, 54px) 100px;
  background: var(--color-bg);
  overflow-x: hidden;

  .projects-grid {
    width: min(1280px, 100%);
    display: grid;
    gap: 26px;
    min-width: 0;
  }

  h1 {
    align-self: center;
    max-width: none;
    font-size: clamp(2.5rem, 5.8vw, 5.9rem);
    padding: 8px 20px 6px;
    margin-top: 0;
    line-height: 0.92;
    letter-spacing: -0.07em;
    font-family: "Copenhagen-Bold";
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    animation: slideIn 1s ease-out;
    overflow-wrap: anywhere;

    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  h3 {
    align-self: center;
    font-size: clamp(1rem, 1vw + 0.8rem, 1.36rem);
    max-width: none;
    margin: 0 0 42px;
    padding: 0 20px;
    color: rgba(251, 251, 255, 0.76);
    line-height: 1.7;
    text-align: center;
    white-space: normal;
    max-width: min(100%, 980px);
    text-wrap: balance;
  }

  .container {
    display: grid !important;
    justify-items: center;
    gap: 10px;
    padding: 18px 8px;
    min-width: 0;
  }

  .slider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    min-width: 0;
  }

  .container img {
    width: 82px;
    height: 82px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
    object-fit: contain;
    border-radius: 50%;
    background: rgba(251, 251, 255, 0.9);
    box-shadow: 0 16px 32px rgba(18, 18, 20, 0.12);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .container img:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 40px rgba(18, 18, 20, 0.18);
  }

  .tech-label {
    display: block;
    width: 100%;
    max-width: 118px;
    color: rgba(251, 251, 255, 0.76);
    font-size: clamp(0.68rem, 0.62rem + 0.18vw, 0.78rem);
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  h4 {
    align-self: center;
    font-size: clamp(0.95rem, 0.8rem + 0.5vw, 1.25rem);
    margin: 38px 0 18px;
    padding: 0 20px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(251, 251, 255, 0.74);
  }

  @media (max-width: 768px) {
    padding: 126px var(--page-gutter) 80px;

    h1 {
      padding: 0 10px;
      white-space: normal;
      text-wrap: balance;
    }

    h3 {
      padding: 0 10px;
      font-size: 1rem;
      white-space: normal;
    }

    h4 {
      font-size: 0.9rem;
    }

    .container img {
      width: 68px;
      height: 68px;
    }

    .tech-label {
      max-width: 96px;
      font-size: 0.66rem;
      letter-spacing: 0.06em;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: clamp(2.2rem, 12vw, 2.8rem);
    }

    h3 {
      font-size: 0.96rem;
      line-height: 1.6;
    }
  }
`;
