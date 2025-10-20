import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Check, Download, Send } from "lucide-react";

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
             <span className="text-4xl">👋</span>
             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hello! I'm Nitesh</h1>
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-muted-foreground">Full Stack Developer</h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {portfolioData.profile}
          </p>
          <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary"/>
                <span>Product must be authentic</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary"/>
                <span>Solve pain points elegantly</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary"/>
                <span>User testing, feedback, and validation</span>
              </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${portfolioData.contact.email}`}>
              <Button size="lg" className="gap-2">
                Let's Talk <Send className="h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button size="lg" variant="outline" className="gap-2">
                Download CV <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            {profileImage && (
              <div className="relative h-[400px] w-[320px] sm:h-[450px] sm:w-[360px] md:h-[500px] md:w-[400px]">
                <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    data-ai-hint={profileImage.imageHint}
                />
                <div className="absolute -bottom-8 -left-8 -z-10 h-full w-full rounded-xl border-4 border-dashed border-foreground/30"></div>
                <div className="absolute -right-8 -top-8 hidden h-24 w-24 items-center justify-center rounded-full bg-background md:flex">
                    <p className="animate-spin-slow text-sm uppercase">[ Full Stack Developer ]</p>
                </div>
                 <div className="absolute -bottom-6 right-0 -z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <p className="text-lg font-bold">NS</p>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
