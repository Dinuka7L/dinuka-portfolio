"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

function ProfessionalQualificationsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Scroll with mouse wheel (Ferris wheel effect)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(modalRef, () => setActive(null));

  return (
    <section id="ProfessionalQualifications" className="py-20 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
      <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Qualifications
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                   Professional Qualifications and Certifications I have achieved.
                </p>
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
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6 flex items-center justify-center"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={modalRef}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              <div className="p-4">
                <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-neutral-700 dark:text-neutral-200">
                  {active.title}
                </motion.h3>
                <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-600 dark:text-neutral-400">
                  {active.description}
                </motion.p>
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                  {active.ctaText}
                </motion.a>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm h-40 overflow-auto"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Ferris Wheel Scrolling Cards */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 snap-x snap-mandatory overflow-x-auto px-4 py-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="flex-none snap-center w-[80vw] sm:w-[calc(100%/2.5)] md:w-[calc(100%/3.5)] lg:w-[calc(100%/5)] transform hover:scale-105 transition-transform duration-300 cursor-pointer bg-white dark:bg-neutral-900 rounded-xl shadow-md"
              style={{
                perspective: 1000,
              }}
            >
              <div
                className="h-full p-4 flex flex-col items-center justify-between"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${(index - 2) * 10}deg)`,
                }}
              >
                <motion.img
                  layoutId={`image-${card.title}-${id}`}
                  src={card.src}
                  alt={card.title}
                  className="h-32 w-32 object-cover rounded-lg mb-4"
                />
                <motion.h3 layoutId={`title-${card.title}-${id}`} className="text-center font-semibold text-sm dark:text-white">
                  {card.title}
                </motion.h3>
                <motion.p layoutId={`description-${card.description}-${id}`} className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                  {card.description}
                </motion.p>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="mt-2 px-3 py-1 text-xs font-bold bg-gray-100 hover:bg-green-500 hover:text-white rounded-full text-black"
                >
                  {card.ctaText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
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
    description: "Fortinet",
    title: "Fortinet Certified Fundamentals Cybersecurity",
    src: "https://www.threatdown.com/wp-content/uploads/2024/06/fortinet_logo.svg_blog-image-gradient-2.png",
    ctaText: "Verify",
    ctaLink: "https://www.credly.com/badges/9a8ec405-ac68-433a-b3ad-351443571353/linked_in_profile",
    content: () => {
      return (
        <p>
          The Fortinet Certified Fundamentals in Cybersecurity certification validates that the earner has mastered the technical skills and knowledge that are required for any entry-level job role in cybersecurity.
           The curriculum covers today’s threat landscape and the fundamentals of cybersecurity. <br /> <br /> 
        </p>
      );
    },
  },
  {
    description: "Cisco",
    title: "CCNA: ENSA",
    src: "https://images.credly.com/size/680x680/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
    ctaText: "Verify",
    ctaLink: "https://www.credly.com/badges/c4032a42-e526-457e-8235-51e66b389fa1/linked_in_profile",
    content: () => {
      return (
        <p>
          Cisco Certified Network Associate(CCNA) Enterprise Networking, Security, and Automation<br /> <br />
          The Cisco CCNA: Enterprise Networking, Security, and Automation (ENSA) course focuses on designing, securing, operating, and troubleshooting large, complex enterprise networks.
           <br /> <br />It covers topics like WAN technologies, network security, virtualization, and automation, emphasizing skills to configure, troubleshoot, and protect networks against cybersecurity threats. 
          <br /> <br />The course prepares students for the CCNA certification exam and is the final course in the CCNAv7 curriculum. 
        </p>
      );
    },
  },
  {
    description: "Cisco",
    title: "CCNA: SRWE",
    src: "https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
    ctaText: "Verify",
    ctaLink: "https://www.credly.com/badges/c4032a42-e526-457e-8235-51e66b389fa1/linked_in_profile",
    content: () => {
      return (
        <p>
          Cisco Certified Network Associate(CCNA) Enterprise Networking, Security, and Automation<br /> <br />
          The Cisco CCNA: Switching, Routing, and Wireless Essentials (SRWE) course covers fundamental networking concepts including switching, routing, and wireless technologies.
          <br /> <br /> It focuses on building, configuring, and troubleshooting both wired and wireless local area networks (LANs), along with introducing security best practices.
          <br /> <br /> This course is the second in the CCNA curriculum and is designed to prepare students for the Cisco CCNA exam. 
           
          
        </p>
      );
    },
  },
  {
    description: "Postman",
    title: "Postman Student API Fundamentals Expert",
    src: "https://api.badgr.io/public/assertions/M_3RVyN3S8y1_dUFdC_Zlg/image",
    ctaText: "Verify",
    ctaLink: "https://api.badgr.io/public/assertions/M_3RVyN3S8y1_dUFdC_Zlg",
    content: () => {
      return (
        <p>
          Cisco Certified Network Associate(CCNA) Enterprise Networking, Security, and Automation
          <br /> <br />The "Postman API Fundamentals Student Expert" certification offered by Postman Academy verifies a student's understanding of APIs, their role in modern development, and how to use Postman to work with them.
           <br /> <br /> It covers topics like API basics, Postman's features, making requests, handling headers, and understanding response codes. 
          
           
          
        </p>
      );
    },
  },
  {
    description: "Cisco",
    title: "CCNA: ITN",
    src: "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    ctaText: "Verify",
    ctaLink: "https://www.credly.com/badges/ff56f09e-685f-4812-82d1-bcb48aef5d53/linked_in_profile",
    content: () => {
      return (
        <p>
          Cisco Certified Network Associate(CCNA) Introduction to Networks (ITN)<br /> <br />
          The CCNA Introduction to Networks (ITN) course provides foundational knowledge of networking concepts, including the OSI model, TCP/IP protocols, and basic network configuration.
          <br /> <br />The CCNA Introduction to Networks (ITN) course is the first step in the Cisco Networking Academy's CCNA certification program. It provides an introductory overview of networking concepts, covering architectures, models, and protocols that are fundamental to understanding how networks operate. 
          <br /> <br /> This course prepares students for entry-level IT networking roles. 
           
          
           
          
        </p>
      );
    },
  },
  {
    description: "AttackIQ",
    title: "Foundations Of Operationalizing MITRE ATT&CK",
    src: "https://images.credly.com/size/680x680/images/bbed017a-ab77-4681-9079-b335d51b083e/image.png",
    ctaText: "Verify",
    ctaLink: "https://www.credly.com/badges/dbc1194e-294f-4640-894b-536b99015259/linked_in_profile",
    content: () => {
      return (
        <p>
          The Foundations of Operationalizing MITRE ATT&CK v13 certification, offered by AttackIQ Academy and Credly, validates a foundational understanding of the MITRE ATT&CK framework and its practical application in cybersecurity.
          <br /> <br /> This certification is a badge or credential earned by demonstrating knowledge of how to use the ATT&CK framework to improve an organization's security posture. 
          <br /> <br /> It covers topics such as understanding the ATT&CK matrix, using it for threat intelligence, and applying it to security operations and incident response.
          <br /> <br /> The certification is designed for cybersecurity professionals who want to enhance their skills in using the ATT&CK framework to defend against cyber threats.
        
        </p>
      );
    },
  },
  
];

export default ProfessionalQualificationsSection;
