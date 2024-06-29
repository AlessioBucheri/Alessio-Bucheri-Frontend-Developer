import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition.jsx";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import ContactMe from "../../Components/ContactMe/ContactMe.jsx";
import FooterPage from "../../Components/FooterPage/FooterPage.jsx";
export default function ContactPage() {
  return (
    <WaveTransition>
      <HelmetProvider>
        <Helmet>
          <title>Alessio Bucheri - Contact</title>
          <meta name='contact page' content='Contact me!' />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <ContactMe />
      <FooterPage />
    </WaveTransition>
  );
}
