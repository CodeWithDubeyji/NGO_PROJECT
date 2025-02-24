import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom'

const content = [
  {
    id: 1,
    title:
      'Smile Foundation Receives at CSR Health Awards 2024 by the IHW Council',
    desc: 'This award recognizes our healthcare program’s extensive reach across 17 states in India, including aspirational districts, remote villages, and underserved urban communities. Our comprehensive and community-centric health program delivers primary healthcare services directly to the doorsteps of underserved populations.',
    imgUrl:
      '/Smile-Foundation-Receives-at-CSR-Health-Awards-2024-by-the-IHW-Council.jpg'
  },
  {
    id: 2,
    title: 'Most Impactful NGO of the Year for Mission Education programme',
    desc: 'This award celebrates the tireless efforts of our team, supporters, and community in making quality education accessible to underprivileged children across India through our flagship programme Mission Education.',
    imgUrl:
      '/Most-Impactful-NGO-of-the-Year-for-Mission-Education-programme.jpg'
  },
  {
    id: 3,
    title: `'Best Healthcare and Wellness Program' at India CSR and Sustainability Conclave 2024`,
    desc: 'This award recognises Smile Foundation’s Swabhiman programme, a women empowerment initiative addressing key areas such as reproductive and child health, nutrition, economic empowerment, and system strengthening.',
    imgUrl:
      '/Best-Healthcare-and-Wellness-Program-at-India-CSR-and-Sustainability-Conclave-2024.jpg'
  },
  {
    id: 4,
    title: `'Best CSR Excellence in Healthcare Award' by ASSOCHAM`,
    desc: 'This recognition celebrates our Smile on Wheels mobile healthcare programme that has been instrumental in reaching the most isolated areas, expanding access to healthcare and supporting the National Health Mission’s vision of health for all.',
    imgUrl:
      '/Best-CSR-Excellence-in-Healthcare-Award-by-ASSOCHAM.jpg'
  },
  {
    id: 5,
    title: `'Best Organisation of the Year in CSR Implementation' at the Bharat CSR & Sustainability Conclave`,
    desc: 'This recognition celebrates the iTrain on Wheels project, a CSR initiative by Berger Paints India Ltd. Since 2021, Berger Paints has partnered with Smile Foundation to enhance the painting skills of local painters across India.',
    imgUrl: '/Best-Organisation-of-the-Year-in-CSR.jpg'
  },
  {
    id: 6,
    title: `'Most Trusted NGO in Child Development’ by Brand Empower at the National Quality Awards 2024`,
    desc: 'The award, presented by Padma Shri Awardee Mrs. Raveena Tandon, recognizes the foundation’s commitment to transforming the lives of underserved children across India through its flagship initiative around education.',
    imgUrl: '/Most-Trusted-NGO-in-Child-Development.jpg'
  },
  {
    id: 7,
    title: `Odisha CSR & Sustainability Excellence Award by ASSOCHAM in "Health & Wellness"`,
    desc: 'Recognized as the winner in the “Health and Wellness” category at Odisha CSR and Sustainability Excellence Awards 2024 by ASSOCHAM for Smile Foundation’s national mobile healthcare programme Smile on Wheels',
    imgUrl: '/Odisha-CSR-Sustainability-Excellence-Award-by-ASSOCHAM.jpg'
  },
]

const Awards = () => {
  return (
    <div className='hidden md:block'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className='w-full mx-auto'
      >
        {content.map(item => (
          <SwiperSlide key={item.id}>
            <div className='w-full h-[62vh] bg-[#debeaf] flex flex-col md:flex-row lg:flex-row'>
              <div className='w-full md:w-[55%] flex items-center justify-center md:justify-end px-6 md:px-20 py-6 raleway-400'>
                <div className='max-w-lg my-8'>
                  <h2 className='text-[24px] md:text-[36px] lg:text-[45px] mb-4 md:mb-8 bebas-neue-regular text-white tracking-normal leading-snug font-light'>
                    {item.title}
                  </h2>
                  <p className='mb-4 md:mb-8 raleway-400 tracking-wide antialiased'>
                    {item.desc}
                  </p>
                  <Link
                    to='#'
                    className='text-white md:mb-8 raleway-400 tracking-wide antialiased'
                  >
                    view all &gt;
                  </Link>
                </div>
              </div>
              <div className='w-full md:w-[45%] flex justify-center md:justify-start'>
                <img src={item.imgUrl} alt='' className='object-cover w-full' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Awards
