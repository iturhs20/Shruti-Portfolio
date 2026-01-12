'use clent'
import React from 'react';
import { Award, ExternalLink, CheckCircle, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "Coursera",
      date: "Sept 2024",
      credentialId: "Coursera-NLP-Vector-Spaces",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/8KJPW7G5KEWO",
      status: "Completed",
      color: "from-blue-500 to-purple-500",
      description:
        "Gained hands-on experience with NLP techniques including text classification, embeddings, and vector space models."
    },
    {
      title: "AWS Academy Graduate – Cloud Developing",
      issuer: "AWS Academy",
      date: "April 2024",
      credentialId: "AWS-Academy-Cloud-Developing",
      verifyUrl: "https://www.credly.com/go/JSFh0WTj",
      status: "Completed",
      color: "from-orange-500 to-yellow-500",
      description:
        "Developed foundational skills in cloud computing, AWS services, and cloud-based application development."
    },
    {
      title: "React JS – Complete Guide for Frontend Web Development",
      issuer: "Udemy",
      date: "Aug 2024",
      credentialId: "UC-35c51ef5-3514-4768-9829-fa3be5128698",
      verifyUrl: "https://www.udemy.com/certificate/UC-35c51cf5-35f4-47b8-9a29-fa3be5128b98/",
      status: "Completed",
      color: "from-sky-500 to-blue-600",
      description:
        "Comprehensive hands-on course covering React fundamentals, components, hooks, state management, and modern frontend development practices."
    },
    {
      title: "Complete Data Science & Machine Learning Course",
      issuer: "Udemy",
      date: "Aug 2024",
      credentialId: "UC-ca418105-9e7f-4a22-9aba-fe80e0853673",
      verifyUrl: "https://www.udemy.com/certificate/UC-ca418f05-9e7f-4e22-9aba-fe80e0853673/",
      status: "Completed",
      color: "from-green-500 to-emerald-600",
      description:
        "Covered end-to-end data science workflow including data preprocessing, machine learning algorithms, and practical model building."
    },
    {
      title: "Master Course in Artificial Intelligence & Deep Learning 3.0",
      issuer: "Udemy",
      date: "Oct 2024",
      credentialId: "UC-ce92bccb-8288-4eab-a6ab-d3bf10e71d42",
      verifyUrl: "https://www.udemy.com/certificate/UC-ce92bccb-82e8-4eab-a6ab-d3bf10e71d42/",
      status: "Completed",
      color: "from-purple-500 to-pink-500",
      description:
        "Introduced core AI and deep learning concepts, neural networks, and practical applications of AI systems."
    }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Professional Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

              {/* Card Content */}
              <div className="p-6">
                {/* Badge Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                    <Award className="text-white" size={24} />
                  </div>
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                    <CheckCircle size={14} />
                    {cert.status}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-semibold mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Date & Credential */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="text-slate-500 text-xs">
                    ID: {cert.credentialId}
                  </div>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {certifications.length}+
            </div>
            <p className="text-slate-400">Professional Certifications</p>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-slate-400">Active & Up-to-date</p>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-slate-400">Top Technology Vendors</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CertificationsSection;