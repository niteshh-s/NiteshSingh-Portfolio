import { portfolioData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experience</h2>
        <p className="mt-2 text-base text-muted-foreground">My professional journey and what I've accomplished.</p>
      </div>
      <div className="space-y-10">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="rounded-lg border-2 border-transparent bg-background transition-all duration-300 hover:border-primary hover:shadow-xl hover:scale-[1.02] transform">
            <div className="flex flex-col items-start gap-3 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
              </div>
              <p className="font-mono text-xs uppercase text-muted-foreground">{job.period}</p>
            </div>
            <div className="p-5 pt-0">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {job.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                </ul>
            </div>
            {index < portfolioData.experience.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
