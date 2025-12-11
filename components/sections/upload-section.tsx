interface UploadSectionProps {
  uploadedImage: string | null;
  onImageUpload: (imageData: string) => void;
}

export default function UploadSection({ uploadedImage, onImageUpload }: UploadSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Upload Medical Image</h2>
      <p className="text-gray-500">Choose an image to start the analysis</p>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
        </svg>
        <span className="text-gray-600">{uploadedImage ? "Change Image" : "Click to upload an image"}</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) onImageUpload(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </label>

      {uploadedImage && (
        <img src={uploadedImage} alt="Uploaded" className="mt-4 rounded-lg shadow-md w-full max-w-md" />
      )}
    </div>
  );
}
