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
        "py-16 md:py-24 lg:py-28 transition-opacity duration-1000 ease-in-out",
        inView ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <div className={cn(
          "transition-transform duration-1000 ease-in-out",
          inView ? 'translate-y-0' : 'translate-y-10',
      )}>
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
