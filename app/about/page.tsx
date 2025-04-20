"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Led development of several key projects. Implemented new features and mentored junior developers."
    },
    {
      title: "Web Developer",
      company: "Agency XYZ",
      period: "2018 - 2020",
      description: "Built responsive web applications for clients in various industries using React and Node.js."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2016 - 2018",
      description: "Started my career developing frontends with HTML, CSS, and JavaScript."
    }
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2016",
      description: "Focused on web technologies and software engineering principles."
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      year: "2014",
      description: "Core computer science fundamentals and programming."
    }
  ]

  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Passionate full-stack developer with a love for creating beautiful, 
          functional web applications that solve real problems.
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="md:col-span-3"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hi, I&apos;m Ansh Pateriya. I&apos;ve been passionate about technology since I was young, starting with 
              simple HTML websites and growing into a full-stack developer with 
              expertise in modern frameworks and tools.
            </p>
            <p>
              With over 5 years of professional experience, I specialize in building 
              responsive, accessible web applications using React, Node.js, and other 
              modern technologies. I&apos;m passionate about clean code, user experience, 
              and solving complex problems.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying outdoor activities in Bengaluru.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/ansh-resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-2"
          variants={fadeInUp}
        >
          <Card className="p-6 h-full">
            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6 border-l-2 border-primary/20 pb-6 last:pb-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-primary"></div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{exp.company}</span>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-6 border-l-2 border-primary/20 pb-6 last:pb-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-primary"></div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{edu.institution}</span>
                <span className="text-sm text-muted-foreground">{edu.year}</span>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 