import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "./Section";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { degree, university, graduation, cgpa } = portfolioData.education;

  return (
    <Section id="education">
        <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Education</h2>
            <p className="mt-2 text-lg text-muted-foreground">My academic background.</p>
        </div>
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="items-center text-center">
          <GraduationCap className="h-12 w-12 text-accent" />
          <CardTitle className="font-headline text-2xl">{degree}</CardTitle>
          <CardDescription className="text-lg">{university}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between text-center">
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
    </Section>
  );
};

export default Education;
