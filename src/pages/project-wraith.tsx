import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import wraith_mailtrap from '../assets/wraith-mailtrapSS.png';
import wraith_desktop_apps from '../assets/Wraith-desktop-apps.png';
import wraith_send_mail from '../assets/Wraith-send-mail.png';
import wraith_toggles from '../assets/Wraith-toggles.png';
import wraith_wifi_passwords_captured from '../assets/wraith-captures-password.png';
import wraith_last_accessed_captured from '../assets/wraith-captures-last-accessed.png'
import wraith_cleanup from '../assets/Wraith-cleanup.png'
import wraith_host_details from '../assets/wraith-host-details.png'
import wraith_directory_stucture from '../assets/wraith-directory-structure.png'
import wraith_desktop_apps_captured from '../assets/wraith-desktop-apps-captured.png'
import pythonLogo from '../assets/python-logo.png';
import wraith_key_strokes from '../assets/wraith-key-strokes.png';




const steps = [
  {
    title: "Step 1: Keylogger Initialization",
    description: "The KeyLogger class is initialized by setting email configurations, logging variables, and optional data capture toggles (such as screenshot capture or system info gathering). Required libraries like 'pynput' and 'pyscreenshot' are imported and the initial state is prepared.",
    image: wraith_toggles,
  },
  {
    title: "Step 2: Capturing Keystrokes",
    description: "Using the 'pynput' library, each user keystroke is captured in the background and stored into an in-memory string log. Special keys like SPACE or ENTER are converted into readable formats such as space (' ') or newline ('\\n').",
    image: wraith_key_strokes,
  },
  {
    title: "Step 3: Active Window & Screenshot Monitoring",
    description: "The script checks for changes in the active window title using 'win32gui'. When a new application window is detected, a screenshot is automatically captured using 'pyscreenshot' and saved locally before being added to the report.",
    image: wraith_desktop_apps,
  },
  {
    title: "Step 4: Collecting System Information",
    description: "System metadata such as hostname, IP address, processor, and OS type are collected via 'platform' and 'socket' libraries. This optional data enriches the periodic reports based on the user's configuration.",
    image: wraith_host_details,
  },
  {
    title: "Step 5: Directory & Recent Files Listing",
    description: "If enabled, the script traverses specified disk locations, listing top-level folders and user-specific files (like PDFs or DOCX) without descending too deep. Additionally, the script collects 'Quick Access' history or recently opened files, excluding system or background processes.",
    image: wraith_directory_stucture,
  },
  {
    title: "Step 6: Report Preparation & Emailing",
    description: "At every configured time interval, the script composes an email containing keystroke logs, optional system data, screenshots, and file listings. All attachments are size-limited to prevent exceeding SMTP server constraints and sent via 'smtplib' to a testing inbox (MailTrap).",
    image: wraith_send_mail,
  },
  {
    title: "Step 8: Accessing From Attacker's Side",
    description: "At every configured time interval, the script composes an email containing keystroke logs, optional system data, screenshots, and file listings. All attachments are size-limited to prevent exceeding SMTP server constraints and sent via 'smtplib' to a testing inbox (MailTrap).",
    image: wraith_mailtrap,
  },
  {
    title: "Step 8: Cleanup & Resource Management",
    description: "After sending the report, all temporary files such as screenshots or text logs are deleted to free disk space. Timers and listeners are gracefully stopped when the script ends or upon manual termination.",
    image: wraith_cleanup,
  }
];


const slideshowItems = [
  {
    image: wraith_mailtrap,
    caption: "MailTrap Inbox: Received Keystroke Logs and Screenshots"
  },
  {
    image: wraith_last_accessed_captured,
    caption: "Captured Last Accessed Files Listing"
  },
  {
    image: wraith_wifi_passwords_captured,
    caption: "Retrieved Wi-Fi Passwords Listing"
  },
  {
    image: wraith_desktop_apps_captured,
    caption: "Captured Desktop Applications Listing"
  }
];



const KeyloggerProjectShowcase: React.FC = () => {
    const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (autoSlide) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideshowItems.length);
      }, 3000); // Auto-slide every 3 seconds
    }
    return () => clearInterval(timer);
  }, [autoSlide]);

  const nextSlide = () => {
    setAutoSlide(false); // stop auto-slide on manual click
    setCurrent((prev) => (prev + 1) % slideshowItems.length);
  };

  const prevSlide = () => {
    setAutoSlide(false); // stop auto-slide on manual click
    setCurrent((prev) => (prev - 1 + slideshowItems.length) % slideshowItems.length);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900 text-gray-200 p-8">
      {/* Project Title & Capabilities */}
      <section className="text-center mb-12 pt-24">
        <h1 className="text-4xl font-bold mb-4 glassy p-4 rounded-2xl shadow-xl">
            Project Wraith - Python Keylogger
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
            Capabilities: Captures keyboard strokes, screenshots, recently accessed files, logs to a file, stealth mode operation, customizable exfiltrations.
        </p>
        </section>

      {/* Built With */}
      <section className="flex justify-center items-center space-x-6 mb-12">
        <div className="flex flex-col items-center glassy p-4 rounded-xl shadow-lg">
          <span className="text-xl mb-2">Core: Python</span>
          {/* You can put Python logo image or icon here */}
          <img src= {pythonLogo} alt="Python Logo" className="w-12 h-12" />
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } relative`}
            >
              <div className="w-1/2 p-4 glassy rounded-xl shadow-lg backdrop-blur-lg">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="mb-4">{step.description}</p>
                <img
                  src={step.image}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-xl border-2 border-gray-500 shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    {/* Retrieved Results Slideshow */}
      <section className="mt-16 max-w-3xl mx-auto glassy p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Retrieved Results Showcase</h2>
        
        <div className="relative flex flex-col items-center space-y-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slideshowItems[current].image}
              alt={`Slide ${current + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border-2 border-gray-600 shadow-md w-full max-h-96 object-contain"
            />
          </AnimatePresence>
          <p className="text-gray-300 text-sm">{slideshowItems[current].caption}</p>

          {/* Manual Controls */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition"
            >
              Next
            </button>
          </div>
        </div>
      </section>


      {/* Disclaimer */}
      <section className="text-center mt-20 glassy p-6 rounded-xl mx-auto max-w-3xl shadow-xl">
        <p className="text-sm text-gray-300">
          Disclaimer: This project is strictly for educational and ethical research purposes.
          It has not been published, distributed, or used for any malicious intent.
        </p>
      </section>
    </div>
  );
};

export default KeyloggerProjectShowcase;
