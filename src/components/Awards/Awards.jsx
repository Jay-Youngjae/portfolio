import portfolioData from '../../data/portfolioData';
const Awards = () => (
  <section className="py-16">
    <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">수상</h2>
    <div className="max-w-4xl mx-auto">
      {portfolioData.awards.map((award, index) => (
        <div key={index} className="bg-white/70 mb-6 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{award.title}</h3>
              <p className="text-sm text-gray-600">{award.date}</p>
            </div>
            <span className="text-gray-600 font-medium">{award.organization}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Awards;