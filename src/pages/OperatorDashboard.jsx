import LogoutButton from '../components/LogoutButton';

export default function OperatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Welcome Operator!</h1>
      <LogoutButton />
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Super admin specific content */}
      </div>
    </div>
  )
}