import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center group">
            <div className="h-14 w-40 relative overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Squadron Data Logo" 
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-text -ml-12 transition-colors hover:text-accent">Squadron Data</span>
          </a>
          
          <nav className={`
            md:flex md:space-x-8
            ${isMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 md:space-y-0' 
              : 'hidden'
            }
            md:relative md:bg-transparent md:shadow-none md:p-0
          `}>
            <a 
              href={isHomePage ? "#" : "/"} 
              className="font-medium hover:text-accent transition-colors"
              onClick={() => {
                if (!isHomePage) window.location.href = "/";
                setIsMenuOpen(false);
              }}
            >
              Home
            </a>
            <a 
              href={isHomePage ? "#about" : "/#about"} 
              className="font-medium hover:text-accent transition-colors"
              onClick={(e) => handleNavigation(e, 'about')}
            >
              About Us
            </a>
            <a 
              href={isHomePage ? "#services" : "/#services"} 
              className="font-medium hover:text-accent transition-colors"
              onClick={(e) => handleNavigation(e, 'services')}
            >
              Data & Analytics
            </a>
            <a 
              href={isHomePage ? "#team" : "/#team"} 
              className="font-medium hover:text-accent transition-colors"
              onClick={(e) => handleNavigation(e, 'team')}
            >
              Our Team
            </a>
            <a 
              href="/insights" 
              className="font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </a>
            <a 
              href="/careers" 
              className="font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a 
              href={isHomePage ? "#contact" : "/#contact"} 
              className="font-medium hover:text-accent transition-colors"
              onClick={(e) => handleNavigation(e, 'contact')}
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => handleNavigation(e, 'contact')}
              className="hidden md:inline-flex items-center bg-accent hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get in Touch
            </a>
            
            <button 
              className="md:hidden text-text hover:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;