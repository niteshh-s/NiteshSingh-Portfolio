import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon, Laptop } from "lucide-react";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects">
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
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
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
                            <Button variant="outline" size="sm" className="gap-2"><Laptop />Live App</Button>
                        </a>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2"><Github />GitHub</Button>
                        </a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2"><LinkIcon />Demo</Button>
                        </a>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </Section>
  );
};

export default Projects;
