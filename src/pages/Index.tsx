
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import AIMentorship from "@/components/AIMentorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if(position.top < window.innerHeight * 0.8) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load as well
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <AIMentorship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
