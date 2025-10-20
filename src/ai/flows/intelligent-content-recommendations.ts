'use server';

/**
 * @fileOverview A flow to provide intelligent content recommendations based on the user's portfolio.
 *
 * - `getRelevantContentRecommendations` - A function that generates content recommendations based on the provided portfolio information.
 * - `RelevantContentRecommendationsInput` - The input type for the `getRelevantContentRecommendations` function.
 * - `RelevantContentRecommendationsOutput` - The return type for the `getRelevantContentRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RelevantContentRecommendationsInputSchema = z.object({
  profileSummary: z
    .string()
    .describe('A summary of the professional profile, including skills and experience.'),
  skills: z
    .array(z.string())
    .describe('A list of skills mentioned in the portfolio.'),
  experience: z
    .array(z.string())
    .describe('A list of job experiences with descriptions of responsibilities and achievements.'),
  projects: z
    .array(z.string())
    .describe('A list of personal projects with descriptions and tech stacks.'),
});

export type RelevantContentRecommendationsInput = z.infer<
  typeof RelevantContentRecommendationsInputSchema
>;

const RelevantContentRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      title: z.string().describe('The title of the recommended content.'),
      url: z.string().url().describe('The URL of the recommended content.'),
      description: z.string().describe('A brief description of the content.'),
      relevanceScore: z
        .number()
        .min(0)
        .max(1)
        .describe('A score indicating the relevance of the content to the portfolio.'),
    })
  ),
});

export type RelevantContentRecommendationsOutput = z.infer<
  typeof RelevantContentRecommendationsOutputSchema
>;

export async function getRelevantContentRecommendations(
  input: RelevantContentRecommendationsInput
): Promise<RelevantContentRecommendationsOutput> {
  return intelligentContentRecommendationsFlow(input);
}

const recommendationsPrompt = ai.definePrompt({
  name: 'recommendationsPrompt',
  input: {schema: RelevantContentRecommendationsInputSchema},
  output: {schema: RelevantContentRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide relevant content recommendations for users viewing a software developer's portfolio.

  Given the following information about the developer, suggest relevant articles, tutorials, or open-source contributions that would be of interest to someone exploring related topics and deepening their understanding.

  Profile Summary: {{{profileSummary}}}
  Skills: {{#each skills}}{{{this}}}, {{/each}}
  Experience: {{#each experience}}{{{this}}}, {{/each}}
  Projects: {{#each projects}}{{{this}}}, {{/each}}

  Ensure the recommendations are diverse, covering a range of relevant topics, and provide a brief description of each recommendation along with a relevance score (0-1).
  Provide the output in JSON format according to the schema.`,
});

const intelligentContentRecommendationsFlow = ai.defineFlow(
  {
    name: 'intelligentContentRecommendationsFlow',
    inputSchema: RelevantContentRecommendationsInputSchema,
    outputSchema: RelevantContentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await recommendationsPrompt(input);
    return output!;
  }
);
