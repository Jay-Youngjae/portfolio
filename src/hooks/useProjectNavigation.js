"use client"

import { useState } from "react"

const useProjectNavigation = (totalProjects) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, totalProjects - 3)

  const nextPage = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return {
    currentIndex,
    nextPage,
    prevPage,
    canGoPrev: currentIndex > 0,
    canGoNext: currentIndex < maxIndex,
  }
}

export default useProjectNavigation
