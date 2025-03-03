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

const Volunteers = () => {
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
          src='/ChildForChild/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            Volunteer with smile
          </h2>
        </div>
      </div>
      <div className='text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]'>
        <p className='text-lg text-gray-800'>
          Smile Foundation believes that unless members of the civil society are
          involved proactively in the process of development, sustainable change
          will not happen. We encourage and invite individuals for volunteer
          opportunities and volunteer registration, to be an active part of our
          organization and share the same vision and purpose as us – to work for
          the welfare of children and their families. Volunteers are the
          backbone of every organization – they not only carry the
          organization’s ideals within them, but also spread the message far and
          beyond, sensitizing the society towards the cause. Volunteer for NGO,
          volunteer to serve, spread some smiles!
        </p>
      </div>

      <SupportACause heading={'Volunteer Speak'} />

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

export default Volunteers
