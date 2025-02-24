import React from 'react'

const programmes = [
  {
    title: 'Education',
    color: '#f0c675',
    image: '/Education_dsektop1.png',
    description: 'Education, nutrition and holistic development of children'
  },
  {
    title: 'Healthcare',
    color: '#beabcb',
    image: '/Healthcare_desktop1.png',
    description:
      'Taking healthcare services to doorsteps of hard to reach communities'
  },
  {
    title: 'Women Empowerment',
    color: '#b3d3d2',
    image: '/WomenEmp_desktop1.png',
    description:
      'Empowering adolescent girls & women through community engagement'
  },
  {
    title: 'Livelihood',
    color: '#dfc0af',
    image: '/Livelihood_desk1.png',
    description:
      'Skill training and placement support for underprivileged youth'
  },
  {
    title: 'Empowering Grassroots',
    color: '#51c777',
    image: '/Grassrots_desktop1.jpg',
    description:
      'Helping community-based organizations become locally sustainable'
  },
  {
    title: 'Disaster Response',
    color: '#fb8071',
    image: '/Disaster_desktop1.jpg',
    description:
      'Reach out and respond to the needs of the disaster-affected people'
  }
]

const OurProgrammes = () => {
  return (
    <div className='py-[60px] bebas-neue-regular w-full px-4 md:px-6'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular  text-center'>
          Our Programmes
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
