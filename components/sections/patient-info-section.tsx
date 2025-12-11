import { Button } from "@/components/ui/button";

export default function PatientInfoSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Information</h2>
        <p className="text-gray-500">Enter patient details for the diagnostic report</p>
      </div>

      <div className="medical-card p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Patient Name</label>
            <input type="text" placeholder="Enter patient name" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Patient ID</label>
            <input type="text" placeholder="Enter patient ID" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Age</label>
            <input type="number" placeholder="Enter age" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Medical History</label>
          <textarea placeholder="Enter any relevant medical history..." className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none shadow-sm" />
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 w-full">
          Save Patient Information
        </Button>
      </div>
    </div>
  );
}
