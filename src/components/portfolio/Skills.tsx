import { portfolioData } from "@/lib/data";
import { DiamondIcon } from "./Icons";
import { Separator } from "../ui/separator";

const Skills = () => {
  const allSkills = Object.values(portfolioData.skills).flat();
  return (
    <section id="skills" className="overflow-hidden border-y bg-primary text-primary-foreground">
        <div className="relative flex h-28 -translate-x-1/2 animate-marquee-infinite items-center [animation-play-state:running]">
            {allSkills.map((skill, index) => (
                <div key={index} className="mx-8 flex items-center gap-8 text-xl font-semibold">
                    <span>{skill}</span>
                    <DiamondIcon className="h-4 w-4" />
                </div>
            ))}
             {allSkills.map((skill, index) => (
                <div key={`${index}-2`} className="mx-8 flex items-center gap-8 text-xl font-semibold">
                    <span>{skill}</span>
                    <DiamondIcon className="h-4 w-4" />
                </div>
            ))}
        </div>
    </section>
  );
};

export default Skills;
