export default function Partners() {
  const partners = [
    {
      name: "DroneShield",
      type: "Industry Partner",
      description: "Leading Australian drone defense company providing mentorship and industry insights to our members.",
      partnership: "Guest speakers, internship opportunities, and technical consultation for our defense-related projects.",
      logo: "🛡️"
    },
    {
      name: "DJI Education",
      type: "Technology Partner",
      description: "World's leading drone manufacturer supporting our educational initiatives with equipment and resources.",
      partnership: "Discounted equipment, educational materials, and access to latest drone technology for our projects.",
      logo: "📱"
    },
    {
      name: "Macquarie University Engineering",
      type: "Academic Partner",
      description: "Our home department providing academic support, research opportunities, and facility access.",
      partnership: "Lab access, research supervision, funding support, and academic credit for project work.",
      logo: "🎓"
    },
    {
      name: "CASA (Civil Aviation Safety Authority)",
      type: "Regulatory Partner",
      description: "Australia's aviation safety regulator ensuring our operations comply with national drone regulations.",
      partnership: "Training workshops, certification programs, and guidance on safe drone operations.",
      logo: "✈️"
    },
    {
      name: "UTS Drones Society",
      type: "University Partner",
      description: "Partner university drone society for inter-university competitions and knowledge sharing.",
      partnership: "Joint competitions, collaborative projects, and shared learning experiences.",
      logo: "🤝"
    },
    {
      name: "NSW Rural Fire Service",
      type: "Community Partner",
      description: "Government agency partnering with us on bushfire monitoring and emergency response projects.",
      partnership: "Real-world project opportunities, data sharing, and community service initiatives.",
      logo: "🚒"
    }
  ];

  const benefits = [
    {
      title: "Industry Exposure",
      description: "Direct access to industry professionals and real-world applications of drone technology.",
      icon: "🏢"
    },
    {
      title: "Career Opportunities",
      description: "Internships, job placements, and networking opportunities with leading companies.",
      icon: "💼"
    },
    {
      title: "Cutting-edge Technology",
      description: "Access to the latest drone technology and equipment through our industry partnerships.",
      icon: "🚁"
    },
    {
      title: "Research Collaboration",
      description: "Joint research projects with industry and academic partners on innovative applications.",
      icon: "🔬"
    }
  ];

  const getPartnerTypeColor = (type: string) => {
    switch (type) {
      case "Industry Partner":
        return "bg-blue-100 text-blue-800";
      case "Technology Partner":
        return "bg-green-100 text-green-800";
      case "Academic Partner":
        return "bg-purple-100 text-purple-800";
      case "Regulatory Partner":
        return "bg-red-100 text-red-800";
      case "University Partner":
        return "bg-yellow-100 text-yellow-800";
      case "Community Partner":
        return "bg-orange-100 text-orange-800";
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
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MUDS collaborates with leading industry partners, academic institutions, and government agencies to provide our members with unparalleled opportunities in drone technology.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 p-8">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{partner.logo}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-black">{partner.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 ${getPartnerTypeColor(partner.type)}`}>
                        {partner.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-semibold text-black mb-2">Partnership Benefits:</h4>
                  <p className="text-gray-600 text-sm">
                    {partner.partnership}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Benefits for MUDS Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our partnerships provide members with unique opportunities that extend far beyond the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real examples of how our partnerships have created opportunities for MUDS members.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    DroneShield Internship Program
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Three MUDS members secured summer internships at DroneShield after participating in our industry networking events. They worked on cutting-edge drone detection systems and gained invaluable real-world experience.
                  </p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Impact:</span> Direct career pathway into the drone defense industry
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔥</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    NSW RFS Bushfire Monitoring Project
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Our collaboration with NSW Rural Fire Service led to the development of an early warning system for bushfire detection. The project involved 8 MUDS members and resulted in a working prototype deployed during the 2024 fire season.
                  </p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Impact:</span> Real-world application saving lives and property
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🏆</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    DJI Education Equipment Grant
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Through our partnership with DJI Education, MUDS received $15,000 worth of drone equipment including Mavic 3 Enterprise and Matrice 300 RTK drones. This equipment is now used in our workshops and research projects.
                  </p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Impact:</span> Enhanced learning opportunities for all members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Partnering with MUDS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re always looking for new partnerships that can benefit our members and advance drone technology research.
          </p>
          <div className="bg-white/10 p-8 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Partnership Opportunities Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Guest speaking opportunities
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Collaborative research projects
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Equipment sponsorship
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Internship programs
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Competition sponsorship
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Recruitment opportunities
              </div>
            </div>
          </div>
          <a
            href="mailto:partnerships@muds.org.au"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us About Partnerships
          </a>
        </div>
      </section>
    </div>
  );
}
