import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Stories from '../components/Home/Stories'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'

const DisasterResponse = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)
  const changes = [
    {
      id: 1,
      thumbnail:
        'https://www.smilefoundationindia.org/wp-content/uploads/2023/02/1-Smile-Foundation-s-Real-Work-Real-Change-to-support-the-underprivileged-people-YouTube-1.png',
      videoUrl: 'https://www.youtube.com/embed/5KLyjoH8uew?si=rFoOTeyBK_PKPR5R'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/Disaster/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            RESPONDING TO THE CALL OF HUMANITY
          </h2>
        </div>
      </div>
      <div className='w-full mx-auto bg-[#f1c675] py-16'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHY DISASTER RESPONSE
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Being a disaster-prone country, India is highly vulnerable to
            various types of natural calamities due to its geographical
            positioning. According to the National Disaster Management
            Authority, Govt. of India, more than 58.6% of the country's landmass
            is prone to earthquakes and over 12% is prone to floods; close to
            5,700kms out of the 7,516kms long coastline is prone to cyclones and
            tsunamis; while 68% of its cultivable area is prone to droughts
            which is why disaster preparedness is of outmost importance.
            Disaster risks in India are further compounded by increasing
            vulnerabilities related to changing demographics, socio-economic
            conditions- unplanned urbanization, development within high-risk
            zones, environmental degradation, climate change, and epidemics and
            pandemics. All these factors have created a situation where
            disasters seriously threaten the sustainable development of the
            country, besides innumerable lives and livelihoods.
          </p>
        </div>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHAT WE DO
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Smile Foundation, with its welfare interventions focused on children
            and their families, responds to the call of humanity in times of
            such calamities under its Disaster Response programme through
            emergency relief programs. From the Kashmir earthquake in 2005 to
            the Fani cyclone in 2019 and the Assam Floods in 2022, Smile
            Foundation has acted promptly to reach out and respond to the
            immediate needs of the disaster affected people, while also
            maintaining a sustainable approach to help them rebuild their lives
            by facilitating their education, healthcare and livelihood. Some of
            the calamities during which Smile Foundation has initiated crisis
            management during disaster are the Tsunami, the Kashmir Earthquake,
            the Maharashtra floods, the Bihar floods and the Uttarakhand floods.
          </p>
        </div>
      </div>

      <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-center my-8'>
        CHANGE THAT INSPIRES US
      </h1>

      <div className='px-16 py-8'>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
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
                  className='w-full h-[500px] rounded-xl object-fill'
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

      <div className='w-full flex flex-col items-center justify-center raleway-400 relative bg-[#f5f5f5] py-16'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            LINKS YOU MAY FIND USEFUL
          </h1>
          <div className='flex justify-center items-center gap-8 flex-wrap lg:flex-row lg:ml-20'>
            <div className='flex-1'>
              <img src="/Disaster/1.webp" alt="" />
              <p className='font-bold'>Know more about us</p>
            </div>
            <div className='flex-1'>
              <img src="/Disaster/2.webp" alt="" />
              <p className='font-bold'>Read More On The Smile Blog</p>
            </div>
            <div className='flex-1'>
              <img src="/Disaster/3.webp" alt="" />
              <p className='font-bold'>Other Fields Of Change</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisasterResponse
