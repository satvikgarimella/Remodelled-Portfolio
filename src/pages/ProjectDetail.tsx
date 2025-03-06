
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '@/components/Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              View Live <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
          
          {project.githubRepo && (
            <a 
              href={project.githubRepo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 transition-colors"
            >
              View on GitHub <Github className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-blue-400/80 mb-8">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
