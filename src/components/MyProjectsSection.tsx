"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import SentraFusionDashboardSS from '../assets/SF-Dashboard.png';
import CountUp from '../ui/count-up'


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
    return () => window.removeEventListener("keydown", onKeyDown);
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

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
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