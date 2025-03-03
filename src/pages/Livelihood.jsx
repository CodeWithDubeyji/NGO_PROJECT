import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

const Livelihood = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)
  const [openQuestion, setOpenQuestion] = useState(0)

  const toggleQuestion = index => {
    setOpenQuestion(openQuestion === index ? null : index)
  }
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
      name: 'GEETA',
      image: '/Livelihood/story_1.webp', // Replace with actual image URL
      description:
        'My childhood was not about balloons, toy cars or kites. In the last days of every month, we usually had no money.'
    },
    {
      name: 'DIPTI',
      image: '/Livelihood/story_2.webp', // Replace with actual image URL
      description:
        'Knowing that my care, touch, and time can help a patient make it through the night is one of most rewarding feelings'
    },
    {
      name: 'SARITA',
      image: '/Livelihood/story_3.webp', // Replace with actual image URL
      description:
        'If you lost a little weight, you would look so beautiful; for a girl, it’s important – don’t you want to get married to a'
    }
  ]

  const blogs = [
    {
      name: 'Celebrating Swami Vivekananda Jayanti as National Youth Day',
      image: '/Livelihood/blogs_1.webp', // Replace with actual image URL
      description: 'We celebrate 12 January as National Youth Day in India.'
    },
    {
      name: 'Making Healthcare System in India a Major Agenda for G20 2023',
      image: '/Livelihood/blogs_2.webp', // Replace with actual image URL
      description: 'India; a looted, invaded and colonised nation. From being'
    },
    {
      name: 'Challenges in last mile delivery of healthcare in rural areas',
      image: '/Livelihood/blogs_3.webp', // Replace with actual image URL
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
  const faqDonorData = [
    {
      question: 'What information is sent to the donors?',
      answer:
        'The donor gets an instant acknowledgement mail along with an SMS. On receiving the reconciliation statement from the bank, a receipt is sent via e-mail immediately, followed by a hard copy by post (within India). The receipt is accompanied by a ‘welcome pack’ which is also a token of appreciation. The donor receives a birthday wish, wishes on important festivals, programme updates and an annual impact report during a year’s time.'
    },
    {
      question: 'What will Smile do with my donation?',
      answer:
        'As soon as the donation through cheque or online is reconciled by the bank, the amount is allotted to the specific programme, which it has been meant for. The utilization and results are managed, monitored and audited. The outcome is reflected in the annual impact report, which is shared with the donors.'
    },
    {
      question:
        'How does Smile Foundation ensure that the donors contribution is being utilized in the intended way?',
      answer:
        'Smile Foundation follows the principle of good governance. We have a four-tier audit mechanism to track and monitor the funds raised and utilized. More details of the process are mentioned at https://www.smilefoundationindia.org/governance.html'
    },
    {
      question: 'Does Smile accept donations in USD or Pounds?',
      answer:
        'Yes, the organization accepts donations in USD and pounds as well but only in the form of cheque, drafts or via online payment gateway. As a policy the organization adhere to all government norms and maintains optimum transparency with the donors. The organization does have an FCRA account for its internationals supporters. However tax exemptions are applicable as per the country specific guidelines.'
    },
    {
      question:
        'How much should I donate? (we can give break up of monthly expenditure of a child)',
      answer:
        'There is no specific amount that should be donated. However all the programmes have a detailed breakup of the expenditure displayed online.'
    }
  ]

  return (
    <>
      <div className='relative w-full h-screen flex items-center justify-center mx-auto'>
        <img
          src='/Livelihood/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-fill'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            SKILLED WORKFORCE. dignified livelihood
          </h2>
        </div>
      </div>
      <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
          WHY SKILLING?
        </h1>
        <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          The youth comprises over one-third of the Indian population which in
          turn constitutes a major part of the labour force of the country. A
          country like India which has a huge young population can reap better
          benefits from the demographic dividend if its youth are better skilled
          and employable. It is crucial for the energy of the underprivileged
          youth to be channelized properly with proper direction to aid economic
          growth and nation building.
        </p>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center bg-[#9cca7a]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHAT WE DO
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Smile Foundation through its Livelihood programme connects the
            unemployed or underemployed youth from disadvantaged groups and
            communities with the sectors which have large growth potential in
            terms of revenue generation and employability. The staggering youth
            population underutilised in the job market because of a lack of
            requisite qualifications and training are upskilled, uplifted, and
            mainstreamed to become a part of the country’s growth story. The
            livelihood programme aims to complement the government’s vision and
            efforts under the Skill India mission, and is aligned with the
            Sustainable Development Goals 4 and 8.
          </p>
        </div>
      </div>

      <div className='w-[75%] mx-auto my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
          Course Module
        </h1>
        <img
          src='/Livelihood/module.webp'
          alt=''
          className='w-full object-cover'
        />
      </div>

      <div className='w-full mx-auto my-16 bg-[#f5f5f5] p-16  '>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
            How we work
          </h1>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <div className='p-5 bg-white rounded-full'>
              <img src='/Livelihood/work_1.png' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-[#9cca7a] rounded-full'>
              <img src='/Livelihood/work_2.png' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-white rounded-full'>
              <img src='/Livelihood/work_3.png' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-[#9cca7a] rounded-full'>
              <img src='/Livelihood/work_4.webp' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-white rounded-full'>
              <img src='/Livelihood/work_5.webp' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-[#9cca7a] rounded-full'>
              <img src='/Livelihood/work_6.webp' alt='' className='w-[100px]' />
            </div>
            <div className='p-5 bg-white rounded-full'>
              <img src='/Livelihood/work_7.png' alt='' className='w-[100px]' />
            </div>
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            Impact 2022-23
          </h1>
          <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
            <div>
              <img src='/Livelihood/impact.webp' alt='' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-10 items-center'>
              <div>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>10,000</span>
                  youth were trained, 6400+ were placed
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>90,000+</span>
                  painters were upskilled in 24 cities across India
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>96%</span>
                  enrollees qualified to receive the STeP certification
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>800+</span>
                  career counseling sessions & industry exposure visits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mx-auto '>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
            How we work
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

      <div className='relative w-full flex flex-col items-center justify-center bg-[#f5f5f5] my-16 raleway-400'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            iTrain on Wheels
          </h1>
          <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
            <div className='w-[75%] mx-auto flex flex-col justify-center h'>
              <p className='text-justify raleway-400 antialiased z-20'>
                In the fast-paced and ever-evolving professional landscape,
                upskilling has become crucial for employees and workers to
                remain competitive and advance in their careers.
              </p>
              <br />
              <p className='text-justify raleway-400  antialiased z-20'>
                Since 2021, Berger Paints has joined hands with Smile Foundation
                through their CSR initiative to support the iTrain on Wheels
                programme, aimed at enhancing the painting skills of local
                painters. This project aims to provide painters across India
                with specialized training in various techniques, empowering them
                for more diverse employment opportunities and elevating their
                overall quality of life.
              </p>{' '}
              <br />
              <p className='text-justify raleway-400 antialiased z-20'>
                <span className='font-bold'>iTran</span> on Wheels serves as a
                platform for painters to acquire new skills and improve their
                existing ones. The ultimate goal is to improve their livelihoods
                and create a positive impact on their overall well-being.
              </p>
            </div>
            <div>
              <img src='/Livelihood/itrain.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col gap-4 my-8 md:my-12 lg:my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold tracking-wide'>
            Reach & Presence
          </h1>
          <div className='flex flex-col lg:flex-row gap-4'>
            {/* First Card */}
            <div className='w-full lg:w-[49%] bg-[#98bfbc] p-6 md:p-8 lg:p-10'>
              <div className='flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-6 lg:gap-8'>
                <div className='flex flex-col items-center justify-center order-2 md:order-1'>
                  <span className='text-6xl md:text-7xl lg:text-8xl font-bold text-[#fff212]'>
                    82
                  </span>
                  <span className='text-base md:text-lg tracking-wide font-light text-white'>
                    Projects
                  </span>
                </div>
                <img
                  src='/Livelihood/reach_1.webp'
                  alt='Projects'
                  className='w-[25vmin] md:w-[28vmin] lg:w-[30vmin] order-1 md:order-2'
                />
              </div>
            </div>

            {/* Second Card */}
            <div className='w-full lg:w-[49%] bg-[#98bfbc] p-6 md:p-8 lg:p-10'>
              <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-6 lg:gap-8 md:ml-10 lg:ml-20'>
                <div className='flex flex-col items-center justify-center'>
                  <span className='text-6xl md:text-7xl lg:text-8xl font-bold text-[#fff212]'>
                    16
                  </span>
                  <span className='text-base md:text-lg tracking-wide font-light text-white'>
                    States
                  </span>
                </div>
                <img
                  src='/Livelihood/reach_2.webp'
                  alt='States'
                  className='w-[25vmin] md:w-[28vmin] lg:w-[30vmin]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='relative w-full flex flex-col items-center justify-center raleway-400'>
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
        <button className='mt-5 bg-green-500 text-white font-semibold px-6 py-3 rounded-md transition hover:bg-green-600'>
          VIEW ALL
        </button>
      </div>

      <div className='w-full mx-auto mb-20  '>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide my-4'>
            csr partners
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

      <div className='bg-gray-300 px-16 py-20'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide mb-8 lg:ml-32'>
          CHANGE THAT INSPIRES US
        </h1>
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

      <div className='lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-md mx-auto my-20'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide text-left'>
        Frequently Asked Questions (FAQs)
        </h1>
        <div className='space-y-4'>
          {faqDonorData.map((faq, index) => (
            <div key={index} className='border-b border-gray-200'>
              <button
                className='w-full flex justify-between items-center py-4 px-2 text-left'
                onClick={() => toggleQuestion(index)}
              >
                <h3
                  className={`font-light ${
                    openQuestion === index ? 'text-green-500' : 'text-black'
                  } bebas-neue-regular tracking-wide`}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openQuestion === index
                      ? 'text-green-500 rotate-180'
                      : 'text-black'
                  }`}
                />
              </button>
              {openQuestion === index && (
                <div className='pb-4 px-2 text-gray-500 raleway-400 tracking-normal'>
                  <p>{faq.answer}</p>
                </div>
              )}
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
                Donate For Livelihood
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

export default Livelihood
