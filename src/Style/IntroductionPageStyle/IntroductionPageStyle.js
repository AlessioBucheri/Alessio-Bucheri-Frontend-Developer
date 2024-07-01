import styled from "styled-components";

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-items: center;
  align-items: center;
  min-height: 80vh;  /* Assicura che il contenuto riempia l'altezza della finestra */
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: center;
  color: #F63E02;
  background-color: #FBFBFF;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    font-size: 1rem;
    min-height: 100vh;  /* Assicura che il contenuto riempia l'altezza della finestra */
  }
`;

export const AboutText = styled.div`
  width: 80%;
  margin: 0 auto;

  h2 {
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: justify;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .word {
    display: inline-block;
    line-height: 1.5;
    margin-right: 5px;
  }

  .word:last-child {
    margin-right: 0;
  }
`;

export const ProjectButtonContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 40px;
  overflow: hidden; 
  background-color: #FBFBFF;
  border-radius: 50%;
`;

export const ProjectButton = styled.a`
  background-color: #39393A;
  border-radius: 50%;
  color: #FBFBFF;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    color: #FBFBFF;
  }

  .btn-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F63E02;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.8s ease;
    z-index: 0;
  }

  &:hover .btn-fill {
    transform: scale(1);
  }

  .btn-text {
    position: relative;
    z-index: 1;
  }
`;
