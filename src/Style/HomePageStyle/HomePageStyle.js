import styled from "styled-components";

export const HomePageContent = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  padding: 0 var(--page-gutter);
  background-image: url("/HomePageBackground.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-accent);
  isolation: isolate;

  @supports (height: 100dvh) {
    min-height: 100dvh;
    height: 100dvh;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 78% 22%,
        rgba(253, 184, 51, 0.14),
        transparent 24%
      ),
      linear-gradient(
        180deg,
        rgba(251, 251, 255, 0.14),
        rgba(251, 251, 255, 0.03)
      );
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 0 var(--page-gutter);
  }

  @media (max-height: 620px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(28px, 4vw, 72px);
  padding: clamp(120px, 18vh, 170px) 0 clamp(120px, 18vh, 170px);
  position: relative;
  z-index: 2;
  min-width: 0;

  @media (max-width: 960px) {
    gap: 28px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: end;
    justify-content: flex-start;
    padding: clamp(96px, 18svh, 112px) 0 clamp(104px, 18svh, 116px);
  }

  @media (max-height: 620px) {
    padding: 96px 0 92px;
  }
`;

export const From = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: max-content;
  justify-self: start;
  max-width: 100%;
  min-height: 56px;
  background: rgba(251, 251, 255, 0.84);
  margin: 0;
  padding: 0 18px 0 24px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(251, 251, 255, 0.35);
  box-shadow: 0 12px 30px rgba(18, 18, 20, 0.08);
  animation: slide-in 0.8s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-16px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  p {
    font-size: clamp(0.88rem, 0.72rem + 0.4vw, 1.06rem);
    color: var(--color-text);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: "Copenhagen-Bold";
    white-space: nowrap;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .globe-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
    padding: 10px;
    background: rgba(246, 62, 2, 0.06);
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(246, 62, 2, 0.14);
    transition: transform 0.25s ease-out;
    transform-origin: center;
    will-change: transform;
    backface-visibility: hidden;
  }

  .globe-icon.rotate {
    animation: spin 2.2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    min-height: 48px;
    gap: 12px;
    padding: 0 12px 0 16px;

    p {
      font-size: clamp(0.68rem, 2.6vw, 0.76rem);
    }

    .globe-icon {
      width: 40px;
      height: 40px;
      min-width: 40px;
    }
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-self: end;
  width: min(52vw, 760px);
  max-width: 760px;
  min-width: 0;
  margin: 0;
  padding: 0;
  text-align: right;

  span {
    font-size: clamp(1.2rem, 1.6vw, 2rem);
    margin-bottom: 12px;
    opacity: 0.75;
    align-self: flex-end;
  }

  h1 {
    width: 100%;
    font-size: clamp(3.6rem, 7vw, 7.6rem);
    line-height: 0.92;
    letter-spacing: -0.07em;
    font-family: "Copenhagen-Bold";
    color: var(--color-accent);
    text-shadow: 0 10px 30px rgba(18, 18, 20, 0.07);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NameScroller = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;
  width: min(100%, 1400px);
  overflow: hidden;
  white-space: nowrap;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  opacity: 0.34;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    bottom: 14px;
    width: calc(100% - (var(--page-gutter) * 2));
    opacity: 0.28;
  }
`;

export const StageAnimation = styled.div`
  display: inline-block;
  min-width: max-content;
  padding: 30px 0 22px;
  animation: slide 18s linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  &:nth-child(2) {
    animation-delay: -9s;
  }

  @keyframes slide {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  p {
    font-size: clamp(4.6rem, 8.8vw, 7.8rem);
    margin-right: 28px;
    font-family: "Copenhagen";
    letter-spacing: -0.06em;
    line-height: 0.9;
    color: rgba(246, 62, 2, 0.9);
    text-shadow: 0 6px 18px rgba(18, 18, 20, 0.08);
  }

  @media (max-width: 768px) {
    padding: 22px 0 18px;

    p {
      font-size: clamp(4.4rem, 22vw, 7rem);
    }
  }
`;
