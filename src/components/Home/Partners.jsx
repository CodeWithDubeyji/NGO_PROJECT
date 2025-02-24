import React from 'react'

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/160',
  'https://via.placeholder.com/170',
  'https://via.placeholder.com/180',
  'https://via.placeholder.com/190'
]

const Marquee = () => {
  return (
    <div className='text-center'>
    <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
        Our Partners in change
      </h2>
      <div className='w-full h-[60vh] mx-auto overflow-hidden bg-[#b2d3d1] relative flex justify-center py-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[75%] overflow-hidden'>
          {Array(5)
            .fill()
            .map((_, index) => (
              <ul
                key={index}
                className={`space-y-3 animate-marquee delay-${index * 200} ${
                  index > 1 ? 'hidden sm:block' : ''
                } ${index > 2 ? 'hidden md:block' : ''} ${
                  index > 4 ? 'hidden lg:block' : ''
                }`}
              >
                {images.map((src, idx) => (
                  <li key={idx} className='flex justify-center'>
                    <img
                      src={src}
                      alt={`Marquee ${idx}`}
                      className='w-32 h-32 object-cover rounded-lg shadow-lg'
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
