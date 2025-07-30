import Header from './components/Header/Header';
import ProfileImage from './components/About/ProfileImage';
import About from './components/About/About';
import Contact from './components/About/Contact';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Awards from './components/Awards/Awards';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      
      {/* 메인 섹션 */}
      <section className="py-12 max-w-6xl mx-auto px-5" id="about">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <ProfileImage />
          </div>
          <div className="md:col-span-1">
            <About />
          </div>
          <div className="md:col-span-1">
            <Contact />
          </div>
        </div>
      </section>
      
      <div className="max-w-6xl mx-auto px-5">
        <Projects />
        <Education />
        <Awards />
        <Skills />
      </div>
    </div>
  );
};

export default App;