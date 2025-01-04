// src/components/sections/Hero/ProfileImage.tsx
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
        {/* Core Circle */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl shadow-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-purple-500/10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Center Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl shadow-inner"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Code Symbols Animation */}
        {['{ }', '< >', '[ ]', '// ', '$ _'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-purple-400/40 font-mono text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, 0, 20],
              x: [-20, 0, 20],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
            style={{
              left: `${25 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute -z-10 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default ProfileAnimation;
