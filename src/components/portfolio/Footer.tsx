import { portfolioData } from "@/lib/data";
import { LeetCodeIcon } from "./Icons";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="py-8">
      <Separator className="mb-8"/>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Nitesh Kumar Singh. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          {portfolioData.contact.links.map((link) => (
            <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground transition-colors duration-300 hover:text-primary">
              {link.name === 'Leetcode' ? <LeetCodeIcon /> : <link.icon className="h-6 w-6"/>}
            </a>
          ))}
           <span className="text-sm font-medium text-muted-foreground">
            {portfolioData.contact.email}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
