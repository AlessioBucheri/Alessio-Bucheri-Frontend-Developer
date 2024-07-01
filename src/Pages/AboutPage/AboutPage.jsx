import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition.jsx";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import AboutMe from "../../Components/AboutMe/AboutMe.jsx";
import FooterPage from "../../Components/FooterPage/FooterPage.jsx";
export default function ContactPage() {
  return (
    <WaveTransition>
      <HelmetProvider>
        <Helmet>
          <title>Alessio Bucheri - About Me</title>
          <meta name='about me page' content='Discover more about me' />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <AboutMe />
      <FooterPage />
    </WaveTransition>
  );
}
