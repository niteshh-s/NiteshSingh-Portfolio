import { Suspense } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[1600px] bg-background text-foreground">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(40%_40%_at_50%_0%,_rgba(200,100,255,0.1)_0%,_rgba(255,255,255,0)_100%)]"></div>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}
