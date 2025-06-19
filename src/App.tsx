import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SentraFusionPage from './pages/sentrafusion'; // 👈 renamed for proper PascalCase (React convention)

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router basename="/dinuka-portfolio"> {/* 👈 Important fix */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Routes>
          {/* All main page sections rendered in "/" route */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
