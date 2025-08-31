'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen />}
      <div className={`min-h-screen ${showLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {/* Hero Section */}
        <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Main Hero Content */}
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
                MUDS
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-4 tracking-wide">
                Macquarie University Drone Society
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join Australia&apos;s premier university drone society. Explore cutting-edge UAV technology, 
                participate in innovative projects, and connect with passionate aerial enthusiasts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link
                  href="/join"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Join Our Society
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>

              {/* Drone Illustration */}
              <div className="relative">
                <div className="drone-hero mx-auto">
                  <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
                    {/* Drone Body */}
                    <rect x="85" y="55" width="30" height="10" rx="5" fill="#000" />
                    
                    {/* Arms */}
                    <line x1="70" y1="50" x2="85" y2="60" stroke="#000" strokeWidth="2" />
                    <line x1="130" y1="50" x2="115" y2="60" stroke="#000" strokeWidth="2" />
                    <line x1="70" y1="70" x2="85" y2="60" stroke="#000" strokeWidth="2" />
                    <line x1="130" y1="70" x2="115" y2="60" stroke="#000" strokeWidth="2" />
                    
                    {/* Propellers */}
                    <circle cx="65" cy="45" r="8" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
                    <circle cx="135" cy="45" r="8" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
                    <circle cx="65" cy="75" r="8" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
                    <circle cx="135" cy="75" r="8" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
                    
                    {/* Camera */}
                    <circle cx="100" cy="70" r="3" fill="#666" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-black mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-black mb-2">3</div>
                <div className="text-gray-600">Years Running</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From beginner workshops to advanced research projects, MUDS provides comprehensive opportunities for all skill levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🚁</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Hands-on Learning</h3>
                <p className="text-gray-600">
                  Get practical experience with real drones, from assembly to flight operations and maintenance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Research Projects</h3>
                <p className="text-gray-600">
                  Participate in cutting-edge research including AI-powered flight systems and autonomous navigation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Competitions</h3>
                <p className="text-gray-600">
                  Compete in national and international drone competitions, showcasing your skills and innovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Flight?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join MUDS today and become part of Macquarie University&apos;s most innovative student society.
            </p>
            <Link
              href="/join"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join MUDS Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
