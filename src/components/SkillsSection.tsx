import React from 'react';
import { motion } from 'framer-motion';
import nodejslogo from '../assets/skill-logos/NodeJS-Logo.png';
import autopsylogo from '../assets/skill-logos/autopsy-logo.png';
import reactlogo from '../assets/skill-logos/React-icon.svg.png';
import rora from '../assets/skill-logos/Ruby_On_Rails_Logo.svg.png';
import gitlogo from '../assets/skill-logos/Git-Icon-1788C.png';
import burplogo from '../assets/skill-logos/burpsuite-logo.svg';
import javasriptlogo from '../assets/skill-logos/js-logo.png';
import pythonlogo from '../assets/skill-logos/python-logo.png';
import sqllogo from '../assets/skill-logos/Sql_data_base_with_logo.png';
import nmaplogo from '../assets/skill-logos/logo-nmap.png';
import pfsenselogo from '../assets/skill-logos/pfsense-logo.png';
import mongodblogo from '../assets/skill-logos/mongoDB-logo.png';
import gns3logo from '../assets/skill-logos/gns-logo.png';


const sectors = [
  {
    name: 'Front-end Development',
    technologies: [
      { logo: reactlogo, description: 'React.js, HTML/CSS, TailwindCSS – used in MERN stack projects and web applications' },
      { logo: rora, description: 'Ruby on Rails – Used to build 2 tier MVC web application for university assignment.' },
      { logo: javasriptlogo, description: 'JavaScript/TypeScript – interactive dashboards, web applications' },
    ],
  },
  {
    name: 'Back-end Development',
    technologies: [
      { logo: nodejslogo, description: 'Node.js, Express – APIs for Portfolio, and other MERN stack projects' },
      { logo: pythonlogo, description: 'Python – automation scripts and CTF tools' },
      { logo: rora, description: 'Ruby on Rails – Used to build 2 tier MVC web application for university assignment.' },
      { logo: sqllogo, description: 'SQL/PostgreSQL – database management' },
      { logo: mongodblogo, description: 'MongoDB – NoSQL database management' },
    ],
  },
  {
    name: 'Web App Security',
    technologies: [
      { logo: burplogo, description: 'Burp Suite – penetration testing in CTFs' },
    ],
  },
  {
    name: 'Network Security',
    technologies: [
      { logo: nmaplogo, description: 'Nmap – network scanning & automation' },
      { logo: pfsenselogo, description: 'Firewalls – PfSense lab setup' },
    ],
  },
  {
    name: 'Forensics',
    technologies: [
      { logo: autopsylogo, description: 'Autopsy – disk & memory analysis used in university projects and CTFs' },
    ],
  },
  {
    name: 'Other Tools',
    technologies: [
      { logo: gitlogo, description: 'Git – version control for all projects' },
      { logo: gns3logo, description: 'GNS3 – network simulation' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg, 
              rgba(255,255,255,0.05) 0 2px, 
              transparent 2px 40px
            ),
            repeating-linear-gradient(
              90deg, 
              rgba(200,200,255,0.05) 0 2px, 
              transparent 2px 40px
            )
          `,
          maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
          zIndex: 0,
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.3)",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-32 left-10 w-64 h-64 rounded-full bg-cyan-400/30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-80 right-40 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This section is under development! These are the main areas I work on, with tools & technologies I use for each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center p-6 rounded-xl shadow-lg bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{sector.name}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {sector.technologies.map((tech, j) => (
                  <motion.div
                    key={j}
                    className="relative group"
                  >
                    <img
                      src={tech.logo}
                      alt={sector.name}
                      className="w-16 h-16 object-contain cursor-pointer"
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg p-2 text-sm shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-110%] transition-all duration-300 text-center w-44 pointer-events-auto">
                      {tech.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
