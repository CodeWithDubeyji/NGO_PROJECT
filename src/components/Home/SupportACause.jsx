import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'
import { desc } from 'framer-motion/client'

const stories = [
  {
    id: 1,
    thumbnail:
      '/Home/7.jpg',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R',
    title: 'NGO for Blind',
    description:
      'We offer selfless support and aid for the blind. We understand and look after their needs at all times.'
  },
  {
    id: 2,
    thumbnail:
      '/Home/9.jpg',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R',
    title: 'NGOs for Blood donation',
    description:
      'We collect blood so that we can provide it for someone who maybe in dire need of it and maybe save lives.'
  },
  {
    id: 3,
    thumbnail:
      '/Home/1.jpg',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R',
    title: 'NGOs FOR CHILDREN',
    description:
      'We are a institution with the objective of improving the livelihood & education of underprivileged children.'
  },
  {
    id: 4,
    thumbnail:
      '/Home/8.jpg',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R',
    title: 'CONSULTATION',
    description:
      'Owing to our huge industrial knowledge and rich information, we are offering our customers with the best consultancy services. These services are available in varied provisions as per the detailed needs of our customers.'
  }
]

const SupportACause = ({ heading }) => {
  return (
    <div className='py-10 text-center' id='support-a-cause'>  
      <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
        {heading || 'Support A Cause'}
      </h2>

      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
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
  )
}

// Separate HoverCard Component to handle animations properly
const HoverCard = ({ story }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative group cursor-pointer text-left overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image & Hover Animation */}
      <motion.div
        className='relative overflow-hidden rounded-xl'
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Animated text moves down and fades when hovered */}
        <motion.p
          className='absolute left-6 bottom-8 font-bold leading-10 tracking-wide bebas-neue-regular w-28 text-[18px] md:text-[35px] lg:text-[35px] text-white'
          animate={{ y: isHovered ? 50 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {story.title}
        </motion.p>

        <img
          src={story.thumbnail}
          alt='Story Thumbnail'
          className='w-full h-[350px] object-cover'
        />
      </motion.div>

      {/* Description Below */}
      <p className='text-[15px] raleway-400 mt-4 mb-[1em] tracking-widest leading-5 font-normal'>
        {story.description}
      </p>
      <a href='#' className='text-[#abc73f] font-normal'>
        Know more &gt;
      </a>
    </div>
  )
}

export default SupportACause
