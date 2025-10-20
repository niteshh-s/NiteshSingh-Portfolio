import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { degree, university, graduation, cgpa } = portfolioData.education;

  return (
    <AnimatedSection id="education">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Education</h2>
        <p className="mt-2 text-base text-muted-foreground">My academic background.</p>
      </div>
      <Card className="mx-auto max-w-xl border-2 transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="items-center text-center p-5">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
            <GraduationCap className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl font-semibold">{degree}</CardTitle>
          <CardDescription className="text-base">{university}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-around text-center p-5">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-semibold text-muted-foreground">Graduation</span>
            <span className="text-sm font-medium">{graduation}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-semibold text-muted-foreground">CGPA</span>
            <span className="text-sm font-medium">{cgpa}</span>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Education;
