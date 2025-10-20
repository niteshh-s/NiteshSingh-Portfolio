import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Case Study</h2>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my work and projects.</p>
      </div>
      <div className="grid gap-12">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="grid grid-cols-1 overflow-hidden border-2 md:grid-cols-2 md:gap-8">
            <div className="p-8">
              <CardHeader className="p-0">
                <Badge variant="outline" className="w-fit">{project.techStack[0]}</Badge>
                <CardTitle className="pt-2 text-2xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <CardDescription>{project.description}</CardDescription>
                 <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                    {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0 pt-6">
                <div className="flex items-center gap-4">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" className="gap-2"><Laptop />Live App</Button>
                    </a>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2"><Github />GitHub</Button>
                    </a>
                </div>
              </CardFooter>
            </div>
            <div className="bg-muted p-8 flex items-center justify-center">
                {/* Placeholder for project image */}
                <div className="w-full h-64 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
                    Project Visual
                </div>
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
