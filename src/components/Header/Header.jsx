"use client"

const Header = ({ currentPage, onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page)
  }

  const handleContactClick = () => {
    onNavigate("main")
    // 페이지 변경 후 스크롤을 위해 setTimeout 사용
    setTimeout(() => {
      const contactElement = document.getElementById("contact")
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <header
      className="backdrop-blur-sm sticky top-0 z-50 border-b border-black/5"
      style={{ backgroundColor: "#66686A" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-5 py-4 md:py-6 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-white">0Jae</div>
        <nav className="flex gap-4 md:gap-8">
          <button
            onClick={() => handleNavigation("main")}
            className={`text-white font-medium hover:text-blue-200 transition-colors text-sm md:text-base ${
              currentPage === "main" ? "text-blue-200" : ""
            }`}
          >
            Project
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className={`text-white font-medium hover:text-blue-200 transition-colors text-sm md:text-base ${
              currentPage === "about" ? "text-blue-200" : ""
            }`}
          >
            About Me
          </button>
          <button
            onClick={handleContactClick}
            className="text-white font-medium hover:text-blue-200 transition-colors text-sm md:text-base"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
