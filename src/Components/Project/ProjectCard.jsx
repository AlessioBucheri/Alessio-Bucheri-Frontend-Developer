import { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ProjectCardContainer,
  ProjectCardInner,
  ProjectCardTitle,
  ProjectCardHeadline,
  ProjectCardText,
  ProjectCardRow,
  ProjectCardLabel,
  ProjectCardValue,
  ProjectCardTagList,
  ProjectCardTag,
  ProjectCardLink,
  ProjectCardImg,
} from "../../Style/ProjectStyle/ProjectStyleCard";
import useMagneticButton from "../../Hooks/AboutPageHooks/useMagneticButton";

export default function ProjectCard({
  title,
  headline,
  project,
  technologies,
  description,
  challenge,
  link,
  image,
  index,
}) {
  const buttonRef = useRef(null);
  useMagneticButton(buttonRef, 0.5);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <ProjectCardContainer>
        <ProjectCardImg src={image} alt={title} loading='lazy' decoding='async' />
        <ProjectCardInner>
          <ProjectCardTitle>{title}</ProjectCardTitle>
          <ProjectCardHeadline>{headline}</ProjectCardHeadline>
          <ProjectCardText>
            <ProjectCardRow>
              <ProjectCardLabel>Project</ProjectCardLabel>
              <ProjectCardValue>{project}</ProjectCardValue>
            </ProjectCardRow>
            <ProjectCardRow>
              <ProjectCardLabel>Technologies</ProjectCardLabel>
              <ProjectCardTagList>
                {technologies.map((technology) => (
                  <ProjectCardTag key={technology}>{technology}</ProjectCardTag>
                ))}
              </ProjectCardTagList>
            </ProjectCardRow>
            <ProjectCardRow>
              <ProjectCardLabel>Description</ProjectCardLabel>
              <ProjectCardValue>{description}</ProjectCardValue>
            </ProjectCardRow>
            <ProjectCardRow>
              <ProjectCardLabel>Main Challenge</ProjectCardLabel>
              <ProjectCardValue>{challenge}</ProjectCardValue>
            </ProjectCardRow>
          </ProjectCardText>
          <ProjectCardLink
            ref={buttonRef}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='btn-fill'></div>
            <div className='btn-text'>Open</div>
          </ProjectCardLink>
        </ProjectCardInner>
      </ProjectCardContainer>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  challenge: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
