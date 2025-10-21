import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
        <p className="mt-2 text-base text-muted-foreground">A selection of my work and projects.</p>
      </div>
      <div className="space-y-20">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={cn("flex flex-col gap-3", index % 2 === 1 && "md:order-2")}>
              <Badge variant="outline" className="w-fit text-sm">{project.techStack.join(', ')}</Badge>
              <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.links.live && (
                  <Link href={project.links.live} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                    Live Application <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                    Github <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
                {project.links.demo && (
                  <Link href={project.links.demo} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                    Demo <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
             <div className={cn("bg-muted p-6 flex items-center justify-center rounded-lg min-h-[300px]", index % 2 === 1 && "md:order-1")}>
                {project.title === "Real Time Chat Application" ? (
                  <div className="relative h-full w-full group">
                     <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
                        <div className="relative row-span-2 rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:z-10">
                            <Image src="/chat1.png" alt="Chat app screenshot 1" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:z-10">
                            <Image src="/chat2.png" alt="Chat app screenshot 2" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:z-10">
                            <Image src="/chat3.png" alt="Chat app screenshot 3" fill className="object-cover" />
                        </div>
                    </div>
                  </div>
                ) : (
                    <div className="w-full h-60 rounded-md bg-background flex items-center justify-center text-muted-foreground">
                        Project Visual
                    </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
