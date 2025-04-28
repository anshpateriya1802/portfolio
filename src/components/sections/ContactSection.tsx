import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

// You'll need to replace these with your actual EmailJS service ID, template ID, and public key
const EMAILJS_SERVICE_ID = 'service_7i83wvn';
const EMAILJS_TEMPLATE_ID = 'template_3egnsrp';
const EMAILJS_PUBLIC_KEY = '0O1GUnxWu-HIvUSmO';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    if (!formRef.current) return;

    // Using EmailJS to send the form
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormStatus('success');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus('error');
        setErrorMessage('Failed to send your message. Please try again or contact directly via email.');
      });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="space-y-10"
        >
          <motion.div variants={item} className="text-center max-w-3xl mx-auto">
            <span className="text-accent-400 font-medium">Get In Touch</span>
            <h2 className="heading-lg mt-2 mb-6">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open
              to discussing new projects or creative ideas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            <motion.div variants={item} className="md:col-span-2 space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:pateriyaansh@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      pateriyaansh@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+917985663261" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      +91 7985663261
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jalandhar, Punjab, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/anshpateriya1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 dark:bg-dark-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ansh-pateriya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 dark:bg-dark-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/ansh_pateriya14"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 dark:bg-dark-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  >
                    <Twitter size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="md:col-span-3">
              <div className="glass p-8 rounded-xl">
                <h3 className="font-semibold text-xl mb-6">Send Me a Message</h3>
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <div className="text-green-500 mb-4">
                      <CheckCircle2 size={64} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setFormState({ name: '', email: '', subject: '', message: '' });
                        setFormStatus('idle');
                      }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="peer w-full p-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                          placeholder=" "
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 -top-3 text-sm bg-white dark:bg-dark-800 px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 peer-focus:bg-white dark:peer-focus:bg-dark-800"
                        >
                          Your Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="peer w-full p-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                          placeholder=" "
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-3 text-sm bg-white dark:bg-dark-800 px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 peer-focus:bg-white dark:peer-focus:bg-dark-800"
                        >
                          Your Email
                        </label>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="peer w-full p-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                        placeholder=" "
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 -top-3 text-sm bg-white dark:bg-dark-800 px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 peer-focus:bg-white dark:peer-focus:bg-dark-800"
                      >
                        Subject
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="peer w-full p-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors resize-none"
                        placeholder=" "
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-3 text-sm bg-white dark:bg-dark-800 px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary-500 peer-focus:bg-white dark:peer-focus:bg-dark-800"
                      >
                        Your Message
                      </label>
                    </div>
                    
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg flex items-center gap-2"
                      >
                        <X size={18} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                    
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`btn-primary w-full flex items-center justify-center gap-2 ${
                        formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;