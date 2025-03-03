import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'

import Interventions from '../components/Healthcare/Interventions'

const Healthcare = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)

  const stories = [
    {
      name: 'YASH',
      image: '/Healthcare/story_1.webp', // Replace with actual image URL
      description:
        'Five year old Yash lives with his family in the JJ Colony of Noida’s Sector 9. His father Sispal is a mechanic.'
    },
    {
      name: 'RANI',
      image: '/Healthcare/story_2.webp', // Replace with actual image URL
      description:
        'Five-year-old Rani lives with her family of six in Sukhraili Village, Gurugram. Her mother is the'
    },
    {
      name: 'GAURAV',
      image: '/Healthcare/story_3.webp', // Replace with actual image URL
      description:
        'When Rita and Sandeep had Gaurav six months back the condition of their family was bad. Gaurav elder'
    }
  ]

  const blogs = [
    {
      name: 'Turning 100– Indian Healthcare System in 25 Years',
      image: '/Healthcare/blogs_1.webp', // Replace with actual image URL
      description:
        'Healthcare, like our other rights and privileges, is given to us by the Constitution'
    },
    {
      name: 'Making Healthcare System in India a Major Agenda for G20 2023',
      image: '/Healthcare/blogs_2.webp', // Replace with actual image URL
      description: 'India; a looted, invaded and colonised nation. From being'
    },
    {
      name: 'Challenges in last mile delivery of healthcare in rural areas',
      image: '/Healthcare/blogs_3.webp', // Replace with actual image URL
      description:
        'Health is one of the fundamental human rights for people and it must be '
    }
  ]

  const changes = [
    {
      id: 1,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/1-Smile-Foundation-s-Real-Work-Real-Change-to-support-the-underprivileged-people-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    },
    {
      id: 2,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/Shiksha-Na-Ruke-Anthem.jpg',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    },
    {
      id: 3,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-WorldHealthDay-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    },
    {
      id: 4,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-Rupali-Paraja-–-Mission-Education-Beneficiary-Darigabadi-Odisha-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    },
    {
      id: 5,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/8-Shiksha-Na-Ruke-for-the-children-of-sugarcane-cutters-in-Beed-Maharashtra-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    },
    {
      id: 6,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/1-WorldHealthDay-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center mx-auto'>
        <img
          src='/Healthcare/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            HEALTHCARE FOR ALL
          </h2>
        </div>
      </div>
      <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
          WHY HEALTHCARe
        </h1>
        <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          With a population of more than 1.4 Billion, last-mile delivery of
          healthcare in our country is a big challenge. The geospatial diversity
          of the country further aggravates the issues of accessibility and
          availability of healthcare in difficult terrains. With more than 65%
          of the population residing in rural areas with a smaller share of the
          overall healthcare infrastructure, and the urban slum dwellers
          prioritising everyday survival over healthcare, uneven distribution
          and lack of awareness also limit the uptake of existing healthcare
          services. It is crucial to address these gaps to meet the goals of
          Universal Health Coverage and support Govt of India's vision of
          Ayushman Bharat.
        </p>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHAT WE DO
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Smile Foundation’s comprehensive and community-centric health
            programme takes primary healthcare services to the doorsteps of
            underserved communities in both rural and urban India. Following a
            two pronged approach, the programme provides curative as well as
            preventive services, addressing the gaps in availability,
            accessibility and affordability of healthcare.
          </p>
        </div>
      </div>

      <div className='w-[75%] mx-auto my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
          Our Interventions
        </h1>
        <Interventions />
      </div>

      <div className='w-[75%] mx-auto my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
          Our Focus
        </h1>
        <img
          src='/Healthcare/focus.webp'
          alt=''
          className='w-full object-cover'
        />
      </div>

      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            Impact 2022-23
          </h1>
          <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
            <div>
              <img src='/Healthcare/impact.webp' alt='' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-10 items-center'>
              <div>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>75,000+</span>
                  people sensitised on health & hygiene through IEC activities
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>80,000+</span>
                  people benefitted through telemedicine projects
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>75%</span>
                  75% of the 10,50,000+ beneficiaries were women and children
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>77,000+</span>
                  people received relief support under emergency & disaster
                  response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[75%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
          Reach & Presence
        </h1>
        <div className='flex gap-1 '>
          <img
            src='/Education/reach_1.webp'
            alt=''
            className='w-[180px] h-[180px] rounded-full shadow-xl'
          />
          <img
            src='/Education/reach_2.webp'
            alt=''
            className='w-[180px] h-[180px] rounded-full shadow-xl'
          />
          <img
            src='/Education/reach_3.webp'
            alt=''
            className='w-[180px] h-[180px] rounded-full shadow-xl'
          />
          <img
            src='/Education/reach_4.webp'
            alt=''
            className='w-[180px] h-[180px] rounded-full shadow-xl'
          />
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center bg-[#effedc] py-16 raleway-400'>
        {/* Heading */}
        <div className='w-[90%] md:w-[75%] text-center'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-left'>
            STORIES OF CHANGE
          </h1>
        </div>

        {/* Story Cards */}
        <div className='w-[90%] md:w-[75%] grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {stories.map((story, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300'
            >
              <img
                src={story.image}
                alt={story.name}
                className='w-full h-[180px] object-contain rounded-md'
              />
              <h3 className='mt-4 text-lg font-bold'>{story.name}</h3>
              <p className='text-gray-600 mt-2'>{story.description}</p>
              <button className='mt-4 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full transition hover:bg-green-200'>
                READ MORE
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className='mt-8 bg-green-500 text-white font-semibold px-6 py-3 rounded-md transition hover:bg-green-600'>
          VIEW ALL
        </button>
      </div>

      <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-center my-16'>
        CHANGE THAT INSPIRES US
      </h1>

      <div className='bg-gray-300 px-16 py-20'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className='w-[75%] mx-auto'
        >
          {changes.map(change => (
            <SwiperSlide key={change.id}>
              <div
                className='relative group cursor-pointer'
                onClick={() => setSelectedVideo(change.videoUrl)}
              >
                <img
                  src={change.thumbnail}
                  alt='Story Thumbnail'
                  className='w-full h-[300px] rounded-xl object-fill'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-5 rounded-md group-hover:bg-opacity-50 transition'>
                  <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                    <span className='border-l-8 border-t-8 border-b-8 border-transparent border-l-black'></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedVideo && (
          <div
            className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
            onClick={closeModal} // Close on clicking outside
          >
            <button
              className='absolute top-5 right-5 text-white text-3xl font-bold'
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <div
              className='relative w-[90%] md:w-[70%] lg:w-[50%] bg-black p-4 rounded-lg'
              onClick={e => e.stopPropagation()}
            >
              <iframe
                className='w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg'
                src={selectedVideo}
                title='YouTube Video'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className='relative w-full flex flex-col items-center justify-center py-16 raleway-400'>
        {/* Heading */}
        <div className='w-[90%] md:w-[75%] text-center'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-left'>
            Blogs
          </h1>
        </div>

        {/* Story Cards */}
        <div className='w-[90%] md:w-[75%] grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300'
            >
              <img
                src={blog.image}
                alt={blog.name}
                className='w-full h-[180px] object-contain rounded-md'
              />
              <h3 className='mt-4 text-lg font-bold'>{blog.name}</h3>
              <p className='text-gray-600 mt-2'>{blog.description}</p>
              <button className='mt-4 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full transition hover:bg-green-200'>
                READ MORE
              </button>
            </div>
          ))}
        </div>
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
            <div className='absolute inset-0 flex flex-col lg:flex-row justify-around items-center gap-6 text-center lg:text-left p-6'>
              <button className='bg-green-500 raleway-400 text-lg tracking-widest leading-7 mt-2 text-white font-semibold px-6 py-3 rounded-md transition hover:bg-green-600'>
                Donate For Healthcare
              </button>
              <div>
                <h1 className='text-[26px] md:text-[36px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
                  CHANGE THAT INSPIRES US
                </h1>
                <p className='raleway-400 text-lg tracking-wide leading-7 mt-2'>
                  Write to <br />
                  <span className='font-bold'>
                    Rashmi Jain at cp@smilefoundationindia.org
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Healthcare
