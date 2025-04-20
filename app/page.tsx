"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left column - Introduction and CTA */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Hi, I'm Ansh Pateriya
              </span>
            </motion.h1>
            <motion.p 
              className="text-3xl md:text-4xl font-semibold mt-2 text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>
          </div>
          
          <motion.p 
            className="text-muted-foreground max-w-md text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build modern, responsive web applications with React and Node.js. 
            Passionate about creating intuitive user experiences with clean, maintainable code.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://github.com/anshpateriya1802" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://linkedin.com/in/ansh-pateriya" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="mailto:pateriyaansh@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right column - Hero image */}
        <motion.div
          className="relative aspect-square rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 p-1 overflow-hidden group mx-auto md:mx-0 max-w-[320px] md:max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/40 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                background: [
                  "linear-gradient(to top right, rgba(33, 29, 68, 0.2), rgba(123, 61, 205, 0.4), rgba(37, 99, 235, 0.2))",
                  "linear-gradient(to bottom left, rgba(33, 29, 68, 0.2), rgba(123, 61, 205, 0.4), rgba(37, 99, 235, 0.2))",
                  "linear-gradient(to top right, rgba(33, 29, 68, 0.2), rgba(123, 61, 205, 0.4), rgba(37, 99, 235, 0.2))"
                ]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
            <motion.div className="absolute inset-0 z-10">
              <Image 
                src="/ansh.jpeg" 
                alt="Ansh Pateriya" 
                fill 
                className="object-cover object-center rounded-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
          
          {/* Rotating border animation */}
          <motion.div 
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-70 group-hover:opacity-100 blur-sm z-0"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
      
      {/* Featured Projects Section */}
      <motion.section 
        className="mt-20 md:mt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <motion.div 
              key={project}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Project Image {project}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Brief description of the project and technologies used.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
