import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-zinc-800"></div>

          {/* Entry */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0a0a] z-10"></div>

              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12 md:text-right flex justify-end">
                <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl max-w-lg">
                  <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider">2024 – Present</span>
                  <h3 className="text-xl font-bold text-white mt-1">Final Year Project Developer</h3>
                  <p className="text-zinc-400 font-medium text-sm mb-2">Self-initiated</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Built multiple full-stack and AI/ML projects including an ATS resume platform, multi-modal search engine, and a desktop project monitoring system as part of GTU final year curriculum.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
