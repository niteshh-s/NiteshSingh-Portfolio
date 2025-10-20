import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24 lg:py-28", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
