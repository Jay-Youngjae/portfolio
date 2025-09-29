import portfolioData from "../../data/portfolioData"

const Education = () => (
  <section className="py-8 md:py-16 px-4">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800 text-center">교육 및 활동</h2>
    <div className="max-w-4xl mx-auto">
      {portfolioData.education.map((edu, index) => (
        <div
          key={index}
          className="mb-4 md:mb-6 p-4 md:p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#EEEEEA" }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
            <h3 className="text-lg md:text-xl font-bold text-slate-800">{edu.title}</h3>
            <span className="text-gray-600 font-medium text-sm md:text-base">{edu.period}</span>
          </div>
          <ul className="list-disc list-inside space-y-1">
            {edu.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="text-gray-700 text-sm md:text-base">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Education
