import React from 'react';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    title: 'C4.5 model(backend)',
    description: 'A Rust implementation of the C4.5 decision tree algorithm for classification, featuring support for continuous attributes, gain ratio splitting, and pruning',
    techStack: ['Rust'],
    githubUrl: 'https://github.com/jesee-kuya/dt',
  },
  {
    title: 'LightGBM model(backend)',
    description: 'A Go implementation of a LightGBM-style gradient boosting model for structured data, including data preprocessing, tree building, boosting, evaluation, and prediction.',
    techStack: ['Go'],
    githubUrl: 'https://github.com/jesee-kuya/LightGBM',
  },
  {
    title: 'Hakikaride',
    description: 'Secure and transparent tracking system.',
    techStack: ['Html', 'css', 'Javascript', 'Go'],
    githubUrl: 'https://github.com/jesee-kuya/transport-system',
    demoUrl: 'https://hakikaride.onrender.com/'
  },
  {
    title: 'Vintage',
    description: 'a comprehensive entertainment discovery platform where users can search for movies and TV shows, view detailed information, manage personal watchlists, and discover trending content ',
    techStack: 'TypeScript, Css, JavaScript, React, Next.js',
    githubUrl: 'https://github.com/jesee-kuya/vintage',
    demoUrl: 'https://vintagereview.netlify.app/'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in various technologies and domains.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          {projects.map((project, index) => (
            <div key={project.title} className="min-w-[300px] flex-shrink-0">
              <ProjectCard {...project} delay={index * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
