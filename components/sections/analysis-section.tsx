import ResultsCard from "../results-card";

interface AnalysisSectionProps {
  uploadedImage: string | null;
  predictionResult: any;
  isAnalyzing: boolean;
  onPrediction: () => void;
}

const classes = ["Glioma Tumor", "Meningioma Tumor", "No Tumor", "Pituitary Tumor"];

export default function AnalysisSection({ uploadedImage, predictionResult, isAnalyzing, onPrediction }: AnalysisSectionProps) {
  const processedResult =
    predictionResult && predictionResult.prediction !== undefined && !predictionResult.error
      ? {
          tumorType: classes[predictionResult.prediction] ?? "Unknown",
          confidence: predictionResult.rawOutput?.[predictionResult.prediction] ?? 1,
          riskLevel: predictionResult.prediction === 2 ? "Low" : "High",
          probabilities: predictionResult.rawOutput?.reduce((acc: any, val: number, idx: number) => {
            acc[classes[idx]] = val;
            return acc;
          }, {}) ?? {},
        }
      : null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Prediction</h2>

      <button
        onClick={onPrediction}
        disabled={isAnalyzing || !uploadedImage}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow disabled:opacity-50 hover:bg-blue-700 transition-all duration-200"
      >
        {isAnalyzing ? "Analyzing..." : "Run Prediction"}
      </button>

      {processedResult && <ResultsCard result={processedResult} />}

      {predictionResult?.error && (
        <div className="p-4 bg-red-200 border border-red-400 rounded-lg">
          <p className="text-red-800 font-semibold">Error: {predictionResult.error}</p>
        </div>
      )}
    </div>
  );
}
