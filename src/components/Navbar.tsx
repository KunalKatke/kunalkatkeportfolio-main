
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-kunal-blue text-xl font-semibold">
          Kunal Katke
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-kunal-gray-dark hover:text-kunal-accent transition">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Projects</button>
          <button onClick={() => scrollToSection('services')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Contact</button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contact')} className="bg-kunal-accent hover:bg-kunal-blue text-white">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-kunal-blue focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-kunal-gray-dark hover:text-kunal-accent transition">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Projects</button>
            <button onClick={() => scrollToSection('services')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-kunal-gray-dark hover:text-kunal-accent transition">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-kunal-accent hover:bg-kunal-blue text-white w-full">
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
