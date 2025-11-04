import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Code, LocateFixed } from 'lucide-react';

// --- MOCK CV DATA ---
// Replace this data with your actual CV details.
const CV_DATA = {
    name: "Alex Johnson",
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    summary: "Highly skilled and results-oriented Senior Full Stack Developer with 8+ years of experience in designing, developing, and deploying scalable web applications using React, Next.js, and modern cloud architectures. Passionate about clean code, performance optimization, and mentoring junior developers.",
    contact: {
        email: "alex.johnson@example.com",
        phone: "(555) 123-4567",
        linkedin: "linkedin.com/in/alexjohnson",
        github: "github.com/alexjohnsondev"
    },
    skills: [
        "JavaScript (ES6+)", "React", "Next.js", "TypeScript", "Node.js", "Express.js",
        "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS/Lambda", "Docker", "Git"
    ],
    experience: [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovators Inc.",
            years: "2020 - Present",
            description: "Led development of a high-traffic e-commerce platform. Increased API response time by 40% through architectural refactoring. Mentored a team of 5 developers on React and Next.js best practices."
        },
        {
            title: "Software Developer",
            company: "Digital Solutions Co.",
            years: "2017 - 2020",
            description: "Developed and maintained internal inventory management systems using Angular and C#. Implemented automated testing procedures, reducing critical bugs by 25%."
        }
    ],
    education: [
        {
            degree: "M.S. Computer Science",
            institution: "Stanford University",
            years: "2015 - 2017"
        },
        {
            degree: "B.S. Software Engineering",
            institution: "University of Washington",
            years: "2011 - 2015"
        }
    ]
};

// --- Custom Components for Animation and Structure ---

// Reusable component for a staggered, subtle fade-in effect on mount
const FadeInDiv = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set a small timeout to trigger the fade-in after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-700 ease-out transform ${className} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
            {children}
        </div>
    );
};

// CV Section Component
const CVSection = ({ icon: Icon, title, children, delay = 0 }) => (
    <FadeInDiv delay={delay} className="mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
        <h2 className="flex items-center text-2xl font-bold text-gray-900 border-b-2 border-indigo-400 pb-2 mb-4">
            <Icon className="w-6 h-6 mr-3 text-indigo-600" />
            {title}
        </h2>
        {children}
    </FadeInDiv>
);

// Experience/Education Item Component
const ItemCard = ({ title, subTitle, years, description }) => (
    <div className="mb-4 p-4 border-l-4 border-indigo-400 pl-4 transition-all duration-300 hover:bg-indigo-50/70 rounded-md">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <span className="text-sm font-medium text-indigo-600 bg-indigo-100 py-1 px-3 rounded-full shadow-sm">{years}</span>
        </div>
        <p className="text-gray-800 italic mb-2">{subTitle}</p>
        {description && <p className="text-gray-800 text-sm">{description}</p>}
    </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
    const data = CV_DATA;

    // Injecting CSS keyframes for a subtle background animation
    const customStyles = `
        @keyframes subtle-glow {
            0%, 100% { background-color: #f7f9fc; }
            50% { background-color: #f0f4ff; }
        }
        .animate-subtle-glow {
            animation: subtle-glow 15s ease-in-out infinite alternate;
        }
    `;

    return (
        <div className="min-h-screen font-sans bg-gray-50 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
            <style>{customStyles}</style>

            <div className="max-w-4xl w-full">
                {/* Header Section (Animated) */}
                <FadeInDiv delay={0} className="bg-indigo-700 text-white p-8 sm:p-10 rounded-2xl mb-8 shadow-2xl relative overflow-hidden animate-subtle-glow">
                    {/* Subtle design element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600 opacity-20 rounded-full transform translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight">{data.name}</h1>
                    <p className="text-xl sm:text-2xl font-light opacity-90 mb-4">{data.title}</p>

                    <div className="flex flex-wrap gap-4 text-sm font-medium">
                        <div className="flex items-center">
                            <LocateFixed className="w-4 h-4 mr-2" />
                            {data.location}
                        </div>
                        <a href={`mailto:${data.contact.email}`} className="flex items-center hover:text-indigo-200 transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            {data.contact.email}
                        </a>
                        <a href={`tel:${data.contact.phone}`} className="flex items-center hover:text-indigo-200 transition-colors">
                            <Phone className="w-4 h-4 mr-2" />
                            {data.contact.phone}
                        </a>
                        <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-200 transition-colors">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                        </a>
                        <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-200 transition-colors">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </a>
                    </div>
                </FadeInDiv>

                {/* Summary Section */}
                <CVSection icon={Briefcase} title="Professional Summary" delay={200}>
                    <p className="text-gray-900 leading-relaxed">{data.summary}</p>
                </CVSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Skills Section */}
                    <div className="md:col-span-1">
                        <CVSection icon={Code} title="Skills" delay={400} className="h-full">
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="text-sm bg-indigo-100 text-indigo-700 font-medium py-1 px-3 rounded-full shadow-md transition-transform duration-200 hover:scale-105 hover:bg-indigo-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CVSection>
                    </div>

                    {/* Education Section */}
                    <div className="md:col-span-2">
                        <CVSection icon={GraduationCap} title="Education" delay={600} className="h-full">
                            {data.education.map((edu, index) => (
                                <ItemCard
                                    key={index}
                                    title={edu.degree}
                                    subTitle={edu.institution}
                                    years={edu.years}
                                />
                            ))}
                        </CVSection>
                    </div>
                </div>

                {/* Experience Section */}
                <CVSection icon={Briefcase} title="Work Experience" delay={800}>
                    {data.experience.map((exp, index) => (
                        <ItemCard
                            key={index}
                            title={exp.title}
                            subTitle={exp.company}
                            years={exp.years}
                            description={exp.description}
                        />
                    ))}
                </CVSection>

                {/* Footer / Copyright */}
                <FadeInDiv delay={1000} className="mt-10 pt-4 text-center text-sm text-gray-700 border-t border-gray-200">
                    <p>Designed and built with React, Next.js, and Tailwind CSS.</p>
                </FadeInDiv>
            </div>
        </div>
    );
}
