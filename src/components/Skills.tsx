
import React from 'react';
import SkillItem, { Skill } from './SkillItem';
import { Code, Database, Server, Globe, Layout, Cpu, BookOpen, GitBranch } from 'lucide-react';

const skillsData: Skill[] = [
  {
    name: "Frontend Development",
    level: 9,
    icon: <Layout size={16} />,
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "React.js",
    level: 9,
    icon: <Code size={16} />,
    color: "from-blue-500 to-blue-300"
  },
  {
    name: "Node.js",
    level: 8,
    icon: <Server size={16} />,
    color: "from-blue-400 to-blue-200"
  },
  {
    name: "Django",
    level: 8,
    icon: <Server size={16} />,
    color: "from-blue-700 to-blue-500"
  },
  {
    name: "Flask",
    level: 8,
    icon: <Server size={16} />,
    color: "from-blue-600 to-blue-300"
  },
  {
    name: "Java",
    level: 7,
    icon: <Code size={16} />,
    color: "from-blue-800 to-blue-600"
  },
  {
    name: "PostgreSQL",
    level: 7,
    icon: <Database size={16} />,
    color: "from-blue-800 to-blue-600"
  },
  {
    name: "Python",
    level: 8,
    icon: <Code size={16} />,
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "TensorFlow",
    level: 7,
    icon: <Cpu size={16} />,
    color: "from-blue-500 to-blue-300"
  },
  {
    name: "Machine Learning",
    level: 7,
    icon: <Cpu size={16} />,
    color: "from-blue-700 to-blue-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-blue-950/10">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2 text-center">
            Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Technical Skills
          </h3>
          <p className="text-blue-400/80 max-w-2xl mx-auto text-center">
            A showcase of my technical skills developed through education and project work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillItem 
              key={skill.name} 
              skill={skill}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "Java"] },
              { label: "Frameworks", items: ["React", "Node.js", "Flask", "JUnit", "WordPress", "Material UI", "FastAPI", "Django"] },
              { label: "Development Tools", items: ["Git", "Docker", "TensorFlow", "Google Cloud Platform", "VS Code", "PyCharm"] },
              { label: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "TailwindCSS", "Spotify API"] }
            ].map((category, index) => (
              <div key={index} className="backdrop-blur-sm bg-blue-950/10 p-6 rounded-lg border border-blue-500/10">
                <h4 className="text-lg font-medium mb-4 text-blue-100">{category.label}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-blue-400/80 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
