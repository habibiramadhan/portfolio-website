// src/components/sections/Expertise/ExpertiseCard.tsx
'use client'

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// Props yang dibutuhin sama komponen
interface ExpertiseCardProps {
  title: string;        // Judul expertise
  description: string;  // Deskripsi lengkap
  icon: LucideIcon;     // Icon dari lucide-react
  technologies: string[]; // List teknologi yang dipake
  index: number;        // Urutan card buat animasi
  gradient: string;     // Gradient warna background
}

const ExpertiseCard = ({ title, description, icon: Icon, technologies, index, gradient }: ExpertiseCardProps) => {
  // Setup animasi buat card-nya
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.2
      }
    }
  };

  // Setup animasi buat tech stack
  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + (index * 0.1) + (i * 0.05),
        type: "spring",
        damping: 15
      }
    })
  };

  return (
    // Wrapper card dengan animasi
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      {/* Background gradient yang blur */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

      {/* Konten utama card */}
      <div className="relative p-8 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 h-full">
        {/* Icon dan judul */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} backdrop-blur-md`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {title}
          </h3>
        </div>
        
        {/* Deskripsi */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>

        {/* List teknologi dengan animasi */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              custom={i}
              variants={techVariants}
              className="px-4 py-2 rounded-full text-sm text-white/90 border border-purple-500/20 
                       bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm
                       shadow-lg shadow-purple-500/5"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;