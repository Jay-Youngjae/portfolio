const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-50/95 backdrop-blur-sm sticky top-0 z-50 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-5 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-slate-800">0Jae</div>
        <nav className="flex gap-8">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
          >
            Project
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;