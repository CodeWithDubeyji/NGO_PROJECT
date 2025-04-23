'use client'
import React, { useMemo } from 'react'

const images = [
  '/Home/1.jpg',
  '/Home/2.jpg',
  '/Home/3.jpg',
  '/Home/4.jpg',
  '/Home/5.jpg',
  '/Home/6.jpg',
  '/Home/7.jpg',
]

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const Marquee = () => {
  const columns = 5

  const shuffledColumns = useMemo(() => {
    return Array(columns)
      .fill()
      .map(() => shuffleArray(images))
  }, [])

  return (
    <div className='text-center' id='gallery'>
      <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
        Gallery
      </h2>
      <div className='w-full h-[60vh] mx-auto overflow-hidden bg-[#b2d3d1] relative flex justify-center py-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[75%] overflow-hidden'>
          {shuffledColumns.map((colImages, colIdx) => (
            <ul key={colIdx} className='space-y-4 animate-marquee'>
              {colImages.map((src, idx) => (
                <li key={idx} className='flex justify-center'>
                  <img
                    src={src}
                    alt={`Partner ${idx}`}
                    className='w-28 md:w-36 lg:w-48 aspect-[1/1] object-cover rounded-xl shadow-lg'
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
