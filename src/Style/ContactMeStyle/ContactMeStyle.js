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
  background-color: #39393A;
  color: #F63E02;
  margin-top: 100px;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #39393A;
  color: #F63E02;
  font-size: 2rem;
  padding: 40px;

  h1 {
    align-self: flex-start;
    font-size: 8vw;
    padding: 10px;
    margin-bottom: 60px;
    animation: ${slideIn} 2s ease-out;
  }

  .animate {
    animation: ${slideIn} 2s ease-out;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  background-color: #39393A;
  color: #F63E02;
  font-size: 2rem;
  padding: 40px;
  animation: ${slideDown} 1s ease-out;

  label {
    font-size: 5vw;
    align-self: flex-start;
    padding: 10px;
    margin-bottom: 40px;
    font-family: 'Copenhagen';
    animation: ${slideDown} 1s ease-out;
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
    font-size: 3vw;
    padding: 10px;
    background: transparent !important;
    align-self: start;
    margin-bottom: 40px;
    width: 100%;
    font-family: 'Copenhagen';
    color: #FBFBFF;
    line-height: 2;
    animation: ${slideDown} 1s ease-out;

    &::placeholder {
        color: grey;
        height: 70px;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: #FBFBFF;
    border: none;
    margin-bottom: 40px;
    animation: ${slideDown} 1s ease-out;
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
    font-size: 3vw;
    background: transparent !important;
    align-self: start;
    padding: 10px;
    margin-bottom: 40px;
    width: 100%;
    font-family: 'Copenhagen';
    color: #FBFBFF;
    resize: none;
    height: 5em;
    animation: ${slideDown} 1s ease-out;

    &::placeholder {
        color: grey;
    }
  }
`;

export const ContactButton = styled.button`
  background-color: #FBFBFF;
  border-radius: 50%;
  border: none;
  color: #39393A;
  width: 15vw;
  height: 15vw;
  line-height: 76px;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.4s ease;
  animation: ${slideDown} 1s ease-out;

  &:hover {
    transform: scale(1.1);
    color: #FBFBFF;
  }

  .btn-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background-color: #F63E02;
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
    line-height: 6;
    z-index: 1;
    font-family: 'Copenhagen';
    font-size: 2vw;
  }
`;

export const ConfirmationMessage = styled.p`
  color: #FBFBFF;
  font-size: 1.5rem;
  margin-top: 20px;
  animation: ${slideDown} 1s ease-out;
`;
