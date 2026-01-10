'use client'
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading the development of scalable web applications using React, Node.js, and AWS. Managing a team of 5 developers and implementing best practices.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers to mid-level positions"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "Jun 2021 - Dec 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects including e-commerce platforms and CRM systems. Collaborated with cross-functional teams.",
      achievements: [
        "Built 5+ responsive web applications from scratch",
        "Improved code quality by implementing testing frameworks",
        "Increased client satisfaction score by 25%"
      ],
      technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Studio",
      location: "Austin, TX",
      period: "Mar 2020 - May 2021",
      type: "Full-time",
      description: "Focused on creating stunning user interfaces and seamless user experiences. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Redesigned main product resulting in 35% increase in user engagement",
        "Created reusable component library used across 10+ projects",
        "Reduced bug reports by 50% through thorough testing"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "Web Agency Co.",
      location: "Remote",
      period: "Jan 2019 - Feb 2020",
      type: "Contract",
      description: "Started my professional journey building websites for small businesses. Learned fundamental web development practices and client communication.",
      achievements: [
        "Delivered 15+ client websites on time and within budget",
        "Achieved 95% client satisfaction rate",
        "Learned modern development practices and workflows"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden md:block" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-20">
              <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="group p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 justify-start">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-purple-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-950 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75" />
                </div>

                {/* Icon Badge */}
                <div className="hidden md:flex w-5/12 justify-center items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                    <Briefcase className="text-purple-400" size={28} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;