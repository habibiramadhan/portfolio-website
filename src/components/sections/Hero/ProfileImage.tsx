// src/components/sections/Hero/ProfileAnimation.tsx
'use client'

import { motion } from 'framer-motion';

const ProfileAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] mx-auto"
    >
      <div className="relative aspect-square">
        {/* SVG Network Grid with Subtle Animation */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(128, 90, 213, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </motion.svg>

        {/* Floating AI Symbols with Smooth Animation */}
        {['<AI>', '</>', '{ML}', '[IoT]', '&&'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-blue-400/60 font-mono text-xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, 0, 10],
              x: [-10, 0, 10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6
            }}
            style={{
              left: `${30 + (i * 15)}%`,
              top: `${40 + (i * 10)}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Center Glow with Pulsating Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Background Decorative Elements with Subtle Movement */}
        <motion.div
          className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProfileAnimation;