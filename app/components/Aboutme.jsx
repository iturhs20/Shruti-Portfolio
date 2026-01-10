'use client'
import React from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  // const highlights = [
  //   {
  //     icon: Code2,
  //     title: "Clean Code",
  //     description: "Writing maintainable and scalable solutions"
  //   },
  //   {
  //     icon: Palette,
  //     title: "Design Focus",
  //     description: "Creating beautiful user experiences"
  //   },
  //   {
  //     icon: Rocket,
  //     title: "Fast Delivery",
  //     description: "Efficient project execution"
  //   },
  //   {
  //     icon: Users,
  //     title: "Collaboration",
  //     description: "Strong team player and communicator"
  //   }
  // ];

  // const techStack = [
  //   { name: "React", category: "Frontend" },
  //   { name: "Next.js", category: "Frontend" },
  //   { name: "TypeScript", category: "Language" },
  //   { name: "Tailwind CSS", category: "Styling" },
  //   { name: "Node.js", category: "Backend" },
  //   { name: "Express", category: "Backend" },
  //   { name: "MongoDB", category: "Database" },
  //   { name: "PostgreSQL", category: "Database" },
  //   { name: "Git", category: "Tools" },
  //   { name: "Docker", category: "Tools" },
  //   { name: "AWS", category: "Cloud" },
  //   { name: "Figma", category: "Design" }
  // ];

  return (
    <section id="about" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Photo */}
          <div className="relative group">
            <div className="relative z-10">
              {/* Glassmorphic Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-2">
                {/* Placeholder for Image - Replace with your actual image */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
                  {/* Replace this div with: <img src="/your-photo.jpg" alt="Shruti Patil" className="w-full h-full object-cover rounded-xl" /> */}
                  <img src="/Shruti.jpeg" alt="Shruti Patil" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-purple-400">Shruti Patil</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              I’m a curious and passionate developer who enjoys turning ideas into meaningful digital experiences.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over the past few years, I’ve worked on projects ranging from smart web applications to impactful tech solutions, always focusing on simplicity and usability.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I’m not coding, I love exploring new technologies, learning continuously, and finding creative ways to solve real-world problems.
            </p>

            {/* Stats or CTA */}
            <div className="flex gap-4 pt-4">
              <a href="Shruti_Resume.pdf" download>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Download CV
              </button>
              </a>
              <button onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 font-medium hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-purple-400" size={24} />
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div> */}

        {/* Tech Stack */}
        {/* <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group px-5 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
              >
                <span className="text-slate-300 font-medium group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-slate-500 text-xs ml-2">• {tech.category}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;