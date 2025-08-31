export default function Projects() {
  const projects = [
    {
      title: "Autonomous Environmental Monitor",
      status: "Completed",
      description: "A fully autonomous drone system for environmental data collection including air quality, temperature, and humidity monitoring across the Macquarie University campus.",
      technologies: ["Python", "OpenCV", "ROS", "Arduino"],
      year: "2024",
      image: "🌱"
    },
    {
      title: "Search & Rescue Navigation System",
      status: "In Progress",
      description: "AI-powered autonomous navigation system for search and rescue operations, featuring object detection and thermal imaging capabilities.",
      technologies: ["TensorFlow", "Computer Vision", "GPS", "Thermal Sensors"],
      year: "2025",
      image: "🚁"
    },
    {
      title: "Racing Drone Championship",
      status: "Completed",
      description: "Custom-built racing drone that secured second place in the 2024 Australian Universities Drone Racing Championship.",
      technologies: ["Carbon Fiber", "FPV Systems", "Custom Flight Controller"],
      year: "2024",
      image: "🏆"
    },
    {
      title: "Swarm Intelligence Research",
      status: "In Progress",
      description: "Research project investigating coordinated flight patterns and collective decision-making in drone swarms for agricultural applications.",
      technologies: ["Machine Learning", "Multi-Agent Systems", "Communication Protocols"],
      year: "2025",
      image: "🤖"
    },
    {
      title: "Delivery System Prototype",
      status: "Planning",
      description: "Developing a prototype delivery system for campus mail and small packages, focusing on safety and efficiency.",
      technologies: ["Path Planning", "Obstacle Avoidance", "Safety Systems"],
      year: "2025",
      image: "📦"
    },
    {
      title: "Wildfire Detection Network",
      status: "Research",
      description: "Creating a network of monitoring drones equipped with smoke detection sensors and thermal cameras for early wildfire detection.",
      technologies: ["IoT Sensors", "Edge Computing", "Real-time Analytics"],
      year: "2025",
      image: "🔥"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Research":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the innovative projects that MUDS members have worked on, from autonomous systems to competition drones and research initiatives.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  {/* Project Image/Icon */}
                  <div className="text-4xl mb-4 text-center">
                    {project.image}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our projects span various domains, each contributing to the advancement of drone technology and its applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-black mb-2">Research</h3>
              <p className="text-gray-600 text-sm">
                Cutting-edge research in AI, autonomous systems, and drone applications
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🏁</div>
              <h3 className="text-lg font-semibold text-black mb-2">Competition</h3>
              <p className="text-gray-600 text-sm">
                High-performance racing and competition drones built for speed and agility
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-black mb-2">Environmental</h3>
              <p className="text-gray-600 text-sm">
                Environmental monitoring and conservation applications using drone technology
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-black mb-2">Commercial</h3>
              <p className="text-gray-600 text-sm">
                Practical applications for delivery, inspection, and industrial use cases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Want to Work on These Projects?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join MUDS and contribute to exciting projects that push the boundaries of drone technology. Whether you're a beginner or an expert, there's a place for you in our project teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Join Our Team
            </a>
            <a
              href="/events"
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
