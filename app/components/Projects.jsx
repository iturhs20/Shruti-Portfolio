'use client';

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const ProjectsGrid = () => {
  const [filter] = useState("all");

  const projects = [
    {
      title: "MediSense",
      description:
        "AI-powered healthcare platform designed to simplify medical reports, provide intelligent health insights, and enable real-time monitoring using advanced AI techniques.",
      image: "/Medisense-Image.webp",
      category: "ai",
      technologies: ["MERN Stack", "LangChain", "RAG", "Graph RAG", "LLaMA", "MongoDB", "Flask"],
      liveUrl: "https://medi-sense.vercel.app/",
      githubUrl: "https://github.com/iturhs20",
      featured: true,
    },
    {
      title: "Zenith-AI",
      description:
        "GenAI-powered banking assistant that simplifies everyday banking tasks through conversational AI and intelligent automation.",
      image: "/Zenith-AI.webp",
      category: "web",
      technologies: ["Next.js", "Flask", "LangChain", "ChromaDB", "Tailwind CSS"],
      liveUrl: "https://zenith-ai-bob.vercel.app/",
      githubUrl: "https://github.com/iturhs20",
      featured: true,
    },
    {
      title: "Creative Techscapes",
      description:
        "Portfolio and services website for a software development agency offering web, mobile, AI/ML, and blockchain solutions.",
      image: "/creative-techscapes.webp",
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://creative-techscapes.vercel.app/",
      githubUrl: "https://github.com/iturhs20",
      featured: true,
    },
    {
      title: "Nimiora Scents",
      description:
        "A modern e-commerce website for a fragrance brand, designed with a clean aesthetic, smooth user experience, and responsive layout.",
      image: "/Nimora.png",
      category: "web",
      technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Vercel"],
      liveUrl: "https://scents-website.vercel.app/",
      githubUrl: "https://github.com/iturhs20",
      featured: true,
    },
    {
      title: "Mental Health Prediction System",
      description:
        "AI-based application that predicts mental health conditions using machine learning models, providing early insights and decision support with high accuracy.",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      category: "ai",
      technologies: ["Django", "Flask", "Machine Learning", "LangChain", "Gemini API", "Python"],
      liveUrl: "", // keep empty if not live
      githubUrl: "https://github.com/iturhs20",
    },
    {
      title: "Life Balance 360",
      description:
        "AI-powered healthcare application designed to monitor health conditions, provide insights, and support overall well-being through intelligent analysis.",
      image: "/LB-360.webp",
      category: "ai",
      technologies: ["React", "Next.js", "Flask", "Machine Learning", "AI Analytics", "Firebase"],
      liveUrl: "https://life-balance-360.vercel.app/",
      githubUrl: "https://github.com/iturhs20",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image / Gradient */}
              <div className="relative h-48 overflow-hidden">
                {project.image?.startsWith("linear-gradient") ? (
                  <div className="absolute inset-0" style={{ backgroundImage: project.image }} />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105
                              saturate-125 contrast-110 brightness-105"
                    priority={!!project.featured}
                  />
                )}

                {/* Soft glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />

                {/* Better overlay (not dull) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent group-hover:from-slate-950/40 transition-all duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 rounded-full text-slate-900 hover:bg-white transition-all hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 rounded-full text-slate-900 hover:bg-white transition-all hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                    Featured
                  </span>
                )}
              </div>


              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

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
      </div>
    </section>
  );
};

export default ProjectsGrid;
