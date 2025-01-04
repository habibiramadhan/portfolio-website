// src/app/page.tsx
import Hero from '@/components/sections/Hero/Hero';
import Expertise from '@/components/sections/Expertise/Expertise';
import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
  return (
    <main className="bg-[#0B1121]">
      <Hero />
      <Expertise />
      <Projects />
    </main>
  );
}