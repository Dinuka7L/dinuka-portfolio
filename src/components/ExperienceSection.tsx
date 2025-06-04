import React, { useState } from 'react';
import { Briefcase, Calendar, Building, ExternalLink } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  companyWebsite?: string;
};

const experienceData: Experience[] = [
  {
    title: 'Junior Cybersecurity Analyst',
    company: 'CryptoGen',
    location: 'Colombo, Sri Lanka',
    period: 'May 2025 - Present',
    description: [
      'Monitored network traffic for security threats and vulnerabilities',
      'Incident response and analysis of security breaches',
      'Familiar with cybersecurity tools such as SIEM, XDR, and EDR.',
      'Worked within the SOC team to enhance incident detection of major clients such as Banks and Public Companies .',
    ],
    technologies: ['SIEM', 'EDR', 'XDR', 'FortiSIEM', 'LogRythm', 'Security Operations Center (SOC)', 'Stellar XDR', 'Microsoft Sentinel'],
    companyWebsite: 'https://www.crypto-gen.com/'
  },
  {
    title: 'Vibe Coder',
    company: 'Me, myself and I',
    location: 'Galle, Sri Lanka',
    period: '2015 -  Present',
    description: [
      'This Portfolio is a showcase of my personal projects and coding journey. P.S. I made this portfolio with AI. Under an hour.',
      'Developed various web applications and tools to enhance my coding skills.',
      'I have developed custom scripts and applications to automate tasks and improve productivity for ex: Password Retrieval Malware using AutoIT, File Encryption and Decryption Tool using Python, etc.',
      'I usually work on personal projects to learn new technologies and improve my coding skills.',
      'Even though my domain is Cybersecurity, I have a passion for coding and enjoy creating software solutions.',
    ],
    technologies: ['Bolt AI', 'Python', 'AutoIT', 'MySQL', 'LLMs', 'GitHub'],
    companyWebsite: ''
  }
  
];

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey across various roles and companies, showcasing my growth and contributions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab navigation */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                {experienceData.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 transition-colors border-l-4 ${
                      activeIndex === index 
                        ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-600 dark:border-blue-400' 
                        : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">{exp.title}</div>
                    <div className="text-blue-600 dark:text-blue-400">{exp.company}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab content */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8 transition-all duration-300 transform hover:shadow-lg">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experienceData[activeIndex].title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                      <Building size={18} className="mr-2" />
                      <span className="font-medium">{experienceData[activeIndex].company}</span>
                      {experienceData[activeIndex].companyWebsite && (
                        <a 
                          href={experienceData[activeIndex].companyWebsite} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center hover:underline"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{experienceData[activeIndex].period}</span>
                      </div>
                      <div>
                        {experienceData[activeIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    {experienceData[activeIndex].description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[activeIndex].technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;