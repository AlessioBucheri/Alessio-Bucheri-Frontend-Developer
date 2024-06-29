import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ProjectCardContainer,
  ProjectCardInner,
  ProjectCardTitle,
  ProjectCardText,
  ProjectCardLink,
  ProjectCardImg,
} from "../../Style/ProjectStyle/ProjectStyleCard";
import useMagneticButton from "../../Hooks/AboutPageHooks/useMagneticButton";

export default function ProjectCard({
  title,
  description,
  link,
  image,
  index,
}) {
  const buttonRef = useRef(null);
  useMagneticButton(buttonRef, 0.5);

  const handleButtonClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <ProjectCardContainer>
        <ProjectCardImg src={image} alt={title} />
        <ProjectCardInner>
          <ProjectCardTitle>{title}</ProjectCardTitle>
          <ProjectCardText dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectCardLink ref={buttonRef} onClick={handleButtonClick}>
            <div className='btn-fill'></div>
            <div className='btn-text'>Open</div>
          </ProjectCardLink>
        </ProjectCardInner>
      </ProjectCardContainer>
    </motion.div>
  );
}
