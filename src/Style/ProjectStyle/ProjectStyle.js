import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-accent);
  padding: 138px clamp(20px, 4vw, 54px) 100px;
  background: var(--color-bg);

  .projects-grid {
    width: min(1280px, 100%);
    display: grid;
    gap: 26px;
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
    white-space: nowrap;
  }

  .container {
    padding: 18px 0;
  }

  .slider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }

  .container img {
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
    border-radius: 50%;
    background: rgba(251, 251, 255, 0.9);
    box-shadow: 0 16px 32px rgba(18, 18, 20, 0.12);
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
    padding: 126px 16px 80px;

    h1 {
      padding: 0 10px;
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
  }
`;
