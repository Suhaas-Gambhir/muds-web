'use client';

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Floating Drone Animation */}
        <div className="relative mb-8">
          <div className="drone-container">
            {/* Drone Body */}
            <div className="drone-body">
              {/* Main Body */}
              <div className="w-16 h-6 bg-black rounded-lg relative mx-auto mb-2">
                {/* Camera */}
                <div className="w-3 h-3 bg-gray-600 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              {/* Arms */}
              <div className="relative">
                {/* Top Arms */}
                <div className="absolute -top-3 -left-8 w-4 h-1 bg-black transform rotate-45"></div>
                <div className="absolute -top-3 -right-8 w-4 h-1 bg-black transform -rotate-45"></div>
                
                {/* Bottom Arms */}
                <div className="absolute top-1 -left-8 w-4 h-1 bg-black transform -rotate-45"></div>
                <div className="absolute top-1 -right-8 w-4 h-1 bg-black transform rotate-45"></div>
                
                {/* Propellers */}
                <div className="propeller propeller-1 absolute -top-4 -left-10 w-2 h-2 border-2 border-black rounded-full"></div>
                <div className="propeller propeller-2 absolute -top-4 -right-10 w-2 h-2 border-2 border-black rounded-full"></div>
                <div className="propeller propeller-3 absolute top-2 -left-10 w-2 h-2 border-2 border-black rounded-full"></div>
                <div className="propeller propeller-4 absolute top-2 -right-10 w-2 h-2 border-2 border-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* MUDS Text */}
        <div className="text-4xl font-bold tracking-wider text-black mb-2">
          MUDS
        </div>
        <div className="text-sm text-gray-600 tracking-wide">
          Macquarie University Drone Society
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="loading-dot w-2 h-2 bg-black rounded-full animate-bounce"></div>
          <div className="loading-dot w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="loading-dot w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <style jsx>{`
        .drone-container {
          animation: float 3s ease-in-out infinite;
        }

        .propeller {
          animation: spin 0.1s linear infinite;
        }

        .propeller-1 {
          animation-delay: 0s;
        }

        .propeller-2 {
          animation-delay: 0.025s;
        }

        .propeller-3 {
          animation-delay: 0.05s;
        }

        .propeller-4 {
          animation-delay: 0.075s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .loading-dot {
          animation-duration: 1s;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
