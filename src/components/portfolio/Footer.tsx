import { portfolioData } from "@/lib/data";

const LeetCodeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M13.483 0a1.5 1.5 0 0 0-1.5 1.5v8.948a1.5 1.5 0 0 0 1.5 1.5h8.948a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 0 0-1.5-1.5h-8.948zm0 2.813h8.948v7.135h-8.948V2.813zM1.5 12.052a1.5 1.5 0 0 0-1.5 1.5v8.948a1.5 1.5 0 0 0 1.5 1.5h8.948a1.5 1.5 0 0 0 1.5-1.5v-8.948a1.5 1.5 0 0 0-1.5-1.5H1.5zM3 14.865h5.948v5.635H3v-5.635z" />
    </svg>
);


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-headline text-lg font-semibold">{portfolioData.name}</p>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-sm text-primary-foreground/80 transition-colors hover:text-accent">
            {portfolioData.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          {portfolioData.contact.links.map((link) => (
            <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="transition-all duration-300 hover:text-accent hover:scale-125">
              {link.name === 'Leetcode' ? <LeetCodeIcon /> : <link.icon />}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-sm text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Nitesh Kumar Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
