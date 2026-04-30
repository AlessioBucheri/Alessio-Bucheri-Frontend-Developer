import { Helmet } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition.jsx";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import ContactMe from "../../Components/ContactMe/ContactMe.jsx";
import FooterPage from "../../Components/FooterPage/FooterPage.jsx";

export default function ContactPage() {
  return (
    <WaveTransition>
      <Helmet>
        <title>Alessio Bucheri - Contact</title>
        <meta
          name='description'
          content='Contatta Alessio Bucheri per collaborazioni, progetti o opportunita.'
        />
      </Helmet>
      <Navbar />
      <ContactMe />
      <FooterPage />
    </WaveTransition>
  );
}
