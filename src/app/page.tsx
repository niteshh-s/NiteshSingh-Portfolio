import { Suspense } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Recommendations from '@/components/portfolio/Recommendations';
import Footer from '@/components/portfolio/Footer';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 md:py-24">
              <h2 className="mb-12 text-center font-headline text-4xl font-bold md:text-5xl">
                Content For You
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-48 w-full" />
              </div>
            </div>
          }
        >
          <Recommendations />
        </Suspense>
        <Education />
      </main>
      <Footer />
    </div>
  );
}
