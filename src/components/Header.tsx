import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/book', label: 'The Book' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-medium ease-cinematic ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-3xl text-foreground hover:text-primary transition-colors duration-medium"
          >
            Dr. Lauree Brown
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-sm tracking-widest uppercase transition-colors duration-medium underline-slide ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default">
              Free Sample
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-medium ease-cinematic ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-sm tracking-widest uppercase transition-colors duration-medium ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="default" className="mt-4 w-full">
              Free Sample
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
