"use client";

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type AnimatedSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const AnimatedSection = ({ id, className, children }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "w-full py-16 md:py-24 lg:py-28 transition-all duration-700 ease-out",
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
