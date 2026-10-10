import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0e1014] flex flex-col items-center justify-center text-white">
      <div className="w-12 h-12 border-4 border-[#C2F800] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400 font-medium">Loading workouts...</p>
    </div>
  );
}