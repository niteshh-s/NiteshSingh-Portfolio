"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = portfolioData.navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} passHref>
      <span
        className={`relative cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
          activeLink === href ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        {children}
        {activeLink === href && (
          <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"></span>
        )}
      </span>
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-background'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" passHref>
          <span className="font-headline text-xl font-bold text-primary cursor-pointer">{portfolioData.initials}</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {portfolioData.navLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.name}</NavLink>
          ))}
        </nav>
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
