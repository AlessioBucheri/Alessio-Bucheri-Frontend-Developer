import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #39393A;
    height: 100vh;
    color: #F63E02;
    box-sizing: border-box;
`

export const AboutMeText = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: center;
    color: #F63E02;
    width: 80%;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
