// src/components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';

// Data navigasi - gampang buat nambah/kurangin menu
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Ngatur efek background header pas scroll
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  // Setup intersection observer buat detect section yang aktif
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe semua section yang ada
    navigation.forEach(({ name }) => {
      const element = document.getElementById(name.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => {
      navigation.forEach(({ name }) => {
        const element = document.getElementById(name.toLowerCase());
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Fungsi buat scroll halus ke section yang dipilih
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Tinggi header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                ${isScrolled ? 'bg-[#0B1121]/80 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            HR
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`relative text-sm transition-all duration-300 hover:text-purple-400
                          ${activeSection === item.name.toLowerCase() 
                            ? 'text-purple-400' 
                            : 'text-gray-300'}`}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Tombol Contact di Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                       text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} 
                   bg-[#0B1121]/95 backdrop-blur-lg border-t border-gray-800`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`text-sm transition-all duration-300 hover:text-purple-400 
                          ${activeSection === item.name.toLowerCase() 
                            ? 'text-purple-400' 
                            : 'text-gray-300'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
                       text-white font-medium hover:opacity-90 transition-all duration-300 text-center"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;