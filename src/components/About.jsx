import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
        >
          <p className="text-zinc-400 text-lg leading-relaxed text-center sm:text-left">
            I'm a final-year Information Technology student at <span className="text-white font-medium">Sal College of Engineering & Technology (GTU)</span>, Ahmedabad. I specialize in building data-driven AI-powered applications using <span className="text-cyan-400 font-medium">React, FastAPI, Python, and Supabase</span>. I enjoy solving real problems with clean code and practical ML — from resume matching to multi-modal search engines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
