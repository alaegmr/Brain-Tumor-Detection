interface ResultsCardProps {
  result: {
    tumorType: string;
    confidence: number;
    riskLevel: string;
    probabilities: Record<string, number>;
  };
}

export default function ResultsCard({ result }: ResultsCardProps) {
  const getRiskColor = (level: string) => {
    if (level === "High") return "text-red-600 bg-red-100";
    if (level === "Medium") return "text-amber-600 bg-amber-100";
    return "text-green-600 bg-green-100";
  };

  return (
    <div className="medical-card p-6 space-y-6 bg-white rounded-xl shadow-lg">
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Prediction Result</p>
        <h3 className="text-3xl font-bold text-gray-900">{result.tumorType}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-500">Confidence</p>
          <p className="text-2xl font-bold text-blue-600">{(result.confidence * 100).toFixed(1)}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-600 h-full" style={{ width: `${result.confidence * 100}%` }} />
          </div>
        </div>

        <div className={`rounded-lg p-4 ${getRiskColor(result.riskLevel)} space-y-2`}>
          <p className="text-sm">Risk Level</p>
          <p className="text-2xl font-bold">{result.riskLevel}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-xl font-bold text-green-600">✓ Complete</p>
        </div>
      </div>
    </div>
  );
}
