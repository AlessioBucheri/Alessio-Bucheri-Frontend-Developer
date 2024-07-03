import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as S from "../../Style/AboutMeStyle/AboutMeStyle";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 80 },
];

const SkillBar = ({ name, level, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { width: "0%" },
    visible: { width: `${level}%` },
  };

  return (
    <S.SkillBarContainer>
      <S.SkillBarName>{name}</S.SkillBarName>
      <S.SkillBarTrack>
        <S.SkillBarFill
          as={motion.div}
          ref={ref}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
        />
      </S.SkillBarTrack>
    </S.SkillBarContainer>
  );
};

const Section = ({ children, index }) => {
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
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutMe() {
  return (
    <S.AboutMeContainer>
      <Section index={0}>
        <S.PresentationContainer>
          <S.PresentationImage
            src='/AboutMeImage/presentationImage.jpg'
            alt='my profile picture'
          />
          <S.PresentationInner>
            <S.AboutMeText>Hi I'm Alessio!</S.AboutMeText>
            <S.PresentationText>
              I'm a Frontend Developer based in Rome. I'm passionate about
              creating beautiful and performant websites. I'm always looking for
              new challenges and learning new technologies.
            </S.PresentationText>
          </S.PresentationInner>
        </S.PresentationContainer>
      </Section>
      <hr />
      <Section index={1}>
        <S.HobbyContainer>
          <S.HobbyTitle>My hobby</S.HobbyTitle>
          <S.PresentationText>
            I love to play video games, my favorite games are the ones that I
            play on my phone.
          </S.PresentationText>
          <img src='/HobbyImage/hobbyImage.jpg' alt='my hobby' />
          <S.PresentationText>
            I love to play video games, my favorite games are the ones that I
            play on my phone.
          </S.PresentationText>
        </S.HobbyContainer>
      </Section>
      <hr />
      <Section index={2}>
        <S.SkillsContainer>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </S.SkillsContainer>
      </Section>
    </S.AboutMeContainer>
  );
}
