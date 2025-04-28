import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { 
  Book, 
  BrainCircuit, 
  Code2, 
  Database, 
  FileJson, 
  Globe, 
  Layers, 
  PenTool, 
  Server, 
  Settings, 
  Smartphone, 
  Workflow,
  Terminal,
  Cloud,
  Layout,
  Github as Git
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 300,
        }}
      >
        <div className="glass rounded-xl p-6 h-full">
          <div className="text-primary-500 mb-4 bg-primary-100 dark:bg-primary-900/30 p-3 inline-block rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: delay * 0.1 + index * 0.1 }}
                    className="h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded"
                  ></motion.div>
                </div>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Globe size={28} />,
      items: ["React", "Next.js", "Javascript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server size={28} />,
      items: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },
    {
      title: "UI/UX Design",
      icon: <PenTool size={28} />,
      items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
    },
    {
      title: "DevOps",
      icon: <Settings size={28} />,
      items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    },
    {
      title: "Version Control",
      icon: <Git size={28} />,
      items: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
    {
      title: "Other Skills",
      icon: <BrainCircuit size={28} />,
      items: ["Problem Solving", "Test-Driven Development", "Team Leadership", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              items={skill.items}
              icon={skill.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;