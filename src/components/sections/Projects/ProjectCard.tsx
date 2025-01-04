// src/components/sections/Projects/ProjectCard.tsx
'use client'

import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  type: string; // "AI Research" | "Backend" | "Frontend"
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  index: number;
  gradient: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  type,
  technologies, 
  githubUrl,
  demoUrl,
  isPrivate = false,
  index, 
  gradient 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="group relative flex flex-col h-full"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-60 
                      group-hover:opacity-70 transition-all duration-500`} />

      <div className="relative flex-1 p-8 bg-gray-900/90 backdrop-blur-xl rounded-2xl 
                    border border-purple-500/10 overflow-hidden">
        {/* Project Type Badge */}
        <div className="inline-block px-3 py-1 mb-4 text-sm rounded-full 
                      bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20">
          {type}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              className="px-3 py-1 text-sm rounded-full text-white/90 
                       border border-purple-500/20 bg-gradient-to-r 
                       from-purple-500/10 to-blue-500/10"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          {isPrivate ? (
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <Lock className="w-4 h-4" />
              Private Repository
            </span>
          ) : (
            <>
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                           hover:from-purple-500/30 hover:to-blue-500/30 
                           transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </motion.a>
              )}
              {demoUrl && (
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                           hover:from-purple-500/30 hover:to-blue-500/30 
                           transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;