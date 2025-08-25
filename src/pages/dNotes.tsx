import React from "react";
import { motion } from "framer-motion";
import mongoLogo from "../assets/mongoDB-logo.png";
import expressLogo from "../assets/ExpressJS-Logo.png";
import reactLogo from "../assets/react-logo.svg";
import nodeLogo from "../assets/NodeJS-Logo.png";
import ss1 from "../assets/DNotes-1.png";
import ss2 from "../assets/DNotes-2.png";
import ss3 from "../assets/DNotes-MDB.png";

const techs = [
  { name: "MongoDB", logo: mongoLogo },
  { name: "Express", logo: expressLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
];

const extras = ["Axios", "React Router", "MongoDB Atlas", "RESTful APIs"];

const DNotes: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Hero / Title */}
      <section className="pt-36 px-6 text-center space-y-8">
        <motion.h1
          className="text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DNotes – My First MERN Stack App
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          A full-stack note-taking app where I built everything from scratch using MongoDB, Express.js, React, and Node.js.
        </p>
      </section>

      {/* MERN Spotlight Effect */}
      <section className="mt-28 mb-20 h-28 flex justify-center items-center relative overflow-hidden">
        <motion.div
          className="text-[5rem] font-extrabold tracking-widest text-white/10 absolute whitespace-nowrap"
          animate={{ x: ["-25%", "25%", "-25%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        >
          M E R N &nbsp;
        </motion.div>
      </section>

      {/* Core Technologies */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Built With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-20 w-auto object-contain"
              />
              <span className="text-white text-lg font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog-style MERN Tech Sections */}
      <section className="max-w-4xl mx-auto px-6 space-y-24 mb-28">
        {[
          {
            title: "MongoDB",
            content:
              "I used MongoDB Atlas as the cloud-hosted database to store note documents. It allowed me to define schemas with Mongoose and manage data efficiently. I also learned about collections, documents, and NoSQL querying in this process.",
          },
          {
            title: "Express.js",
            content:
              "Express acted as my backend framework where I defined RESTful routes to handle notes: create, read, and delete. I learned how to use middleware, routing, and how to connect it with MongoDB using Mongoose.",
          },
          {
            title: "React",
            content:
              "The entire frontend is built using React, with component-based architecture. I managed state using `useState`, handled side effects with `useEffect`, and used `react-router` for navigation.",
          },
          {
            title: "Node.js",
            content:
              "Node.js powered my server-side runtime. I used it with Express and created a robust, asynchronous backend that connects the frontend with the MongoDB database securely.",
          },
        ].map((tech, i) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
            <p className="text-gray-300 leading-relaxed">{tech.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Screenshots */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[ss1, ss2, ss3].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`DNotes Screenshot ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Technologies */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Additional Tools I Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {extras.map((tool, i) => (
            <motion.div
              key={tool}
              className="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DNotes;
