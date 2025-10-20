"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRight, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="group flex items-center gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">{children}</span>
        <span className="text-sm text-muted-foreground group-hover:text-primary">What I do</span>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
    </Link>
  );

  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300', isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : '')}>
      <div className="flex h-24 items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          it's me
        </Link>
        <div className="hidden md:flex items-center gap-8">
            <Link href="#projects" className="group">
              <div className="font-semibold">My Projects</div>
              <div className="text-sm text-muted-foreground">See all of my nice project I have done</div>
            </Link>
            <Link href="#about" className="group">
              <div className="font-semibold">About Me</div>
              <div className="text-sm text-muted-foreground">Learn about my self what I do</div>
            </Link>
            <Link href="#contact" className="group">
              <div className="font-semibold">Contact me</div>
              <div className="text-sm text-muted-foreground">
                <span>{portfolioData.contact.email}</span>
                <span className="mx-2">|</span>
                <span>+91 {portfolioData.contact.phone}</span>
              </div>
            </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
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
