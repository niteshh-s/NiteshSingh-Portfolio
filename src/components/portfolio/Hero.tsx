import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Check, Download, Phone } from "lucide-react";

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
             <span className="text-3xl">👋</span>
             <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Hello! I'm Nitesh</h1>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-muted-foreground">Full Stack Developer</h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            {portfolioData.profile}
          </p>
          <ul className="mt-5 space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary"/>
                <span>Scalable architecture and clean code.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary"/>
                <span>Seamless user experience across devices.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary"/>
                <span>Agile collaboration and rapid iteration.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary"/>
                <span>Continuous integration and deployment workflows.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary"/>
                <span>User testing, feedback, and validation</span>
              </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="default" className="gap-2">
                Contact me <Phone className="h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button size="default" variant="outline" className="gap-2">
                Download CV <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            {profileImage && (
              <div className="relative h-[360px] w-[290px] sm:h-[400px] sm:w-[320px] md:h-[450px] md:w-[360px]">
                <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint={profileImage.imageHint}
                />
                <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-lg border-2 border-dashed border-foreground/30"></div>
                <div className="absolute -right-6 -top-6 hidden h-20 w-20 items-center justify-center rounded-full bg-background md:flex">
                    <p className="animate-spin-slow text-xs uppercase">[ Full Stack Developer ]</p>
                </div>
                 <div className="absolute -bottom-5 right-0 -z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <p className="text-base font-bold">NS</p>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
