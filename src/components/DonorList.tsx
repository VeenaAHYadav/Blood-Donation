import React from 'react';
import type { Donor } from '../types/donor';
import { Calendar, User } from 'lucide-react';

interface DonorListProps {
  donors: Donor[];
}

export function DonorList({ donors }: DonorListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Registered Donors</h2>
      <div className="space-y-4">
        {donors.map((donor) => (
          <div
            key={donor.id}
            className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <User className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{donor.name}</h3>
                  <p className="text-sm text-gray-600">{donor.email}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">
                  {donor.bloodType}
                </span>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar size={16} className="mr-1" />
                  {new Date(donor.lastDonation).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        {donors.length === 0 && (
          <p className="text-center text-gray-500">No donors registered yet.</p>
        )}
      </div>
    </div>
  );
}