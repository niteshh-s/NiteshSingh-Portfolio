import { portfolioData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "./Section";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">My Skillset</h2>
        <p className="mt-2 text-lg text-muted-foreground">Technologies and tools I work with.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <Card key={category} className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
