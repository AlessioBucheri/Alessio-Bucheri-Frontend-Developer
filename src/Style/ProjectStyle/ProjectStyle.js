import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #F63E02;

    h1 {
        align-self: center;
        font-size: 10vw;
        padding: 20px;
        margin-top: 50px;
        line-height: 2;
        overflow: hidden;

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
        font-size: 4vw;
        margin: 0;
        padding: 40px;
    }

    .container {
        padding: 40px 0;
    }
    
    .slider {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
    }
    .container img {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    }

    h4 {
        align-self: center;
        font-size: 2vw;
        margin: 0;
        padding: 40px;
    }

    @media (max-width: 768px) {
        h1 {
            align-self: center;
            padding: 20px;
            margin-top: 50px;
        }
        h3 {
            align-self: center;
            padding: 20px;
            font-size: 4vw;
        }
        h4 {
            font-size: 4vw;
        }
    }
`
