'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom'

const content = [
  {
    id: 1,
    title: 'Smile Foundation has been accredited as a Guidestar India Platinum',
    desc: 'The accreditation recognizes and verifies the transparency and public accountability of organizations.',
    image: '/Guide-star-768x576.jpg.webp'
  },
  {
    id: 2,
    title:
      'Smile Foundation has been accredited as a Charities Aid Foundation (CAF) America',
    desc: 'The validation is extended to organizations on basis of a 100 point due diligence review.',
    image: '/caf.png.webp'
  },
  {
    id: 3,
    title: `Odisha CSR & Sustainability Excellence Award by ASSOCHAM in "Health & Wellness"`,
    desc: 'Organization in Special Consultative Status with the United Nations Economic and Social Council (ECOSOC) since 2012',
    image: '/ecosoc_chamber-1.jpg.webp'
  },
  {
    id: 4,
    title:
      'Smile Foundation has been accredited as a GlobalGiving validated charity',
    desc: 'GlobalGiving is the largest global crowdfunding community that connects nonprofits',
    image: '/dfltpict-1-768x497.jpg.webp'
  },
  {
    id: 5,
    title: 'Member of the United Nations Global Compact',
    desc: 'Smile Foundation became a participant member of the United Nations Global Compact, a voluntary initiative that aims to align strategies and operations with universal sustainability principles and support SDGs',
    image: '/2017-2-768x541.png.webp'
  }
]

const EmpanelmentAndAccreditations = () => {
  return (
    <div className='w-full px-4 md:px-6 py-8 md:py-20 bebas-neue-regular'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-4 bebas-neue-regular text-center'>
          Empanelment & Accreditations
        </h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className='w-full'
        >
          {content.map(item => (
            <SwiperSlide key={item.id} className='h-auto '>
              <div className='bg-[#f3f2f3] rounded-lg p-6 flex flex-col h-[500px] md:h-[450px] raleway-400'>
                <div className='w-full h-48 md:h-52 mb-4 flex-shrink-0'>
                  <a href='#'>
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className='w-full h-full object-contain rounded-md'
                    />
                  </a>
                </div>
                <div className='flex flex-col flex-grow'>
                  <h3 className='text-lg md:text-xl font-semibold mb-3 line-clamp-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm md:text-base text-gray-600 line-clamp-4'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          to={'#'}
          className='text-[#abc73f] raleway-400 text-center mt-8 block'
        >
          know more &gt;
        </Link>
      </div>
    </div>
  )
}

export default EmpanelmentAndAccreditations
