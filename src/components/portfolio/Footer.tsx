import { portfolioData } from "@/lib/data";
import { LeetCodeIcon } from "./Icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-headline text-lg font-semibold">{portfolioData.name}</p>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {portfolioData.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          {portfolioData.contact.links.map((link) => (
            <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125">
              {link.name === 'Leetcode' ? <LeetCodeIcon /> : <link.icon className="h-6 w-6"/>}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground/60">
        <p>&copy; {new Date().getFullYear()} Nitesh Kumar Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
