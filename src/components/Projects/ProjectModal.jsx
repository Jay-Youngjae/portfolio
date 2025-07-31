"use client"

import { useState } from "react"

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  const nextImage = () => {
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1)
    }
  }

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const currentImageSrc =
    project.images && project.images[currentImageIndex] ? project.images[currentImageIndex] : project.image

  const hasImageError = imageErrors[currentImageIndex]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.period}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl font-light">
            ×
          </button>
        </div>

        {/* 이미지 섹션 */}
        <div className="relative px-6 py-4">
          <div className="relative overflow-hidden rounded-lg bg-white h-80 flex items-center justify-center">
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                  className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 border border-black/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black/80 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                  style={{ lineHeight: "1" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/60"
                  >
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  disabled={currentImageIndex === project.images.length - 1}
                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 border border-black/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black/80 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                  style={{ lineHeight: "1" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/60"
                  >
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </>
            )}

            {!hasImageError ? (
              <img
                key={`${currentImageIndex}-${currentImageSrc}`}
                src={currentImageSrc || "/placeholder.svg"}
                alt={`${project.title} - 이미지 ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={() => handleImageError(currentImageIndex)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                {project.images && project.images[currentImageIndex]
                  ? `이미지 ${currentImageIndex + 1}`
                  : project.title}
              </div>
            )}
          </div>

          {/* 이미지 인디케이터 */}
          {project.images && project.images.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-slate-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 상세 정보 */}
        <div className="px-6 pb-6 space-y-6">
          {/* 개요 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">개요</h3>
            <p className="text-gray-600 leading-relaxed">{project.overview || project.description}</p>
          </div>

          {/* 역할 */}
          {project.role && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">역할</h3>
              <div className="text-gray-600">
                {Array.isArray(project.role) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {project.role.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.role}</p>
                )}
              </div>
            </div>
          )}

          {/* 성과 */}
          {project.achievements && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">성과</h3>
              <div className="text-gray-600">
                {Array.isArray(project.achievements) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {project.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.achievements}</p>
                )}
              </div>
            </div>
          )}

          {/* 사용 기술 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 연관 링크 */}
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">연관 링크</h3>
              <div className="space-y-2">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="mr-2">🔗</span>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
