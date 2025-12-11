export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-md">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo Brain / IRM */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl shadow-lg">
            🧠
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Brain Tumor Detection</h1>
            <p className="text-sm text-gray-500">AI-powered diagnostic assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
}
