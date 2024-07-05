import React from "react";
import { motion } from "framer-motion";
import * as S from "../../Style/AboutMeStyle/AboutMeStyle";
import { useSkillBar } from "../../Hooks/AboutMePageHooks/useSkillBar";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 80 },
];

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
      style={{ width: "100%" }}
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
            src='/AboutMeImage/presentationImage.svg'
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
          <S.HobbyTitle>Hobbies</S.HobbyTitle>
          <S.HobbyText>
            Passion for Video Games Since childhood, I have been passionate
            about video games. This passion has shaped me into a highly
            competitive individual who always strives for perfection and
            consistently achieves my goals. Gaming serves as both an escape from
            reality and a means of relaxation. I firmly believe that the skills
            and mindset developed through gaming are valuable in both private
            and professional life.
          </S.HobbyText>
        </S.HobbyContainer>
      </Section>
      <hr />
      <Section index={2}>
        <S.SkillsContainer>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          {skills.map((skill, index) => {
            const { ref, inView, variants, motion } = useSkillBar(skill.level);

            return (
              <S.SkillBarContainer key={index}>
                <S.SkillBarName>{skill.name}</S.SkillBarName>
                <S.SkillBarTrack>
                  <motion.div
                    ref={ref}
                    initial='hidden'
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 1 }}
                    style={{ width: "100%" }}
                  >
                    <S.SkillBarFill />
                  </motion.div>
                </S.SkillBarTrack>
              </S.SkillBarContainer>
            );
          })}
        </S.SkillsContainer>
      </Section>
    </S.AboutMeContainer>
  );
}
