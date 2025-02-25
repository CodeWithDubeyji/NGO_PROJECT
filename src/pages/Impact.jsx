import { div } from 'framer-motion/client'
import React from 'react'

const Impact = () => {
  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/impact-page.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            SMALL STEPS BIG IMPACT
          </h2>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold text-gray-500 bebas-neue-regular tracking-wide'>
            Impact
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Following a lifecycle approach, Smile Foundation works intensively
            through focused welfare projects in four major areas – child
            education, healthcare for families, skills training and livelihood
            for youth, and community engagement through women empowerment.
          </p>
        </div>

        <div className='w-full px-20 py-16 bg-[#f2f2f2] '>
          <div className='flex justify-center items-start flex-wrap lg:flex-nowrap gap-4'>
            <div className='w-[90%]'>
              <h1 className='text-left raleway-400 text-md/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                More than <br />
                <span className='text-[#88c23f] text-4xl'>300,000</span> <br />
                children provided <br /> education so far
              </h1>
              <div className='bg-[#88c23f] w-1 h-20 ml-12'></div>
              <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
                Mission Education began in 2002 as a response to the received
                need for a quality education programme to educate the
                disadvantaged and out of school children in India.
              </p>
            </div>
            <div className='w-[90%]'>
              <h1 className='text-left raleway-400 text-md/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                Over <br />
                <span className='text-[#88c23f] text-4xl'>2,000,000</span>{' '}
                <br />
                people provided healthcare so far
              </h1>
              <div className='bg-[#88c23f] w-1 h-36 ml-12'></div>
              <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
                Smile on wheels is a mobile healthcare programme that takes
                preventive curative and promotive healthcare to the doorsteps of
                less privileged children and families in the remotest villages
                and underserved slums of India
              </p>
            </div>
            <div className='w-[90%]'>
              <h1 className='text-left raleway-400 text-md/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                <span className='text-[#88c23f] text-4xl'>65,000</span> youth
                trained and{' '}
                <span className='text-[#88c23f] text-4xl'>45,000</span> placed
                so far
              </h1>
              <div className='bg-[#88c23f] w-1 h-52 ml-12'></div>
              <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
                Mission Education began in 2002 as a response to the received
                need for a quality education programme to educate the
                disadvantaged and out of school children in India.
              </p>
            </div>
            <div className='w-[90%]'>
              <h1 className='text-left raleway-400 text-md/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                Over <br />
                <span className='text-[#88c23f] text-4xl'>
                  7,00,000
                </span> <br /> women and girl children benefitted so far
              </h1>
              <div className='bg-[#88c23f] w-1 h-36 ml-12'></div>
              <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
                Mission Education began in 2002 as a response to the received
                need for a quality education programme to educate the
                disadvantaged and out of school children in India.
              </p>
            </div>
            <div className='w-[90%]'>
              <h1 className='text-left raleway-400 text-md/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                Over <br />
                <span className='text-[#88c23f] text-4xl'>
                5,000
                </span> <br /> grassroots organizations trained & empowered
              </h1>
              <div className='bg-[#88c23f] w-1 h-64 ml-12'></div>
              <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
                Mission Education began in 2002 as a response to the received
                need for a quality education programme to educate the
                disadvantaged and out of school children in India.
              </p>
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center gap-4'>
            <h3 className='font-semibold text-xl mt-16 text-center'>
              Meet the people behind the numbers
            </h3>
            <button className='bebas-neue-regular bg-[#88c23f] text-white px-5 py-2 rounded-md '>
              stories of change
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Impact
