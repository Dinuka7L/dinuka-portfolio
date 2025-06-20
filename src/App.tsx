import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // HashRouter without basename
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QualificationsSection from './components/QualificationsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import MyProjectsSection from './components/MyProjectsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Certifications from './components/ProfessionalQualificationsSection';
import Footer from './components/Footer';
import SentraFusionPage from './pages/sentrafusion';
import KeyloggerProjectShowcase from './pages/project-wraith'; 

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router> {/* Removed basename */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <QualificationsSection />
                <ExperienceSection />
                <SkillsSection />
                <Certifications />
                <MyProjectsSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
              </>
            }
          />
          <Route path="/sentrafusion" element={<SentraFusionPage />} />
          <Route path="/project-wraith" element={<KeyloggerProjectShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
