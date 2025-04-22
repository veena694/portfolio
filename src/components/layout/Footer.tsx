import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Veena</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer specializing in MERN stack development.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/veena694" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/veena-sardana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:veenasardana1@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }} className="text-gray-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }} className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('skills');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }} className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }} className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: veenasardana1@gmail.com</p>
            <p className="text-gray-300 mb-2">Phone: +91 8053745320</p>
            <p className="text-gray-300">Location: Haryana, India</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Veena. Made with <Heart size={16} className="mx-1 text-red-500" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;