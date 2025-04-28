import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { Code2, Database, Globe, Server, PenTool, Settings, BrainCircuit, Github as Git, Terminal, Cloud, Layout } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <Code2 size={24} /> },
      { name: "Next.js", icon: <Globe size={24} /> },
      { name: "Javascript", icon: <Terminal size={24} /> },
      { name: "Tailwind CSS", icon: <Layout size={24} /> }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <Server size={24} /> },
      { name: "Express", icon: <Terminal size={24} /> },
      { name: "Python", icon: <Code2 size={24} /> },
      { name: "Django", icon: <Server size={24} /> }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <Database size={24} /> },
      { name: "PostgreSQL", icon: <Database size={24} /> },
      { name: "MySQL", icon: <Database size={24} /> },
    ]
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: <PenTool size={24} /> },
      
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: <Settings size={24} /> },
      { name: "AWS", icon: <Cloud size={24} /> },
      
    ]
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", icon: <Git size={24} /> },
      { name: "GitHub", icon: <Git size={24} /> },
      
    ]
  }
];

const SkillsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 min-h-screen bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent-400 font-medium">What I Can Do</span>
          <h2 className="heading-lg mt-2 mb-6">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            With expertise across the full development stack, I bring a comprehensive skill set to every project.
            From frontend interfaces to backend systems, I'm passionate about creating seamless, efficient solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <Tilt key={idx} options={{ max: 15, scale: 1.05, speed: 300 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                    >
                      <span className="text-primary-500">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;