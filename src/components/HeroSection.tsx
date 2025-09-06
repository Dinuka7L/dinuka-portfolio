import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Rss } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterWithScramble from "./TypewriterWithScramble";
import resumePDF from "../assets/dinuka_liyanage_resume.pdf";
import myfromalpicture from "../assets/Photo-Dinuka Liyanage-Formal.jpg";
import { FlipWords } from "../ui/flip-words";
import { MovingBorderImage } from "../ui/moving-border";
import { CirclingGradientStroke } from "../ui/circling-gradient-stroke";

const flipWords1 = [
  "Information Security",
  "Accounting & Finance",
  "Computer Network & Architecture",
  "Software Development",
  "Workflow Automation",
  " Business Management",
  "Web Application Development",
  "AI-Agent Development",
];

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax mappings
  const textY = useTransform(scrollY, [0, 500], [0, -100]); // text moves slower upwards
  const imageY = useTransform(scrollY, [0, 500], [0, 60]); // image moves slightly down
  const strokeRotate = useTransform(scrollY, [0, 1000], [0, 360]); // rotate stroke on scroll

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text with parallax */}
          <motion.div
            className="order-2 lg:order-1"
            style={{ y: textY }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                <TypewriterWithScramble
                  text="Dinuka Liyanage"
                  typeSpeed={100}
                  deleteSpeed={60}
                  pauseTime={6000}
                />
              </span>
            </h1>

           <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-100">
              I specialize in{" "}
              <span className="inline-block min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
                <FlipWords words={flipWords1} />
              </span>
            </h2>

            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Built to do the impossible, the unthinkable and make impact
              through solving problems using IT <br />
              <br />
              I solve problems that I face, on the go and share it with the
              world. My passion lies in creating solutions and leading projects.
              My core values are helping those who need it and learn from what I
              need improving. Armed with a strong academic backbone, real-world
              experience, and a restless urge to question everything, I'm
              constantly learning, sharpening, testing, shaping cybersecurity
              solutions that make the digital world not just safer but better.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("PersonalProjects")}
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
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

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/Dinuka7L"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/dinuka-liyanage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:dinuka.liyanage7@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
              >
                <Mail size={28} />
              </a>
               <a
                href="https://medium.com/@dinoo.walker7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
              >
                <Rss size={28} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image with parallax */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            style={{ y: imageY }}
          >
            <div className="relative">
              <motion.div style={{ rotate: strokeRotate }}>
                {/* <CirclingGradientStroke
                  size={400}
                  strokeWidth={4}
                  duration={17}
                  colors={["#3b82f6", "#8b5cf6", "#ef4444", "#10b981"]}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  opacity={0.8}
                /> */}
              </motion.div>

              <MovingBorderImage
                src={myfromalpicture}
                alt="Dinuka Liyanage Profile"
                size={320}
                imageSize={280}
                borderWidth={1}
                duration={4000}
                className="shadow-xl border-4 border-white dark:border-gray-800 relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("qualifications")}
            className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown
              size={24}
              className="text-gray-700 dark:text-gray-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
