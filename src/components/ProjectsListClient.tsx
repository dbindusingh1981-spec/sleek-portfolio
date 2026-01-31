'use client'

import OnekoCat from '@/components/OnekoCat'
import { MasonryGrid } from '@/components/MasonryGrid'
import FadeIn from '@/components/FadeIn'
import DiagonalPattern from '@/components/DiagonalPattern'
import PageNavigation from '@/components/Navigation'
import { Project } from '@/types/project'

interface ProjectsListClientProps {
  projects: Project[]
  openSourceProjects: Project[]
}

export default function ProjectsListClient({ projects, openSourceProjects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <OnekoCat />
      <div className="relative mx-auto max-w-4xl">
        <DiagonalPattern side="left" topOffset="0" />
        <DiagonalPattern side="right" topOffset="0" />
        
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              <FadeIn delay={0.1} duration={0.5}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
                    <div className="mb-4 sm:mb-6">
                      <PageNavigation />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] italic font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
                      proof of work
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 tracking-wide">
                      A showcase of my work and side projects.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Projects Section */}
              <FadeIn delay={0.2} duration={0.5}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4">
                    <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-instrument-serif)] font-medium text-neutral-900 dark:text-neutral-100">
                      Projects
                    </h2>
                  </div>
                  <div className="px-4">
                    <MasonryGrid projects={projects} />
                  </div>
                </div>
              </FadeIn>

              {/* Open Source Section */}
              <FadeIn delay={0.3} duration={0.5}>
                <div className="sm:px-12 py-2 mt-8">
                  <div className="px-4 mb-4">
                    <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-instrument-serif)] font-medium text-neutral-900 dark:text-neutral-100">
                      Open Source Projects
                    </h2>
                  </div>
                  <div className="px-4">
                    <MasonryGrid projects={openSourceProjects} />
                  </div>
                </div>
              </FadeIn>
              
              <div className="pb-24 sm:pb-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
