import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => handleNavClick('hero')}>
              Veena
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/veena694" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/veena-sardana" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:veenasardana1@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen py-5' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </button>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/veena694" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/veena-sardana" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:veenasardana1@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;