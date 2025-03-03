import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'

import SupportACause from '../components/Home/SupportACause'
const HoverCard = ({ story }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative group cursor-pointer text-left overflow-hidden rounded-xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative w-full h-[350px]'>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10' />

        {/* Image with hover animation */}
        <motion.img
          src={story.thumbnail}
          alt='Story Thumbnail'
          className='w-full h-full object-cover'
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />

        {/* Text positioned over the overlay */}
        <motion.div
          className='absolute left-6 bottom-8 z-20 max-w-[80%]'
          animate={{ y: isHovered ? 50 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <h3 className='font-bold leading-tight tracking-wide bebas-neue-regular text-[18px] md:text-[35px] lg:text-[35px] text-white'>
            {story.title}
          </h3>
          <p className='text-[14px] raleway-400 tracking-widest text-white/90 mt-1'>
            {story.desc}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

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

  const stories = [
    {
      id: 1,
      thumbnail: '/RAMP.png',
      title: 'RAMP for champs',
      desc: `India's biggest Charity Fashion Walk`,
      url: '#'
    },
    {
      id: 2,
      thumbnail: '/Kohli.png',
      title: 'Charity gala dinner',
      desc: 'Exclusive high-end fundraisers celebrating responsible lu',
      url: '#'
    },
    {
      id: 3,
      thumbnail: '/cOOK-FOR-SMILE.png',
      title: 'Cook for smile',
      desc: 'Top corporate leaders cook for a cause ',
      url: '#'
    },
    {
      id: 4,
      thumbnail: '/RUN-FOR-SMILE.png',
      title: 'Run for smile',
      desc: 'Join Team Smile at the biggest marathon events of India',
      url: '#'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/CorpRes/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            PARTNERING FOR A BETTER FUTURe
          </h2>
        </div>
      </div>
      <div className='text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]'>
        <p className='text-lg text-gray-800'>
          Inclination towards social responsibility and contribution to
          sustainable development is fast becoming the mark of distinction for
          global brands. Mallen Baker—writer, speaker and CSR expert—defines
          Corporate Social Responsibility as a strategic act, “a way companies
          manage the business processes to produce an overall positive impact on
          society.” Integrating social, environmental and ethical
          responsibilities into the governance of businesses ensures their long
          term success, competitiveness and sustainability. CSR initiatives
          facilitate corporate to build a dominant brand that reverberates with
          their key stakeholders—customers, employees, government and general
          public.
        </p>

        <p className='text-lg text-gray-800 my-4'>
          Founded by a group of corporate professionals, Smile Foundation has
          always seen the corporate world as an ally in the vision of bringing
          sustainable change at the grassroots. For more than two decades we
          have forged successful partnerships with more than 400 global brands.
        </p>
      </div>
      <div className='flex flex-col items-center text-center max-w-6xl mx-auto mb-10 px-4'>
        <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light bebas-neue-regular'>
          Our Partners In Change
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10'>
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className='flex items-center justify-center w-[150px] h-[150px] p-4 border-solid border-2 border-[#000]/8'
            >
              <img
                src='/CorpRes/Wells_Fargo.webp'
                alt=''
                className='object-contain w-full h-full'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center raleway-400 relative bg-[#f5f5f5] py-20'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-center'>
            What We Did Last Year
          </h1>
          <div className='flex justify-center items-center gap-16 flex-wrap lg:flex-row lg:ml-20'>
            <div className='flex-1 flex items-center justify-center gap-4'>
              <img src='/CorpRes/ways_1.png' alt='' className='w-[100px]' />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#c0adcc] bebas-neue-regular'>
                  CORPORATE SOCIAL RESPONSIBILITY
                </span>
                <br />
                Fulfill your CSR goals with us by supporting high-impact
                programmes in education, healthcare, skilling, nutrition and
                women empowerment
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center  gap-4'>
              <img src='/CorpRes/ways_2.png' alt='' className='w-[100px]' />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#f0c774] bebas-neue-regular'>
                  CAUSE MARKETING & EVENTS
                </span>
                <br />
                Foster brand alliances that combine the power of your legacy and
                our storytelling to create campaigns that make your brand stand
                out...
              </p>
            </div>
            <div className='flex-1 flex items-center justify-center  gap-4'>
              <img src='CorpRes/ways_3.png' alt='' className='w-[100px]' />
              <p className='font-bold text-justify'>
                <span className='text-3xl font-extrabold text-[#b2d3d1] bebas-neue-regular'>
                  Employee Engagement
                </span>
                <br />
                Create a workplace where employees get the satisfaction of doing
                more than their jobs and engage in meaningful volunteer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#fff] text-white text-center py-20 flex flex-col items-center justify-center gap-10'>
        <h1 className='bebas-neue-regular text-black font-semibold lg:text-5xl md:text-4xl text-3xl tracking-wide antialiased z-20 leading-7'>
          WATCH OUR SUPPORTERS say
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

      <div className='w-full flex flex-col items-center justify-center raleway-400 relative bg-[#f1c675] py-20'>
        <div className='w-[90%] max-w-4xl mx-auto flex flex-col justify-center gap-16 relative'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-center'>
            What We Did Last Year
          </h1>
          <div className='flex flex-col justify-center items-center gap-6 lg:mx-auto text-center mx-auto mb-10 raleway-400 tracking-normal'>
            <p className='text-lg text-gray-800'>
              Smile Foundation is an NGO for CSR with pan-India presence and
              widespread rural outreach, directly impacting the lives of more
              than 950 underserved communities in the remotest of villages and
              urban slums spread across 25 states of India.
            </p>
            <hr className='border-t-2 border-black w-3/4' />
            <p className='text-lg text-gray-800'>
              More than 80% of funding for our welfare projects comes from CSR
              corporate support, and consequently, the same standards of
              governance and efficiency, and the culture of excellence flow
              through our own operations.
            </p>
            <hr className='border-t-2 border-black w-3/4' />
            <p className='text-lg text-gray-800'>
              Being a little over a decade old, we have already been able to
              channelize sizeable resources from responsible corporate,
              individuals, and funding organizations, aiming to achieve the
              highest Social Return on Investment (SROI).
            </p>
            <hr className='border-t-2 border-black w-3/4' />
            <p className='text-lg text-gray-800'>
              When we partner with an organization, we strive to get it and its
              employees directly involved in our welfare initiatives, making
              them active participants in bringing change at the
              grassroots—making us one of the best NGOs for CSR in India.
            </p>
          </div>
        </div>
        <img
          src='/Path_-_Path_.png'
          alt=''
          className=' absolute top-0 right-0 opacity-10 w-[80vmin]'
        />
      </div>

      <div className='w-full flex flex-col items-center justify-center raleway-400 relative'>
        <div className='relative w-full'>
          <div className='relative w-full'>
            <img
              src='/Education/banner.png'
              alt='Education Banner'
              className='w-full h-[300px] md:h-[400px] lg:h-[230px] object-cover'
            />

            {/* Overlay Content */}
            <div className='absolute inset-0 flex flex-col justify-center items-center gap-6 text-center lg:text-left p-6'>
              <div className='text-center'>
                <h1 className='text-[26px] md:text-[36px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
                  JOIN HANDS WITH SMILE FOUNDATION
                </h1>
                <p className='raleway-400 text-lg tracking-wide leading-7 mt-2'>
                  Write to <br />
                  <span className='font-bold'>
                    Rashmi Jain at cp@smilefoundationindia.org
                  </span>
                </p>
              </div>
              <div className=' flex items-center justify-center gap-16'>
                <p>NORTH/ EAST REGION Vikram Singh Walia- 8130145648</p>
                <p>WEST REGION John Thattil- 9820363999</p>
                <p>SOUTH REGION Archana Kore- 9880602956</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center text-[#6a6b6a]'>
        {[
          { img: '/fOCUS.webp', title: 'Focus Areas' },
          { img: '/GOOD-GOVERNANCE.webp', title: 'Annual Report' },
          { img: '/blogs.webp', title: 'Blogs' },
          { img: '/Programmes.webp', title: 'Programs' }
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-[#b1d2d0] border-black w-full lg:w-1/3 h-[300px] md:h-[350px] lg:h-[250px] p-4 ${
              index !== 3 ? 'lg:border-r-2' : ''
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
