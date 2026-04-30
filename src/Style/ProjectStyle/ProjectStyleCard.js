import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  gap: clamp(24px, 3vw, 42px);
  padding: clamp(24px, 3vw, 38px);
  font-family: "Copenhagen";
  background: linear-gradient(
    180deg,
    rgba(251, 251, 255, 0.99),
    rgba(251, 251, 255, 0.96)
  );
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  margin: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 80px rgba(18, 18, 20, 0.16);
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 16px;
    flex-direction: column;
  }
`;

export const ProjectCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  width: 100%;
  padding: 10px 6px 6px;
`;

export const ProjectCardTitle = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin: 0;
  padding: 0;
  line-height: 0.94;
  letter-spacing: -0.06em;
  color: var(--color-accent);
  font-family: "Copenhagen-Bold";

  @media (max-width: 768px) {
    font-size: 2.15rem;
    align-self: center;
    text-align: center;
  }
`;

export const ProjectCardHeadline = styled.p`
  width: 100%;
  font-size: clamp(1.02rem, 0.86rem + 0.34vw, 1.18rem);
  line-height: 1.6;
  color: var(--color-text);
  font-family: "Copenhagen-Bold";

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ProjectCardText = styled.div`
  width: 100%;
  font-size: clamp(0.95rem, 0.68rem + 0.55vw, 1.08rem);
  margin: 0;
  padding: 0;
  line-height: 1.72;
  color: var(--color-text-soft);
  max-width: 36rem;
  display: grid;
  gap: 14px;

  @media (max-width: 768px) {
    font-size: 0.96rem;
    align-self: flex-start;
    text-align: left;
  }
`;

export const ProjectCardRow = styled.div`
  display: grid;
  gap: 6px;
  width: 100%;
`;

export const ProjectCardLabel = styled.span`
  display: block;
  font-size: clamp(0.84rem, 0.74rem + 0.2vw, 0.96rem);
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  font-family: "Copenhagen-Bold";
`;

export const ProjectCardValue = styled.p`
  margin: 0;
  font-size: clamp(0.98rem, 0.8rem + 0.32vw, 1.08rem);
  line-height: 1.72;
  color: var(--color-text-soft);
`;

export const ProjectCardTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProjectCardTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: var(--radius-pill);
  background: rgba(246, 62, 2, 0.08);
  color: var(--color-text);
  font-size: 0.9rem;
`;

export const ProjectCardLink = styled.a`
  background-color: var(--color-text);
  border-radius: 50%;
  color: var(--color-surface);
  width: 94px;
  height: 94px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.4s ease;
  position: relative;
  --magnetic-x: 0px;
  --magnetic-y: 0px;
  --button-scale: 1;
  transform: translate(var(--magnetic-x), var(--magnetic-y))
    scale(var(--button-scale));
  margin-top: auto;
  box-shadow: 0 18px 36px rgba(18, 18, 20, 0.16);

  &:hover {
    --button-scale: 1.06;
    color: var(--color-surface);
  }

  .btn-fill {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: var(--color-accent);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.8s ease;
    z-index: 0;
  }

  &:hover .btn-fill {
    transform: translate(-50%, -50%) scale(1);
  }

  .btn-text {
    position: relative;
    line-height: 1;
    z-index: 1;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.72rem;
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 90px;
    height: 90px;
  }
`;

export const ProjectCardImg = styled.img`
  width: min(48vw, 560px);
  min-height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgba(57, 57, 58, 0.18);
  border-radius: var(--radius-soft);
  box-shadow: var(--shadow-soft);

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
  }
`;
