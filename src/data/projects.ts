import { Project } from '@/types/project'

export const projects: Project[] = [
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
