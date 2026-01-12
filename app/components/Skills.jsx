'use client'
import React, { useState } from 'react';
import { Code, Database, Layout, Server, Smartphone, Cloud, Brain } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'ai', label: 'AI & Gen AI', icon: Brain },
    { id: 'cloud', label: 'Cloud', icon: Cloud }
  ];

  const skills = [
    { name: 'React', level: 90, category: 'frontend', color: '#61DAFB' },
    { name: 'Next.js', level: 85, category: 'frontend', color: '#FFFFFF' },
    { name: 'TypeScript', level: 88, category: 'frontend', color: '#3178C6' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', color: '#06B6D4' },
    { name: 'JavaScript', level: 90, category: 'frontend', color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: '#E34F26' },

    { name: 'Node.js', level: 85, category: 'backend', color: '#339933' },
    { name: 'Express', level: 82, category: 'backend', color: '#FFFFFF' },
    { name: 'Python', level: 75, category: 'backend', color: '#3776AB' },
    { name: 'REST APIs', level: 88, category: 'backend', color: '#FF6C37' },

    { name: 'MongoDB', level: 85, category: 'database', color: '#47A248' },
    { name: 'Firebase', level: 85, category: 'database', color: '#61DAFB' },
    { name: 'ChromaDB', level: 85, category: 'database', color: '#2496ED' },
    { name: 'Pinecone', level: 80, category: 'database', color: '#F7DF1E' },
    { name: 'MySQL', level: 78, category: 'database', color: '#4479A1' },
    // { name: 'Redis', level: 70, category: 'database', color: '#DC382D' },

    { name: 'TensorFlow', category: 'ai', color: '#A78BFA' },
    { name: 'LangChain', category: 'ai', color: '#339933' },
    { name: 'OpenAI', category: 'ai', color: '#2496ED' },
    { name: 'Gemini', category: 'ai', color: '#F05032' },

    { name: 'AWS', level: 72, category: 'cloud', color: '#FF9900' },
    { name: 'Docker', level: 75, category: 'cloud', color: '#2496ED' },
    { name: 'Git', level: 90, category: 'cloud', color: '#F05032' }
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background */}
      {/* <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 blur-3xl opacity-10" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skillCategories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-base min-w-[140px] transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <Icon size={20} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div
                className={`
                  relative px-8 py-4 rounded-2xl font-semibold text-lg
                  bg-slate-950/50 backdrop-blur-sm border border-slate-800
                  cursor-pointer
                  transition-all duration-300
                  ${hoveredSkill === index
                    ? 'scale-110 shadow-2xl shadow-purple-500/40 -translate-y-2 border-opacity-50'
                    : 'hover:scale-105 shadow-lg'}
                `}
                style={{ 
                  color: skill.color,
                  borderColor: hoveredSkill === index ? `${skill.color}50` : undefined
                }}
              >
                {skill.name}

                {/* Shine */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  style={{
                    transform: 'translateX(-100%)',
                    animation: hoveredSkill === index ? 'shine 0.6s' : 'none'
                  }}
                />
              </div>

              {/* Glow */}
              {hoveredSkill === index && (
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-50 -z-10"
                  style={{ backgroundColor: skill.color }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-lg">
            Always exploring new technologies and expanding my toolkit
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;