import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "./Section";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="mb-16 text-center fade-in-up">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">Professional Journey</h2>
        <p className="mt-2 text-lg text-muted-foreground">My career path and accomplishments.</p>
      </div>
      <div className="relative flex flex-col gap-12">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block" />
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="relative pl-12 md:pl-0">
            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0 md:-translate-x-1/2">
              <job.icon className="h-6 w-6"/>
            </div>
            <div className="md:ml-12">
              <Card className="transform-gpu transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <CardTitle className="font-headline text-2xl">{job.role}</CardTitle>
                    <div className="text-sm text-muted-foreground">{job.period}</div>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
