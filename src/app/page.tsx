// src/app/page.tsx
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';

// Lazy load sections
const Hero = dynamic(() => import('@/components/sections/Hero/Hero'), {
  loading: () => <div className="min-h-screen bg-[#0B1121]" /> // Loading placeholder
});

const Expertise = dynamic(() => import('@/components/sections/Expertise/Expertise'), {
  loading: () => <div className="min-h-screen bg-[#0B1121]" />
});

const Projects = dynamic(() => import('@/components/sections/Projects/Projects'), {
  loading: () => <div className="min-h-screen bg-[#0B1121]" />
});

const Contact = dynamic(() => import('@/components/sections/Contact/Contact'), {
  loading: () => <div className="min-h-screen bg-[#0B1121]" />
});

export default function Home() {
  return (
    <main className="bg-[#0B1121]">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}