import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Social Winter of Code (SWoC)",
    company: "Open Source Contributor",
    duration: "Jan 2026 – Mar 2026",
    location: "Remote (India)",
    description: [
      "Delivered 12+ merged pull requests across multiple repositories using Next.js, React, and TypeScript, maintaining a 90%+ acceptance rate.",
      "Refactored core components and optimized rendering logic, reducing unnecessary re-renders and improving UI responsiveness by 30%.",
      "Collaborated with 15+ global contributors through PR reviews and design discussions, contributing to scalable, production-ready features."
    ],
    tech: ["Next.js", "React", "TypeScript", "Bun", "Tailwind CSS"]
  },
  {
    role: "Elite Coders Winter of Code (ECWoC)",
    company: "Open Source Contributor",
    duration: "Dec 2025 – Feb 2026",
    location: "Remote (India)",
    description: [
      "Contributed to decentralized open-source packages and web tools using React, TypeScript, and modern JS execution runtimes.",
      "Identified and resolved 8+ complex frontend issues, optimizing package download footprint and bundle modularity.",
      "Assisted in maintaining clean Git history, writing unit tests, and writing clear, standard documentation for public repositories."
    ],
    tech: ["React", "TypeScript", "Node.js", "Jest", "Git"]
  },
  {
    role: "Python Developer Intern",
    company: "Vibrant Web Tech",
    duration: "Aug 2025 – Oct 2025",
    location: "Ahmedabad, Gujarat",
    description: [
      "Developed and maintained Python-based web applications and backend services for real-world client projects.",
      "Applied API integration, data handling, and scripting to support web development workflows."
    ],
    tech: ["Python", "Flask", "SQL", "APIs", "Git"]
  },
  {
    role: "Python Intern",
    company: "Code Crew Infotech Pvt. Ltd.",
    duration: "July 2025",
    location: "Ahmedabad, Gujarat",
    description: [
      "Gained exposure to Python by solving real-world tasks in logic building, data processing, and basic automation.",
      "Developed and tested Python scripts using core concepts: functions, loops, file handling, and error handling.",
      "Assisted in debugging existing code and improving readability under mentor guidance."
    ],
    tech: ["Python", "Logic Building", "Data Processing", "Debugging"]
  },
  {
    role: "Final Year Project Developer",
    company: "Self-initiated",
    duration: "2024 – Present",
    location: "Academic",
    description: [
      "Built multiple full-stack and AI/ML projects including an ATS resume platform, multi-modal search engine, and a desktop project monitoring system as part of GTU final year curriculum."
    ],
    tech: ["Python", "FastAPI", "React", "SQLite", "Streamlit", "FAISS", "CLIP"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-zinc-800"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0a0a] z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                  {/* Content Wrapper */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 flex ${isLeft ? 'md:justify-end md:mr-auto md:pr-12 md:text-right' : 'md:justify-start md:ml-auto md:pl-12 md:text-left'}`}>
                    <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl max-w-lg hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider">{exp.duration}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                      <p className="text-zinc-400 font-medium text-sm mb-3">
                        {exp.company} {exp.location ? `• ${exp.location}` : ""}
                      </p>
                      <ul className={`text-zinc-300 text-sm leading-relaxed space-y-2 list-none mb-4 ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {exp.description.map((bullet, bIndex) => (
                          <li key={bIndex} className="relative pl-5 before:content-['▪'] before:absolute before:left-0 before:text-cyan-500">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.tech.map((t, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-xs rounded-full border border-zinc-700 text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
