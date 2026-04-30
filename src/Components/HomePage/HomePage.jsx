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
          <img
            className='globe-icon'
            src='/PlanetIcon.svg'
            alt=''
            aria-hidden='true'
            ref={globeRef}
          />
        </S.From>
        <S.Introduction>
          <span className='material-symbols-outlined'>south_west </span>
          <h1>Fullstack Developer</h1>
        </S.Introduction>
      </S.Container>
      <S.NameScroller>
        <S.StageAnimation>
          <p>Alessio Bucheri - Fullstack Developer</p>
        </S.StageAnimation>
      </S.NameScroller>
    </S.HomePageContent>
  );
}
