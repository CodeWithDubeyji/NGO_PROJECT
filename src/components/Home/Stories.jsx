import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'

const stories = [
  {
    id: 1,
    thumbnail:
      '/Home/thumbnail1.png',
    videoUrl: '/Home/vid1.mp4'
  },
  {
    id: 2,
    thumbnail:
      '/Home/thumbnail2.png',
    videoUrl: '/Home/vid2.mp4'
  },
  {
    id: 3,
    thumbnail:
      '/Home/thumbnail1.png',
    videoUrl: '/Home/vid1.mp4'
  },
  {
    id: 4,
    thumbnail:
      '/Home/thumbnail2.png',
    videoUrl: '/Home/vid2.mp4'
  },
  {
    id: 5,
    thumbnail:
      '/Home/thumbnail1.png',
    videoUrl: '/Home/vid1.mp4'
  },
  {
    id: 6,
    thumbnail:
      '/Home/thumbnail2.png',
    videoUrl: '/Home/vid2.mp4'
  }
]

const Stories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)

  return (
    <div className='py-10 text-center' id='stories'>
      <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-10 bebas-neue-regular'>
        STORIES IN MOTION
      </h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className='w-[75%] mx-auto'
      >
        {stories.map(story => (
          <SwiperSlide key={story.id}>
            <div
              className='relative group cursor-pointer'
              onClick={() => setSelectedVideo(story.videoUrl)}
            >
              <img
                src={story.thumbnail}
                alt='Story Thumbnail'
                className='w-full h-[300px] rounded-xl object-cover'
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

      {/* Video Overlay Modal */}
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
  )
}

export default Stories
