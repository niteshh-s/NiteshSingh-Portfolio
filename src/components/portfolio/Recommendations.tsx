import { getRelevantContentRecommendations, type RelevantContentRecommendationsInput } from "@/ai/flows/intelligent-content-recommendations";
import { portfolioData } from "@/lib/data";
import Section from "./Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit } from "lucide-react";

async function Recommendations() {
  const input: RelevantContentRecommendationsInput = {
    profileSummary: portfolioData.profile,
    skills: Object.values(portfolioData.skills).flat(),
    experience: portfolioData.experience.map(exp => `${exp.role} at ${exp.company}: ${exp.details.join(' ')}`),
    projects: portfolioData.projects.map(proj => `${proj.title}: ${proj.details.join(' ')}`),
  };

  let recommendationsOutput;
  try {
    recommendationsOutput = await getRelevantContentRecommendations(input);
  } catch (error) {
    console.error("Failed to get content recommendations:", error);
    return (
      <Section id="recommendations" className="bg-muted/30">
        <div className="text-center">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Content For You</h2>
            <p className="mt-2 text-lg text-destructive">Could not load recommendations at this time.</p>
        </div>
      </Section>
    );
  }

  const recommendations = recommendationsOutput?.recommendations ?? [];

  if (recommendations.length === 0) {
    return null; // Don't render the section if there are no recommendations
  }

  return (
    <Section id="recommendations" className="bg-muted/30">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">Content For You</h2>
        <p className="mt-2 text-lg text-muted-foreground">AI-powered recommendations based on my profile.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, index) => (
          <Card key={index} className="flex flex-col transform-gpu transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
                <BrainCircuit className="h-8 w-8 text-accent mb-2" />
                <CardTitle>{rec.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{rec.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <a href={rec.url} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="p-0 group">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Recommendations;
