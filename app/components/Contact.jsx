'use client';

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xykkyyej");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "patilshruti7273@gmail.com",
      link: "mailto:patilshruti7273@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+353 0894291886",
      link: "tel:+3530894291886",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dublin, Ireland",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/iturhs20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shrutipatil20/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message — I’ll get back to you soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                      <info.icon className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-400 hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <h4 className="text-white font-semibold">Currently Available</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Open to freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {state.succeeded ? (
              <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/10">
                <p className="text-green-300 font-semibold text-lg">Message sent ✅</p>
                <p className="text-slate-300 mt-2">
                  Thanks for reaching out! I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-slate-300 font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-300 font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                >
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                  <Send size={18} />
                </button>

                {state.errors?.length > 0 && (
                  <p className="text-red-400 text-sm">
                    Please fix the errors above and try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
