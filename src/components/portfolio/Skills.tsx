import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  // md:grid-cols-2 results in a 2-column grid on medium screens and up.
  // The first item spans 2 columns, creating a 2x1 rectangle at the top.
  // The next two items are standard 1x1 cards.
  // The fourth item is a 2x2 card, taking up a larger block.
  // The last two items fill the remaining space.
  const gridClasses = [
    "md:col-span-2",
    "",
    "",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2",
    "",
  ];

  return (
    <AnimatedSection id="skills">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          What I&apos;m Good At
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          A look at my technical expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map(([category, skills], index) => (
          <Card
            key={index}
            className={cn(
              "flex flex-col justify-center border-2 p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary",
              gridClasses[index]
            )}
          >
            <CardHeader className="p-0 text-center">
              <CardTitle className="text-xl font-semibold mb-4">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;

    