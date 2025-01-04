// src/components/sections/Hero/SocialLinks.tsx
// Dibuat oleh: Habibi Ramadhan
// Last update: [Tanggal terakhir update]
'use client'

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Mail, label: 'Email' },
];

const SocialLinks = () => {
  return (
    <motion.div 
      className="mt-8 sm:mt-10 flex gap-4 sm:gap-6 justify-center lg:justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {socials.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-700/80 to-blue-700/80 hover:from-blue-700/80 hover:to-purple-700/80 group shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={label}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl 
                     blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Icon className="relative z-10 w-6 h-6 text-gray-200" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
