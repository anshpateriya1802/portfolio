import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, X, Code, FileCode, Calendar, Book, Briefcase } from 'lucide-react';
import cvFile from '../../data/AnshCV.pdf';

// Professional Resume Document Illustration Component
const ResumeIllustration = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-dark-700 dark:to-dark-800 flex items-center justify-center overflow-hidden">
      <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-primary-200 dark:border-primary-800 rounded-lg bg-white dark:bg-dark-700 shadow-lg flex flex-col">
        <div className="h-8 bg-primary-500 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-white text-xs font-medium">Resume.pdf</div>
        </div>
        
        <div className="flex-1 p-4 flex">
          <div className="w-1/3 border-r border-gray-200 dark:border-dark-600 pr-2">
            <div className="h-4 w-20 bg-primary-200 dark:bg-primary-900 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-2/3 bg-gray-100 dark:bg-dark-600 rounded mb-3"></div>
            
            <div className="h-4 w-24 bg-accent-200 dark:bg-accent-900 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-3/4 bg-gray-100 dark:bg-dark-600 rounded"></div>
          </div>
          
          <div className="w-2/3 pl-3">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-300 mr-2">
                <Code size={16} />
              </div>
              <div className="h-4 w-32 bg-primary-300 dark:bg-primary-700 rounded"></div>
            </div>
            
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-5/6 bg-gray-100 dark:bg-dark-600 rounded mb-3"></div>
            
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-accent-100 dark:bg-accent-800 flex items-center justify-center text-accent-600 dark:text-accent-300 mr-2">
                <Calendar size={16} />
              </div>
              <div className="h-4 w-28 bg-accent-300 dark:bg-accent-700 rounded"></div>
            </div>
            
            <div className="h-3 w-full bg-gray-100 dark:bg-dark-600 rounded mb-1"></div>
            <div className="h-3 w-4/5 bg-gray-100 dark:bg-dark-600 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 right-6 w-24 h-24 bg-primary-500 rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute -top-8 left-10 w-20 h-20 bg-accent-400 rounded-full -rotate-12 opacity-20"></div>
    </div>
  );
};

const ResumeSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-accent-400 font-medium">My Background</span>
          <h2 className="heading-lg mt-2 mb-6">Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Want to know more about my professional journey? Check out my resume for a comprehensive overview
            of my education, work experience, and technical qualifications.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-2/3 bg-white dark:bg-dark-700 rounded-xl shadow-lg overflow-hidden border border-primary-100 dark:border-primary-900"
            >
              <div className="relative">
                <ResumeIllustration />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white text-left">
                    <h3 className="text-2xl font-bold">Ansh Pateriya</h3>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <motion.button
                    onClick={() => setShowPreview(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-2"
                  >
                    <FileText size={18} />
                    Preview Resume
                  </motion.button>
                  <motion.a
                    href={cvFile}
                    download="Ansh_Pateriya_CV.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-1/3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass p-6 rounded-xl text-left border-l-4 border-primary-500 dark:border-primary-600"
              >
                <div className="flex items-center gap-2">
                  <Code className="text-primary-500 dark:text-primary-400" size={20} />
                  <h3 className="font-bold text-lg text-primary-700 dark:text-primary-400">Technical Skills</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Expertise in frontend (React, Next.js), backend (Node.js, Express), and databases (MongoDB, PostgreSQL) with DevOps knowledge.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass p-6 rounded-xl text-left border-l-4 border-accent-400 dark:border-accent-500"
              >
                <div className="flex items-center gap-2">
                  <Book className="text-accent-500 dark:text-accent-400" size={20} />
                  <h3 className="font-bold text-lg text-accent-600 dark:text-accent-400">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  B.Tech in Computer Science from Lovely Professional University, 2022-2026.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass p-6 rounded-xl text-left border-l-4 border-primary-500 dark:border-primary-600"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="text-primary-500 dark:text-primary-400" size={20} />
                  <h3 className="font-bold text-lg text-primary-700 dark:text-primary-400">Experience</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Outlier.ai - AI Model Trainer 2024-2025
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 p-4 overflow-y-auto flex items-center justify-center"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-between items-center p-4 bg-white dark:bg-dark-800 border-b border-primary-100 dark:border-dark-700 z-10">
              <h3 className="font-bold text-xl text-primary-700 dark:text-primary-400">Resume Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-0 h-[80vh] w-full">
              <iframe 
                src={cvFile} 
                className="w-full h-full" 
                title="Ansh Pateriya CV"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ResumeSection;