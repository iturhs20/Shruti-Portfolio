'use client'
import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      category: "web",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "Mobile application providing accurate weather forecasts with beautiful UI and location-based services.",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "mobile",
      technologies: ["React Native", "OpenWeather API", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: false
    },
    {
      title: "Portfolio Website Builder",
      description: "SaaS platform allowing users to create stunning portfolio websites using drag-and-drop interface.",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      category: "web",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness mobile app with workout plans, calorie tracking, and progress visualization.",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Charts"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with scheduling and insights.",
      image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      category: "web",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Project Image/Gradient */}
              <div 
                className="relative h-48 overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-slate-900 hover:bg-white transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-slate-900 hover:bg-white transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 font-semibold hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            View All Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;