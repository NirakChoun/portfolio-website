'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills = {
  languages: [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Java', level: 80, color: 'from-red-400 to-red-600' },
    { name: 'C++', level: 75, color: 'from-purple-400 to-purple-600' },
  ],
  frameworks: [
    { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Flask', level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'Express', level: 85, color: 'from-green-400 to-green-600' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 85, color: 'from-indigo-400 to-indigo-600' },
    { name: 'MySQL', level: 80, color: 'from-orange-400 to-orange-600' },
    { name: 'MongoDB', level: 75, color: 'from-emerald-400 to-emerald-600' },
  ],
};

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
      />
    </div>
  </motion.div>
);

const SkillCategory = ({ 
  title, 
  skills, 
  icon: Icon, 
  delay 
}: { 
  title: string; 
  skills: Skill[]; 
  icon: LucideIcon; 
  delay: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
  >
    <div className="flex items-center mb-6">
      <Icon className="text-purple-400 mr-3" size={24} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    {skills.map((skill, index) => (
      <SkillBar key={skill.name} skill={skill} index={index} />
    ))}
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillCategory
            title="Programming Languages"
            skills={skills.languages}
            icon={Code}
            delay={0.2}
          />
          <SkillCategory
            title="Frameworks & Libraries"
            skills={skills.frameworks}
            icon={Globe}
            delay={0.4}
          />
          <SkillCategory
            title="Databases"
            skills={skills.databases}
            icon={Database}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
