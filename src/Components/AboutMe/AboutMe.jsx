import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as S from "../../Style/AboutMeStyle/AboutMeStyle";
import { useSkillBar } from "../../Hooks/AboutMePageHooks/useSkillBar";
import { useInView } from "react-intersection-observer";
import resumeData from "../../Database/resumeData";

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

function SkillBar({ skill }) {
  const { ref, inView, variants } = useSkillBar(skill.level);

  return (
    <S.SkillBarContainer>
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
}

export default function AboutMe() {
  const {
    profile,
    highlights,
    experience,
    education,
    coreSkills,
    skillGroups,
    languages,
  } = resumeData;

  return (
    <S.AboutMeContainer>
      <Section index={0}>
        <S.PresentationContainer>
          <S.PresentationImage
            src='/AboutMeImage/presentationImage.svg'
            alt='my profile picture'
            loading='lazy'
          />
          <S.PresentationInner>
            <S.AboutMeText>Hi, I am Alessio!</S.AboutMeText>
            <S.PresentationMeta>
              {highlights.map((highlight) => (
                <S.MetaPill key={highlight}>{highlight}</S.MetaPill>
              ))}
            </S.PresentationMeta>
            <S.PresentationText>{profile.summary}</S.PresentationText>
            <S.PresentationActions>
              <S.ResumeButton href={profile.cvPath} download>
                Download CV
              </S.ResumeButton>
            </S.PresentationActions>
          </S.PresentationInner>
        </S.PresentationContainer>
      </Section>
      <hr />
      <Section index={1}>
        <S.ExperienceContainer>
          <S.SectionHeading>Experience</S.SectionHeading>
          <S.ExperienceGrid>
            {experience.map((item) => (
              <S.ExperienceCard key={`${item.company}-${item.period}`}>
                <S.ExperienceHeader>
                  <S.ExperienceTitle>{item.title}</S.ExperienceTitle>
                  <S.ExperienceMeta>
                    {item.company} · {item.location} · {item.period}
                  </S.ExperienceMeta>
                </S.ExperienceHeader>
                <S.ExperienceSummary>{item.summary}</S.ExperienceSummary>
                <S.ExperienceList>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </S.ExperienceList>
              </S.ExperienceCard>
            ))}
          </S.ExperienceGrid>
        </S.ExperienceContainer>
      </Section>
      <hr />
      <Section index={2}>
        <S.SkillsContainer>
          <S.SkillsTitle>Core Skills</S.SkillsTitle>
          {coreSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
          <S.SkillGroupsGrid>
            {skillGroups.map((group) => (
              <S.SkillGroupCard key={group.title}>
                <S.SkillGroupTitle>{group.title}</S.SkillGroupTitle>
                <S.SkillTagList>
                  {group.items.map((item) => (
                    <S.SkillTag key={item}>{item}</S.SkillTag>
                  ))}
                </S.SkillTagList>
              </S.SkillGroupCard>
            ))}
          </S.SkillGroupsGrid>
        </S.SkillsContainer>
      </Section>
      <hr />
      <Section index={3}>
        <S.ResumeGrid>
          <S.ResumePanel>
            <S.ResumePanelTitle>Education & Courses</S.ResumePanelTitle>
            <S.ResumeItems>
              {education.map((item) => (
                <S.ResumeItem key={`${item.title}-${item.period}`}>
                  <S.ResumeItemTitle>{item.title}</S.ResumeItemTitle>
                  <S.ResumeItemMeta>
                    {item.organization} · {item.period}
                  </S.ResumeItemMeta>
                  {item.description && (
                    <S.ResumeItemText>{item.description}</S.ResumeItemText>
                  )}
                  {item.note && <S.ResumeItemNote>{item.note}</S.ResumeItemNote>}
                </S.ResumeItem>
              ))}
            </S.ResumeItems>
          </S.ResumePanel>
          <S.ResumePanel>
            <S.ResumePanelTitle>Languages & Links</S.ResumePanelTitle>
            <S.LanguageList>
              {languages.map((item) => (
                <S.LanguagePill key={item.name}>
                  {item.name} · {item.level}
                </S.LanguagePill>
              ))}
            </S.LanguageList>
            <S.InfoList>
              <S.InfoText>{profile.location}</S.InfoText>
              <S.InfoText>{profile.address}</S.InfoText>
              <S.InfoLink href={`mailto:${profile.email}`}>{profile.email}</S.InfoLink>
              <S.InfoLink
                href={profile.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </S.InfoLink>
              <S.InfoLink
                href={profile.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </S.InfoLink>
              <S.InfoLink
                href={profile.portfolio}
                target='_blank'
                rel='noopener noreferrer'
              >
                Portfolio
              </S.InfoLink>
            </S.InfoList>
          </S.ResumePanel>
        </S.ResumeGrid>
      </Section>
    </S.AboutMeContainer>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};
