import React, { useEffect, useRef, useState } from 'react';
import {
  Code,
  Server,
  Network,
  Database,
  Globe,
  Lightbulb
} from 'lucide-react';

const skillsData = [
  {
    name: 'Frontend Development',
    icon: <Code size={24} />,
    skills: [
      { name: 'HTML5/CSS3', level: 9 },
      { name: 'JavaScript', level: 9 },
      { name: 'React.js', level: 8 },
      { name: 'TypeScript', level: 7 },
      { name: 'Vue.js', level: 6 }
    ]
  },
  {
    name: 'Software Development',
    icon: <Server size={24} />,
    skills: [
      { name: 'Python', level: 8 },
      { name: 'Node.js', level: 7 },
      { name: 'Bash', level: 6 },
      { name: 'Ruby (Rails)', level: 5 },
      { name: 'R', level: 4 }
    ]
  },
  {
    name: 'Network Security',
    icon: <Network size={24} />,
    skills: [
      { name: 'IDS', level: 7 },
      { name: 'Routing, Switching & Network Device Configuration', level: 8 },
      { name: 'Network Design and Architecture', level: 9 },
      { name: 'Firewalls (PfSense)', level: 6 },
      { name: 'SIEM (Splunk, FortiSIEM)', level: 5 }
    ]
  },
  {
    name: 'Database',
    icon: <Database size={24} />,
    skills: [
      { name: 'MongoDB', level: 8 },
      { name: 'PostgreSQL', level: 7 },
      { name: 'MySQL', level: 8 },
      { name: 'Redis', level: 6 },
      { name: 'SQLite', level: 7 }
    ]
  },
  {
    name: 'DevOps',
    icon: <Globe size={24} />,
    skills: [
      { name: 'Docker', level: 7 },
      { name: 'AWS', level: 6 },
      { name: 'CI/CD', level: 7 },
      { name: 'Kubernetes', level: 5 },
      { name: 'Linux', level: 8 }
    ]
  },
  {
    name: 'Other Skills',
    icon: <Lightbulb size={24} />,
    skills: [
      { name: 'Git', level: 9 },
      { name: 'Agile/Scrum', level: 8 },
      { name: 'RESTful APIs', level: 9 },
      { name: 'GraphQL', level: 7 },
      { name: 'Problem Solving', level: 9 }
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level * 10}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level * 10}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;