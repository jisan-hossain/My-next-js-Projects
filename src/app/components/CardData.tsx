import React from 'react';
import Card from './Card';

// data fetching 
const fetchData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
};

const CardData = async () => {
  const allData = await fetchData();

  return (
    <div className='container mx-auto px-4 md:px-6 py-8'>
      <div>
        <h2 className='text-3xl md:text-4xl text-white font-bold'>THE LIBRARY</h2>
        <p className='text-gray-400 text-sm md:text-base mt-1 mb-6'>
          Twelve lifts covering every major muscle group.
        </p>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {allData.map((card: React.ComponentProps<typeof Card>['card']) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardData;