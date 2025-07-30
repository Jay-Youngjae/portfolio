import portfolioData from '../../data/portfolioData';

const Skills = () => (
  <section className="py-16 text-center">
    <h2 className="text-4xl font-bold mb-12 text-slate-800">보유 자격증</h2>
    <div className="flex justify-center flex-wrap gap-4 mb-16">
      {portfolioData.certifications.map((cert, index) => (
        <span key={index} className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          {cert}
        </span>
      ))}
    </div>
    
    <h2 className="text-4xl font-bold mb-12 text-slate-800">기술 스택</h2>
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Languages</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {portfolioData.skills.languages.map((skill, index) => (
            <span key={index} className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Libraries & Frameworks</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {portfolioData.skills.frameworks.map((skill, index) => (
            <span key={index} className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;