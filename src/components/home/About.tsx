import React from 'react';
import { Award, Monitor, Code, Palette } from 'lucide-react';
import resumeFile from './resume.pdf';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            I'm a passionate Full Stack Developer with expertise in MERN stack development and a strong foundation in computer science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="About Veena Sardana" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              I build modern web applications
            </h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing B.Tech in Computer Science at Lovely Professional University, I have gained extensive experience in full-stack development through various internships and projects. My focus is on creating efficient, scalable, and user-friendly applications using modern technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Monitor className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Frontend Development</h4>
                <p className="text-gray-600 text-sm">
                  Building responsive UIs with React.js, HTML5, and CSS3
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Code className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Backend Development</h4>
                <p className="text-gray-600 text-sm">
                  Creating robust APIs with Node.js and Express.js
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Palette className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Database Management</h4>
                <p className="text-gray-600 text-sm">
                  Working with MongoDB and MySQL databases
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Award className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Problem Solving</h4>
                <p className="text-gray-600 text-sm">
                  Strong analytical and debugging skills
                </p>
              </div>
            </div>
            
            <a 
  href={resumeFile} 
  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;