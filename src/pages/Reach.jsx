import React from 'react'
import { MapPin } from 'lucide-react'

const ReachAndPresence = () => {
  const locations = [
    { x: 30, y: 22 },
    { x: 32, y: 27 },
    { x: 36, y: 29 },
    { x: 45, y: 35 },
    { x: 58, y: 40 },
    { x: 56, y: 46 },
    { x: 65, y: 48 },
    { x: 20, y: 45 },
    { x: 35, y: 45 },
    { x: 48, y: 55 },
    { x: 55, y: 59 },
    { x: 78, y: 36 },
    { x: 82, y: 36 },
    { x: 30, y: 60 },
    { x: 40, y: 65 },
    { x: 40, y: 75 },
    { x: 30, y: 75 },
    { x: 30, y: 90 },
    { x: 35, y: 90 }
  ]

  const stats = [
    {
      number: '15+',
      label: 'LAC',
      description: 'children and their families are impacted every year'
    },
    {
      number: '2000+',
      label: 'VILLAGES',
      description: 'and slums are reached out to across the country'
    },
    {
      number: '400+',
      label: 'PROJECTS',
      description: 'focused on education, healthcare, and women empowerment'
    },
    {
      number: '25+',
      label: 'STATES',
      description: 'are reached including the remotest areas'
    }
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bebas-neue-regular'>
      {/* Header Section */}
      <h1 className='text-3xl sm:text-5xl font-bold text-black mb-6'>
        REACH & PRESENCE
      </h1>

      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-sm sm:text-base mb-12'>
        <a
          href='/'
          className='flex items-center hover:text-gray-600 transition-colors'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          <span className='ml-1'>HOME</span>
        </a>
        <span className='text-gray-500'>&gt;</span>
        <a href='/pages' className='text-green-500 hover:text-green-600'>
          PAGES
        </a>
        <span className='text-gray-500'>&gt;</span>
        <span className='text-green-500'>REACH & PRESENCE</span>
      </nav>

      {/* Content Section */}
      <div className='raleway-400 max-w-none mb-16'>
        <p className='text-gray-700 leading-relaxed tracking-wide text-lg'>
          Smile Foundation reaches out to over 15,00,000 underprivileged
          children, youth & women through various Development projects across
          India with presence in the states of Delhi, Haryana, Gujarat,
          Maharashtra, Odisha, Rajasthan, Uttar Pradesh, Bihar, Jharkhand, Jammu
          & Kashmir, Punjab, Madhya Pradesh, Karnataka, Andhra Pradesh, Tamil
          Nadu, Uttarakhand, Chhattisgarh, West Bengal, Goa, Kerala, Assam,
          Tripura, Meghalaya and Manipur.
        </p>
      </div>

      {/* Impact Section */}
      <div className='mt-12 flex justify-center items-center flex-wrap lg:flex-nowrap gap-4'>
        <div className='w-full px-4 py-16 bg-white'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-16'>
              IMPACT 2021-2022
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center text-center p-6 transition-transform hover:transform hover:scale-105'
                >
                  <div className='text-[#8CC63F] text-7xl md:text-7xl font-bold mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-[#8CC63F] text-4xl font-light mb-3'>
                    {stat.label}
                  </div>
                  <p className='text-gray-600 text-sm md:text-base max-w-[200px] leading-relaxed tracking-wide raleway-400'>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='relative w-full max-w-[1300px] mx-auto'>
          <img
            src='/Our-Reach-Map-1.png'
            alt='Location Map'
            className='w-full h-auto'
          />

          {locations.map((location, index) => (
            <div
              key={index}
              className='absolute group'
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Pulsating dot with icon */}
              <div className='relative'>
                {/* Icon container */}
                <div className='relative z-20 w-6 h-6 bg-[#ffffff] rounded-full flex items-center justify-center shadow-lg transform-gpu transition-transform duration-200 group-hover:scale-110'>
                  <MapPin className='w-4 h-4 text-yellow-400' />
                </div>

                {/* Pulsating rings with larger radius */}
                <div className='absolute inset-0 z-10'>
                  <div className='absolute inset-[-100%] animate-ping bg-[#000000] rounded-full opacity-10' />
                </div>
                <div
                  className='absolute inset-0 z-10'
                  style={{ animationDelay: '1s' }}
                >
                  <div className='absolute inset-[-75%] animate-ping bg-[#000000] rounded-full opacity-10' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReachAndPresence
