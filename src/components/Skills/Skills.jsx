import portfolioData from "../../data/portfolioData"

const Skills = () => (
  <section className="py-8 md:py-16 text-center px-4">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800">자격증 / 어학</h2>
    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-16">
      {portfolioData.certifications.map((cert, index) => (
        <span
          key={index}
          className="text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium"
          style={{ backgroundColor: "#42655B" }}
        >
          {cert}
        </span>
      ))}
    </div>

    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800">기술 스택</h2>
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 md:mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-slate-800">Languages</h3>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {portfolioData.skills.languages.map((skill, index) => (
            <span
              key={index}
              className="text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#42655B" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-slate-800">
          Libraries & Frameworks
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {portfolioData.skills.frameworks.map((skill, index) => (
            <span
              key={index}
              className="text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#42655B" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Skills
