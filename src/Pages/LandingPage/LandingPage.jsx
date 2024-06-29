import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition";

import HomePage from "../../Components/HomePage/HomePage";
import IntroductionPage from "../../Components/IntroductionPage/IntroductionPage";
import FooterPage from "../../Components/FooterPage/FooterPage";
export default function LandingPage() {
  return (
    <WaveTransition>
      <HelmetProvider>
        <Helmet>
          <title>Alessio Bucheri - Frontend Developer</title>
          <meta name='landing page' content='Welcome to my portfolio!' />
        </Helmet>
      </HelmetProvider>
      <HomePage />
      <IntroductionPage />
      <FooterPage />
    </WaveTransition>
  );
}
