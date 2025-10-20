import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { Mail, ArrowDown, Code } from "lucide-react";
import { LeetCodeIcon } from "./Icons";

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <AnimatedSection id="about" className="pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto text-center">
        <div className="fade-in-up mb-4" style={{ animationDelay: '0.2s' }}>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Full Stack Developer</span>
        </div>
        <h1 className="fade-in-up font-headline text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl" style={{ animationDelay: '0.4s' }}>
          Nitesh Kumar <span className="text-primary">Singh</span>
        </h1>
        <p className="fade-in-up mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl" style={{ animationDelay: '0.6s' }}>
          {portfolioData.profile}
        </p>
        <div className="fade-in-up mt-8 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.8s' }}>
            <a href={`mailto:${portfolioData.contact.email}`}>
              <Button size="lg" className="gap-2 transition-transform duration-300 hover:scale-110">
                  <Mail /> Get In Touch
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="gap-2 transition-transform duration-300 hover:scale-110">
                  <Code /> View Work
              </Button>
            </a>
        </div>
         <div className="fade-in-up mt-10 flex items-center justify-center gap-6" style={{ animationDelay: '1s' }}>
            {portfolioData.contact.links.map((link) => (
              <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
                {link.name === 'Leetcode' ? <LeetCodeIcon /> : <link.icon className="h-6 w-6"/>}
              </a>
            ))}
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#skills" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
       </div>
    </AnimatedSection>
  );
};

export default Hero;
