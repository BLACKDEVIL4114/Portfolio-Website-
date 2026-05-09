import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg mb-8"
        >
          I'm actively looking for opportunities. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/BLACKDEVIL4114"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-cyan-500 text-3xl transition-colors p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:border-cyan-500/30"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-kotval-2b2993244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-cyan-500 text-3xl transition-colors p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:border-cyan-500/30"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com" // User to update
            className="text-zinc-400 hover:text-cyan-500 text-3xl transition-colors p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:border-cyan-500/30"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
