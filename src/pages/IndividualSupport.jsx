import React from 'react'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'

import SupportACause from '../components/Home/SupportACause'

const IndividualSupport = () => {
  const events = [
    {
      id: 1,
      category: 'CFC HAPPENINGS',
      title:
        "SIFFCY' 24 - BRINGING THE MAGIC OF GOOD CINEMA TO CHILDREN NATIONWIDE",
      image: '/ChildForChild/events_1.webp',
      link: '#'
    },
    {
      id: 2,
      category: 'CFC HAPPENINGS',
      title: 'YOUTH EURO QUIZ 2024 AT CZECH REPUBLIC EMBASSY',
      image: '/ChildForChild/events_2.webp',
      link: '#'
    },
    {
      id: 3,
      category: 'CFC HAPPENINGS',
      title: 'SESSION ON IMPORTANCE OF HYGIENE',
      image: '/ChildForChild/events_3.webp',
      link: '#'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/ChildForChild/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            The world needs Smile Warriors
          </h2>
        </div>
      </div>
      <div className='text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]'>
        <p className='text-lg text-gray-800'>
          Children are the future of a nation. They are the best change agents,
          be it in the family or the community in which they live. It is
          therefore crucial to help the children, catch them young and inculcate
          in them feelings of empathy and conscience so that they grow up as
          responsible individuals. Sensing this need, Smile Foundation came up
          with Child For Child (CFC) programme in 2006. Sensitization of
          privileged children and their parents, towards the existing
          inequalities around them, is an important objective of Child For
          Child.
        </p>
        <p className='text-lg text-gray-800 my-4'>
          Privileged children are sensitized about the deprivation and pain
          endured by the underprivileged kids. Child For Child seeks to
          inculcate a conscience and value system in the children so that they
          grow up to become responsible citizens and change makers. Before their
          minds are set with age, the Child For Child programme tries to make
          them count their own blessings and understand the plight of less
          privileged ones. Once they start realizing the worth of the privileges
          they are born with, they automatically turn their thoughts towards
          positivity and develop the right outlook. This eventually helps them
          develop into not only successful but responsible individuals in life.
          They grow up to become significant change makers, who contribute
          positively to the society.
        </p>

        <p className='text-lg text-gray-800 my-4'>
          Under Child For Child programme, Smile Foundation visits various
          schools and conducts engaging sessions for the young minds. It
          sensitizes children towards various causes and let them realize their
          privileged status.
        </p>
      </div>

      <div className='w-full flex flex-col items-center justify-center raleway-400 relative bg-[#f5f5f5] py-20'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-center'>
            What We Did Last Year
          </h1>
          <div className='flex justify-center items-center gap-16 flex-wrap lg:flex-row lg:ml-20'>
            <div className='flex-1 flex items-center justify-center gap-4'>
              <img
                src='/ChildForChild/lastyear_1.png'
                alt=''
                className='w-[100px]'
              />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#c0adcc] bebas-neue-regular'>
                  17,00,000 CHILDREN SENSITIZED
                </span>
                <br />
                Along With Their Teacher and Families
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center  gap-4'>
              <img
                src='/ChildForChild/lastyear_2.png'
                alt=''
                className='w-[100px]'
              />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#f0c774] bebas-neue-regular'>
                  4400 SCHOOLS COVERED
                </span>
                <br />
                In 417 Districts Of India
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center  gap-4'>
              <img
                src='/ChildForChild/lastyear_3.png'
                alt=''
                className='w-[100px]'
              />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#b2d3d1] bebas-neue-regular'>
                  More than 27000 EVENTS
                </span>
                <br />
                Activities Conducted In School
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#bad4d2] text-white text-center py-20 flex flex-col items-center justify-center gap-10'>
        <h1 className='bebas-neue-regular text-black font-semibold lg:text-5xl md:text-4xl text-3xl tracking-wide antialiased z-20 leading-7'>
          WATCH OUR SUPPORTERS IN ACTION
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 '>
          <iframe
            width='300'
            height='250'
            src='https://www.youtube.com/embed/gSOuOY2cXl0?si=E2_he2eQp5qiS9Si'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
          <iframe
            width='300'
            height='250'
            src='https://www.youtube.com/embed/eRze_wZrSEE?si=Vi9CATMxIhHGgNxL'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
          <iframe
            width='300'
            height='250'
            src='https://www.youtube.com/embed/WlqQODlart0?si=d33cQEb2cDY3XvhZ'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <SupportACause heading={'WHAT OUR SUPPORTERS SAY'} />

      <section className='py-12 md:py-16 bg-white'>
        <div className='w-[90%] md:w-[85%] lg:w-[80%] mx-auto'>
          <div className='flex justify-between items-center mb-8 md:mb-10'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bebas-neue-regular tracking-wide'>
              NEW EVENTS
            </h2>
            <a
              href='#'
              className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 text-sm md:text-base font-medium'
            >
              VIEW ALL
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {events.map(event => (
              <div
                key={event.id}
                className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group'
              >
                <div className='relative'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-[240px] object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-gray-700 bg-opacity-80 text-white text-xs px-3 py-1 rounded-full'>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className='p-5 md:p-6'>
                  <h3 className='text-lg md:text-xl font-bold mb-4 line-clamp-2'>
                    {event.title}
                  </h3>

                  <a
                    href={event.link}
                    className='inline-flex items-center text-gray-700 group-hover:text-green-600 font-medium text-sm md:text-base transition-colors duration-300'
                  >
                    READ MORE <ArrowRight className='ml-2 w-4 h-4' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='flex flex-col lg:flex-row items-center justify-center text-[#6a6b6a]'>
        {[
          { img: '/fOCUS.webp', title: 'Focus Areas' },
          { img: '/GOOD-GOVERNANCE.webp', title: 'Annual Report' },
          { img: '/blogs.webp', title: 'Blogs' }
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-[#b1d2d0] border-black w-full lg:w-1/3 h-[300px] md:h-[350px] lg:h-[250px] p-4 ${
              index !== 2 ? 'lg:border-r-2' : ''
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className='h-auto w-3/4 max-w-[150px] md:max-w-[180px]'
            />
            <h2 className='text-[22px] md:text-[30px] lg:text-[36px] font-bold mt-2 bebas-neue-regular'>
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default IndividualSupport
