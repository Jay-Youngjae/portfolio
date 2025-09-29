"use client"

import { useEffect, useState } from "react"
import useProjectNavigation from "../../hooks/useProjectNavigation"
import portfolioData from "../../data/portfolioData"
import ProjectCard from "./ProjectCard"
import NavigationArrow from "./ProjectNavigation"
import ProjectModal from "./ProjectModal"

// 현재 뷰포트가 md(>=768px)인지 감지
const useIsMd = () => {
  const [isMd, setIsMd] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const handler = (e) => setIsMd(e.matches)
    // 초기값 반영
    handler(mq)
    // 리스너 등록/해제
    if (mq.addEventListener) mq.addEventListener("change", handler)
    else mq.addListener(handler) // Safari 대응
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler)
      else mq.removeListener(handler)
    }
  }, [])
  return isMd
}

const Projects = () => {
  const isMd = useIsMd()

  // Tailwind와 동일한 값으로 동기화
  const CARD_W = isMd ? 280 : 260            // ProjectCard의 min/max-w와 일치
  const GAP = isMd ? 24 : 16                 // gap-6(24px) / gap-4(16px)
  const TRACK_SHIFT = CARD_W + GAP           // 한 장 이동할 때 거리

  const { currentIndex, nextPage, prevPage, canGoPrev, canGoNext } =
    useProjectNavigation(portfolioData.projects.length)

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
    <section className="py-8 md:py-16 text-center px-4" id="projects">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800">Projects</h2>

      {/* 컨테이너: 정확히 카드 3장 + 갭 2개 폭으로 고정 */}
      <div
        className="relative overflow-hidden mx-auto"
        style={{ maxWidth: `calc(${CARD_W}px * 3 + ${GAP}px * 2)` }}
      >
        <NavigationArrow direction="prev" onClick={prevPage} disabled={!canGoPrev} />
        <NavigationArrow direction="next" onClick={nextPage} disabled={!canGoNext} />

        {/* 좌우 padding 제거(px-2 삭제), gap은 반응형으로 동기화 */}
        <div
          className={`flex ${isMd ? "gap-6" : "gap-4"} mb-8 transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * TRACK_SHIFT}px)` }}
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
