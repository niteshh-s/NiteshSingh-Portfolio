import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import { Mail } from "lucide-react";

const LeetCodeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M13.483 0a1.5 1.5 0 0 0-1.5 1.5v8.948a1.5 1.5 0 0 0 1.5 1.5h8.948a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 0 0-1.5-1.5h-8.948zm0 2.813h8.948v7.135h-8.948V2.813zM1.5 12.052a1.5 1.5 0 0 0-1.5 1.5v8.948a1.5 1.5 0 0 0 1.5 1.5h8.948a1.5 1.5 0 0 0 1.5-1.5v-8.948a1.5 1.5 0 0 0-1.5-1.5H1.5zM3 14.865h5.948v5.635H3v-5.635z" />
    </svg>
);


const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <Section id="about" className="bg-muted/30">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex flex-col items-start space-y-6 md:order-1 animate-fade-in-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {portfolioData.name}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            {portfolioData.profile}
          </p>
          <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${portfolioData.contact.email}`}>
                <Button variant="default" className="gap-2 transition-transform duration-300 hover:scale-105">
                    <Mail /> Contact Me
                </Button>
              </a>
              <div className="flex items-center gap-4">
                {portfolioData.contact.links.map((link) => (
                  <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
                    {link.name === 'Leetcode' ? <LeetCodeIcon /> : <link.icon />}
                  </a>
                ))}
              </div>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2 animate-fade-in-right">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={400}
              height={400}
              className="h-64 w-64 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 md:h-80 md:w-80 lg:h-96 lg:w-96"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
