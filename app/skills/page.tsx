"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icon } from '@iconify/react'

// Define the Skill type
interface Skill {
  name: string;
  icon: string;
  color: string;
}

export default function SkillsPage() {
  const skills = {
    frontend: [
      { name: "React", icon: "logos:react", color: "bg-blue-500" },
      { name: "Next.js", icon: "logos:nextjs-icon", color: "bg-black" },
      { name: "TypeScript", icon: "logos:typescript-icon", color: "bg-blue-600" },
      { name: "JavaScript", icon: "logos:javascript", color: "bg-yellow-400" },
      { name: "HTML", icon: "logos:html-5", color: "bg-orange-500" },
      { name: "CSS", icon: "logos:css-3", color: "bg-blue-500" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "bg-cyan-400" },
      { name: "Framer Motion", icon: "logos:framer", color: "bg-purple-500" },
      { name: "Redux", icon: "logos:redux", color: "bg-purple-600" },
    ],
    backend: [
      { name: "Node.js", icon: "logos:nodejs-icon", color: "bg-green-600" },
      { name: "Express", icon: "devicon:express", color: "bg-gray-700" },
      { name: "MongoDB", icon: "logos:mongodb-icon", color: "bg-green-500" },
      { name: "PostgreSQL", icon: "logos:postgresql", color: "bg-blue-500" },
      { name: "GraphQL", icon: "logos:graphql", color: "bg-pink-600" },
      { name: "REST API", icon: "carbon:api", color: "bg-blue-400" },
      { name: "Firebase", icon: "logos:firebase", color: "bg-yellow-500" },
      { name: "AWS", icon: "logos:aws", color: "bg-orange-400" },
    ],
    tools: [
      { name: "Git", icon: "logos:git-icon", color: "bg-red-500" },
      { name: "GitHub", icon: "mdi:github", color: "bg-gray-800" },
      { name: "Docker", icon: "logos:docker-icon", color: "bg-blue-500" },
      { name: "Jest", icon: "logos:jest", color: "bg-red-600" },
      { name: "Webpack", icon: "logos:webpack", color: "bg-blue-400" },
      { name: "CI/CD", icon: "carbon:deployment-policy", color: "bg-green-500" },
      { name: "VS Code", icon: "logos:visual-studio-code", color: "bg-blue-500" },
      { name: "Figma", icon: "logos:figma", color: "bg-purple-500" },
      { name: "Postman", icon: "logos:postman-icon", color: "bg-orange-500" },
    ]
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive overview of my technical skills and expertise.
        </p>
      </motion.div>

      {/* Skills Tabs */}
      <Tabs defaultValue="frontend" className="mb-8">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools & Other</TabsTrigger>
        </TabsList>
        
        <TabsContent value="frontend" className="mt-8">
          <SkillsGrid skills={skills.frontend} />
        </TabsContent>
        
        <TabsContent value="backend" className="mt-8">
          <SkillsGrid skills={skills.backend} />
        </TabsContent>
        
        <TabsContent value="tools" className="mt-8">
          <SkillsGrid skills={skills.tools} />
        </TabsContent>
      </Tabs>
      
      {/* Expertise Section */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Areas of Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExpertiseCard 
            title="Frontend Development"
            description="Specializing in building responsive, accessible, and performant user interfaces using modern frameworks and libraries."
            delay={0}
          />
          <ExpertiseCard 
            title="Backend Development"
            description="Creating robust server-side applications, RESTful APIs, and database integrations to power web applications."
            delay={0.1}
          />
          <ExpertiseCard 
            title="UI/UX Design"
            description="Designing intuitive user experiences with a focus on usability, aesthetics, and accessibility."
            delay={0.2}
          />
          <ExpertiseCard 
            title="Performance Optimization"
            description="Improving application performance through code optimization, caching strategies, and modern best practices."
            delay={0.3}
          />
          <ExpertiseCard 
            title="Responsive Design"
            description="Creating layouts that work seamlessly across all devices and screen sizes, from mobile to desktop."
            delay={0.4}
          />
          <ExpertiseCard 
            title="Testing & Debugging"
            description="Implementing comprehensive testing strategies to ensure code quality and application reliability."
            delay={0.5}
          />
        </div>
      </motion.section>
    </div>
  )
}

function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  )
}

function SkillCard({ skill, index }: { skill: Skill, index: number }) {
  const iconColor = getIconColor(skill.color);
  const isGithub = skill.icon === "mdi:github";
  const isExpress = skill.icon === "devicon:express";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="animate-float" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="p-6 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group hover-card-glow">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 animate-gradient bg-gradient-to-br from-primary via-accent to-primary"></div>
        
        <div 
          className="w-20 h-20 bg-background dark:bg-gray-800 rounded-2xl mb-4 flex items-center justify-center p-3 transform group-hover:scale-110 transition-all duration-300 shadow-md border border-border relative"
          style={{ 
            boxShadow: `0 0 15px rgba(${hexToRgb(iconColor)}, 0.1)`,
          }}
        >
          <Icon 
            icon={skill.icon} 
            className={`w-12 h-12 transition-all duration-300 group-hover:drop-shadow-lg ${isGithub ? 'dark:text-white text-black' : ''} ${isExpress ? 'dark:text-white text-black' : ''}`}
            style={{ 
              color: isGithub || isExpress ? undefined : iconColor,
            }}
          />
          
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300" 
            style={{ 
              background: `radial-gradient(circle at center, ${iconColor}40 0%, transparent 70%)`,
            }}
          />
        </div>
        
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mt-1">{skill.name}</h3>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left animate-shimmer"></div>
      </Card>
    </motion.div>
  )
}

// Helper function to get appropriate icon color based on the background class
function getIconColor(bgColor: string): string {
  switch(bgColor) {
    case "bg-blue-500": return "#3b82f6";
    case "bg-black": return "#000000";
    case "bg-blue-600": return "#2563eb";
    case "bg-yellow-400": return "#facc15";
    case "bg-orange-500": return "#f97316";
    case "bg-cyan-400": return "#22d3ee";
    case "bg-purple-500": return "#a855f7";
    case "bg-purple-600": return "#9333ea";
    case "bg-green-600": return "#16a34a";
    case "bg-gray-700": return "#374151";
    case "bg-green-500": return "#22c55e";
    case "bg-pink-600": return "#db2777";
    case "bg-blue-400": return "#60a5fa";
    case "bg-yellow-500": return "#eab308";
    case "bg-orange-400": return "#fb923c";
    case "bg-red-500": return "#ef4444";
    case "bg-gray-800": return "#1f2937";
    case "bg-red-600": return "#dc2626";
    default: return "#6366f1"; // Default to indigo color
  }
}

// Helper function to convert hex color to RGB format
function hexToRgb(hex: string): string {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return RGB format
  return `${r}, ${g}, ${b}`;
}

function ExpertiseCard({ title, description, delay }: { title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -7 }}
      className="animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <Card className="p-6 h-full flex flex-col border-t-4 border-primary relative overflow-hidden group hover-card-glow">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 animate-gradient bg-gradient-to-br from-primary via-accent to-primary"></div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm z-10">{description}</p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left animate-shimmer"></div>
      </Card>
    </motion.div>
  )
} 