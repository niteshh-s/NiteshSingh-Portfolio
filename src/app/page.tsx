import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
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
