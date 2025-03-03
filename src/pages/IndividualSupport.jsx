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
          src='/Indi_1.webp'
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
          Smile Foundation is a people-driven organization – right from the
          people who started it with a vision, to the people who work for us to
          bring change at the grassroots, to the people who support our work,
          and most importantly the people who serve on the ground through our
          work.
        </p>
        <p className='text-lg text-gray-800 my-4'>
          Committed , responsible people who are passionate to make a difference
          to the world around them are the backbone of Smile Foundation. We have
          always taken our role as that of a catalyst in the process of bringing
          change, but ultimately if we are aiming real and sustainable
          development, change has to be driven by people themselves.
        </p>

        <p className='text-lg text-gray-800 my-4'>
          Over the years, Smile Foundation has received the love, support and
          trust of millions of individuals, who have enabled us to create high
          impact programmes and benefit over 1.5 million people every year. We
          always take pride in making our supporters active partners in our
          programmes either than just channelize their resources to do good.
        </p>
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

      <div className='py-10 text-center'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
          Recent Activities
        </h2>

        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className='w-[75%] mx-auto'
        >
          {stories.map(story => (
            <SwiperSlide key={story.id}>
              <HoverCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center text-[#6a6b6a]'>
        {[
          { img: '/fOCUS.webp', title: 'Focus Areas' },
          { img: '/GOOD-GOVERNANCE.webp', title: 'Annual Report' },
          { img: '/blogs.webp', title: 'Blogs' },
          {img: '/Programmes.webp', title: 'Programs'}
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
