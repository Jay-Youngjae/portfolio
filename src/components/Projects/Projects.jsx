import useProjectNavigation from '../../hooks/useProjectNavigation';
import portfolioData from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import NavigationArrow from './ProjectNavigation';

const Projects = () => {
  const { currentIndex, nextPage, prevPage, canGoPrev, canGoNext } = useProjectNavigation(portfolioData.projects.length);

  const openProject = (projectId) => {
    // 실제 프로젝트 페이지로 이동하는 로직
    console.log(`Opening project ${projectId}`);
  };

  return (
    <section className="py-16 text-center" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-slate-800">Projects</h2>
      <div className="relative overflow-hidden max-w-[calc(300px*3+1.5rem*2+20px)] mx-auto px-2">
        <NavigationArrow 
          direction="prev" 
          onClick={prevPage} 
          disabled={!canGoPrev}
        />
        <NavigationArrow 
          direction="next" 
          onClick={nextPage} 
          disabled={!canGoNext}
        />
        
        <div 
          className="flex gap-6 mb-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (300 + 24)}px)`
          }}
        >
          {portfolioData.projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={openProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;