'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          {/* Crashed drone animation */}
          <div className="mx-auto mb-6">
            <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
              {/* Drone Body */}
              <rect x="50" y="35" width="20" height="8" rx="4" fill="#dc2626" />
              
              {/* Arms */}
              <line x1="40" y1="30" x2="50" y2="39" stroke="#dc2626" strokeWidth="2" />
              <line x1="80" y1="30" x2="70" y2="39" stroke="#dc2626" strokeWidth="2" />
              <line x1="40" y1="48" x2="50" y2="39" stroke="#dc2626" strokeWidth="2" />
              <line x1="80" y1="48" x2="70" y2="39" stroke="#dc2626" strokeWidth="2" />
              
              {/* Broken propellers */}
              <circle cx="35" cy="25" r="6" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="85" cy="25" r="6" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="35" cy="53" r="6" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="85" cy="53" r="6" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
              
              {/* Camera */}
              <circle cx="60" cy="47" r="2" fill="#666" />
              
              {/* Warning symbol */}
              <text x="60" y="20" textAnchor="middle" className="text-sm font-bold" fill="#dc2626">!</text>
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-red-600 mb-4">System Error</h1>
        <h2 className="text-xl font-semibold text-black mb-4">
          Drone Malfunction Detected
        </h2>
        <p className="text-gray-600 mb-8">
          Something went wrong with our flight systems. Our technical team has been notified.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mr-4"
          >
            Restart Systems
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Return to Base
          </button>
        </div>
      </div>
    </div>
  );
}
