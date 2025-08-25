import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "../ui/split-text";

type Education = {
  degree: string;
  institutionName: string;
  institutionUrl: string;
  location: string;
  year: string;
  description: string;
  grade?: string;
  logo: string;
  gradientColors?: string[];
};

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Cybersecurity",
    institutionName: "Edith Cowan University",
    institutionUrl: "https://www.ecu.edu.au/",
    location: "Perth, Australia",
    year: "2022 - Present",
    description:
      "Final year undergrad in Cybersecurity with a focus on mastering skills on offensive and defensive security. Shaped by practical experiences and real-world applications.",
    grade: "GPA: 3.54/4.0",
    logo: "https://www.ecu.edu.au/__data/assets/image/0004/1100389/ecu-logo.png",
    gradientColors: ["#00ffc9", "#2563eb", "#1e3a8a", "#4b00b4"],
  },
  {
    degree: "Bachelor of Science in Accounting and Finance",
    institutionName: "University of Sri Jayewardenepura",
    institutionUrl: "https://www.sjp.ac.lk/",
    location: "Colombo, Sri Lanka",
    year: "2025 - Present",
    description:
      "Currently pursuing a degree in Accounting and Finance, sharpening my mind to deal with financial systems, accounting principles, and strategic management.",
    logo: "https://www.sjp.ac.lk/wp-content/uploads/2020/10/usjp-logo-500x500.png",
    gradientColors: ["#aa1900", "#e20000", "#ffb700", "#e9ad21"],
  },
  {
    degree: "G.C.E. Advanced Level",
    institutionName: "Richmond College",
    institutionUrl: "http://www.richmondcollege.lk/",
    location: "Galle, Sri Lanka",
    year: "2010 - 2023",
    description:
      "Completed GCE Advanced Level Examination in Commerce stream with strong skills in Accounting, Economics and IT.",
    grade: "Grade: 3As, Z-Score: 2.5195",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XZ90ziCThbeUT99sTHp_aamMBPSSncEmcg&s",
    gradientColors: ["#00b4d8", "#0085fe", "#c30025"],
  },
];

const QualificationsSection: React.FC = () => {
  const { scrollY } = useScroll();

  // subtle parallax on timeline line
  const lineY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section id="qualifications" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* floating blurred blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/30 blur-3xl"
        style={{ y: useTransform(scrollY, [0, 500], [0, 120]) }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <SplitText
              text="My Education"
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
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-prose mx-auto px-4">
            My education has been a journey of figuring things out by myself,
            making mistakes, and pushing through even when things felt
            uncertain. I didn’t just follow a traditional straight path. I
            explored, questioned, and I found what really drives me.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-800 dark:from-blue-800 dark:to-blue-400 rounded-full"
            style={{ y: lineY }}
          />

          {/* Items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right md:ml-auto"
                  : "md:pl-8 md:mr-auto"
              } md:w-1/2`}
            >
              {/* Card with frosted-glass effect */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? -1 : 1 }}
                className="rounded-xl p-[2px] bg-gradient-to-r shadow-xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${
                    (item.gradientColors ?? ["#2563eb", "#1e3a8a"]).join(", ")
                  })`,
                }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 h-full w-full">
                  <div className="flex items-center mb-3">
                    <img
                      src={item.logo}
                      alt={`${item.institutionName} logo`}
                      className="w-12 h-12 mr-3 object-contain"
                    />
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                      {item.degree}
                    </h3>
                  </div>

                  <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
                    <a
                      href={item.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.institutionName}
                    </a>
                  </h4>

                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>

                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.year}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {item.description}
                  </p>

                  {item.grade && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {item.grade}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
