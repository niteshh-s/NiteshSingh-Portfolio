import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
              <Badge variant="outline" className="w-fit">{project.techStack[0]}</Badge>
              <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex items-center gap-4">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="p-0">See Details <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                </a>
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
