import React, { useState, useMemo } from "react";
import ProjectCard, { Project } from "./ProjectCard";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Stock Forecaster",
    description: "Developed an ML model using Python and LSTM algorithms that captures temporal patterns with 85% accuracy...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1740&q=80",
    tags: ["Python", "TensorFlow", "LSTM", "NLP", "Machine Learning"],
    githubRepo: "https://github.com/satvikgarimella/stock_forecaster"
  },
  {
    id: 2,
    title: "Health Tracker App",
    description: "Built a cross-platform mobile app using React Native and Django that supports both iOS and Android users...",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1740&q=80",
    tags: ["React Native", "Django", "PostgreSQL", "WebSocket", "Mobile"],
  },
  {
    id: 3,
    title: "Mood Music",
    description: "Built a fully functional music streaming platform using React.js and Spotify API...",
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&w=1740&q=80",
    tags: ["React.js", "Node.js", "Spotify API", "TensorFlow", "AI"],
    githubRepo: "https://github.com/satvikgarimella/MM-Mood-Music"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A mobile application built using React Native, designed to provide users with real-time weather updates...",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1740&q=80",
    tags: ["React Native", "OpenWeatherMap API", "Mobile", "UI/UX"],
    githubRepo: "https://github.com/satvikgarimella/Weather-app"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // Get all unique tags using useMemo for performance optimization
  const allTags = useMemo(() => Array.from(new Set(projectsData.flatMap(p => p.tags))), []);

  // Filter projects only when the filter state changes (optimization)
  const filteredProjects = useMemo(() => {
    return filter ? projectsData.filter(project => project.tags.includes(filter)) : projectsData;
  }, [filter]);

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
        <div className="flex flex-wrap justify-center gap-2 mb-12 text-center">
          <button
            onClick={() => setFilter(null)}
            aria-label="Show all projects"
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              filter === null ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              aria-label={`Filter projects by ${tag}`}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                filter === tag ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-secondary/80"
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
