function Sidebar() {
    const menuItems = [
      { name: "Monitoring", icon: "📊" },
      { name: "Matching", icon: "🔗" },
      { name: "Reporting", icon: "📝" },
      { name: "Organizations", icon: "🏢" },
      { name: "Projects", icon: "📁" },
      { name: "Learning tracks", icon: "🎓" },
      { name: "Settings", icon: "⚙️" },
      { name: "Help", icon: "❓" },
    ];
  
    return (
      <aside className="w-64 custom-light-purple shadow-md p-4">
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 rounded-lg mb-1"
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>
    );
  }

  export default Sidebar