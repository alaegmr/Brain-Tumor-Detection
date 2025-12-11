export default function AboutSection() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About This System</h2>
        <p className="text-gray-500">Learn more about our brain tumor detection technology</p>
      </div>

      <div className="space-y-6">
        <div className="medical-card p-6 space-y-3 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">What is This?</h3>
          <p className="text-gray-700/80">
            The Brain Tumor Detection System is an AI-powered diagnostic assistant that analyzes MRI images to classify
            brain tumors. It uses advanced machine learning models trained on thousands of medical images to provide
            accurate predictions.
          </p>
        </div>

        <div className="medical-card p-6 space-y-3 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Supported Tumor Types</h3>
          <ul className="space-y-2 text-gray-700/80">
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Glioblastoma - Aggressive grade IV glioma</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Meningioma - Typically benign tumor of the meninges</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Pituitary Adenoma - Benign pituitary tumor</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Normal - No tumor detected</li>
          </ul>
        </div>

        <div className="medical-card p-6 space-y-3 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Disclaimer</h3>
          <p className="text-gray-700/80">
            This system is for educational purposes only and should not be used as a substitute for professional medical
            diagnosis. Always consult with a qualified radiologist or medical professional for diagnosis and treatment
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
