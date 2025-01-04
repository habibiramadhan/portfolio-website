// src/app/page.tsx
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Expertise from '@/components/sections/Expertise/Expertise';
import Projects from '@/components/sections/Projects/Projects';
import Contact from '@/components/sections/Contact/Contact';

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