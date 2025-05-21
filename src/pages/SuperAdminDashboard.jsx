import React from 'react';
import { ShieldCheck } from 'lucide-react'; // You can replace this icon if needed
import LogoutButton from '../components/LogoutButton';

export default function SuperAdminDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4">
      <div className="backdrop-blur-md bg-white/10 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-white border border-white/20 transition-transform hover:scale-[1.01] duration-300">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-10 h-10 text-blue-300 animate-pulse" />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-200">
            Welcome, Super Admin!
          </h1>
          <p className="mt-2 text-blue-100 text-sm">
            Your dashboard is ready. Manage everything from here.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <LogoutButton />
        </div>

       
      </div>
    </div>
  );
}
