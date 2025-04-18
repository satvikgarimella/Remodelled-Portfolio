
import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  githubRepo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/project/${project.id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500 ease-out",
        "h-[300px] md:h-[350px] lg:h-[400px]",
        "flex flex-col justify-end",
        "shadow-md hover:shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out"
        style={{ 
          backgroundImage: `url(${project.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ease-out"
      />
      
      {/* Content */}
      <div className="relative z-10 p-6 transition-all duration-500 ease-out">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 transition-all duration-500 ease-out">
          {project.title}
        </h3>
        
        <p 
          className={cn(
            "text-white/70 text-sm line-clamp-2 transition-all duration-500 ease-out",
            isHovered ? "opacity-100" : "opacity-70"
          )}
        >
          {project.description}
        </p>
        
        <div className={cn(
          "flex gap-3 mt-4 transition-all duration-500 ease-out",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              View Project <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          )}
          
          {project.githubRepo && (
            <a 
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub <Github className="ml-1 w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
