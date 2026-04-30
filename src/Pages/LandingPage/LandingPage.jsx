import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import WaveTransition from "../../Hooks/WaveTransition/WaveTransition";

import HomePage from "../../Components/HomePage/HomePage";

export default function LandingPage() {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <WaveTransition>
      <Helmet>
        <title>Alessio Bucheri - Frontend Developer</title>
        <meta
          name='description'
          content='Frontend portfolio di Alessio Bucheri con progetti, presentazione e contatti.'
        />
      </Helmet>
      <HomePage />
    </WaveTransition>
  );
}
