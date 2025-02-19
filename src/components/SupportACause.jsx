import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'

const stories = [
  {
    id: 1,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/1-Smile-Foundation-s-Real-Work-Real-Change-to-support-the-underprivileged-people-YouTube-1.png',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  },
  {
    id: 2,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/Shiksha-Na-Ruke-Anthem.jpg',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  },
  {
    id: 3,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-WorldHealthDay-YouTube-1.png',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  },
  {
    id: 4,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-Rupali-Paraja-–-Mission-Education-Beneficiary-Darigabadi-Odisha-YouTube-1.png',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  },
  {
    id: 5,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-Shiksha-Na-Ruke-for-the-children-of-sugarcane-cutters-in-Beed-Maharashtra-YouTube-1.png',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  },
  {
    id: 6,
    thumbnail:
      'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/1-WorldHealthDay-YouTube-1.png',
    DonateUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
  }
]

const SupportACause = () => {
  return (
    <div className='py-10 text-center'>
      <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
        Support A Cause
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
          Tayyari Kal Ki
        </motion.p>

        <img
          src={story.thumbnail}
          alt='Story Thumbnail'
          className='w-full h-[350px] object-cover'
        />
      </motion.div>

      {/* Description Below */}
      <p className='text-[15px] raleway-400 mt-4 mb-[1em] tracking-widest leading-5 font-normal'>
        Our campaign ‘Tayyari Kal Ki’ aims at Training & Up Skilling the youth
        between the age of 18-32 years for employment and empowering them with a
        secure livelihood.
      </p>
      <a href='#' className='text-[#abc73f] font-normal'>
        Know more &gt;
      </a>
    </div>
  )
}

export default SupportACause
