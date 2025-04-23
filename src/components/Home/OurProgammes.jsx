import React from 'react'

const programmes = [
  {
    title: 'NGOs for visually impaired',
    color: '#f0c675',
    image: '/Education_dsektop1.png',
    description:
      'We offer selfless support and aid for the blind. We understand and look after their needs at all times.'
  },
  {
    title: 'NGOs for Blood donation',
    color: '#beabcb',
    image: '/Healthcare_desktop1.png',
    description:
      'We collect blood so that we can provide it for someone who maybe in dire need of it and maybe save lives.'
  },
  {
    title: 'NGOs FOR CHILDREN',
    color: '#b3d3d2',
    image: '/WomenEmp_desktop1.png',
    description:
      'We are a institution with the objective of improving the livelihood & education of underprivileged children.'
  },
  {
    title: 'CONSULTATION',
    color: '#dfc0af',
    image: '/Livelihood_desk1.png',
    description:
      'Owing to our huge industrial knowledge and rich information, we are offering our customers with the best consultancy services. These services are available in varied provisions as per the detailed needs of our customers.'
  }
]

const OurProgrammes = () => {
  return (
    <div className='py-[60px] bebas-neue-regular w-full px-4 md:px-6' id='services'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular  text-center'>
          Our Services
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-24 gap-y-8 md:gap-y-14 w-[95%] mx-auto'>
          {programmes.map((programme, index) => (
            <div key={index} className='flex items-start space-x-4 mb-4'>
              <img
                src={programme.image}
                alt={`${programme.title} Icon`}
                className='w-16 md:w-20 lg:w-24 mr-2 md:mr-3'
              />
              <div className='flex flex-col gap-y-1 md:gap-y-2'>
                <div className='w-fit relative'>
                  <h1
                    className={`text-lg md:text-2xl lg:text-[40px] font-bold uppercase relative tracking-wide before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-[${programme.color}] before:bottom-0 before:left-0 before:-z-10 before:mb-1 md:before:mb-0`}
                    style={{ color: programme.color }}
                  >
                    {programme.title}
                  </h1>
                </div>
                <p className='text-gray-700 text-sm md:text-base tracking-wide raleway-400'>
                  {programme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProgrammes
