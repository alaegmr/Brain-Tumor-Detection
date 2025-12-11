interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const sections = [
    { id: "upload", label: "Upload Image", icon: "📤" },
    { id: "patient", label: "Patient Information", icon: "👤" },
    { id: "analysis", label: "Analysis", icon: "🔬" },
    { id: "about", label: "About", icon: "ℹ️" },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 bg-white shadow-lg hidden md:flex flex-col">
      <div className="p-6 space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
              activeSection === section.id
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-blue-50 hover:shadow-sm"
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
