import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "AI Resume-Job Matching Platform",
    description: "Full-stack ATS platform with React 19 frontend, FastAPI backend, spaCy NLP, TF-IDF scoring, Supabase auth, and live job fetching from Arbeitnow & Indeed RSS. Deployed on Vercel + Render.",
    tags: ["React", "TypeScript", "FastAPI", "spaCy", "TF-IDF", "Supabase", "Vercel", "Render"],
    github: "https://github.com/BLACKDEVIL4114/AI-Resume-Job-Matching-Platfrom"
  },
  {
    name: "Multi-Modal AI Search Engine",
    description: "Semantic search engine using CLIP embeddings + FAISS vector index + Streamlit UI. Accepts text, image, and audio inputs for cross-modal retrieval.",
    tags: ["Python", "CLIP", "FAISS", "Streamlit", "open-clip-torch", "NumPy"],
    github: "https://github.com/BLACKDEVIL4114/Multi-Modal-AI-Search-Engine"
  },
  {
    name: "PMS 2.0 — Project Monitoring System",
    description: "Role-based desktop app (Admin, Team Leader, Employee) built with Python Tkinter + SQLite + Flask + LightGBM AI performance prediction.",
    tags: ["Python", "Tkinter", "SQLite", "Flask", "LightGBM", "ML"],
    github: "#" // No link provided in prompt, using #
  },
  {
    name: "Django E-Commerce Website",
    description: "Full-featured e-commerce site with product categories, stock indicators, Razorpay payments, admin dashboard live stats, and PDF invoice generation.",
    tags: ["Django", "Bootstrap", "SQLite", "Razorpay", "xhtml2pdf", "Pillow"],
    github: "https://github.com/BLACKDEVIL4114/e-commerce-website-"
  },
  {
    name: "agon-agent — DOCX XML Editor",
    description: "Web-based DOCX XML editor with React/TypeScript frontend + Node.js backend. Uses local Ollama (qwen2.5:14b) with a hybrid intent system for direct JSZip patching and LLM-based complex edits.",
    tags: ["React", "TypeScript", "Node.js", "Ollama", "JSZip", "qwen2.5"],
    github: "#" // No link provided in prompt, using #
  }
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
