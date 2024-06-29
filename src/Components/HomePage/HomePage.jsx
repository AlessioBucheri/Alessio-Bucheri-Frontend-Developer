import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import useGlobeSpin from "../../Hooks/MainPageHooks/useGlobeSpin.js";
import * as S from "../../Style/HomePageStyle/HomePageStyle.js";

export default function HomePage() {
  const { globeRef, handleMouseEnter, handleMouseLeave } = useGlobeSpin();

  return (
    <S.HomePageContent>
      <Navbar />
      <S.Container>
        <S.From onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p>Located in Italy, Rome</p>
          <i className='fas fa-globe' ref={globeRef}></i>
        </S.From>
        <S.Introduction>
          <span className='material-symbols-outlined'>south_east </span>
          <h1>Frontend Developer</h1>
        </S.Introduction>
      </S.Container>
      <S.NameScroller>
        <S.StageAnimation>
          <p>Alessio Bucheri — </p>
        </S.StageAnimation>
        <S.StageAnimation>
          <p>Alessio Bucheri — </p>
        </S.StageAnimation>
      </S.NameScroller>
    </S.HomePageContent>
  );
}
