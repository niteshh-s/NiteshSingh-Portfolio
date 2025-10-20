import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="bg-muted/50">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">My Projects</h2>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my work.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {portfolioData.projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex h-full flex-col transform-gpu transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="transition-colors hover:bg-primary/20">{tech}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                        {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2 transition-transform duration-300 hover:scale-105"><Laptop />Live App</Button>
                        </a>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2 transition-transform duration-300 hover:scale-105"><Github />GitHub</Button>
                        </a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2 transition-transform duration-300 hover:scale-105"><LinkIcon />Demo</Button>
                        </a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-12 transition-transform duration-300 hover:scale-110" />
        <CarouselNext className="-right-4 md:-right-12 transition-transform duration-300 hover:scale-110" />
      </Carousel>
    </AnimatedSection>
  );
};

export default Projects;
