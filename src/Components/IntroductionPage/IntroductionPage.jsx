import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutContent,
  AboutText,
  ProjectButton,
  ProjectButtonContainer,
} from "../../Style/IntroductionPageStyle/IntroductionPageStyle.js";
import AnimatedElement from "../../Hooks/AboutPageHooks/AnimatedElement.jsx";
import useScrollVisibility from "../../Hooks/AboutPageHooks/useScrollVisibility.jsx";
import useMagneticButton from "../../Hooks/AboutPageHooks/useMagneticButton.jsx";

export default function AboutPage() {
  const [ref1, isVisible1] = useScrollVisibility(0.3);
  const [ref2, isVisible2] = useScrollVisibility(0.3);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useMagneticButton(buttonRef, 0.5);

  const handleButtonClick = () => {
    navigate("/projects");
  };

  return (
    <AboutContent>
      <AboutText ref={ref1}>
        <h2>
          <AnimatedElement visible={isVisible1} index={0}>
            Passionate about computer science and technology, gamer since
            childhood. I want to bring my competitive and creative spirit to the
            programming world, tackling every challenge like a video game,
            always aiming for the final level.
          </AnimatedElement>
        </h2>
      </AboutText>
      <AboutText ref={ref2}>
        <h2>
          <AnimatedElement visible={isVisible2} index={1}>
            Discover my journey in my digital portfolio.
          </AnimatedElement>
        </h2>
        <AnimatedElement visible={isVisible2} index={2}>
          <ProjectButtonContainer>
            <ProjectButton ref={buttonRef} onClick={handleButtonClick}>
              <div className='btn-fill'></div>
              <div className='btn-text'>Project</div>
            </ProjectButton>
          </ProjectButtonContainer>
        </AnimatedElement>
      </AboutText>
    </AboutContent>
  );
}
