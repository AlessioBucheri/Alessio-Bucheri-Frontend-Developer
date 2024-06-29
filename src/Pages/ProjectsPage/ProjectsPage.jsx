import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition";

import Navbar from "../../Components/Navbar/Navbar";
import Project from "../../Components/Project/Project";
import FooterPage from "../../Components/FooterPage/FooterPage";

export default function ProjecsPage() {
  return (
    <WaveTransition>
      <HelmetProvider>
        <Helmet>
          <title>Alessio Bucheri - Projects</title>
          <meta name='projects page' content='My projects!' />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Project />
      <FooterPage />
    </WaveTransition>
  );
}
