"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = [...portfolioData.navLinks, {name: 'Contact', href: '#contact'}].map(link => document.querySelector(link.href));
      let currentSection = '#about';

      for (const section of sections) {
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = `#${section.id}`;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href:string; children: React.ReactNode }) => (
    <a
        href={href}
        className={cn(
            'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
            activeLink === href ? 'text-primary' : 'text-foreground'
        )}
    >
        {children}
    </a>
  );

  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300', isScrolled ? ' bg-background/80 backdrop-blur-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" passHref>
          <span className="font-headline text-2xl font-bold text-foreground cursor-pointer">N.S.</span>
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-6 pt-10">
                {portfolioData.navLinks.map(link => (
                  <Link href={link.href} key={link.href} passHref>
                    <span className="cursor-pointer text-lg">{link.name}</span>
                  </Link>
                ))}
                 <a href="#contact">
                    <Button variant="default" className="w-full">Contact</Button>
                 </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
