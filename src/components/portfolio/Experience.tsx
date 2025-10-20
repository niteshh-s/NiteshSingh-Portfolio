import { portfolioData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experience</h2>
        <p className="mt-2 text-lg text-muted-foreground">My professional journey and what I've accomplished.</p>
      </div>
      <div className="space-y-4">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="rounded-lg border-2 border-transparent bg-background transition-all duration-300 hover:border-primary hover:shadow-xl">
            <div className="flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="font-medium text-muted-foreground">{job.company}</p>
              </div>
              <p className="font-mono text-sm uppercase text-muted-foreground">{job.period}</p>
            </div>
            {index < portfolioData.experience.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
