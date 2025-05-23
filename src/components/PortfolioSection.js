// PortfolioSection.js
import React, { useState } from 'react';

const projects = [
   {
    id: 1,
    title: 'UshankoApps',
    description: 'A modern, responsive landing page showcasing mobile apps developed by Ushanko Apps. Built with Next.js, the site features sections for app overviews, blog updates, user testimonials, and contact in…',
    imageUrl: '/project-images/ushankoweb.png', // Replace with your image path
    technologies: 'typescript',
    category: 'web,blo',
    link: 'https://ushank-apps.vercel.app/',
  },
  {
    id: 2,
    title: 'FearlessAuthentic',
    description: 'A blog website for a consulting welness group',
    imageUrl: '/project-images/fearlessauthentic.png',
    technologies: 'typescript',
    category: 'web',
    link: 'https://fearless-authentic-minds.vercel.app/',
  },
  {
    id: 3,
    title: 'sincerlykui',
    description: 'A personal blog site.',
    imageUrl: '/project-images/sincerely.png', // Replace with your image path
    technologies: 'javascript',
    category: 'blog',
    link: 'https://sincerelykui-ushanko-apps-projects.vercel.app/',
  },
  // Add more projects here
];

const categories = ['All', ...new Set(projects.map(project => project.category))];

const PortfolioSection = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const filterProjects = (category) => {
    if (category === 'All') {
      setFilteredProjects(projects);
      return;
    }
    const newProjects = projects.filter(project => project.category === category);
    setFilteredProjects(newProjects);
  };

  return (
    <div id="portfolio" className="bg-dark py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-12">
          <h2 className="text-4xl font-mysterious text-accent">
            My Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-slate-50 ">
            A showcase of my projects in coding, cloud computing, and DevOps.
          </p>
        </div>
        <div className="mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className="m-2 bg-accent hover:bg-neon text-white font-bold py-2 px-4 rounded"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={project.imageUrl} alt={project.title} />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{project.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <p className="text-gray-600 text-xs mb-4">{project.technologies}</p>
                <a href={project.link} className="inline-block bg-accent hover:bg-neon text-white font-bold py-2 px-4 rounded">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
