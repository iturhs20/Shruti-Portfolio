'use clent'
import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computing (Artificial Intelligence)",
      institution: "Dublin Ciy University",
      location: "Dublin, Ireland",
      period: "Expected 2026",
      description: "Focused on Artificial Intelligence with strong emphasis on Machine Learning, Deep Learning, and scalable AI systems. Gaining hands-on experience through projects, coursework, and AI practicum.",
      achievements: [
        "Hands-on experience with LLMs, RAG pipelines, and cloud-based AI solutions",
        "Coursework in Machine Learning, Deep Learning, Data Analytics, and AI Practicum",
        "Strong focus on scalable systems and real-world AI applications"
      ],
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "University of Mumbai",
      location: "Mumbai, India",
      period: "2021 - 2025",
      description: "Strong foundation in computer engineering with focus on software development, algorithms, and data-driven applications, supported by hands-on projects and research work.",
      achievements: [
        "Awarded Best Innovative Solution for final year project MediSense",
        "Published two research papers in national and international conferences",
        "Winner at an international hackathon",
        "Received pre-incubation support for final year project MediSense",
        "Co-Lead, AlgoZenith Campus Connection Program"
      ],
      icon: BookOpen
    }
  ];

  // const courses = [
  //   "Advanced Web Development",
  //   "Data Structures & Algorithms",
  //   "Database Systems",
  //   "Software Architecture",
  //   "Cloud Computing",
  //   "Mobile App Development",
  //   "Machine Learning",
  //   "Cybersecurity"
  // ];

  return (
    <section id="education" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <edu.icon className="text-purple-400" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold text-lg mb-1">{edu.institution}</p>
                      <p className="text-slate-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      {/* <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                        {edu.grade}
                      </span> */}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{edu.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award size={18} className="text-purple-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        {/* <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-purple-400" size={28} />
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-center hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
              >
                {course}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EducationSection;