import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Code2, Coffee, Cpu, Github, Layers, Server } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="space-y-12"
        >
          <motion.div variants={item} className="text-center max-w-3xl mx-auto">
            <span className="text-accent-400 font-medium">Get To Know</span>
            <h2 className="heading-lg mt-2 mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with a deep love for crafting clean, efficient code and creating
              engaging user experiences. My journey in web development has equipped me with a versatile skill set
              spanning both frontend and backend technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={item} className="relative">
              <div className="relative bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg glass transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <img
                  src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Working at desk"
                  className="rounded-lg shadow-md object-cover h-[400px] w-full"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-0"></div>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item}>
                <h3 className="heading-sm mb-4">Education & Experience</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 glass rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="p-3 bg-primary-500 rounded-lg text-white">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Lovely Professional University</h4>
                      <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">2022 - 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 glass rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="p-3 bg-accent-400 rounded-lg text-white">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">AI Model Trainer</h4>
                      <p className="text-gray-600 dark:text-gray-400">Outlier.ai</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">2024 - 2025</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="heading-sm mb-4">My Approach</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I believe in writing clean, maintainable code that solves real problems. 
                  My development philosophy centers around user-centric design, performance optimization, 
                  and continuous learning to stay ahead of evolving technologies.
                </p>
              </motion.div>

              <motion.div variants={item} className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 p-3 glass rounded-lg">
                  <Cpu size={18} className="tex`ft-primary-500" />
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass rounded-lg">
                  <Coffee size={18} className="text-primary-500" />
                  <span>Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass rounded-lg">
                  <Layers size={18} className="text-primary-500" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass rounded-lg">
                  <Github size={18} className="text-primary-500" />
                  <span>Version Control</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;