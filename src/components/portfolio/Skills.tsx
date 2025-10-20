import { portfolioData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  return (
    <AnimatedSection id="skills">
       <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
        <p className="mt-2 text-lg text-muted-foreground">My technical expertise.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {skillCategories.map(([category, skills], index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6">
                    <h3 className="mb-4 text-xl font-semibold">{category}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex"/>
        <CarouselNext className="hidden sm:flex"/>
      </Carousel>
      <p className="mt-4 text-center text-sm text-muted-foreground sm:hidden">
        Swipe to see more skills
      </p>
    </AnimatedSection>
  );
};

export default Skills;
