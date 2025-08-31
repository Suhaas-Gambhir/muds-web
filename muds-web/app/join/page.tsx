'use client';

import { useState } from 'react';

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    degree: '',
    year: '',
    experience: '',
    interests: [] as string[],
    discordUsername: '',
    motivation: ''
  });

  const interests = [
    'Drone Racing',
    'Autonomous Systems',
    'AI & Machine Learning',
    'Environmental Monitoring',
    'Photography/Videography',
    'Engineering & Hardware',
    'Software Development',
    'Research Projects',
    'Competitions',
    'Networking'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in joining MUDS! We\'ll be in touch soon.');
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Join MUDS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your passion for drones to the next level? Join Macquarie University&apos;s premier drone society and become part of an innovative community pushing the boundaries of UAV technology.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Why Join MUDS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Membership comes with exclusive benefits and opportunities that will accelerate your journey in drone technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-black mb-2">Learn from Experts</h3>
              <p className="text-gray-600 text-sm">
                Access workshops, seminars, and mentorship from industry professionals and experienced members.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🚁</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hands-on Experience</h3>
              <p className="text-gray-600 text-sm">
                Get access to cutting-edge drone equipment and participate in real-world projects.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Network & Connect</h3>
              <p className="text-gray-600 text-sm">
                Build lasting connections with fellow enthusiasts, industry professionals, and potential employers.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-black mb-2">Compete & Excel</h3>
              <p className="text-gray-600 text-sm">
                Join our competition teams and represent MUDS in national and international events.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-black mb-2">Research Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Contribute to groundbreaking research in autonomous systems, AI, and drone applications.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-black mb-2">Career Development</h3>
              <p className="text-gray-600 text-sm">
                Access internships, job opportunities, and career guidance from our industry partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Join Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Quick Join Options
            </h2>
            <p className="text-lg text-gray-600">
              Join our community instantly through Discord or fill out the membership form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-black mb-4">Join Our Discord</h3>
              <p className="text-gray-600 mb-6">
                Connect with our community instantly! Join our Discord server to chat with members, stay updated on events, and get involved in discussions.
              </p>
              <a
                href="https://discord.gg/muds-community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5865F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4752C4] transition-colors"
              >
                Join Discord Server
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-black mb-4">Official Membership</h3>
              <p className="text-gray-600 mb-6">
                Become an official MUDS member with voting rights, priority event access, and exclusive member benefits.
              </p>
              <button
                onClick={() => document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Fill Membership Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section id="membership-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Membership Application
            </h2>
            <p className="text-lg text-gray-600">
              Fill out this form to become an official MUDS member. All fields are required unless marked optional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
                    Degree Program
                  </label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    placeholder="e.g., Bachelor of Engineering"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Year of Study
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="postgrad">Postgraduate</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience & Interests */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-black mb-4">Experience & Interests</h3>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Drone Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (No prior experience)</option>
                  <option value="hobbyist">Hobbyist (Some recreational flying)</option>
                  <option value="intermediate">Intermediate (Regular flying, some technical knowledge)</option>
                  <option value="advanced">Advanced (Extensive experience, technical expertise)</option>
                  <option value="professional">Professional (Work experience in drone industry)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="mr-2 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-700 mb-2">
                  Discord Username (Optional)
                </label>
                <input
                  type="text"
                  id="discordUsername"
                  name="discordUsername"
                  value={formData.discordUsername}
                  onChange={handleInputChange}
                  placeholder="e.g., username#1234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join MUDS?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your motivation, goals, and what you hope to gain from MUDS membership..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Submit Application
              </button>
              <p className="text-sm text-gray-600 mt-4">
                We&apos;ll review your application and get back to you within 3-5 business days.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">
                Do I need prior drone experience to join?
              </h3>
              <p className="text-gray-700">
                Not at all! MUDS welcomes members of all experience levels. We provide workshops and training for beginners, and there are plenty of opportunities for experienced members to mentor newcomers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">
                Is there a membership fee?
              </h3>
              <p className="text-gray-700">
                Yes, there&apos;s an annual membership fee of $25 which helps cover equipment maintenance, event costs, and society operations. This is a small investment for the value and opportunities you&apos;ll receive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">
                Can I join if I&apos;m not an engineering student?
              </h3>
              <p className="text-gray-700">
                Absolutely! While many of our members are from engineering backgrounds, we welcome students from all disciplines. Drone technology intersects with many fields including computer science, environmental science, business, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">
                How much time commitment is required?
              </h3>
              <p className="text-gray-700">
                Participation is flexible! You can attend events as your schedule allows. Most members participate in 2-3 activities per month, but you can be as involved as you want to be.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
