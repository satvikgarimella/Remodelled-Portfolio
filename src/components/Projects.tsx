import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Stock Forecaster",
    description: "Developed an ML model using Python and LSTM algorithms that captures temporal patterns with 85% accuracy. Integrated technical indicators and NLP for news sentiment to enhance prediction accuracy. Built an automated data pipeline using pandas and NumPy for better-informed investment decisions.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Python", "TensorFlow", "LSTM", "NLP", "Machine Learning"],
    link: "#",
    githubRepo: "https://github.com/satvikgarimella/stock_forecaster"
  },
  {
    id: 2,
    title: "Health Tracker App",
    description: "Built a cross-platform mobile app using React Native and Django that supports both iOS and Android users. Implemented real-time data synchronization with WebSocket and PostgreSQL, achieving seamless updates and secure storage. Designed an intuitive UI with React Native components that increased user retention through improved UX.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["React Native", "Django", "PostgreSQL", "WebSocket", "Mobile"],
    link: "#"
  },
  {
    id: 3,
    title: "Mood Music",
    description: "Built a fully functional music streaming platform using React.js and Spotify API. Implemented authentication and playlist features with Node.js, delivering seamless music management. Currently developing an ML model using TensorFlow for emotion-based music suggestions to enhance music discovery.",
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["React.js", "Node.js", "Spotify API", "TensorFlow", "AI"],
    link: "#",
    githubRepo: "https://github.com/satvikgarimella/MM-Mood-Music"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A mobile application built using React Native, designed to provide users with real-time weather updates. By integrating the OpenWeatherMap API, the app fetches current weather conditions and forecasts based on the user's location or manually searched cities. Features a clean and responsive UI, leveraging native components for a seamless user experience.",
    image: "public/lovable-uploads/a9f2df42-1bea-4235-80d5-1488a18cc2f3.png",
    tags: ["React Native", "OpenWeatherMap API", "Mobile", "UI/UX"],
    link: "#",
    githubRepo: "https://github.com/satvikgarimella/Weather-app"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in design and development.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              filter === null 
                ? "bg-foreground text-background" 
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                filter === tag 
                  ? "bg-foreground text-background" 
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
