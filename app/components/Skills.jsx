'use client'
import React, { useState } from 'react';
import { Code, Database, Layout, Server, Smartphone, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'cloud', label: 'Cloud', icon: Cloud }
  ];

  const skills = [
    { name: 'React', level: 90, category: 'frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', level: 85, category: 'frontend', color: 'from-slate-600 to-slate-800' },
    { name: 'TypeScript', level: 88, category: 'frontend', color: 'from-blue-600 to-blue-700' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', color: 'from-teal-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, category: 'frontend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
    
    { name: 'Node.js', level: 85, category: 'backend', color: 'from-green-600 to-green-700' },
    { name: 'Express', level: 82, category: 'backend', color: 'from-slate-500 to-slate-700' },
    { name: 'Python', level: 75, category: 'backend', color: 'from-blue-500 to-yellow-500' },
    { name: 'REST APIs', level: 88, category: 'backend', color: 'from-purple-500 to-pink-500' },
    
    { name: 'MongoDB', level: 85, category: 'database', color: 'from-green-500 to-green-600' },
    { name: 'PostgreSQL', level: 80, category: 'database', color: 'from-blue-600 to-blue-700' },
    { name: 'MySQL', level: 78, category: 'database', color: 'from-orange-500 to-orange-600' },
    { name: 'Redis', level: 70, category: 'database', color: 'from-red-500 to-red-600' },
    
    { name: 'React Native', level: 75, category: 'mobile', color: 'from-cyan-500 to-blue-600' },
    { name: 'Flutter', level: 65, category: 'mobile', color: 'from-blue-400 to-blue-600' },
    
    { name: 'AWS', level: 72, category: 'cloud', color: 'from-orange-500 to-orange-600' },
    { name: 'Docker', level: 75, category: 'cloud', color: 'from-blue-500 to-blue-600' },
    { name: 'Git', level: 90, category: 'cloud', color: 'from-orange-600 to-red-600' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-lg">
            Always learning and expanding my skill set. Open to new technologies and challenges!
          </p>
        </div>
      </div>

      {/* Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;