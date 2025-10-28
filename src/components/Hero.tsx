
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          profileRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    
    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16" style={{ backgroundColor: '#fff7f1' }}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff7f1] to-white/80 z-0"></div>
      
      {/* Larger background patterns */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-kunal-blue/5 opacity-70 rounded-bl-[350px] z-0 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-kunal-accent/5 rounded-tr-[300px] z-0 hidden lg:block" />
      
      {/* Subtle wave pattern */}
      <div className="absolute w-full h-48 bottom-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTAwIDYwIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Ik0wIDQ0TDUwIDQ2QzEwMCA0OCAxMTAgNDggMjAwIDQ0QzMwMCA0MCA0MDAgMTAgNTAwIDEwQzYwMCAxMCA3MDAgMjAgODAwIDM1QzgwMCAzNSA5MDAgNDUgOTUwIDUwTDEwMDAgNTVMOTUwIDU1QzkwMCA1NSA5MDAgNTUgODAwIDU2QzcwMCA1NyA2MDAgNTggNDAwIDU4QzIwMCA1OCAxMDAgNTggNTAgNThMMCA1OFoiIGZpbGw9IiMzMTgyY2UwNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9zdmc+')] opacity-30 z-0" />
      
      {/* Larger geometric shapes */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-kunal-accent/5 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-kunal-blue/5 hidden lg:block" />
      <div className="absolute top-40 left-1/4 w-24 h-24 rounded-full border border-kunal-accent/20 hidden lg:block" />
      <div className="absolute bottom-40 right-1/4 w-32 h-32 rounded-full border border-kunal-blue/20 hidden lg:block" />
      
      {/* Animated dots */}
      <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-kunal-accent animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-kunal-blue animate-pulse hidden lg:block" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-kunal-accent/70 animate-pulse hidden lg:block" />
      
      {/* Enhanced gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-kunal-blue/10 via-transparent to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-kunal-accent/10 via-transparent to-transparent z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="space-y-2">
            <p className="text-kunal-accent font-medium tracking-wider">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-kunal-blue">
              Hi, I'm <span className="text-kunal-accent">Kunal Katke</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-kunal-gray-dark">
              AI/ML Enthusiast | Data Analyst | Developer
            </h2>
          </div>
          
          <div className="h-0.5 w-24 bg-kunal-accent"></div>
          
          <p className="text-lg text-kunal-gray-dark max-w-lg">
            I'm a passionate engineer focused on solving real-world problems through data science, machine learning, and modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button onClick={() => scrollToSection('contact')} className="bg-kunal-accent hover:bg-kunal-blue text-white px-6 transition-all duration-300 shadow-md hover:shadow-lg">
              Contact Me
            </Button>
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="border-kunal-accent text-kunal-accent hover:bg-kunal-accent hover:text-white group px-6 transition-all duration-300">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div ref={profileRef} className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-kunal-accent/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-kunal-blue/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Profile image container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kunal-blue/20 to-kunal-accent/20"></div>
                
                {/* Profile image */}
                <img 
                  src="https://i.postimg.cc/MpQSmnHh/P-Photo.jpg" 
                  alt="Kunal Katke" 
                  className="w-full h-full object-cover rounded-full p-2 z-10 relative shadow-xl"
                />
                
                {/* Highlight effect */}
                <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-white/20 rounded-full blur-md"></div>
                <div className="absolute bottom-4 left-4 w-1/3 h-1/3 bg-kunal-accent/10 rounded-full blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
