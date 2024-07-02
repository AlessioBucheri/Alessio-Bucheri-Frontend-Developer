import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #39393A;
  height: 80vh;
  color: #F63E02;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const FooterHeader = styled.h1`
  align-self: flex-start;
  font-size: 2rem;
  margin: 0;
  padding: 40px;

  .material-symbols-outlined {
    margin-right: 5px;
  }
`;

export const FooterText = styled.div`
  align-self: flex-start;
  text-align: center;
  overflow: hidden;
  
  h1 {
    font-size: 10vw;
    padding: 20px;
    margin: 0;
  }
`;

export const FooterEmail = styled.p`
  font-size: 5vw;
  color: #a4a94a;
  padding: 30px;
  overflow: hidden;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: #FDB833;
  }
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  flex-grow: 1;
  border-top: 3px solid #FBFBFF;

  .contact-linkedin {
    border-right: 3px solid #FBFBFF;
  }

  #contact-github {
    border-right: 3px solid #FBFBFF;
  }
`;

export const FooterSocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  text-align: center;
  text-decoration: none;
  color: #FBFBFF;
  line-height: 2;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease; /* Modificato da transform a color */

  &:hover {
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
    transform: translate(-50%, -20%) scale(0);
    transition: transform 0.8s ease;
    z-index: 0;
  }

  &:hover .btn-fill {
    transform: translate(-50%, -50%) scale(1);
  }

  .btn-text {
    position: relative;
    padding: 20px;
    z-index: 1;
  }
`;