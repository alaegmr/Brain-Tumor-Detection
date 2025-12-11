"use client"

import { useState } from "react"
import Header from "@/components/header"
import MainPanel from "@/components/main-panel"
import Footer from "@/components/footer"

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [predictionResult, setPredictionResult] = useState<any>(null)
  const [activeSection, setActiveSection] = useState("upload")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (imageData: string) => {
    setUploadedImage(imageData)
    setPredictionResult(null)
    setActiveSection("analysis")
  }

  const handlePrediction = async () => {
    setIsAnalyzing(true)
    // Simulate API call with mock data
    setTimeout(() => {
      setPredictionResult({
        tumorType: "Glioblastoma",
        confidence: 0.92,
        riskLevel: "High",
        probabilities: {
          glioblastoma: 0.92,
          meningioma: 0.05,
          pituitary: 0.02,
          normal: 0.01,
        },
      })
      setIsAnalyzing(false)
      setActiveSection("results")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <MainPanel
          uploadedImage={uploadedImage}
          predictionResult={predictionResult}
          isAnalyzing={isAnalyzing}
          onImageUpload={handleImageUpload}
          onPrediction={handlePrediction}
        />
      </div>
      <Footer />
    </div>
  )
}
