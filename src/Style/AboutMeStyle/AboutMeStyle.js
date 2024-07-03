import styled from "styled-components";
import { animated } from "react-spring";

export const Section = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #39393A;
    color: #F63E02;
    width: 100%; /* Aggiungi larghezza del 100% */

    hr {
        width: 80%;
        margin: 40px 0;
    }
`;

export const PresentationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FBFBFF;
    width: 100%;
    margin-top: 150px;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PresentationImage = styled.img`
    width: 800px;
    height: 400px;

    @media (max-width: 768px) {
        width: 60vw;
        margin-right: 0;
    }

    @media (max-width: 430px) {
        width: 100vw;
    }
`;

export const PresentationInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const AboutMeText = styled.h1`
    font-size: 7vw;
    line-height: 1.5;
    color: #F63E02;

    @media (max-width: 768px) {
        font-size: 4vw;
    }

    @media (max-width: 430px) {
        font-size: 6vw;
        text-align: center;
        padding: 30px;
    }
`;

export const PresentationText = styled.p`
    padding: 40px;
    font-size: 2vw;
    line-height: 1.5;
    color: #F63E02;

    @media (max-width: 768px) {
        font-size: 2vw;
    }

    @media (max-width: 430px) {
        font-size: 3vw;
        text-align: center;
        padding: 30px;
    }
`;

export const HobbyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FBFBFF;
    width: 100%; /* Assicurati che sia al 100% */
    height: 400px;
    overflow: hidden;
`;

export const HobbyTitle = styled.h3`
    font-size: 4vw;
    line-height: 1.5;
    color: #F63E02;
`;

export const HobbyText = styled.p`
    padding: 40px;
    text-align: center;
    font-size: 2vw;
    line-height: 1.5;
    color: #F63E02;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FBFBFF;
    width: 100%; /* Assicurati che sia al 100% */
    height: 500px;
    overflow: hidden;
    padding: 0; /* Rimuovi padding */
    margin: 0; /* Rimuovi margini */
`;

export const SkillsTitle = styled.h3`
    font-size: 4vw;
    line-height: 1.5;
    color: #F63E02;
    margin-bottom: 40px;
`;

export const SkillBarContainer = styled.div`
    margin-bottom: 10px;
`;

export const SkillBarName = styled.span`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.5vw;
    line-height: 1.5;
`;

export const SkillBarTrack = styled.div`
    width: 500px;
    background-color: #39393A;
    border: #39393A 1px solid;
    border-radius: 20px;
    overflow: hidden;
`;

export const SkillBarFill = styled(animated.div)`
    height: 20px;
    background-color: #FDB833;
    border-radius: 20px 0 0 20px;
`;
