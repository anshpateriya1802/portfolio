// Import JSON directly as a static import
import projectsJson from './projects.json' assert { type: 'json' };

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  category: string;
  github: string;
  demo: string;
}

interface RawProject {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

// Convert projects from JSON to match the ProjectType interface
export const projectsData: ProjectType[] = [
  
  {
    id: 2,
    title: "Paytm Clone",
    description: "A responsive full-stack Paytm clone with secure transactions using Prisma, Next.js, and PostgreSQL.",
    features: ["Secure transactions", "User authentication", "Responsive design", "Database integration"],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    image: "/pro/paytm.png",
    category: "web",
    github: "https://github.com/smartcraze/paytm",
    demo: "https://paytm.surajv.me/"
  },
  {
    id: 3,
    title: "FeedMeBack Backend",
    description: "A backend service that collects company feedback and provides an embeddable script for displaying user reviews.",
    features: ["Feedback collection", "Embeddable script", "User reviews display", "Company data management"],
    technologies: ["Express", "MongoDB", "TypeScript"],
    image: "/pro/be.webp",
    category: "web",
    github: "https://github.com/smartcraze/feedmeback",
    demo: "https://feedmeback.surajv.me/"
  },
  {
    id: 4,
    title: "Second Brain API",
    description: "A backend for a Second Brain app that stores links and notes, tracking their purpose and details.",
    features: ["Link storage", "Note-taking", "Purpose tracking", "Detail management"],
    technologies: ["Express", "MongoDB", "REST API", "TypeScript"],
    image: "/pro/be.webp",
    category: "web",
    github: "https://github.com/smartcraze/Second-brain-Backends",
    demo: "https://brainlyapi.surajv.me/"
  },
  {
    id: 5,
    title: "Zealify",
    description: "Discover and share your passion for music with like-minded individuals on this platform.",
    features: ["Music discovery", "Community sharing", "User profiles", "Social interaction"],
    technologies: ["React"],
    image: "/pro/zeal.png",
    category: "web",
    github: "https://github.com/smartcraze/zealify",
    demo: "https://zealify.vercel.app/"
  },
  {
    id: 6,
    title: "E-Learning Platform",
    description: "Create and access educational content easily with this e-learning platform.",
    features: ["Course creation", "Content access", "Educational resources", "User-friendly interface"],
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    image: "/pro/studysphere.png",
    category: "web",
    github: "https://github.com/smartcraze/E-learning-platform",
    demo: "https://studyspher.vercel.app/"
  }
];