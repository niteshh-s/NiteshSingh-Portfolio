"use client";

import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  const gridClasses = [
    "md:col-span-2", // Frontend
    "md:col-span-3 row-span-2", // Backend
    "md:col-span-1", // DevOps
    "md-col-span-2", // Database
    "md:col-span-1", // Cloud
    "md:col-span-3 row-span-2", // Others
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {skillCategories.map(([category, skills], index) => {
            let categoryClass = '';
            switch(category) {
                case 'Backend':
                    categoryClass = 'md:col-span-3 md:row-span-2';
                    break;
                case 'Others':
                    categoryClass = 'md:col-span-3 md:row-span-2';
                    break;
                case 'Frontend':
                    categoryClass = 'md:col-span-2';
                    break;
                case 'Database':
                    categoryClass = 'md:col-span-2';
                    break;
                case 'DevOps':
                    categoryClass = 'md:col-span-2';
                    break;
                case 'Cloud Technologies':
                    categoryClass = 'md:col-span-1';
                    break;
                default:
                    categoryClass = 'md:col-span-1';
            }
            if(category === 'Backend'){
                return (
                     <Card
                        key={index}
                        className={cn(
                        "flex flex-col border-2 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary md:col-span-3 md:row-span-2"
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
                )
            }
             if(category === 'Others'){
                return (
                     <Card
                        key={index}
                        className={cn(
                        "flex flex-col border-2 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary md:col-span-3 md:row-span-2"
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
                )
            }
        })}
        <div className="md:col-span-2 grid grid-cols-1 gap-4">
             {skillCategories.map(([category, skills], index) => {
                if(category === 'Frontend'){
                    return (
                        <Card
                            key={index}
                            className={cn(
                            "flex flex-col border-2 p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary"
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
                    )
                }
            })}
            <div className="grid grid-cols-3 gap-4">
                {skillCategories.map(([category, skills], index) => {
                    if(category === 'DevOps' || category === 'Database' || category === "Cloud Technologies"){
                        return (
                            <Card
                                key={index}
                                className={cn(
                                "flex flex-col border-2 p-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary",
                                category === 'Database' ? 'col-span-2' : 'col-span-1'
                                )}
                            >
                                <CardHeader className="p-0 text-center">
                                <CardTitle className="text-base font-semibold mb-2">
                                    {category}
                                </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow p-0">
                                <div className="flex flex-wrap justify-center gap-1">
                                    {skills.map((skill, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                        {skill}
                                    </Badge>
                                    ))}
                                </div>
                                </CardContent>
                            </Card>
                        )
                    }
                })}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
