import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <AnimatedSection id="education">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Education</h2>
        <p className="mt-2 text-base text-muted-foreground">My academic background.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {portfolioData.education.map((edu, index) => (
          <Card key={index} className="flex flex-col border-2 transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="items-center text-center p-5">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl font-semibold">{edu.degree}</CardTitle>
              <CardDescription className="text-base">{edu.university}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center text-center p-5">
              <div className="flex justify-around w-full">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-muted-foreground">Graduation</span>
                  <span className="text-sm font-medium">{edu.graduation}</span>
                </div>
                {edu.cgpa && (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-semibold text-muted-foreground">CGPA</span>
                    <span className="text-sm font-medium">{edu.cgpa}</span>
                  </div>
                )}
                {edu.percentage && (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-semibold text-muted-foreground">Percentage</span>
                    <span className="text-sm font-medium">{edu.percentage}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
