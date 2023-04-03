import React from 'react';
import backgroundImage from '@/images/background-features.jpg'

  const images = [
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  ];

  
  const noScrollbarStyle = {
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
  };

  const webkitScrollbarStyle = {
    display: 'none',
  };

  export function Gallery() {
  return (
    <div className="container mx-auto my-8">
      <div
        className="flex space-x-4"
        style={noScrollbarStyle}
      >
        
        {images.map((image, index) => (
          <img
            key={index}
            className="h-80 object-cover rounded-md border border-gray-300 shadow-lg"
            src={image}
            alt={`Gallery Image ${index + 1}`}
            
          />
        ))}
      </div>
    </div>
  );
};