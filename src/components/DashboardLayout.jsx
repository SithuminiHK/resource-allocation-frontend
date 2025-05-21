import { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';

export default function Dashboard() {
  const { keycloak } = useKeycloak();
  const [showWelcome, setShowWelcome] = useState(true);
  const username = keycloak.tokenParsed?.preferred_username || 'User';

  // Hide welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-4 animate-pulse">
            Welcome {username}!
          </h1>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Cloud Resource Portal Dashboard</h1>
          <button
            onClick={() => keycloak.logout()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* User Info */}
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-gray-600">Welcome back, <span className="font-medium text-red-600">{username}</span></p>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <a
              href="#"
              className="border-red-500 text-red-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Compute Resources
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Storage
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Networking
            </a>
            <div className="flex-1 flex justify-end">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-4 pr-12 py-2 border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Resources</h2>
          {/* Dashboard content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h3 className="text-red-800 font-medium">Active Instances</h3>
              <p className="text-3xl font-bold text-red-600 mt-2">12</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h3 className="text-red-800 font-medium">Storage Used</h3>
              <p className="text-3xl font-bold text-red-600 mt-2">2.5 TB</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h3 className="text-red-800 font-medium">Network Traffic</h3>
              <p className="text-3xl font-bold text-red-600 mt-2">45 Gbps</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}