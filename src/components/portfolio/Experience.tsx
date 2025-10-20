import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "./Section";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <Section id="experience" className="bg-muted/30">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl animate-fade-in">Professional Journey</h2>
        <p className="mt-2 text-lg text-muted-foreground animate-fade-in-delay">My career path and accomplishments.</p>
      </div>
      <div className="relative flex flex-col gap-12">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block animate-timeline-line"></div>
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="relative pl-12 md:pl-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0 md:-translate-x-1/2 animate-timeline-icon" style={{ animationDelay: `${index * 200 + 100}ms` }}>
              <job.icon />
            </div>
            <div className="md:ml-12">
              <Card className="transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
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
