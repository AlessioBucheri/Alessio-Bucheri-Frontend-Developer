import styled from "styled-components";

export const HomePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/HomePageBackground.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 110vh;
    font-size: 1rem; 
    line-height: 1.5;
    text-align: center;
    color: #F63E02;

    @media (max-width: 768px) {
        font-size: 0.8rem; 
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 30%;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const From = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2rem;
    background-color: #FBFBFF;
    margin: 0;
    padding: 20px 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    animation: slide-in 1s ease-in-out;

    @keyframes slide-in {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        } 
    }

    p {
        font-size: 1.5rem;
    }

    i {
        width: 100%;
        font-size: 4rem;
        margin-left: 20px;
        transition: transform 0.3s ease-out; /* Smoother transition */

        &:hover {
            /* Rotation style */
            transform-style: preserve-3d; /* Enable 3D perspective */
            filter: brightness(1.2); /* Increase brightness */
            animation: pulse 2s infinite, spin 5s linear infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes spin { /* Rotation animation */
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(360deg);
            }
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 80%; 
        bottom: 0;

        p {
            font-size: 1.5rem;
        }

        i {
            font-size: 4rem;
        }
    }
`;

export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    margin: 0;
    padding: 20px 20px;

    span {
        font-size: 3vw;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NameScroller = styled.div`
    width: 100%;
    margin-inline: auto;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    bottom: 0;

    @media (max-width: 768px) {
        height: 50%; 
        bottom: 0;
    }
`;

export const StageAnimation = styled.div`
    display: inline-block;
    padding: 60px 0;
    animation: slide 10s linear infinite;

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
    
    p {
        font-size: 12vw;
        margin-right: 20px;
        font-family: 'Copenhagen';
    }

    @media (max-width: 768px) {
        p {
            font-size: 30vw; 
        }
    }
`;
