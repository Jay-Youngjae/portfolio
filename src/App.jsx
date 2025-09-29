"use client"

import Header from "./components/Header/Header"
import ProfileImage from "./components/About/ProfileImage"
import About from "./components/About/About"
import Contact from "./components/About/Contact"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Awards from "./components/Awards/Awards"
import Skills from "./components/Skills/Skills"
import { useState } from "react"

const App = () => {
  const [currentPage, setCurrentPage] = useState("main")

  const renderMainPage = () => (
    <>
      <section className="py-12 max-w-6xl mx-auto px-5" id="about">
        <div className="flex flex-col items-center text-center">
          <ProfileImage />
          <div className="mt-8">
            <About />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <Projects />
      </div>

      <section className="py-12 max-w-6xl mx-auto px-5">
        <div className="flex justify-center">
          <Contact />
        </div>
      </section>
    </>
  )

  const renderAboutPage = () => (
    <>
      <section className="py-12 max-w-6xl mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <ProfileImage />
          <div className="mt-8">
            <div className="flex flex-col text-center">
              <h2 className="text-4xl font-bold mb-6 text-slate-800">About Me</h2>
              <p className="text-gray-700 text-lg leading-relaxed">안녕하세요, 가치를 만드는 개발자 김영재입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <Education />
        <Awards />
        <Skills />
      </div>
    </>
  )

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === "main" ? renderMainPage() : renderAboutPage()}
    </div>
  )
}

export default App
