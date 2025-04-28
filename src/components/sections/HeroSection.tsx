import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent-400 font-medium"
            >
              Full-Stack Developer
            </motion.span>
            
            <h1 className="heading-xl">
              <span className="block">Hi, I'm</span>
              <span className="text-primary-500 block">Ansh Pateriya</span>
            </h1>
            
            <div className="text-xl sm:text-2xl h-16">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1000,
                  'Creative Coder',
                  1000,
                  'Learning Enthusiast',
                  1000,
                  'Problem Solver',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-dark-500 dark:text-gray-300"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            >
              Building digital experiences that combine creativity with functionality.
              Passionate about clean code and innovative solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Let's Connect
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex space-x-4 pt-2"
            >
              <motion.a
                href="https://github.com/anshpateriya1802"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ansh-pateriya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/ansh_pateriya14"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full">
              <div className="absolute inset-0 rounded-full overflow-hidden glass border-4 border-white dark:border-dark-700 shadow-lgx">
                <img
                  src="/images/ansh.png"
                  alt="Ansh Pateriya" 
                  className="w-100 h-200 object-cover object-center mt-0"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 p-4 glass rounded-full animate-float-slow">
                <span className="text-2xl">👨‍💻</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-4 glass rounded-full animate-float">
                <span className="text-2xl">🚀</span>
              </div>
              
              <div className="absolute top-1/2 -left-8 p-3 glass rounded-full animate-float-fast">
                <span className="text-xl">⚛️</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;