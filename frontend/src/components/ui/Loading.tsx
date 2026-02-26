import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="relative w-24 h-24">
        {/* Anillos animados con colores del Barcelona */}
        <div className="absolute inset-0 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" 
             style={{ animationDuration: '1s' }}></div>
        <div className="absolute inset-2 border-4 border-red-700 rounded-full animate-spin border-b-transparent" 
             style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 border-4 border-yellow-500 rounded-full animate-spin border-l-transparent" 
             style={{ animationDuration: '2s' }}></div>
        
        {/* Logo central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">FCB</span>
        </div>
      </div>
      
      <p className="mt-6 text-lg text-white/80 font-medium animate-pulse">
        Cargando datos del club...
      </p>
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 animate-pulse">
      <div className="h-48 bg-white/10 rounded-xl mb-4"></div>
      <div className="h-6 bg-white/10 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-white/10 rounded w-1/2"></div>
    </div>
  );
};

export const SkeletonStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 animate-pulse">
          <div className="h-8 bg-white/10 rounded w-16 mb-2"></div>
          <div className="h-4 bg-white/10 rounded w-24"></div>
        </div>
      ))}
    </div>
  );
};
