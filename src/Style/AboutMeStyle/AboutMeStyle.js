import styled from "styled-components";
import { animated } from "react-spring";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  color: var(--color-accent);
  padding: 0 var(--page-gutter) 84px;
  width: 100%;
  overflow-x: hidden;

  hr {
    width: 100%;
    margin: 28px 0 18px;
    border: none;
    border-top: 1px solid rgba(251, 251, 255, 0.16);
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 3vw, 34px);
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  overflow: hidden;
  margin: 16px 0 0;
  margin-top: 132px;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  min-width: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    margin-top: 118px;
  }
`;

export const PresentationImage = styled.img`
  flex: 0 0 min(42vw, 470px);
  width: min(42vw, 470px);
  height: 100%;
  min-height: 360px;
  object-fit: cover;

  @media (max-width: 900px) {
    flex-basis: auto;
    width: 100%;
    min-height: clamp(230px, 42vw, 320px);
    aspect-ratio: 16 / 10;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const PresentationInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: min(100%, 760px);
  margin: 0 auto;
  gap: 12px;
  padding: clamp(24px, 3vw, 42px) clamp(22px, 3.4vw, 46px);
  min-width: 0;
`;

export const AboutMeText = styled.h1`
  width: 100%;
  font-size: clamp(2.3rem, 4.6vw, 4.4rem);
  line-height: 0.94;
  letter-spacing: -0.06em;
  color: var(--color-accent);
  margin-bottom: 0;
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 2.45rem;
  }

  @media (max-width: 430px) {
    font-size: 2.05rem;
    text-align: left;
    padding: 0;
  }
`;

export const PresentationText = styled.p`
  width: 100%;
  max-width: none;
  font-size: clamp(0.98rem, 0.8rem + 0.34vw, 1.08rem);
  line-height: 1.72;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.98rem;
    text-align: left;
    padding: 0;
  }
`;

export const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  min-height: 0;
  overflow: hidden;
  margin: 16px 0;
  padding: clamp(24px, 3vw, 40px);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  min-width: 0;
`;

export const HobbyTitle = styled.h3`
  width: min(100%, 76rem);
  margin-left: 0;
  font-size: clamp(1.7rem, 2.9vw, 2.75rem);
  line-height: 1;
  color: var(--color-accent);
  margin-bottom: 16px;
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const HobbyText = styled.p`
  width: min(100%, 76rem);
  max-width: none;
  margin-left: 0;
  text-align: left;
  font-size: clamp(0.98rem, 0.8rem + 0.32vw, 1.08rem);
  line-height: 1.72;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  margin: 16px 0;
  padding: clamp(24px, 3vw, 40px);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  min-width: 0;
`;

export const SkillsTitle = styled.h3`
  width: min(100%, 980px);
  margin-left: 0;
  font-size: clamp(1.7rem, 2.9vw, 2.75rem);
  line-height: 1;
  color: var(--color-accent);
  margin-bottom: 24px;
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const SkillBarContainer = styled.div`
  width: min(100%, 980px);
  margin-left: 0;
  margin-bottom: 14px;
`;

export const SkillBarName = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: clamp(0.84rem, 0.74rem + 0.2vw, 0.96rem);
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
`;

export const SkillBarTrack = styled.div`
  width: 100%;
  background-color: rgba(57, 57, 58, 0.08);
  border: 1px solid rgba(57, 57, 58, 0.08);
  border-radius: var(--radius-pill);
  overflow: hidden;
`;

export const SkillBarFill = styled(animated.div)`
  height: 16px;
  background: linear-gradient(
    90deg,
    var(--color-accent) 0%,
    var(--color-accent-soft) 100%
  );
  border-radius: var(--radius-pill);
`;

export const PresentationMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-top: 2px;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 16px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(57, 57, 58, 0.1);
  background: rgba(246, 62, 2, 0.06);
  color: var(--color-text);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
`;

export const PresentationActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 6px;
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: var(--radius-pill);
  background: var(--color-text);
  color: var(--color-surface);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.82rem;
  transition: transform 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--color-accent);
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  margin: 16px 0;
  padding: clamp(24px, 3vw, 40px);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  min-width: 0;
`;

export const SectionHeading = styled.h3`
  width: 100%;
  font-size: clamp(1.7rem, 2.9vw, 2.75rem);
  line-height: 1;
  color: var(--color-accent);
  margin-bottom: 24px;
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 18px;
  width: 100%;
`;

export const ExperienceCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 100%;
  padding: clamp(20px, 2vw, 28px);
  border-radius: var(--radius-soft);
  border: 1px solid rgba(57, 57, 58, 0.08);
  background: rgba(246, 62, 2, 0.03);
  min-width: 0;
`;

export const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ExperienceTitle = styled.h4`
  font-size: clamp(1.2rem, 1.1rem + 0.7vw, 1.6rem);
  line-height: 1;
  color: var(--color-text);
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const ExperienceMeta = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;
`;

export const ExperienceSummary = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;
`;

export const ExperienceList = styled.ul`
  display: grid;
  gap: 10px;
  padding-left: 18px;
  color: var(--color-text);

  li {
    line-height: 1.6;
  }
`;

export const SkillGroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 22px;
`;

export const SkillGroupCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: var(--radius-soft);
  border: 1px solid rgba(57, 57, 58, 0.08);
  background: rgba(57, 57, 58, 0.03);
  min-width: 0;
`;

export const SkillGroupTitle = styled.h4`
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const SkillTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: var(--radius-pill);
  background: rgba(246, 62, 2, 0.08);
  color: var(--color-text);
  font-size: 0.9rem;
  overflow-wrap: anywhere;
`;

export const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  width: 100%;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ResumePanel = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: clamp(24px, 3vw, 40px);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  box-shadow: var(--shadow-card);
  min-width: 0;
`;

export const ResumePanelTitle = styled.h3`
  font-size: clamp(1.7rem, 2.9vw, 2.75rem);
  line-height: 1;
  color: var(--color-accent);
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const ResumeItems = styled.div`
  display: grid;
  gap: 18px;
`;

export const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(57, 57, 58, 0.08);

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ResumeItemTitle = styled.h4`
  font-size: 1.08rem;
  line-height: 1.35;
  color: var(--color-text);
  font-family: "Copenhagen-Bold";
  overflow-wrap: anywhere;
`;

export const ResumeItemMeta = styled.p`
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;
`;

export const ResumeItemText = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--color-text-soft);
  overflow-wrap: anywhere;
`;

export const ResumeItemNote = styled.p`
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--color-text);
  overflow-wrap: anywhere;
`;

export const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LanguagePill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: var(--radius-pill);
  background: rgba(246, 62, 2, 0.08);
  color: var(--color-text);
  font-size: 0.92rem;
  overflow-wrap: anywhere;
`;

export const InfoList = styled.div`
  display: grid;
  gap: 12px;
`;

export const InfoLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
  line-height: 1.6;
  border-bottom: 1px solid rgba(57, 57, 58, 0.12);
  max-width: 100%;
  width: fit-content;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-accent);
    border-color: rgba(246, 62, 2, 0.35);
  }
`;

export const InfoText = styled.p`
  color: var(--color-text-soft);
  line-height: 1.6;
  overflow-wrap: anywhere;
`;
