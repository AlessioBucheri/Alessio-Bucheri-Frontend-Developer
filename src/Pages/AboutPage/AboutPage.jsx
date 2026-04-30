import { Helmet } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition.jsx";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import FooterPage from "../../Components/FooterPage/FooterPage.jsx";

export default function AboutPage() {
  return (
    <WaveTransition>
      <Helmet>
        <title>Alessio Bucheri - About Me</title>
        <meta
          name='description'
          content='Scopri il percorso, l esperienza e le competenze di Alessio Bucheri tra frontend, ASP.NET, API e microservizi.'
        />
      </Helmet>
      <Navbar />
      <AboutMe />
      <FooterPage />
    </WaveTransition>
  );
}
