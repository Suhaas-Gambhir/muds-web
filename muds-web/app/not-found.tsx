import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          {/* Drone animation */}
          <div className="drone-float mx-auto mb-6">
            <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
              {/* Drone Body */}
              <rect x="50" y="35" width="20" height="8" rx="4" fill="#000" />
              
              {/* Arms */}
              <line x1="40" y1="30" x2="50" y2="39" stroke="#000" strokeWidth="2" />
              <line x1="80" y1="30" x2="70" y2="39" stroke="#000" strokeWidth="2" />
              <line x1="40" y1="48" x2="50" y2="39" stroke="#000" strokeWidth="2" />
              <line x1="80" y1="48" x2="70" y2="39" stroke="#000" strokeWidth="2" />
              
              {/* Propellers */}
              <circle cx="35" cy="25" r="6" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
              <circle cx="85" cy="25" r="6" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
              <circle cx="35" cy="53" r="6" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
              <circle cx="85" cy="53" r="6" fill="none" stroke="#000" strokeWidth="1" className="propeller-spin" />
              
              {/* Camera */}
              <circle cx="60" cy="47" r="2" fill="#666" />
              
              {/* Question mark */}
              <text x="60" y="20" textAnchor="middle" className="text-sm font-bold" fill="#666">?</text>
            </svg>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black mb-4">
          Flight Path Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like this drone has wandered off course. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Return to Base
          </Link>
          <div className="mt-4">
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition-colors mr-6"
            >
              About MUDS
            </Link>
            <Link
              href="/events"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
