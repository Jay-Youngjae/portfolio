import portfolioData from '../../data/portfolioData';

const Education = () => (
  <section className="py-16">
    <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">교육 및 활동</h2>
    <div className="max-w-4xl mx-auto">
      {portfolioData.education.map((item, index) => (
        <div key={index} className="bg-white/70 mb-6 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
            <span className="text-sm text-gray-600">{item.period}</span>
          </div>
          <ul className="ml-6 text-gray-600">
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="mb-2 list-disc">{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Education;