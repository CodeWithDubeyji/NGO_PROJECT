import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'

const Civichanges = () => {
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
          src='/Child-for-Child-scaled-1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            People for People: Inspiring Civic Driven Change.
          </h2>
        </div>
      </div>

      <div className='text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]'>
        <p className='text-lg text-gray-800'>
          While our focus as a development organisation has been first and
          foremost to work on the ground for bringing positive change in the
          lives of the less privileged children and families, we have been
          making equal efforts to sustain this change, by sensitising and
          engaging the privileged masses towards their social responsibility.
        </p>
        <p className='text-lg text-gray-800 my-4'>
          Smile Foundation has always looked upon its own role as that of a
          catalyst, a means of setting in motion and accelerating the process of
          development. But the true potential for bringing real, long lasting
          change, lies with the civil society. Not remaining restricted to the
          community, and with the aim of achieving sustainable development in a
          wider social context, Smile Foundation has adopted the principle of
          Civic Driven Change, making the civil society an active partner in all
          its welfare initiatives.
        </p>

        <p className='text-lg text-gray-800 my-4'>
          As a step towards this, Smile Foundation takes a multi-stakeholder
          approach, where it partners with indigenous community based
          organisations, international development organisations, local
          government and civic bodies, corporate, institutions, schools, media,
          communities and individuals, to exchange knowledge, combine resources
          and promote the ideal of shared growth.
        </p>

        <p className='text-lg text-gray-800 my-4'>
          We encourage eminent public figures and celebrities to take up their
          social responsibility and uphold good causes and right values, as
          known faces become role models of the society they are part of. We
          have also made short films and documentaries highlighting vital social
          issues and disseminated them through mass mediums like television,
          cinema and social media. In addition to this, mass sensitisation and
          awareness campaigns, and several other initiatives are undertaken
          regularly to engage different sections of the civil society.
        </p>
      </div>

      <div className='py-10 text-center'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular'>
          Action on ground
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

export default Civichanges
