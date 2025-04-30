import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from './pic.jpg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative bg-gradient-rainbow overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-slideIn">
            <p className="text-blue-600 font-medium mb-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <span className="inline-block mb-2">Veena</span>
              <br />
              <span className="text-blue-600">Full Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              A passionate developer specializing in MERN stack development with a focus on creating efficient and user-friendly web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover-lift"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover-lift"
              >
                View Projects
              </a>
            </div>

            <div className="flex space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
              <a 
                href="https://github.com/veena694" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/veena-sardana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:veenasardana1@gmail.com" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-float">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-borderPulse">
            <img 
  src={profilePic} 
  alt="Veena" 
  className="w-full h-full object-cover"
/>


            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
