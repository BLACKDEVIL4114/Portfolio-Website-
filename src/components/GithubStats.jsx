import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFire, FaCodeBranch, FaStar } from 'react-icons/fa';

const GithubStats = () => {
  return (
    <section id="github-activity" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">GitHub Activity</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm mt-4 max-w-lg mx-auto">
            Real-time analytics and contribution metrics pulled directly from my GitHub profile.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Contribution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl flex flex-col items-center hover:border-cyan-500/20 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FaGithub className="text-cyan-400" /> Contribution Calendar
            </h3>
            <div className="w-full overflow-x-auto py-2 flex justify-center scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              <img
                src="https://ghchart.rshah.org/06b6d4/BLACKDEVIL4114"
                alt="Himanshu's GitHub Contributions Chart"
                className="min-w-[700px] h-auto invert-[0.1] contrast-[1.2]"
              />
            </div>
            <p className="text-xs text-zinc-500 mt-2">
              Powered by real-time commit data from @BLACKDEVIL4114
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl flex flex-col items-center hover:border-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaFire className="text-cyan-400" /> Overall Stats
              </h3>
              <div className="w-full flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=BLACKDEVIL4114&show_icons=true&theme=tokyonight&bg_color=0a0a0a&title_color=06b6d4&text_color=a1a1aa&icon_color=06b6d4&hide_border=true"
                  alt="Himanshu's Github Stats"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl flex flex-col items-center hover:border-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCodeBranch className="text-cyan-400" /> Top Languages
              </h3>
              <div className="w-full flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=BLACKDEVIL4114&layout=compact&theme=tokyonight&bg_color=0a0a0a&title_color=06b6d4&text_color=a1a1aa&icon_color=06b6d4&hide_border=true"
                  alt="Himanshu's Top Languages"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
