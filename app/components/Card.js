'use client';
import { useState } from 'react';

export default function Card({ title, shortDesc, fullDesc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
        isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{shortDesc}</p>
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
            <p className="text-gray-700">{fullDesc}</p>
          </div>
        )}
        <div className="absolute top-6 right-6 text-blue-500 text-lg">
          {isExpanded ? '▲' : '▼'}
        </div>
      </div>
    </div>
  );
}