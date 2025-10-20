import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "./Section";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { degree, university, graduation, cgpa } = portfolioData.education;

  return (
    <Section id="education">
        <div className="mb-12 text-center fade-in-up">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Education</h2>
            <p className="mt-2 text-lg text-muted-foreground">My academic background.</p>
        </div>
      <Card className="fade-in-up mx-auto max-w-2xl transform-gpu transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animationDelay: '200ms'}}>
        <CardHeader className="items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <GraduationCap className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardTitle className="font-headline text-2xl">{degree}</CardTitle>
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
    </Section>
  );
};

export default Education;
