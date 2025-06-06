import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">Dinuka Liyanage's Portfolio</h3>
            <p className="text-gray-400 mt-2">EVERY SCAR WILL BUILD MY THRONE </p>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-medium mb-2">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#qualifications" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#ProfessionalQualifications" className="text-gray-400 hover:text-blue-400 transition-colors">Qualifications</a>
              <a href="#PersonalProjects" className="text-gray-400 hover:text-blue-400 transition-colors">Personal Projects</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Uni Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/dinuka-liyanage/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/Dinuka7L" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Dinuka Liyanage. All rights reserved. Made with LLMs and self curiosity.
            <Heart size={16} className="inline-block mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;