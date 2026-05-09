import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "AI Resume-Job Matching Platform",
    description: "AI-powered resume matcher that scores ATS, recommends jobs, and auto-applies on platforms using Selenium + NLP.",
    tags: ["TypeScript", "Python", "Selenium", "NLP"],
    github: "https://github.com/BLACKDEVIL4114/AI-Resume-Job-Matching-Platfrom"
  },
  {
    name: "AI-DOCS-EDITOR",
    description: "AI-powered DOCX XML Editor for surgical document manipulation with natural language controlled edits and high-scale differential patching.",
    tags: ["JavaScript", "React", "Node.js", "Ollama"],
    github: "https://github.com/BLACKDEVIL4114/AI-DOCS-EDITOR"
  },
  {
    name: "-project-PMS",
    description: "Project Monitoring System (PMS) v2.0—a professional desktop application for project planning, task assignment, and progress tracking.",
    tags: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/BLACKDEVIL4114/-project-PMS"
  },
  {
    name: "Golden_Signature_by_CodeVeda",
    description: "Streamlit app for AGPO “Golden Signature” featuring a data pipeline, feature-store cache, and optimization dashboards.",
    tags: ["Python", "Streamlit", "Data Pipeline"],
    github: "https://github.com/BLACKDEVIL4114/Golden_Signature_by_CodeVeda"
  },
  {
    name: "Inventory Management System",
    description: "A comprehensive Inventory Management System with feature-rich dashboards, product tracking, and secure authentication.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BLACKDEVIL4114/Inventory-Management-System"
  },
  {
    name: "Multi-Modal-AI-Search-Engine",
    description: "Semantic search engine using CLIP embeddings + FAISS vector index + Streamlit UI. Accepts text, image, and audio inputs for cross-modal retrieval.",
    tags: ["Python", "CLIP", "FAISS", "Streamlit"],
    github: "https://github.com/BLACKDEVIL4114/Multi-Modal-AI-Search-Engine"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs rounded-full border border-zinc-700 text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
