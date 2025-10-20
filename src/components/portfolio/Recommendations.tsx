import { getRelevantContentRecommendations, type RelevantContentRecommendationsInput } from "@/ai/flows/intelligent-content-recommendations";
import { portfolioData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <AnimatedSection id="recommendations">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Content For You</h2>
            <p className="mt-2 text-lg text-destructive">Could not load recommendations at this time.</p>
        </div>
      </AnimatedSection>
    );
  }

  const recommendations = recommendationsOutput?.recommendations ?? [];

  if (recommendations.length === 0) {
    return null; // Don't render the section if there are no recommendations
  }

  return (
    <AnimatedSection id="recommendations">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What I'm Offering</h2>
        <p className="mt-2 text-lg text-muted-foreground">AI-powered recommendations based on my profile.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, index) => (
          <Card 
            key={index} 
            className="flex flex-col border-2 p-6 transition-shadow duration-300 hover:shadow-lg"
          >
            <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold">{rec.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0 pt-4">
              <CardDescription>{rec.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-0 pt-6">
              <a href={rec.url} target="_blank" rel="noopener noreferrer" className="group">
                <Button variant="link" className="p-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default Recommendations;
