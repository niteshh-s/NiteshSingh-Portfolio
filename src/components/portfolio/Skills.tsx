"use client";

import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  const frontendSkills = skillCategories.find(([cat]) => cat === 'Frontend');
  const backendSkills = skillCategories.find(([cat]) => cat === 'Backend');
  const othersSkills = skillCategories.find(([cat]) => cat === 'Others');
  const devopsSkills = skillCategories.find(([cat]) => cat === 'DevOps');
  const databaseSkills = skillCategories.find(([cat]) => cat === 'Database');

  const SkillCard = ({ category, skills, className }: { category: string, skills: string[], className?: string }) => (
    <Card
      className={cn(
        "flex flex-col border-2 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-primary h-full",
        className
      )}
    >
      <CardHeader className="p-0 text-center">
        <CardTitle className="text-lg font-semibold mb-3">
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

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
      <div className="grid grid-cols-6 grid-rows-3 gap-4 max-w-4xl mx-auto">
        {backendSkills && <SkillCard category={backendSkills[0]} skills={backendSkills[1]} className="col-span-4"/>}
        {devopsSkills && <SkillCard category={devopsSkills[0]} skills={devopsSkills[1]} className="col-span-2"/>}

        {frontendSkills && <SkillCard category={frontendSkills[0]} skills={frontendSkills[1]} className="col-span-3"/>}
        {databaseSkills && <SkillCard category={databaseSkills[0]} skills={databaseSkills[1]} className="col-span-3"/>}

        {othersSkills && <SkillCard category={othersSkills[0]} skills={othersSkills[1]} className="col-span-6"/>}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
