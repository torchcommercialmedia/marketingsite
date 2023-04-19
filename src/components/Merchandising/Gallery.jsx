import React from 'react'
import Image from 'next/image'

const images = [
  'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
]

const noScrollbarStyle = {
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  WebkitOverflowScrolling: 'touch',
}

const webkitScrollbarStyle = {
  display: 'none',
}

export function Gallery() {
  return (
    <div className="container mx-auto my-8 py-12">
      <div className="flex space-x-4" style={noScrollbarStyle}>
        {images.map((image, index) => (
          <Image
            key={index}
            className="h-80 rounded-md border border-gray-300 object-cover shadow-lg"
            src={image}
            alt={`Gallery Image ${index + 1}`}
            width={150}
            height={80}
          />
        ))}
      </div>
    </div>
  )
}
