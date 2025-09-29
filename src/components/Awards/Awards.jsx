import portfolioData from "../../data/portfolioData"

const Awards = () => (
  <section className="py-8 md:py-16 px-4">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800 text-center">수상</h2>
    <div className="max-w-4xl mx-auto">
      {portfolioData.awards.map((award, index) => (
        <div
          key={index}
          className="mb-4 md:mb-6 p-4 md:p-6 rounded-lg shadow-sm"
          style={{ backgroundColor: "#EEEEEA" }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{award.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{award.date}</p>
            </div>
            <span className="text-gray-600 font-medium text-sm md:text-base">{award.organization}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Awards
