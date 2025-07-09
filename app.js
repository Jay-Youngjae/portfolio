// Project navigation state
let currentProjectIndex = 0
const totalProjects = 4
const cardWidth = 300
const cardGap = 24 // 1.5rem = 24px

// Project navigation functions
function openProject(projectId) {
  window.location.href = `project1/project1.html?id=${projectId}`
}

function updateProjectsDisplay() {
  const projectsGrid = document.getElementById("projectsGrid")
  const translateX = -(currentProjectIndex * (cardWidth + cardGap))
  projectsGrid.style.transform = `translateX(${translateX}px)`

  // Update arrow states
  const prevArrow = document.getElementById("prevArrow")
  const nextArrow = document.getElementById("nextArrow")

  if (currentProjectIndex === 0) {
    prevArrow.style.opacity = "0.3"
    prevArrow.style.cursor = "not-allowed"
  } else {
    prevArrow.style.opacity = "1"
    prevArrow.style.cursor = "pointer"
  }

  // 마지막에서 3개를 보여줄 수 있는 최대 인덱스
  const maxIndex = totalProjects - 3
  if (currentProjectIndex >= maxIndex) {
    nextArrow.style.opacity = "0.3"
    nextArrow.style.cursor = "not-allowed"
  } else {
    nextArrow.style.opacity = "1"
    nextArrow.style.cursor = "pointer"
  }
}

function previousPage() {
  if (currentProjectIndex > 0) {
    currentProjectIndex--
    updateProjectsDisplay()
  }
}

function nextPage() {
  const maxIndex = totalProjects - 3
  if (currentProjectIndex < maxIndex) {
    currentProjectIndex++
    updateProjectsDisplay()
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Initialize project navigation
function initializeProjects() {
  updateProjectsDisplay()
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeProjects()
})
