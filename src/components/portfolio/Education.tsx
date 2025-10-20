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
        <p className="mt-2 text-lg text-muted-foreground">My academic background.</p>
      </div>
      <Card className="mx-auto max-w-2xl border-2 transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
            <GraduationCap className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-semibold">{degree}</CardTitle>
          <CardDescription className="text-lg">{university}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-around text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-muted-foreground">Graduation</span>
            <span className="font-medium">{graduation}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-semibold text-muted-foreground">CGPA</span>
            <span className="font-medium">{cgpa}</span>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default Education;
