import { Helmet } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition";

import Navbar from "../../Components/Navbar/Navbar";
import Project from "../../Components/Project/Project";
import FooterPage from "../../Components/FooterPage/FooterPage";

export default function ProjectsPage() {
  return (
    <WaveTransition>
      <Helmet>
        <title>Alessio Bucheri - Projects</title>
        <meta
          name='description'
          content='Una selezione dei progetti frontend sviluppati da Alessio Bucheri.'
        />
      </Helmet>
      <Navbar />
      <Project />
      <FooterPage />
    </WaveTransition>
  );
}
