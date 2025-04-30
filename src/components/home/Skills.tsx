import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 75 },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
    ]
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 90 },
      { name: 'GitHub', level: 85 },
    ]
  }
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-sm text-blue-600 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            I've developed a comprehensive skill set throughout my journey as a developer. Here's an overview of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem-Solving', 'Adaptability', 'Teamwork', 'Project Management', 'Communication', 
              'Efficiency', 'Time Management', 'Critical Thinking'].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
