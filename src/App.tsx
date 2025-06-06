import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QualificationsSection from './components/QualificationsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import MyProjectsSection from './components/MyProjectsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProfessionalQualificationsSection from './components/ProfessionalQualificationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <QualificationsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProfessionalQualificationsSection />
        <MyProjectsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;