import React from 'react';
import { motion } from 'motion/react';
import { AuroraBackground } from '../ui/aurora-background';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SentraFusion1 from '../assets/SF-Dashboard.png';
import SentraFusion2 from '../assets/SF-Dashboard-Ai-Chat.png';
import SentraFusion3 from '../assets/SF-Dashboard-Analytics.png';
import SentraFusion4 from '../assets/SF-Dashboard-Incidents.png';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import CountUp from '../ui/count-up';

const shineAnimation = `
  @keyframes shine {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: -100%;
    }
  }
`;

// Inject into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = shineAnimation;
  document.head.appendChild(style);
}

const ProjectSentraFusionPage: React.FC = () => {
  return (
    <main className="text-gray-900 dark:text-white bg-gray-900">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 py-20"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center relative inline-block"
            style={{
              background:
                'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255, 255, 255, 0.91) 60%, rgba(255,255,255,0) 70%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: '#b5b5b5a4',
              animation: 'shine 5s linear infinite',
            }}
          >
            SentraFusion SOC Suite
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8 text-gray-300">
            Revolutionizing Security Operations with AI-driven Automation & Reporting.
          </p>
        </motion.div>
      </AuroraBackground>

      <section
        className="py-16 container mx-auto px-4 relative overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 2px), ' +
            'linear-gradient(to left, #1a1a1a, #2d2d2d, #7f1d1d, #2d2d2d, #1a1a1a)',
          backgroundSize: '80px 80px, 100% 100%',
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Application Screenshots</h2>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          centeredSlides
          className="w-full max-w-6xl mx-auto rounded-lg shadow-xl"
        >
          {[SentraFusion1, SentraFusion2, SentraFusion3, SentraFusion4].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`SentraFusion Screenshot ${idx + 1}`}
                className="rounded-lg w-full max-h-[600px] object-contain transition-transform duration-500 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <a
            href="https://dinuka7l.github.io/sentrafusion-soc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
          >
            See Live Demo
          </a>
        </div>
      </section>

      <section
        className="py-20 container mx-auto px-4 text-center text-white"
        style={{
          background:
            'linear-gradient(to left, #7f1d1d, #1a1a1a,rgb(40, 39, 39),rgb(35, 35, 35),rgb(24, 24, 24))',
        }}
      >
        <h2 className="text-3xl font-bold mb-12">Impact & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-4xl font-semibold">
          <div>
            <CountUp from={0} to={75} separator="," direction="up" duration={1} />
            %<p className="text-lg mt-2">Reduction in Manual Reporting</p>
          </div>
          <div>
            50+<p className="text-lg mt-2">Playbook Automations</p>
          </div>
          <div>
            99.9%<p className="text-lg mt-2">Operational Accuracy Boost</p>
          </div>
        </div>
      </section>

      <section
        className="py-20 container mx-auto px-4 text-white"
        style={{
          background:
            'linear-gradient(to left, #1a1a1a, #2d2d2d, #2d2d2d, #1a1a1a, #7f1d1d)',
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
        <div className="max-w-4xl mx-auto text-lg space-y-6">
          <p>
            <b>Why SentraFusion?</b>
            <br />
            SOC environments needed one unified, smart platform to reduce false positives, enhance reporting & automation. SentraFusion meets that need perfectly.
          </p>
          <p>
            <b>Technical Highlights:</b>
            <br />
            Built with React + Vite, TailwindCSS, API-ready for SIEM integrations, RAG AI engine for analyst decision support.
          </p>
        </div>
      </section>

      <section
        className="py-20 container mx-auto px-4 text-center text-white"
        style={{
          background:
            'linear-gradient(to left, #7f1d1d, #1a1a1a, #2d2d2d, #2d2d2d, #1a1a1a)',
        }}
      >
        <h2 className="text-3xl font-bold mb-12">Technologies Used</h2>
        <div className="flex justify-center gap-16 text-6xl">
          <FaReact title="React" className="text-blue-500" />
          <SiTailwindcss title="TailwindCSS" className="text-cyan-400" />
          <SiVite title="Vite" className="text-purple-500" />
          <FaNodeJs title="Node.js" className="text-green-500" />
        </div>
      </section>

      <section
        className="min-h-[40vh] py-20 container mx-auto px-4 text-center text-white"
        style={{
          background:
            'linear-gradient(to left, #1a1a1a, #2d2d2d, #2d2d2d, #1a1a1a, #7f1d1d)',
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Want to learn more or collaborate on SOC innovation? Contact me below.</p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
};

export default ProjectSentraFusionPage;
