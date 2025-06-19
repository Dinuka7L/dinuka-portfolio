import React from 'react';
import { ArrowDown } from 'lucide-react';
import TypewriterWithScramble from './TypewriterWithScramble';
import resumePDF from '../assets/dinuka_liyanage_resume.pdf';
import myfromalpicture from '../assets/Photo-Dinuka Liyanage-Formal.jpg';
import { FlipWords } from "../ui/flip-words";
import { MovingBorderImage  } from "../ui/moving-border";
const flipWords1 = ["Cybersecurity", "Accounting & Finance", "Network Administration", "Software Development", "Workflow Automation", " Business Management", "Web Development"];
import CountUp from '../ui/count-up'


const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 lg:order-1 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">
                <TypewriterWithScramble text="Dinuka Liyanage" typeSpeed={50} deleteSpeed={30} pauseTime={4000} />

              </span>

            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              I specialize in<FlipWords words={flipWords1} />
            </h2>


            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Welcome to my portfolio! I'm a passionate undergraduate with a goal of reaching information security & management fields. 
              With a strong academic background and professional experience, I'm learning and implementing robust cybersecurity solutions. I'm dedicated to creating a safer digital space to live in, through information security.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
              >
                Contact Me
              </button>
            </div>  
            <div className="hero-buttons">
              <a
                href={resumePDF}
                download
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Download My Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            
            <MovingBorderImage
  src={myfromalpicture} alt="https://avatars.githubusercontent.com/u/179111403?v=4"
  size={320}
  imageSize={280}
  borderWidth={1}
  duration={4000}
  className="shadow-xl border-4 border-white dark:border-gray-800"
/>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('qualifications')}
            className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;