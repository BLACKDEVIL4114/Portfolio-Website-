import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Python", "scikit-learn", "LightGBM", "spaCy", "TF-IDF", "CLIP", "FAISS", "Ollama",
  "FastAPI", "Django", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS",
  "Node.js", "Express", "Bun", "TanStack Query", "tRPC", "Convex", "Supabase",
  "PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "SQLite", "Socket.io",
  "OpenAI", "LangChain", "Cloudinary", "JWT", "Postman",
  "Docker", "Kubernetes", "AWS", "Linux", "Turborepo",
  "Tailwind CSS", "Framer Motion", "Streamlit", "Tkinter", "Vite", "Git", "Vercel", "Render"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-sm rounded-full border border-white/[0.05] text-cyan-400 bg-white/[0.02] backdrop-blur-sm px-4 py-1.5 font-medium hover:border-cyan-500/30 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
