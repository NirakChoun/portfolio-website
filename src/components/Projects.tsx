'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Flashly",
    description: "An interactive flashcard application designed to help students learn and memorize information effectively. Features spaced repetition algorithms and progress tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Flask", "PostgreSQL", "Google Gemini AI"],
    github: "https://github.com/NirakChoun/flashly",
    demo: "https://flashly-rftw.vercel.app/",
    category: "Education"
  },
  {
    id: 2,
    title: "Gymness",
    description: "A comprehensive fitness tracking application that helps users monitor workouts, track progress, and achieve their fitness goals with personalized recommendations.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/NirakChoun/gymness",
    category: "Health & Fitness"
  },
  {
    id: 3,
    title: "XChange Bot",
    description: "An automated trading bot that analyzes market trends and executes trades based on predefined strategies. Features real-time data processing and risk management.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Telegram Bot API", "AsyncIO", "REST APIs"],
    github: "https://github.com/NirakChoun/xchange-bot",
    demo: "https://t.me/BotXChangeBot",
    category: "Finance"
  },
  {
    id: 4,
    title: "Euro 2024 Winner Prediction",
    description: "A machine learning model that predicts the winner of Euro 2024 based on historical data, team statistics, and player performance metrics.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "pandas", "Selenium", "Beautiful Soup"],
    github: "https://github.com/NirakChoun/Euro-2024-Winner-Prediction",
    category: "Machine Learning"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group"
  >
    {/* Project Image */}
    <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl opacity-20">
          {project.category === "Education" && "📚"}
          {project.category === "Health & Fitness" && "💪"}
          {project.category === "Finance" && "💰"}
          {project.category === "Machine Learning" && "🤖"}
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </span>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects that demonstrate my technical skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold cursor-pointer"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
