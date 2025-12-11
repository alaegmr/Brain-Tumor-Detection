"use client";

import { useState } from "react";

// Sections
import UploadSection from "./sections/upload-section";
import PatientInfoSection from "./sections/patient-info-section";
import AnalysisSection from "./sections/analysis-section";
import AboutSection from "./sections/about-section";

// Sidebar
import Sidebar from "./sidebar";

export default function MainPanel() {
  const [activeSection, setActiveSection] = useState("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (imageData: string) => {
    setUploadedImage(imageData);
    setPredictionResult(null);
  };

  const handlePrediction = async () => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);
    try {
      const blob = await (await fetch(uploadedImage)).blob();
      const file = new File([blob], "image.png", { type: "image/png" });

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPredictionResult(data);
    } catch (err) {
      setPredictionResult({ success: false, error: String(err) });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex h-full min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {activeSection === "upload" && (
          <UploadSection onImageUpload={handleImageUpload} uploadedImage={uploadedImage} />
        )}

        {activeSection === "patient" && <PatientInfoSection />}

        {activeSection === "analysis" && (
          <AnalysisSection
            uploadedImage={uploadedImage}
            predictionResult={predictionResult}
            isAnalyzing={isAnalyzing}
            onPrediction={handlePrediction}
          />
        )}

        {activeSection === "about" && <AboutSection />}
      </main>
    </div>
  );
}
