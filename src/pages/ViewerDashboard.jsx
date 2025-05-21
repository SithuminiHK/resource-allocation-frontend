import LogoutButton from '../components/LogoutButton';
import React from 'react';

export default function ViewerDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4">
      <div className="backdrop-blur-md bg-white/10 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-white border border-white/20 transition-transform hover:scale-[1.01] duration-300">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-200">
            Welcome, Viewer!
          </h1>
          <p className="mt-2 text-blue-100 text-sm">
            View only access – explore data and reports in read-only mode.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <LogoutButton />
        </div>

       
      </div>
    </div>
  );
}
