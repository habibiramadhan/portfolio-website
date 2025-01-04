// src/app/page.tsx
import Hero from '@/components/sections/Hero/Hero';
import Expertise from '@/components/sections/Expertise/Expertise';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Expertise />
    </main>
  );
}