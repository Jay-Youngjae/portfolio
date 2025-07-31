"use client"

const ProjectCard = ({ project, onClick }) => (
  <div
    className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white/80 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-96"
    onClick={() => onClick(project.id)}
  >
    <div className="w-full h-48 bg-white overflow-hidden flex items-center justify-center">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = "none"
          e.target.nextSibling.style.display = "flex"
        }}
      />
      <div
        className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm"
        style={{ display: "none" }}
      >
        {project.title}
      </div>
    </div>
    <div className="p-4 h-48 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-sm font-bold text-slate-800 leading-tight break-words">{project.title}</h3>
          <span className="text-xs text-gray-600 whitespace-nowrap ml-2">{project.period}</span>
        </div>
        <p className="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-3">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default ProjectCard
