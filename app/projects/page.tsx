"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Globe, Github } from "lucide-react"

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
      category: "Web App",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://task-app-demo.com"
    },
    {
      id: 3,
      title: "Travel Blog",
      description: "A responsive blog site for sharing travel experiences with a content management system.",
      category: "Website",
      technologies: ["Gatsby", "GraphQL", "Markdown", "Netlify CMS"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/travel-blog",
      liveUrl: "https://travel-blog-demo.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts based on user location or search.",
      category: "Web App",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app-demo.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills, projects, and contact information with a modern design.",
      category: "Website",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "An application for discovering recipes based on available ingredients, dietary restrictions, and preferences.",
      category: "Mobile App",
      technologies: ["React Native", "Expo", "Spoonacular API", "AsyncStorage"],
      image: "/placeholder.jpg",
      githubUrl: "https://github.com/yourusername/recipe-finder",
      liveUrl: "https://recipe-finder-demo.com"
    }
  ]

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of my recent work, including web applications, websites, and other creative projects.
        </p>
      </motion.div>

      {/* Project Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mx-auto flex justify-center">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="web-app">Web Apps</TabsTrigger>
          <TabsTrigger value="website">Websites</TabsTrigger>
          <TabsTrigger value="mobile-app">Mobile Apps</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-8">
          <ProjectGrid projects={projects} />
        </TabsContent>
        
        <TabsContent value="web-app" className="mt-8">
          <ProjectGrid projects={projects.filter(p => p.category === "Web App")} />
        </TabsContent>
        
        <TabsContent value="website" className="mt-8">
          <ProjectGrid projects={projects.filter(p => p.category === "Website")} />
        </TabsContent>
        
        <TabsContent value="mobile-app" className="mt-8">
          <ProjectGrid projects={projects.filter(p => p.category === "Mobile App")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-muted/50 relative">
          <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </div>
          <div className="h-full flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Project Image</p>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild className="flex-1">
              <Link href={project.liveUrl} target="_blank">
                <Globe className="h-4 w-4 mr-2" />
                Demo
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 