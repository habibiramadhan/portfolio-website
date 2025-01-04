// src/components/sections/Projects/Projects.tsx
'use client'

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "AI Vision Assistant",
    description: "Computer vision system with real-time object detection and scene understanding capabilities.",
    image: "/projects/vision-ai.webp", // Akan diganti dengan placeholder atau gradient jika tidak ada image
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    link: "#",
    gradient: "from-purple-500/20 via-fuchsia-400/20 to-blue-500/20"
  },
  {
    title: "Multi-Agent System",
    description: "Distributed AI system with multiple agents collaborating to solve complex tasks.",
    image: "/projects/multi-agent.webp",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
    link: "#",
    gradient: "from-blue-500/20 via-purple-400/20 to-fuchsia-500/20"
  },
  {
    title: "RAG Implementation",
    description: "Advanced retrieval-augmented generation system for accurate and contextual AI responses.",
    image: "/projects/rag-system.webp",
    technologies: ["LlamaIndex", "ChromaDB", "LangChain", "FastAPI"],
    link: "#",
    gradient: "from-fuchsia-500/20 via-blue-400/20 to-purple-500/20"
  }
];

const Projects = () => {
  return (
    <section className="relative py-32 min-h-screen overflow-hidden bg-[#0B1121]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/50 via-gray-900/80 to-[#0B1121]/90" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
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
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          >
            Featured Projects
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
            Showcasing some of my recent work in AI and software development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;