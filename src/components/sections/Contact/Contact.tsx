// src/components/sections/Contact/Contact.tsx
'use client'

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-32 min-h-screen overflow-hidden bg-[#0B1121]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/50 via-gray-900/80 to-[#0B1121]/90" />
      
      {/* Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          >
            Get In Touch
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
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <a href="mailto:your@email.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                         border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="font-medium text-gray-200">Email</h3>
                  <p className="text-gray-400">your@email.com</p>
                </div>
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                    { 
                    icon: Github, 
                    href: "#", 
                    label: "GitHub",
                    gradient: "from-purple-600 to-pink-600"
                    },
                    { 
                    icon: Linkedin, 
                    href: "#", 
                    label: "LinkedIn",
                    gradient: "from-blue-600 to-purple-600"
                    },
                    { 
                    icon: Mail, 
                    href: "#", 
                    label: "Email",
                    gradient: "from-pink-600 to-purple-600"
                    }
                ].map(({ icon: Icon, href, label, gradient }) => (
                    <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${gradient} 
                                hover:shadow-lg hover:shadow-purple-500/25 
                                transition-all duration-300 group relative`}
                    >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-6 h-6 text-white relative z-10" />
                    <span className="sr-only">{label}</span>
                    </motion.a>
                ))}
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-900/50 rounded-xl border border-purple-500/10 
                             focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                             transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-900/50 rounded-xl border border-purple-500/10 
                             focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                             transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-4 bg-gray-900/50 rounded-xl border border-purple-500/10 
                             focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                             transition-all duration-300"
                  ></textarea>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl 
                         text-white font-medium flex items-center justify-center gap-2
                         hover:opacity-90 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;