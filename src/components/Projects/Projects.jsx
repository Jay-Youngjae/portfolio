"use client"

import { useState } from "react"
import useProjectNavigation from "../../hooks/useProjectNavigation"
import portfolioData from "../../data/portfolioData"
import ProjectCard from "./ProjectCard"
import NavigationArrow from "./ProjectNavigation"
import ProjectModal from "./ProjectModal"

const Projects = () => {
  const { currentIndex, nextPage, prevPage, canGoPrev, canGoNext } = useProjectNavigation(portfolioData.projects.length)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (projectId) => {
    const project = portfolioData.projects.find((p) => p.id === projectId)
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="py-16 text-center" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-slate-800">Projects</h2>
      <div className="relative overflow-hidden max-w-[calc(300px*3+1.5rem*2+20px)] mx-auto px-2">
        <NavigationArrow direction="prev" onClick={prevPage} disabled={!canGoPrev} />
        <NavigationArrow direction="next" onClick={nextPage} disabled={!canGoNext} />

        <div
          className="flex gap-6 mb-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (300 + 24)}px)`,
          }}
        >
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={openProject} />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  )
}

export default Projects
