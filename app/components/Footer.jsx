'use client'
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/iturhs20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shrutipatil20/", label: "LinkedIn" }
  ];

  // const quickLinks = [
  //   { label: "Home", href: "#home" },
  //   { label: "About", href: "#about" },
  //   { label: "Skills", href: "#skills" },
  //   { label: "Projects", href: "#projects" },
  //   { label: "Contact", href: "#contact" }
  // ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Shruti Patil
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack & AI Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-6 h-px bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
                  patilshruti7273@gmail.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                Open to new opportunities and collaborations. Feel free to reach out!
              </p>
              {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Download Resume
              </button> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-2">
            © {currentYear} Shruti Patil. Made with <Heart size={16} className="text-pink-500 animate-pulse" /> and lots of coffee
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Custom Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;