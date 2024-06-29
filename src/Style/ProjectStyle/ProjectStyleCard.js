import styled from "styled-components";


export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 40px;
    font-family: 'Copenhagen';
    background-color: aliceblue;
    border-radius: 30px;
    margin: 20px;

    @media (max-width: 768px) {
        padding: 0;
        flex-direction: column;
    }
`

export const ProjectCardInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    padding: 40px;
`
export const ProjectCardTitle = styled.p`
    font-size: 3vw;
    margin: 0;
    padding: 20px;

    @media (max-width: 768px) {
        font-size: 8vw;
        font-weight: bold;
        align-self: center;
        text-align: center;
    }
`

export const ProjectCardText = styled.p`
    font-size: 1.5vw;
    margin: 0;
    padding: 20px;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 5vw;
        align-self: flex-start;
        text-align: flex-start;
    }
`


export const ProjectCardLink = styled.a`
  background-color: #39393A;
  border-radius: 50%;
  color: #FBFBFF;
  width: 100px;
  height: 100px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.4s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    color: #FBFBFF;
  }

  .btn-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
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
    line-height: 2;
    z-index: 1;
  }
`;

export const ProjectCardImg = styled.img`
    width: 50vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    border: 3px solid #39393A;
    border-radius: 20px;

    @media (max-width: 768px) {
        margin-top: 20px;
        width: 80vw;
    }
`