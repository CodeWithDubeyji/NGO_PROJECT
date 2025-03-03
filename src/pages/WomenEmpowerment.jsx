import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Stories from '../components/Home/Stories'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'
const WomenEmpowerment = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)

  const partners = [
    {
      name: 'BLK Super Speciality Hospital',
      imageUrl: '/Livelihood/work_1.png'
    },
    {
      name: 'Jaipur Golden Hospital',
      imageUrl: '/Livelihood/work_2.png'
    },
    {
      name: 'Fortis Hospitals',
      imageUrl: '/Livelihood/work_3.png'
    },
    {
      name: 'Apollo Pharmacy',
      imageUrl: '/Livelihood/work_4.webp'
    },
    {
      name: 'Dr Lal PathLabs',
      imageUrl: '/Livelihood/work_5.webp'
    },
    {
      name: 'Unknown',
      imageUrl: '/Livelihood/work_6.webp'
    }
  ]

  const stories = [
    {
      name: 'SHYAMA, HARYANA',
      image: '/WomenEmp/story_1.webp', // Replace with actual image URL
      description:
        'Covid brought many problems with it– both outside and within our home. My husband who used to work at a tailoring shop lost his job. It became very hard to make ends meet…'
    },
    {
      name: 'YASHODA, KARNATAKA',
      image: '/WomenEmp/story_2.webp', // Replace with actual image URL
      description:
        'Before the pandemic, Yashoda was a young mother to a one-year old, living with her cab driver husband in Bengaluru. However, her husband lost his job in the lockdown…'
    },
    {
      name: 'ISHWATI, MAHARASHTRA',
      image: '/WomenEmp/story_3.webp', // Replace with actual image URL
      description:
        'Ishwati was a daily wage labourer living with her family of six in Maharashtra. After a day’s work her family was barely able to make ends meet. When Smile Foundation began its Swabhiman…'
    }
  ]

  const blogs = [
    {
      name: 'Postnatal Care to Postpartum Depression: Mother At The Centre',
      image: '/WomenEmp/blogs_1.webp', // Replace with actual image URL
      description:
        'Becoming a mother is a blissful experience. It is a moment of pure joy…'
    },
    {
      name: 'The Importance of Financial Literacy for Women',
      image: '/WomenEmp/blogs_2.webp', // Replace with actual image URL
      description: 'Financial literacy is the ability to understand and effectively use financial skills, such as…'
    },
    {
      name: 'International Women’s Day 2023: Women in Digital Innovation',
      image: '/WomenEmp/blogs_3.webp', // Replace with actual image URL
      description:
        'Empowering women is a prerequisite for creating a good nation, when women…'
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

  const interventions = [
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    },
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    },
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    },
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    },
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    },
    {
      imgUrl: '/WomenEmp/inter_1.webp',
      title: 'Reproductive & Child Health'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/WomenEmp/1.jpeg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            WOMEN EMPOWERMENT FOR NATION BUILDING
          </h2>
        </div>
      </div>

      <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
          WHY WOMEN EMPOWERMENT?
        </h1>
        <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          Over the past decade, gender equality has been recognized as crucial
          not only to the health of nations but also to their social and
          economic development. The promotion of gender equality and women
          empowerment is a key aspect of UNDP’s Sustainable Development Goals.
          It involves promoting equal rights, opportunities, and access to
          resources for women, enabling them to make independent choices and
          have control over their lives. Empowered women contribute to economic
          growth, social progress, and sustainable development. They play active
          roles in decision-making processes, education, healthcare, and
          leadership positions. Women empowerment fosters a more balanced and
          diverse society, where women's voices are heard, their talents are
          recognized, and their potential is fully realized. It is a vital step
          towards building a more equitable and harmonious world for all.
        </p>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHAT WE DO
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Smile Foundation’s women empowerment programme Swabhiman, initiated
            in 2005, reaches out to marginalized and socially-excluded women
            with interventions in nutrition, healthcare, and livelihood. The
            programme capacitates women through innovative community practices,
            empowering them to seek healthcare and bring sustainable changes in
            the community, while also supporting them to become aware, skilled,
            and financially independent. Swabhiman also actively works to create
            a gender equal society, actively engaging men, and boys to
            participate in the process of women empowerment.
          </p>
        </div>
      </div>

      <div className='w-full mx-auto bg-[#9dca7b] py-16'>
        <div className='w-[75%] mx-auto'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide mb-8'>
            Our Interventions
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {interventions.map((intervention, index) => (
              <div key={index} className='bg-white rounded-xl shadow-lg p-6'>
                <img src={intervention.imgUrl} alt='' />
                <p className='font-bold text-left'>{intervention.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center '>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            Impact 2022-23
          </h1>
          <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
            <div>
              <img src='/WomenEmp/impact.webp' alt='' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-10 items-center'>
              <div>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>150,000+</span>
                  women impacted through Swabhiman programme
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>80,000+</span>
                  girls and women provided awareness & access of healthcare
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>1,000+</span>
                  women and adolescent girls trained as change agents
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>54</span>
                  women-led businesses & small enterprises initiated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center bg-[#f5f5f5] py-12 md:py-16 raleway-400'>
        {/* Stories of Change */}
        <div className='w-[90%] md:w-[85%] lg:w-[75%] mb-8'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            STORIES OF CHANGE
          </h1>
        </div>
        <div className='w-[90%] md:w-[85%] lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {stories.map((story, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl'
            >
              <div className='w-full h-[160px] md:h-[180px] overflow-hidden rounded-md'>
                <img
                  src={story.image}
                  alt={story.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='mt-4 text-lg font-bold'>{story.name}</h3>
              <p className='text-gray-600 mt-2 text-sm md:text-base'>
                {story.description}
              </p>
              <button className='mt-4 bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full transition hover:bg-green-200'>
                READ MORE
              </button>
            </div>
          ))}
        </div>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide md:my-16'>
          CHANGE THAT INSPIRES US
        </h1>
        <div className='w-full py-12'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto'
          >
            {changes.map(change => (
              <SwiperSlide key={change.id}>
                <div
                  className='relative group cursor-pointer overflow-hidden rounded-xl'
                  onClick={() => setSelectedVideo(change.videoUrl)}
                >
                  <img
                    src={change.thumbnail}
                    alt={change.title}
                    className='w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300'>
                    <div className='w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300'>
                      <div className='w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-black ml-1'></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedVideo && (
          <div
            className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'
            onClick={closeModal}
          >
            <button
              className='absolute top-4 right-4 text-white text-3xl font-bold z-[60]'
              onClick={closeModal}
              aria-label='Close modal'
            >
              <X size={24} />
            </button>
            <div
              className='relative w-full max-w-4xl bg-black rounded-lg overflow-hidden'
              onClick={e => e.stopPropagation()}
            >
              <iframe
                className='w-full aspect-video'
                src={selectedVideo}
                title='Video Player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide md:my-16'>
          Stakeholders SPEAK
        </h1>
        <div className='w-full py-12'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto'
          >
            {changes.map(change => (
              <SwiperSlide key={change.id}>
                <div
                  className='relative group cursor-pointer overflow-hidden rounded-xl'
                  onClick={() => setSelectedVideo(change.videoUrl)}
                >
                  <img
                    src={change.thumbnail}
                    alt={change.title}
                    className='w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300'>
                    <div className='w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300'>
                      <div className='w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-black ml-1'></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedVideo && (
          <div
            className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'
            onClick={closeModal}
          >
            <button
              className='absolute top-4 right-4 text-white text-3xl font-bold z-[60]'
              onClick={closeModal}
              aria-label='Close modal'
            >
              <X size={24} />
            </button>
            <div
              className='relative w-full max-w-4xl bg-black rounded-lg overflow-hidden'
              onClick={e => e.stopPropagation()}
            >
              <iframe
                className='w-full aspect-video'
                src={selectedVideo}
                title='Video Player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className='w-full mx-auto mb-20  '>
          <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
            <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
              CORPORATE PARTNERS
            </h1>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 5 },
                768: { slidesPerView: 3 }
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className='w-[75%] mx-auto'
            >
              {partners.map(partner => (
                <SwiperSlide key={partner.name}>
                  <div className='p-4 bg-white rounded-lg shadow-lg'>
                    <img src={partner.imageUrl} alt='' />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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
              <button className='bg-green-500 raleway-400 text-lg tracking-widest leading-7 mt-2 text-white font-semibold px-6 py-3 rounded-xl transition hover:bg-green-600'>
                Donate For Women Empowerment
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

export default WomenEmpowerment
