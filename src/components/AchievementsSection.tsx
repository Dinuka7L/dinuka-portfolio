import React from "react";
import { Trophy, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../ui/split-text";
import ctf2025 from "../assets/Sliit-codefest-ctf-2025.png";

// --- Data Types ---
type Achievement = {
  title: string;
  issuer: string;
  issuerUrl?: string;
  location?: string;
  year: string;
  description: string;
  logo?: string;
  gradientColors?: string[];
};

// --- Achievements Data ---
const achievementsData: Achievement[] = [
  {
    title: "1st Runners-up CodeFest CTF 2025",
    issuer: "CodeFest 2025 Capture the Flag by SLIIT",
    issuerUrl: "https://codefest.lk/capture-the-flag/",
    location: "Sri Lanka Institute of Information Technology, Sri Lanka",
    year: "2025",
    description:
      "Competed against 48 university teams nationwide in a 7-hour intense cybersecurity challenge and secured 2nd place. Challenges designed by KPMG Sri Lanka. Contributed 340 points to the team's total of 620 points.",
    logo: ctf2025,
    gradientColors: ["#eb5802", "#042485", "#8000ff"],
  },
  {
    title: "Island 7th, Galle District 1st - A/L Commerce",
    issuer: "Richmond College",
    issuerUrl: "http://www.richmondcollege.lk/",
    year: "2023",
    description:
      "Achieved a notable place in the G.C.E. Advanced Level Examination in Commerce stream, excelling in Accounting, Economics, and IT among 50,000+ candidates reaching top 0.01%.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XZ90ziCThbeUT99sTHp_aamMBPSSncEmcg&s",
    gradientColors: ["#ab0014", "#010966", "#0080ab"],
  },
  
];

// --- Component ---
const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
    // subtle 3D effect: darker edges for sinkhole look
    boxShadow: "inset 0 0 200px rgba(0,0,0,0.3)",
  }}
/>

      {/* Floating blobs for aesthetics */}
      <motion.div
        className="absolute top-32 left-10 w-64 h-64 rounded-full bg-cyan-400/30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <SplitText
              text="My Achievements"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-prose mx-auto px-4">
            A showcase of milestones I’ve been proud to achieve. From intense competitions
            and hackathons to academic recognition. Each of these pushed me to grow and
            prove my skills in real-world challenges.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.08 }}
              className="rounded-xl p-[2px] bg-gradient-to-r shadow-xl"
              style={{
                backgroundImage: `linear-gradient(155deg, ${(item.gradientColors ?? ["#2563eb", "#1e3a8a"]).join(", ")})`,
              }}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 h-full w-full transition-transform duration-300 ease-out">
                <div className="flex items-center mb-3">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.issuer} logo`} className="w-12 h-12 mr-3 object-contain" />
                  ) : (
                    <Trophy className="w-10 h-10 mr-3 text-yellow-500" />
                  )}
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{item.title}</h3>
                </div>

                <h4 className="text-lg font-medium mb-2 text-cyan-600 dark:text-cyan-400">
                  {item.issuerUrl ? (
                    <a href={item.issuerUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.issuer}
                    </a>
                  ) : (
                    item.issuer
                  )}
                </h4>

                {item.location && (
                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                )}

                <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} className="mr-1" />
                  <span>{item.year}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default AchievementsSection;