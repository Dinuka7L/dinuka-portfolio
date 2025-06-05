import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Portfolio Cryptosystem',
    description: "A complete cryptosystem which consists of symmetric and asymmetric ciphers, hashing, and digital signatures.",
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Python', 'RSA', 'Hashing', 'Ditial-Signature', 'Cryptography', 'Ciphers', 'Cybersecurity'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Penetration Test on a Simulated Scenario',
    description: 'A full black-box penetration test on a simulated scenario, including vulnerability scanning, exploitation, and reporting.',
    image: 'https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877153.jpg?semt=ais_items_boosted&w=740',
    tags: ['Ethical Hacking', 'Kali Linux', 'Penetration Testing', 'Burp Suite', 'Metasploit', 'Offensive Security', 'Cybersecurity'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Computer Forensics Investigation',
    description: 'A computer forensics investigation project that involved analyzing digital evidence, recovering deleted files, and reporting evidence.',
    image: 'https://media.istockphoto.com/id/1178589003/photo/forensic-science-technician-analyzing-evidence-in-laboratory.jpg?s=612x612&w=0&k=20&c=U6MvdpuGTKCs_8EkB_pvsGPxDuL-_EKG-btS_uEQY00=',
    tags: ['Computer Forensics', 'Autopsy', 'OSForensics', 'Digital Evidence', 'Data Recovery', 'Cybersecurity'],	
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 4,
    title: 'Malware Reversing and Analysis',
    description: 'A complete malware reversing and analysis project that involved static and dynamic analysis, reverse engineering, and reporting on a Banking Trojan.',
    image: 'https://plus.unsplash.com/premium_photo-1714618835760-5b2175ad3249?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsd2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['IDA Pro', 'Malware Analysis', 'Reverse Engineering', 'Banking Trojan', 'Cybersecurity'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 5,
    title: 'IoT Attack Simulation',
    description: 'Exploitation of vulnerabilities associated with MQTT Protocol and conducting FDI (False Data Injection) attacks on IoT device.',
    image: 'https://static.vecteezy.com/system/resources/previews/023/754/401/non_2x/abstract-iot-internet-of-things-blue-background-image-circle-world-digital-network-concept-connected-to-the-internet-or-m2m-machine-to-machine-industrial-iot-commercial-iot-vector.jpg',
    tags: ['IoT', 'MQTT', 'Cybersecurity', 'False Data Injection', 'Network Security', 'Intrusion Detection', 'Ethical Hacking'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 6,
    title: 'Honeypot Deployment and Analysis',
    description: 'Deployment of a honeypot to capture and analyze malicious activities, including data collection and threat intelligence.',
    image: 'https://cdn.prod.website-files.com/667dd40ebb8095e89f27565d/667dd40ebb8095e89f27630a_blog_honepots.png',
    tags: ['Honeypot', 'Cowrie', 'Snort', 'Cybersecurity', 'Threat Intelligence', 'Network Security'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 7,
    title: 'Bash Scripting and Automation',
    description: 'A collection of Bash scripts for automating various tasks, including system monitoring, file management, and network operations.',
    image: 'https://c4.wallpaperflare.com/wallpaper/396/50/367/linux-command-lines-unix-bash-grey-hd-wallpaper-thumb.jpg',
    tags: ['Bash', 'Scripting', 'Automation', 'Linux', 'System Administration', 'Cybersecurity'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 8,
    title: 'SIEM Implementation and Detection',
    description: 'Implementation of a Splunk Security Information and Event Management (SIEM) system to monitor, detect incidents using Dashboards.',
    image: 'https://images.squarespace-cdn.com/content/v1/52a2252ee4b0942951931788/1579911162482-VZHHR55LOOJ4KE92ON8M/splunk-d2e-it-codesign2019.png',
    tags: ['SIEM', 'Splunk', 'Cybersecurity', 'Incident Detection', 'Log Management'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
    {
    id: 9,
    title: 'Database Design and Implementation',
    description: 'Design and implementation of a relational database system using MySQL, including schema design, normalization, and query optimization.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20220712/pngtree-database-concept-database-on-digital-background-information-copy-base-photo-image_25012500.jpg',
    tags: ['MySQL', 'Database Design', 'SQL', 'Data Management', 'Relational Database', 'Database'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get all unique tags
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  // Filter projects based on current filter
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My University Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the projects that I have worked on during my university studies. They showcase my skills in various programming languages and technologies. Each project has been a learning experience, allowing me to apply theoretical knowledge to practical applications.
            Feel free to explore the projects, check out the source code, and see the live demos where available. Your feedback is always welcome!
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:underline"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;