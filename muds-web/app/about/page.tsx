export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About MUDS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind Macquarie University&apos;s premier drone society and our mission to advance UAV technology through education, innovation, and community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  MUDS is dedicated to fostering innovation in unmanned aerial vehicle technology while providing students with hands-on experience in drone engineering, programming, and operation. We believe in the transformative power of UAV technology and its potential to solve real-world challenges.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be Australia&apos;s leading university drone society, recognized for our contributions to UAV research, education, and industry collaboration. We envision a future where our members become the next generation of drone technology leaders.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">What We Do</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Educational Workshops</h3>
                  <p className="text-gray-700">
                    We run regular workshops covering drone assembly, flight training, programming, and maintenance. From beginner-friendly sessions to advanced technical deep-dives, there&apos;s something for everyone.
                  </p>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Research & Development</h3>
                  <p className="text-gray-700">
                    Our members participate in cutting-edge research projects, including autonomous navigation systems, AI-powered flight control, environmental monitoring, and search and rescue applications.
                  </p>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Competition Teams</h3>
                  <p className="text-gray-700">
                    We compete in national and international drone competitions, including the Australian Universities Drone Racing Championship and the International Autonomous Aircraft Competition.
                  </p>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Industry Partnerships</h3>
                  <p className="text-gray-700">
                    Through partnerships with leading drone companies and research institutions, we provide our members with real-world experience and career opportunities in the UAV industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our History</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">2022 - Foundation</h3>
                  <p className="text-gray-700">
                    MUDS was founded by a group of passionate engineering students who saw the growing potential of drone technology and wanted to create a community for like-minded individuals at Macquarie University.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">2023 - First Major Project</h3>
                  <p className="text-gray-700">
                    We completed our first major research project in collaboration with the Macquarie University Engineering Department, developing an autonomous environmental monitoring system using custom-built drones.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">2024 - Competition Success</h3>
                  <p className="text-gray-700">
                    Our competition team achieved second place in the Australian Universities Drone Racing Championship, establishing MUDS as a serious contender in the national drone racing scene.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">2025 - Growing Community</h3>
                  <p className="text-gray-700">
                    Today, MUDS has grown to over 50 active members across multiple disciplines, with ongoing projects in AI, robotics, environmental science, and aerospace engineering.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👨‍💼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">President</h3>
                  <p className="text-gray-600">Leading the society&apos;s vision and strategic direction</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👩‍🔬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Technical Director</h3>
                  <p className="text-gray-600">Overseeing research projects and technical development</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👨‍🏫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Education Coordinator</h3>
                  <p className="text-gray-600">Organizing workshops and training programs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">👩‍💼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Operations Manager</h3>
                  <p className="text-gray-600">Managing events, partnerships, and day-to-day operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of the MUDS community and help shape the future of drone technology.
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join MUDS Today
          </a>
        </div>
      </section>
    </div>
  );
}
