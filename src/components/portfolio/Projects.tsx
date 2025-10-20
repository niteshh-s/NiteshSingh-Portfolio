import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Case Study</h2>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my work and projects.</p>
      </div>
      <div className="space-y-24">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
            <div className={cn("flex flex-col gap-4", index % 2 === 1 && "md:order-2")}>
              <Badge variant="outline" className="w-fit">{project.techStack.join(', ')}</Badge>
              <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-6">
                <Link href={project.links.live} target="_blank" className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
                  Live Application <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href={project.links.github} target="_blank" className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
                  Github <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href={project.links.demo} target="_blank" className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
                  Demo <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
             <div className={cn("bg-muted p-8 flex items-center justify-center rounded-lg", index % 2 === 1 && "md:order-1")}>
                <div className="w-full h-64 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
                    Project Visual
                </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
