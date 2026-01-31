import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "obsidianui",
    title: "ObsidianUI",
    description: "ObsidianUI empowers developers to build premium, motion-rich interfaces with ease. Transform your raw ideas into compelling visuals.",
    longDescription: "Founder of this project\n\nObsidianUI empowers developers to build premium, motion-rich interfaces with ease. Transform your raw ideas into compelling visuals.",
    liveLink: "https://obsidianui.com",
    githubLink: "https://github.com/Raunak-dev-18/ObsidianUI",
    video: "obsidianui",
    image: "/images/obsidianui.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js"
    ],
  },
  {
    id: "agenv",
    title: "AgenV",
    description: "AgenV lets you create limitless, high-quality images with the power of AI. Unleash your creativity and generate visuals in seconds, all without any design skills required.",
    longDescription: "Founder of this project\n\nAgenV lets you create limitless, high-quality images with the power of AI. Unleash your creativity and generate visuals in seconds, all without any design skills required.\n\nWhy Choose AgenV?\n\n• High Quality - Professional-grade images suitable for any project or purpose\n\n• Multiple Styles - Choose from various artistic styles and customize your creations\n\n• Lightning Fast - Generate stunning images in seconds with our optimized AI models",
    liveLink: "https://www.agenv.tech",
    video: "agenv",
    image: "/images/agenv.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "UploadThing",
      "Prisma",
      "Base UI",
      "Tailwind CSS",
      "PostgreSQL",
      "Tanstack Query",
      "Better Auth"
    ],
  },
  {
    id: "typegpt",
    title: "TypeGPT",
    description: "Unified API access to 200+ cutting-edge AI models. Build smarter applications with zero complexity. Access OpenAI, DeepSeek, Qwen, Meta, Mistral, GLM, MiniMax, Kimi and 200+ models through a single, unified API endpoint.",
    longDescription: "Co-Founder, Manager of this project\n\nUnified API access to 200+ cutting-edge AI models. Build smarter applications with zero complexity.\n\nAccess OpenAI, DeepSeek, Qwen, Meta, Mistral, GLM, MiniMax, Kimi and 200+ models through a single, unified API endpoint.\n\nOne API for every AI model.",
    liveLink: "https://typegpt.ai",
    video: "typegpt",
    image: "/images/typegpt.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "UploadThing",
      "Prisma",
      "Base UI",
      "Tailwind CSS",
      "PostgreSQL",
      "Tanstack Query",
      "Better Auth"
    ],
  },
  {
    id: "codedevs",
    title: "Code Devs",
    description: "AI-powered portfolio generator that automatically creates beautiful developer portfolios from GitHub profiles. Turn your GitHub into a stunning portfolio, powered by AI.",
    longDescription: "Founder of this project\n\nCodeDevs is an AI-powered portfolio generator that automatically creates beautiful developer portfolios from GitHub profiles. It fetches your GitHub data, uses AI to generate professional summaries and highlights, and presents everything in a modern, responsive portfolio website.\n\nFeatures:\n• Automatic Portfolio Generation - Enter any GitHub username and get a fully-featured portfolio instantly\n• AI-Powered Content - Uses Groq AI to generate professional summaries, highlights, and SEO-optimized descriptions\n• GitHub Integration - Fetches profile data, repositories, contribution graphs, and project statistics via GitHub GraphQL API\n• SEO Optimized - Dynamic metadata generation for better search engine visibility\n• Responsive Design - Works perfectly on all devices with dark mode support",
    liveLink: "https://codedevs.agenv.tech",
    video: "codedevs",
    image: "/images/codedevs.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Vercel AI SDK",
      "Groq",
      "Neon Database",
      "GitHub GraphQL API"
    ],
  },
  {
    id: "cognix",
    title: "Cognix AI",
    description: "Unified AI chat platform connecting users to multiple models (GPT-4, Claude, Gemini, and more) for conversations, coding, document assistance, automation, and productivity in one intuitive interface.",
    liveLink: "https://cognixai.co",
    image: "/images/cognix.png",
    tags: [
      "AI",
      "Chat Platform",
      "GPT-4",
      "Claude",
      "Gemini"
    ],
  },
  {
    id: "curator-idx",
    title: "Curator IDX",
    description: "Browser-based AI app builder with an IDE-like interface that helps users build and prototype AI apps interactively with agent-style assistance.",
    liveLink: "https://idx.curator.codes",
    image: "/images/curator-idx.png",
    tags: [
      "AI",
      "IDE",
      "App Builder",
      "Prototyping"
    ],
  },
  {
    id: "bytecloud",
    title: "ByteCloud",
    description: "Cloud-focused web app offering simple, secure cloud storage and management tools accessible through a browser-based interface.",
    liveLink: "https://bytecloud.skyflare.sh",
    image: "/images/bytecloud.png",
    tags: [
      "Cloud",
      "Storage",
      "Web App",
      "Security"
    ],
  },
  {
    id: "optivai",
    title: "OptivAI",
    description: "AI-powered online tutor where users can ask questions about math, science, and other topics and receive clear explanations from an AI tutor.",
    liveLink: "https://optivai.in/",
    image: "/images/optivai.png",
    tags: [
      "AI",
      "Education",
      "Tutoring",
      "E-Learning"
    ],
  },
];

export const openSourceProjects: Project[] = [
  {
    id: "velle-baazi",
    title: "Velle Baazi",
    description: "A modern, Instagram-inspired social media platform built with React, TypeScript, and Firebase. Share posts, stories, reels, and connect with friends through real-time messaging.",
    githubLink: "https://github.com/Raunak-dev-18/vellebaazi-os--Insta-Clone",
    image: "/images/velle-baazi.png",
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Social Media",
      "Open Source"
    ],
  },
  {
    id: "nuvdesk",
    title: "NuvDesk",
    description: "Modern, open-source helpdesk & ticketing system built with React, TypeScript, and Supabase. Features AI-powered ticket assignment, two-way email integration, team management, and real-time analytics.",
    githubLink: "https://github.com/R8-Devsin/nuvdesk-support-suite",
    image: "/images/nuvdesk.png",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Helpdesk",
      "Open Source",
      "AI"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}

export const getOpenSourceProjectById = (id: string): Project | undefined => {
  return openSourceProjects.find(project => project.id === id)
}

export const getAllOpenSourceProjects = (): Project[] => {
  return openSourceProjects
}
