function StatCards() {
    const stats = [
      { title: "Total Learners", value: 12, icon: "👥" },
      { title: "Total Language Buddies", value: 12, icon: "🗣️" },
      { title: "Total Organizations", value: 12, icon: "🏢" },
      { title: "Total Projects", value: 12, icon: "📊" },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-indigo-400 text-white rounded-lg p-4 flex items-center"
          >
            <div className="text-3xl mr-3">{stat.icon}</div>
            <div>
              <h3 className="text-sm font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default StatCards