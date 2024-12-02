import React, { useState } from 'react';
import { DonorForm } from './components/DonorForm';
import { DonorList } from './components/DonorList';
import type { Donor } from './types/donor';
import { Heart } from 'lucide-react';

function App() {
  const [donors, setDonors] = useState<Donor[]>([]);

  const handleDonorSubmit = (donorData: Donor) => {
    setDonors([...donors, donorData]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Heart className="text-red-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Blood Bank Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <DonorForm onSubmit={handleDonorSubmit} />
          </div>
          <div>
            <DonorList donors={donors} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;