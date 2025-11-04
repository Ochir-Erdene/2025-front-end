import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export default function CVWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/Tailwind', level: 90 },
    { name: 'SQL', level: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto animate-pulse"></div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Your Name
          </h1>
          <p className="text-2xl text-purple-300 mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Mail size={20} /> your@email.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Phone size={20} /> +1 (234) 567-890
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Code className="text-purple-400" /> About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg leading-relaxed text-gray-300">
              Passionate full stack developer with 5+ years of experience building scalable web applications. 
              I specialize in React, Node.js, and modern web technologies. I love creating beautiful, 
              user-friendly interfaces and solving complex problems with elegant code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-purple-400" /> Skills
          </h2>
          <div className="grid gap-6">
            {skills.map((skill, idx) => (
              <div key={skill.name} 
                   className="transform transition-all duration-500 hover:translate-x-2"
                   style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-purple-400" /> Experience
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Senior Developer', company: 'Tech Corp', period: '2021 - Present', desc: 'Led development of enterprise applications' },
              { title: 'Full Stack Developer', company: 'StartUp Inc', period: '2019 - 2021', desc: 'Built scalable web platforms' },
              { title: 'Junior Developer', company: 'Digital Agency', period: '2018 - 2019', desc: 'Developed client websites' }
            ].map((job, idx) => (
              <div key={idx} 
                   className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">{job.title}</h3>
                <p className="text-lg text-gray-300 mb-2">{job.company}</p>
                <p className="text-sm text-purple-300 mb-3">{job.period}</p>
                <p className="text-gray-400">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-purple-400" /> Education
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Bachelor of Computer Science</h3>
            <p className="text-lg text-gray-300 mb-2">University Name</p>
            <p className="text-sm text-purple-300">2014 - 2018</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}