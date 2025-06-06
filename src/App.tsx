import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import HeroPage from "./sections/HeroPage";
import LogoShowcase from "./sections/LogoSection";
import MyApproachSection from "./sections/MyApproachSection";
import ShowcasePage from "./sections/ShowcasePage";
import TechStackSection from "./sections/TechStackSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import { ToastContainer } from "react-toastify";
import * as Sentry from "@sentry/react";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<ErrorFallback />} showDialog>
      <Navbar />
      <HeroPage />
      <ShowcasePage />
      <LogoShowcase />
      <MyApproachSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Cursor */}
      <Cursor />

      {/* Toaster */}
      <ToastContainer />
    </Sentry.ErrorBoundary>
  );
}

export default App;
