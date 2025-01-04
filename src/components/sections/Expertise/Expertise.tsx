// src/components/sections/Expertise/Expertise.tsx
'use client'

import { motion } from 'framer-motion';
import { Brain, Database, Code } from 'lucide-react';
import ExpertiseCard from './ExpertiseCard';

const expertiseData = [
    {
        title: "AI Research",
        description: "Specializing in Generative AI and Retrieval-Augmented Generation (RAG) systems, with deep expertise in developing AI Agents and Multi-Agent architectures. Experienced in implementing Computer Vision and Voice AI solutions.",
        icon: Brain,
        technologies: [
          "Generative AI",
          "RAG Systems",
          "AI Vision",
          "AI Voice",
          "Multi Agent",
          "AI Agents"
        ],
        gradient: "from-purple-500/20 via-purple-400/20 to-fuchsia-500/20"
    },
  {
    title: "Backend Development",
    description: "Building robust and scalable backend systems with modern technologies and best practices.",
    icon: Database,
    technologies: ["Golang", "Node.js", "PostgreSQL", "Redis", "Microservices"],
    gradient: "from-blue-500/20 via-indigo-400/20 to-purple-500/20"
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive web applications with modern frameworks.",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    gradient: "from-fuchsia-500/20 via-purple-400/20 to-blue-500/20"
  }
];

const Expertise = () => {
  return (
    <section className="relative py-32 min-h-screen overflow-hidden bg-[#0B1121]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-[#0B1121]/90" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          >
            My Expertise
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Specialized in creating intelligent and scalable solutions through various technologies and approaches.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard 
              key={expertise.title}
              {...expertise}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;