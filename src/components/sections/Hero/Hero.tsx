// src/components/sections/Hero/Hero.tsx
'use client'

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleEffect from './ParticleEffect';
import SocialLinks from './SocialLinks';
import ProfileAnimation from './ProfileImage';
import TypingEffect from './TypingEffect';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <ParticleEffect />

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ProfileAnimation />

          <motion.div 
            className="text-center lg:text-left mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                Habibi Ramadhan
              </span>
            </motion.h1>

            <motion.h2 
              className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0px 0px 5px rgba(128, 90, 213, 0.5)",
                    "0px 0px 10px rgba(56, 189, 248, 0.5)",
                    "0px 0px 5px rgba(128, 90, 213, 0.5)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <TypingEffect words={["Backend Engineer", "AI Researcher"]} />
              </motion.span>
            </motion.h2>

            <motion.p 
            className="mt-6 text-base sm:text-lg lg:text-xl font-light text-gray-300 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            <span className="block text-purple-400 font-semibold">Creating Intelligent Solutions</span>
            <span className="block mt-2 text-gray-300">
                Through code, research, and innovation. Specialized in AI development and scalable backend systems.
            </span>
            </motion.p>



            <SocialLinks />

            <motion.button
  className="mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                     rounded-full text-base sm:text-lg font-medium group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <span className="relative z-10">Explore My Work</span>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.button>

          </motion.div>
        </div>

        <motion.div 
          className="hidden sm:block fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400/80 hover:text-purple-400 transition-colors cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
