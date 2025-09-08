"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import SentraFusionDashboardSS from '../assets/SF-Dashboard.png';
import CountUp from '../ui/count-up'
import { Link } from 'react-router-dom';
import wraith_bg from '../assets/wraith_ghost_gen.png';
import DogGenAPI from '../assets/DogGenAPI.png';
import AcademiaSS1 from '../assets/Academia-SS-1.png';
import DNotesImage1 from "../assets/DNotes-1.png";
import MERNAuthSS1 from "../assets/MERN-Auth-SS-1.png"

function MyProjectsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setActive(false);
    }
  }

  if (active && typeof active === "object") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  window.addEventListener("keydown", onKeyDown);
  return () => {
    window.removeEventListener("keydown", onKeyDown);
    document.body.style.overflow = "auto"; // ✅ Fix: Ensure scroll resets when component unmounts
  };
}, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (

    
    <section id="PersonalProjects" className="py-20 bg-white dark:bg-gray-900">
    <>
    
      <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Personal Projects
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                 <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              I have built over <CountUp
                              from={0}
                              to={12}
                              separator=","
                              direction="up"
                              duration={0.5}
                              className="count-up-text"
                            />&nbsp;pretty interesting projects and counting! More updates on the way!
                </h2>
              </div>
      </div>
      <AnimatePresence> 
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"

            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active && typeof active.title === "string" && active.title === "SentraFusion" ? (
                    <Link
                      to="/sentrafusion"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </Link>
                  ) : active && typeof active.title === "string" && active.title === "Wraith" ? (
                    <Link
                      to="/project-wraith"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </Link>
                  ) : active && typeof active.title === "string" && active.title === "DNotes" ? (
                    <Link
                      to="/dnotes"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </Link>
                  ) : active && typeof active.title === "string" && active.title === "MERN-Auth" ? (
                    <Link
                      to="/mern-auth"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </Link>
                  ): (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                <div className="pt-4 relative px-4 flex-1 overflow-hidden">
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base overflow-auto max-h-[300px] pr-2 pb-16 dark:text-neutral-400
                                [mask-image:linear-gradient(to_bottom,white_70%,transparent)]"
                    >
                        {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                src={card.src}
                alt={card.title}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
            <div className="p-4 space-y-2 text-center">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-sm"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
       
    </>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Next-Gen SOC Management Platform",
    title: "SentraFusion",
    src: SentraFusionDashboardSS,
    ctaText: "See Project",
    ctaLink: "/dinuka-portfolio/sentrafusion",
    content: () => {
      return (
        <p>
          <b>SOC RAG Assistant – AI-Powered Security Operations Companion</b><br /><br />
          The <b>SOC RAG Assistant</b> is an innovative Retrieval-Augmented Generation (RAG) based web application designed to revolutionize how Security Operations Center (SOC) analysts investigate, escalate, and manage cyber incidents. Built using <b>React + Vite</b> for the front-end and easily integrable with any backend, this platform acts as an intelligent AI companion for analysts working with SIEM alerts, threat hunting, and incident response.<br /><br />

          <b>Key Capabilities:</b><br />
          - <b>Intelligent Alert Investigation:</b> <br />
          AI-driven insights based on live knowledge bases, playbooks, and MITRE ATT&CK mappings to guide triage, escalation, and threat verification.<br /><br />

          - <b>Shift Summary Automation:</b> <br />
          Auto-generated shift handover summaries capturing open incidents, newly observed IoCs, pending actions, and critical updates—ensuring smooth transitions across analyst shifts.<br /><br />

          - <b>Ticket and Case Management:</b> <br />
          Centralized interface to view, escalate, and track incident tickets with historical context, supporting faster response and audit readiness.<br /><br />

          - <b>Dynamic Knowledge Management:</b> <br />
          Seamless integration with knowledge sources like playbooks, open cases (e.g., Google Sheets, Discord threads), ensuring up-to-date operational intelligence.<br /><br />

          - <b>Custom Workspaces & Chat Interface:</b> <br />
          Personalized, secure workspaces and AI chat environments tailored for individual analysts or teams, reducing context-switching and confusion.<br /><br />

          <b>How It Helps SOC Teams:</b><br />
          - Boosts analyst efficiency in triaging complex SIEM alerts.<br />
          - Reduces investigation time with contextual threat enrichment and IOC lookups.<br />
          - Improves shift communication and knowledge retention via structured summaries.<br />
          - Enhances overall SOC maturity by automating repetitive decision support tasks.<br />

        </p>
      );
    },
  },
  {
    description: "A Web Application Authentication System",
    title: "MERN-Auth",
    src: MERNAuthSS1,
    ctaText: "See Project",
    ctaLink: "/dinuka-portfolio/mern-auth",
    content: () => {
      return ( <p>
        <b>MERN Authentication System </b><br /><br />
          The <b>D Auth</b> project is a full-stack authentication system I built using the <b>MERN stack (MongoDB, Express, React, Node.js)</b>. It focuses on secure user management with modern security practices like <b>Multi-Factor Authentication (MFA)</b>, <b>Email Verification</b>, <b>Password Reset with Strength Meter</b>, and <b>JWT-based authentication</b>, all while delivering a clean, responsive UI built with <b>Tailwind CSS</b>.<br /><br />

          <b>Key Capabilities:</b><br />
          <b>End-to-End Authentication Flow:</b>

          <p>From <b>user registration</b> to <b>profile management</b>, the system covers all essential authentication steps, ensuring a smooth and secure login experience. Protected routes enforce strong access control at both frontend and backend levels.</p><br />

          <b>Multi-Factor Authentication (MFA):</b>

          <p>Integrated using <b>Speakeasy</b> and <b>QR code generation</b>, MFA provides an additional security layer, demonstrating real-world enterprise-level practices.</p><br />

          <b>Email-Based Security:</b>

          <p>Users verify their accounts and reset passwords through secure, tokenized email links. Email templates are customizable, making the system adaptable for production-ready deployments.</p><br />

          <b>Modern UI/UX with React + Tailwind:</b>

          <p>A fully responsive interface designed with Tailwind CSS and React components, ensuring accessibility and usability across devices. Profile picture upload and interactive password strength indicators improve user experience.</p><br />

          <b>Technical Highlights:</b>

          <p>The backend is structured with <b>modular controllers, routes, middleware, and utilities</b>, enforcing clean architecture and maintainability. Passwords are hashed with <b>bcrypt</b>, and authentication is secured using <b>JWTs</b> with middleware-based validation. On the frontend, <b>Zustand</b> is used for global state management, and Vite ensures a fast development workflow.</p><br />

          <b>Learning Outcomes as a Developer:</b><br />

          <p>Through this project, I deepened my knowledge in:<br /> - Implementing <b>secure authentication workflows</b> with real-world practices like MFA and JWT.<br /> - Applying <b>best practices in backend security</b>, including password hashing, token-based sessions, and middleware authorization.<br /> - Designing <b>scalable project structures</b> for large applications using clear separation of concerns.<br /> - Enhancing frontend development skills with <b>state management, responsive design, and UX best practices</b>.<br /> - Configuring <b>environment variables</b> and deployment setups that mimic production-ready environments.<br /></p><br />

          </p>
      );
    },
  },
  {
    description: "Single-Page Application Quiz Platform for batchmates",
    title: "Academia",
    src: AcademiaSS1,
    ctaText: "Try it out",
    ctaLink: "https://usj-fmsc-lms-quiz.vercel.app/",
    content: () => {
      return (
        <p>
          <b>The Academia Quiz LMS Platform Help Students Face Exam with more confidence and readiness</b><br /><br />
          The <b>Academia</b> is a Single-Page Application(all data and content processed on client-side) LMS web application I built to help my peer fellow students prepare for their 1st Year ITC-Exam in the Management Program at FMSC of USJ<br />
          <br /><b>Stats and Analytics</b>
          <br />Within the first 3 days of launch the LMS got close to 600 New Users with 23,000  Edge Requests (1st Week of deployment) reported by Vercel and google analytics. The LMS is still in its early stages, but the initial response has been overwhelmingly positive, with users praising its user-friendly interface and effective learning tools.
          <br /><br /><b>Key Capabilities:</b><br />
          <b>Real Exam Feels, Without the Pressure:</b>
          <p>I created an enviorment to simulate<b>exam-based quizzes</b> that mimics the real exam. So it isn't just about memorizing; it's about getting comfortable with the exam format, managing your time, and building that crucial exam-day stamina.</p><br />
          
          <b>Mastering One Concept at a Time:</b>
          <p>Sometimes you just need to drill down on a specific topic. That's where our <b>lesson-focused quizzes</b> come in. They let you dive deep into particular lessons, ensuring you grasp every concept before moving on.</p><br />
          
          <b>More Than Just Multiple Choice:</b>
          <p>We know learning isn't one-size-fits-all. That's why Academia supports a <b>vast array of question types</b>. This keeps things engaging and truly tests your understanding, not just your ability to pick A, B, or C.</p><br />
          <p><b> Build & Technical Highlights</b>
            <br />This SPA Application quiz platform was architected to run entirely client-side, leveraging React with Vite for lightning-fast development and performance. I managed state using Zustand, combined with localStorage to persist user progress seamlessly across page reloads and even browser restarts—without any backend or server dependencies.
            <br /><br />To deliver a smooth, realistic quiz experience, I implemented an efficient question randomization system using the Fisher-Yates shuffle algorithm, ensuring each attempt feels fresh and unpredictable.
            <br /><br />Answer evaluation goes beyond exact matches—I incorporated a robust fuzzy matching approach based on Levenshtein distance to gracefully handle typos and minor answer variations, especially for fill-in-the-blank and essay responses.
            <br /><br />Finally, I deployed the entire application on Vercel, providing a globally distributed, fast, and scalable hosting environment with zero server management, keeping the app always available and lightning quick for users.</p>
            
          </p>
      );
    },
  },
  {
    description: "Full Stack Note-Taking App",
    title: "DNotes",
    src: DNotesImage1,
    ctaText: "See Project",
    ctaLink: "/dinuka-portfolio/dnotes",
    content: () => {
      return (
        <p>
          <b>DNotes – Fullstack MERN Notes App with Rate Limiting and Clean UI</b><br /><br />
          <b>DNotes</b> is a modern, fullstack MERN (MongoDB, Express.js, React, Node.js) web application designed to help users create and manage notes seamlessly. Built using <b>React + Vite</b> for the frontend and <b>Express.js + MongoDB</b> for the backend, the app demonstrates key architectural patterns in fullstack development, including API design, state management, rate-limiting, and production deployment practices.<br /><br />

          <b>Key Features:</b><br />
          - <b>Note Creation & Management:</b><br />
          Users can add, view, and delete notes through an intuitive interface. The backend uses MongoDB and Mongoose to store note data in a structured format, supporting rapid data retrieval and scalability.<br /><br />

          - <b>Rate-Limited API with Upstash Redis:</b><br />
          A custom Express middleware powered by <b>Upstash Redis</b> restricts excessive API usage to ensure backend stability and prevent abuse. Each request is evaluated based on IP using a token bucket algorithm with configurable limits.<br /><br />

          - <b>Clean and Responsive Frontend UI:</b><br />
          The React-based UI leverages modern component-based architecture with <b>React Router</b> for SPA navigation. Users can switch between pages like "All Notes" and "Create Note" smoothly, with real-time feedback on actions.<br /><br />

          - <b>Axios Integration:</b><br />
          Frontend API interactions are powered by a reusable <code>axios.js</code> wrapper to handle requests and errors uniformly. This centralization improves maintainability and simplifies debugging.<br /><br />

          - <b>Environment-Aware Deployment:</b><br />
          In <code>development</code> mode, the backend and frontend run independently for faster iteration. In <code>production</code>, the backend serves the built frontend from <code>front-end/dist</code>, enabling single-host deployment using platforms like Vercel or Render.<br /><br />

          - <b>Navigation via React Router:</b><br />
          The app uses <code>&lt;Routes&gt;</code> and <code>&lt;Link&gt;</code> components to handle routing between views. Dynamic and static paths are supported to allow a flexible navigation structure.<br /><br />

          - <b>Custom Logging & Middleware:</b><br />
          Requests are logged with method and path for debugging. Express middlewares are layered for parsing JSON, handling CORS (in dev), and enforcing rate limits.<br /><br />

          <b>Project Structure:</b><br />
          - <b>Back-End:</b> Organized into <code>controllers</code>, <code>routes</code>, <code>models</code>, and <code>middleware</code> folders. MongoDB is connected via Mongoose using environment variables stored in <code>.env</code>.<br />
          - <b>Front-End:</b> Built with Vite and React, includes <code>components</code> for UI, <code>lib</code> for utilities like Axios config, and <code>pages</code> for views. Styles are defined in <code>index.css</code> for global control.<br /><br />

          <b>How It Showcases MERN Stack Mastery:</b><br />
          - Demonstrates complete backend setup including database, routes, middleware, and controllers.<br />
          - Shows understanding of async handling, CORS, and environment configuration.<br />
          - Implements frontend API interaction with modular Axios and router-based navigation.<br />
          - Includes practical rate-limiting using Redis and production-grade serving logic.<br /><br />

          <b>Directory Overview:</b><br />
          <code>
            DNotes<br />
            ├── back-end<br />
            │   ├── src<br />
            │   │   ├── config → MongoDB and Upstash setup<br />
            │   │   ├── controllers → Logic for notes API<br />
            │   │   ├── middleware → Rate limiter with Upstash Redis<br />
            │   │   ├── models → Mongoose schema for notes<br />
            │   │   └── routes → Express routes for notes<br />
            ├── front-end<br />
            │   ├── src<br />
            │   │   ├── components → UI components (e.g., navbar)<br />
            │   │   ├── lib → Axios and utility functions<br />
            │   │   └── pages → Route views like NoteList, CreateNote<br />
            │   ├── App.jsx → Route layout<br />
            │   ├── main.jsx → React entry<br />
            │   └── index.css → Global styles<br />
          </code><br /><br />

          <b>Technologies Used:</b><br />
          - Frontend: React, Vite, Axios, React Router<br />
          - Backend: Express.js, MongoDB, Mongoose, dotenv<br />
          - Middleware: Custom rate limiter using Upstash Redis<br />
          - Hosting: Compatible with Vercel, Render, or Railway<br /><br />

        </p>

      );
    },
  },
  {
    description: "Advanced Keylogger",
    title: "Wraith",
    src: wraith_bg,
    ctaText: "See Project",
    ctaLink: "/dinuka-portfolio/project-wraith",
    content: () => {
      return (
        <p>
          <b>Python-Based Multi-Function Keylogger – Stealth Data Collection & Reporting Utility</b><br /><br />
          The <b>Python-Based Keylogger Tool</b> is an advanced system monitoring and data collection utility designed for educational, research, and controlled environment security auditing. This tool leverages Python's native libraries alongside OS-level APIs to silently capture user activities, providing detailed reports via scheduled email notifications.<br /><br />

          <b>Key Capabilities:</b><br />
          - <b>Keystroke Logging:</b> <br />
          Seamlessly captures all keystrokes typed by the user, preserving spaces and special keys, and saves the logs both within the report and as a separate text file attachment for review.<br /><br />

          - <b>Screenshot Capture on Active Window Change:</b> <br />
          Automatically takes screenshots when the user switches between applications to ensure only relevant screen captures are stored and reported, minimizing unnecessary data.<br /><br />

          - <b>Directory Structure Mapping:</b> <br />
          Generates a controlled-depth directory tree with limits on subfolder exploration and file types (configurable extensions such as PDF, JPG, DOCX, PPTX), ensuring concise and manageable directory reports.<br /><br />

          - <b>Quick Access Recent Files Listing:</b> <br />
          Retrieves the last accessed files specifically from the user's Quick Access (Recent Files) library, filtering out background or system process files for accurate user activity representation.<br /><br />

          - <b>Desktop Applications Enumeration:</b> <br />
          Lists files and shortcuts present on the user's desktop, giving insight into visible applications and user preferences.<br /><br />

          - <b>System Information Gathering:</b> <br />
          Collects essential system details such as hostname, IP address, processor type, and operating system information for complete environment context.<br /><br />

          - <b>WiFi Password Extraction:</b> <br />
          Optionally extracts saved WiFi network names and passwords from the system for wireless network auditing purposes.<br /><br />

          <b>How It Helps in Controlled Environments:</b><br />
          - Demonstrates Python-based stealth data collection techniques for cybersecurity research.<br />
          - Useful for system monitoring, forensic training, and behavior analysis in ethical hacking labs.<br />
          - Educates on responsible handling of sensitive information and data protection mechanisms.<br />
          - Showcases modular development with configurable features such as file type filtering and depth-controlled directory scanning.<br />
        </p>

      );
    },
  },
  {
    description: "Using Dog API",
    title: "Dog Image Generator",
    src: DogGenAPI,
    ctaText: "Visit",
    ctaLink: "https://dinuka7l.github.io/dog-image-generator-api/",
    content: () => {
      return (
        <p>
          This is a fun project that uses the public Dog API to fetch and display random dog images. Built with CSS,HTML and JS, it demonstrates how to work with external APIs, handle asynchronous requests, and update UI dynamically.
           Users can click a button to generate a new random dog image each time, making it a playful way to learn about API integration.
        </p>
      );
    },
  },
  {
    description: "Password Stealing Script",
    title: "Dark Spectre",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/47a1cf8e-8afb-4e9f-8ba6-ec76621da837/d8qe5db-c95996ea-e987-4c0e-9343-759074fc1966.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3YTFjZjhlLThhZmItNGU5Zi04YmE2LWVjNzY2MjFkYTgzN1wvZDhxZTVkYi1jOTU5OTZlYS1lOTg3LTRjMGUtOTM0My03NTkwNzRmYzE5NjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6MT22J4jLhKxIhVnB5wMaR4r-ol_x72VunpWZaJU0VM",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Developed an AutoIT based script which utilizes Web Browser Pass View Application to open all the browser saved passwords and save the passwords as a text file in the script directory  <br /> <br />
          However this script is not intended to be used for malicious purposes. It is designed to demonstrate the potential vulnerabilities in web browsers and the importance of securing sensitive information. <br /> <br />
          Further the script won't work on any system which has an antivirus or a firewall installed. This is because the script is designed to be used in a controlled environment where the user has full access to the system and the browser saved passwords. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Workflow Automation",
    title: "Work Mode",
    src: "https://media.istockphoto.com/id/1698710873/photo/automation-software-technology-process-system.jpg?s=612x612&w=0&k=20&c=LD3dmRbyPIkD8TkmWsJDWN-gcpHSADUgFqWWqiSkvFI=",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Developed an AutoIT based script which opens mail, LMS, and music and other applications to ease the workflow <br /> <br />
          This saves time and effort by automating the process of opening multiple applications at once. <br /> <br />
          The script is also capable of opening different applications in a specific scenarios, which can be useful for users who have a specific workflows. <br /> <br />
          
        </p>
      );
    },
  }
];

export default MyProjectsSection;