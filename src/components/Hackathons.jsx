import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const hackathons = [
  {
    title: "Diversion 2K26",
    location: "Kolkata, West Bengal",
    date: "Feb 2026",
    description: "Built an AI-powered legal assistant providing plain-language guidance, contract/document summarization, case tracking with hearing updates, rights education, and verified lawyer discovery for everyday Indians.",
    certificate: "https://drive.google.com/file/d/1Tcv_YbeFpdf3Zk5f2dBENhzOBPwGIngf/view?usp=drive_link"
  },
  {
    title: "Hack NITR 7.0",
    location: "Rourkela, Odisha",
    date: "Jan 2026",
    description: "Developed an AI-powered, multilingual healthcare platform enabling symptom-based guidance, smart doctor discovery, location-based hospital search and data insights to improve rural healthcare access.",
    certificate: "https://drive.google.com/file/d/1h-0fyBRCbTMODgKScKwTlsm4KObHKl6U/view?usp=drive_link"
  },
  {
    title: "Educ-A-Thon 2.0",
    location: "Kolkata, West Bengal",
    date: "Nov 2025",
    description: "Built a student collaboration platform with skill-based teaming, real-time task boards, analytics, and smart peer review.",
    certificate: "https://certificate.givemycertificate.com/c/60b273be-d3ec-4599-ad0a-6106e65849ce"
  },
  {
    title: "HackAura",
    location: "Virtual",
    date: "Oct 2025",
    description: "Developed an AI PDF analysis tool with Llama-powered chat insights and a refined vintage interface.",
    certificate: "https://certificate.givemycertificate.com/c/fe3b1431-3584-42aa-9608-f554dd9fd77f"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Hackathons</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm mt-4 max-w-lg mx-auto">
            Collaborating with global developers to turn intense ideas into working prototypes in high-pressure settings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <FaTrophy className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {hack.title}
                      </h3>
                      <p className="text-zinc-400 text-xs font-medium">
                        {hack.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-cyan-500 text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded-full">
                    {hack.date}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {hack.description}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-zinc-900 flex justify-end">
                <a
                  href={hack.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors"
                >
                  View Credentials <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
