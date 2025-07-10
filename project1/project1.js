// 모든 프로젝트 데이터의 이미지 경로를 실제 파일명으로 수정합니다
const projectData = {
  1: {
    title: "환자 자세 모니터링 시스템",
    period: "2024.03 ~ 2024.08",
    awards: "한국감성과학회 추계학술대회 수상 | 캡스톤디자인 경진대회 수상",
    images: ["free-icon-developer-6840541.png", "free-icon-developer-6840541.png"],
    overview:
      "가속도 센서를 활용한 환자 자세 모니터링 시스템으로, 실시간으로 환자의 자세를 측정하고 분석하여 간병인이 효율적으로 환자 상태를 관리할 수 있도록 돕는 헬스케어 솔루션입니다.",
    features: [
      { title: "실시간 자세 측정", desc: "가속도 센서를 통한 정확한 자세 데이터 수집" },
      { title: "모바일 모니터링", desc: "간병인용 모바일 앱을 통한 실시간 환자 상태 확인" },
      { title: "알림 시스템", desc: "위험 자세 감지 시 즉시 알림 전송" },
      { title: "데이터 분석", desc: "환자별 자세 패턴 분석 및 시각화 확인" },
    ],
    allTechStack: [
      "Flutter",
      "Dart",
      "Python",
      "가속도 센서",
      "Bluetooth",
    ],
    achievements: [
      { title: "한국감성과학회 추계학술대회 우수상"},
      { title: "캡스톤디자인 경진대회 최우수상"},
      { title: "포트폴리오 페스티벌 장려상"},
      { title: "데이터 분석 97% 정확도 달성"},
    ],
  },
  
}

// Image navigation state
let currentImageIndex = 0
let totalImages = 2

// Get project ID from URL parameter
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get("id") || "3" // Default to project 3
}

// Load project data
function loadProjectData() {
  const projectId = getProjectId()
  const project = projectData[projectId]

  if (!project) {
    // Redirect to main page if project not found
    window.location.href = "../index.html"
    return
  }

  totalImages = project.images.length

  // Update page content
  document.getElementById("projectTitle").textContent = project.title
  document.getElementById("projectPeriod").textContent = project.period
  document.getElementById("projectAwards").textContent = project.awards
  document.getElementById("projectOverview").innerHTML = `<p>${project.overview}</p>`

  // Update images
  const imagesGrid = document.getElementById("imagesGrid")
  imagesGrid.innerHTML = project.images
    .map(
      (image, index) => `
      <div class="project-image-item">
          <img src="${image}" alt="${project.title} - 이미지 ${index + 1}" />
      </div>
  `,
    )
    .join("")

  // Update features - 메인페이지 수상 스타일
  const featureList = document.getElementById("featureList")
  featureList.innerHTML = project.features
    .map(
      (feature) => `
      <div class="feature-item">
          <div class="item-header">
              <div class="item-title">${feature.title}</div>
          </div>
          <div class="item-details">
              <p>${feature.desc}</p>
          </div>
      </div>
  `,
    )
    .join("")

  // Update tech stack - 메인페이지 자격증 스타일
  const techTagsContainer = document.getElementById("techTagsContainer")
  techTagsContainer.innerHTML = project.allTechStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

  // Update achievements - 메인페이지 수상 스타일
  const achievementList = document.getElementById("achievementList")
  achievementList.innerHTML = project.achievements
    .map(
      (achievement) => `
      <div class="achievement-item">
          <div class="item-header">
              <div class="item-title">${achievement.title}</div>
          </div>
      </div>
  `,
    )
    .join("")

  // Update page title
  document.title = `${project.title} - 0Jae Portfolio`

  // Initialize image navigation
  updateImageDisplay()
}

// Image navigation functions
function updateImageDisplay() {
  const imagesGrid = document.getElementById("imagesGrid")
  const imageWidth = 700 // 600에서 700으로 변경
  const imageGap = 0 // 16에서 0으로 변경 (gap 제거)
  const translateX = -(currentImageIndex * (imageWidth + imageGap))
  imagesGrid.style.transform = `translateX(${translateX}px)`

  // 나머지 코드는 동일하게 유지
  const prevArrow = document.getElementById("prevImageArrow")
  const nextArrow = document.getElementById("nextImageArrow")

  if (currentImageIndex === 0) {
    prevArrow.style.opacity = "0.3"
    prevArrow.style.cursor = "not-allowed"
  } else {
    prevArrow.style.opacity = "1"
    prevArrow.style.cursor = "pointer"
  }

  if (currentImageIndex >= totalImages - 1) {
    nextArrow.style.opacity = "0.3"
    nextArrow.style.cursor = "not-allowed"
  } else {
    nextArrow.style.opacity = "1"
    nextArrow.style.cursor = "pointer"
  }
}

function previousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--
    updateImageDisplay()
  }
}

function nextImage() {
  if (currentImageIndex < totalImages - 1) {
    currentImageIndex++
    updateImageDisplay()
  }
}

// Go to main page function
function goToMain() {
  window.location.href = "../index.html"
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadProjectData()
})
