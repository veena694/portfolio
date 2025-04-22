import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'AI-Powered Recipe Generator',
    description: 'An AI-based recipe app using OpenAI API to generate unique recipes from user-input ingredients. Features advanced filtering for dietary needs and favorite-saving functionality.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['React', 'Node.js', 'OpenAI API', 'CSS'],
    liveUrl: 'https://ai-recipe-genrator-8chx.vercel.app/',
    githubUrl: 'https://github.com/veena694/AI-Recipe-Genrator',
  },
  {
    id: 2,
    title: 'Note.me – Full Stack Note-Taking App',
    description: 'A MERN stack note-taking application with complete CRUD functionality and JWT authentication. Features role-based access control and optimized MongoDB queries.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    githubUrl: 'https://github.com/veena694/note.me',
  },
  {
    id: 3,
    title: 'Weather Web Application',
    description: 'A responsive weather application providing real-time updates for global locations using OpenWeather API. Features automatic geolocation and temperature unit conversion.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['React', 'OpenWeather API', 'CSS'],
    liveUrl: 'https://weather-app-alpha-pearl-51.vercel.app/',
    githubUrl: 'https://github.com/veena694/weather-app',
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Here are some of my recent projects. Each one represents unique challenges and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;