import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage/ProjectsPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"));

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div className='route-fallback' aria-hidden='true' />}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
