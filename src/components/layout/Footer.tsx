import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Heart, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 mb-6"
          >
            <span className="bg-primary-500 text-white p-2 rounded-lg">
              <Code size={24} />
            </span>
            <span className="font-bold text-xl">Ansh.dev</span>
          </motion.div>

          <div className="flex space-x-6 mb-6">
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
          </div>

          <div className="text-center max-w-lg mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Building digital experiences that combine creativity with functionality. Let's work together to bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</Link>
              <Link to="/projects" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</Link>
              <Link to="/skills" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</Link>
              <Link to="/resume" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Resume</Link>
              <Link to="/contact" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-dark-700 w-full pt-6 mt-4">
            <p className="text-center text-gray-500 dark:text-gray-400 flex items-center justify-center flex-wrap gap-1">
              © {new Date().getFullYear()} Ansh Pateriya. All rights reserved. Made with 
              <span className="inline-block text-red-500">
                <Heart size={16} fill="currentColor" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;