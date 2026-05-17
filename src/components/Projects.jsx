import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "SignalOne",
    description: "AI-powered real-time stock market platform delivering smart alerts, actionable insights, customizable watchlists, and automated workflows.",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "BetterAuth", "Inngest", "TradingView"],
    github: "https://github.com/BLACKDEVIL4114/SignalOne",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BlinkChat",
    description: "A privacy-first real-time chat system enabling anonymous 1-on-1 communication with auto-expiring rooms.",
    tags: ["Next.js", "React", "TypeScript", "TanStack Query", "Upstash Redis", "ElysiaJS", "Bun"],
    github: "https://github.com/BLACKDEVIL4114/blinkchat",
    image: "https://images.unsplash.com/photo-1611605698335-8b15d27e03f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Blitz AI",
    description: "AI-powered website builder that turns natural language prompts into responsive web pages.",
    tags: ["Next.js", "TypeScript", "tRPC", "TanStack Query", "Inngest", "Prisma", "PostgreSQL", "OpenAI"],
    github: "https://github.com/BLACKDEVIL4114/BlitzAI",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "FinSync AI",
    description: "AI-powered finance tracker featuring expense tracking, receipt scanning, and transaction exports.",
    tags: ["Next.js", "React", "Supabase", "Prisma", "PostgreSQL", "Recharts", "Arcjet", "Inngest", "Gemini"],
    github: "https://github.com/BLACKDEVIL4114/FinSync",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Splitr",
    description: "A group expense management platform simplifying tracking shared costs and automating settlements.",
    tags: ["Next.js", "JavaScript", "Convex", "Recharts", "Inngest", "Gemini", "Clerk Auth", "Resend"],
    github: "https://github.com/BLACKDEVIL4114/Splitr",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "FaceLink",
    description: "A fast and secure video conferencing platform offering instant meetings and screen sharing.",
    tags: ["Next.js", "React", "TypeScript", "Stream SDK", "Clerk Auth", "Tailwind CSS"],
    github: "https://github.com/BLACKDEVIL4114/FaceLink",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "AI Resume-Job Matching Platform",
    description: "AI-powered resume matcher that scores ATS, recommends jobs, and auto-applies on platforms using Selenium + NLP.",
    tags: ["TypeScript", "Python", "Selenium", "NLP"],
    github: "https://github.com/BLACKDEVIL4114/AI-Resume-Job-Matching-Platfrom",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "AI-DOCS-EDITOR",
    description: "AI-powered DOCX XML Editor for surgical document manipulation with natural language controlled edits and high-scale differential patching.",
    tags: ["JavaScript", "React", "Node.js", "Ollama"],
    github: "https://github.com/BLACKDEVIL4114/AI-DOCS-EDITOR",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "-project-PMS",
    description: "Project Monitoring System (PMS) v2.0—a professional desktop application for project planning, task assignment, and progress tracking.",
    tags: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/BLACKDEVIL4114/-project-PMS",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Golden_Signature_by_CodeVeda",
    description: "Streamlit app for AGPO “Golden Signature” featuring a data pipeline, feature-store cache, and optimization dashboards.",
    tags: ["Python", "Streamlit", "Data Pipeline"],
    github: "https://github.com/BLACKDEVIL4114/Golden_Signature_by_CodeVeda",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Inventory Management System",
    description: "A comprehensive Inventory Management System with feature-rich dashboards, product tracking, and secure authentication.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BLACKDEVIL4114/Inventory-Management-System",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Multi-Modal-AI-Search-Engine",
    description: "Semantic search engine using CLIP embeddings + FAISS vector index + Streamlit UI. Accepts text, image, and audio inputs for cross-modal retrieval.",
    tags: ["Python", "CLIP", "FAISS", "Streamlit"],
    github: "https://github.com/BLACKDEVIL4114/Multi-Modal-AI-Search-Engine",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
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
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div>
                {/* Visual Project Thumbnail Container */}
                {project.image && (
                  <div className="w-full h-48 overflow-hidden rounded-xl mb-6 border border-white/[0.05] relative group-hover:border-cyan-500/20 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle glow/shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-80"></div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
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
