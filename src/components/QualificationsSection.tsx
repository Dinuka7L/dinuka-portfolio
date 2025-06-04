import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

type Education = {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  logo: string; // Added logo property
};

const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Cybersecurity',
    institution: 'Edith Cowan University',
    location: 'Perth, Australia',
    year: '2022 - Present',
    description: 'Currently pursuing a degree in Cybersecurity with a focus on network security and ethical hacking. Engaged in various projects related to cybersecurity threats and defenses.',
    logo:'https://www.ecu.edu.au/__data/assets/image/0004/1100389/ecu-logo.png'
  },
  {
    degree: 'Bachelor of Science in Accounting and Finance',
    institution: 'University of Sri Jayewardenepura',
    location: 'Colombo, Sri Lanka',
    year: '2025 - Present',
    description: 'Currently pursuing a degree in Accounting and Finance. Gaining knowledge in financial analysis, accounting principles, and investment strategies.',
    logo: 'https://www.sjp.ac.lk/wp-content/uploads/2020/10/usjp-logo-500x500.png'
  },
  {
    degree: 'G.C.E. Advanced Level ',
    institution: 'Richmond College',
    location: 'Galle, Sri Lanka',
    year: '2010 - 2023',
    description: 'Completed GCE Advanced Level Examination with a focus on Commerce stream. Developed strong analytical and problem-solving skills through rigorous coursework in Accounting, Economics and IT subjects.',
    logo: 'http://www.richmondcollege.lk/wp-content/uploads/2022/10/crest-copy.png'
  }
];

const QualificationsSection: React.FC = () => {
  return (
    <section 
      id="qualifications" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Qualifications & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey that has equipped me with the knowledge and skills necessary for success in my field.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Timeline items */}
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto' : 'md:pl-8 md:mr-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:left-auto md:-right-3' : 'left-0 md:-left-3'
                } w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900`}></div>
                
                <div className={`
                  relative ml-8 md:ml-0 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md
                  transform transition-transform duration-300 hover:scale-105
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                `}>
                  <div className="flex items-center mb-3">
                    {/* <GraduationCap size={20} className="text-blue-600 dark:text-blue-400 mr-2" /> */}
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      className="w-12 h-12 mr-3 object-contain"
                    />
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{item.degree}</h3>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{item.institution}</h4>
                  
                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.year}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;