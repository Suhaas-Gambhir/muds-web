export default function Events() {
  const upcomingEvents = [
    {
      title: "Drone Assembly Workshop",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Room E7A-101",
      type: "Workshop",
      description: "Learn the fundamentals of drone assembly in this hands-on workshop. Perfect for beginners!",
      spots: "15 spots available"
    },
    {
      title: "Autonomous Navigation Seminar",
      date: "March 22, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Library, Innovation Hub",
      type: "Seminar",
      description: "Deep dive into autonomous navigation algorithms and their real-world applications.",
      spots: "25 spots available"
    },
    {
      title: "MUDS vs UTS: Drone Racing Challenge",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Field, Macquarie University",
      type: "Competition",
      description: "Inter-university drone racing competition. Come cheer for our team!",
      spots: "Open to all"
    },
    {
      title: "Industry Guest Speaker: DroneShield CEO",
      date: "April 12, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Lecture Theatre C5C-T1",
      type: "Guest Speaker",
      description: "Exclusive talk from DroneShield's CEO about the future of drone technology in defense.",
      spots: "50 spots available"
    },
    {
      title: "Annual MUDS BBQ & Demo Day",
      date: "April 26, 2025",
      time: "12:00 PM - 6:00 PM",
      location: "Campus Green",
      type: "Social",
      description: "Our biggest event of the year! Project demonstrations, networking, and great food.",
      spots: "Open to all"
    }
  ];

  const pastEvents = [
    {
      title: "Beginner Pilot Training",
      date: "February 20, 2025",
      type: "Workshop",
      attendees: 18
    },
    {
      title: "AI in Drones: Future Perspectives",
      date: "February 10, 2025",
      type: "Seminar",
      attendees: 32
    },
    {
      title: "Welcome Back Meet & Greet",
      date: "February 5, 2025",
      type: "Social",
      attendees: 45
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-blue-100 text-blue-800";
      case "Seminar":
        return "bg-purple-100 text-purple-800";
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Guest Speaker":
        return "bg-green-100 text-green-800";
      case "Social":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Workshop":
        return "🔧";
      case "Seminar":
        return "📚";
      case "Competition":
        return "🏆";
      case "Guest Speaker":
        return "🎤";
      case "Social":
        return "🎉";
      default:
        return "📅";
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, competitions, guest speakers, and social events. Stay connected with the MUDS community and advance your drone expertise.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{getEventIcon(event.type)}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold">Date:</span> {event.date}
                      </div>
                      <div>
                        <span className="font-semibold">Time:</span> {event.time}
                      </div>
                      <div>
                        <span className="font-semibold">Location:</span> {event.location}
                      </div>
                      <div>
                        <span className="font-semibold">Availability:</span> {event.spots}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Event Calendar
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with all our events by following our calendar and joining our Discord server for real-time notifications.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Google Calendar Integration
            </h3>
            <p className="text-gray-600 mb-6">
              Add our events calendar to your Google Calendar to never miss an event.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Recent Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-3">{getEventIcon(event.type)}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-2">
                  {event.title}
                </h3>
                
                <div className="text-sm text-gray-600">
                  <div className="mb-1">
                    <span className="font-semibold">Date:</span> {event.date}
                  </div>
                  <div>
                    <span className="font-semibold">Attendees:</span> {event.attendees}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Types of Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We host a variety of events to cater to different interests and skill levels within the drone community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-black mb-2">Workshops</h3>
              <p className="text-gray-600 text-sm">
                Hands-on learning sessions covering drone assembly, programming, and maintenance
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-black mb-2">Seminars</h3>
              <p className="text-gray-600 text-sm">
                Educational talks on advanced topics like AI, autonomous systems, and industry trends
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-black mb-2">Competitions</h3>
              <p className="text-gray-600 text-sm">
                Racing events and technical challenges to test your skills against other universities
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-black mb-2">Guest Speakers</h3>
              <p className="text-gray-600 text-sm">
                Industry experts sharing insights about careers and innovations in drone technology
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-black mb-2">Social Events</h3>
              <p className="text-gray-600 text-sm">
                Networking opportunities, BBQs, and demo days to build community connections
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Build Sessions</h3>
              <p className="text-gray-600 text-sm">
                Collaborative project work where members can contribute to ongoing research initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join MUDS today to get access to all our exclusive events and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join MUDS
            </a>
            <a
              href="https://discord.gg/muds"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
