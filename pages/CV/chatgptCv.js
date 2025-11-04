"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md shadow-md z-50">
        <ul className="flex justify-center gap-8 py-4 text-sm md:text-base">
          {["about", "skills", "experience", "contact"].map((section) => (
            <li
              key={section}
              className={`cursor-pointer capitalize transition-all hover:text-indigo-400 ${
                activeSection === section ? "text-indigo-400" : "text-gray-300"
              }`}
              onClick={() => {
                setActiveSection(section);
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero / Header */}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Ochir-Erdene Chinbat
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Aspiring IT Engineer | Japan-bound Student | JLPT N3 Holder
          </p>
          <a
            href="#contact"
            className="bg-indigo-600 px-6 py-3 rounded-full text-white font-medium hover:bg-indigo-500 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {["Python", "C++", "HTML/CSS", "React", "TailwindCSS", "Japanese (JLPT N3)"].map(
              (skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen flex flex-col justify-center px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">High School Projects</h3>
              <p className="text-gray-400 mt-2">
                Created small applications using Python and web technologies. Focused on
                learning algorithms, front-end basics, and project design.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Japanese Study Journey</h3>
              <p className="text-gray-400 mt-2">
                Preparing for IT programs in Japan. Achieved JLPT N3 and actively working
                toward N2.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-gray-300 mb-4">
            Interested in collaborating or have any questions?
          </p>
          <a
            href="mailto:youremail@example.com"
            className="bg-indigo-600 px-6 py-3 rounded-full text-white font-medium hover:bg-indigo-500 transition"
          >
            Send Email
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Ochir-Erdene Chinbat — All rights reserved.
      </footer>
    </main>
  );
}
