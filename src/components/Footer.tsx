
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kunal-blue text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kunal Katke</h3>
            <p className="text-gray-300 mb-4">
              AI/ML Enthusiast | Data Analyst | Developer
            </p>
            <p className="text-gray-300">
              Solving real-world problems through data science and machine learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/kunal-katke-973328206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/KunalKatke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/kunalkatke46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300">
              Email: kunal.p.katkework@gmail.com<br />
              Phone: +91 9404643274<br />
              Location: Mumbai, India
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Kunal Katke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
