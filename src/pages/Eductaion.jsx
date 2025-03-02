import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import Stories from '../components/Home/Stories'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { X } from 'lucide-react'

const AccordionItem = ({ title, content, bgColor, isOpen, onClick }) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className='mb-4 overflow-hidden'>
      <div
        className={`flex items-center p-4 cursor-pointer ${bgColor} rounded-md transition-all duration-300`}
        onClick={onClick}
      >
        <ChevronRight
          className={`mr-2 transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
          size={20}
        />
        <h3 className='font-medium text-lg'>{title}</h3>
      </div>

      <div
        ref={contentRef}
        style={{ height: height }}
        className='transition-all duration-300 ease-in-out'
      >
        <div className='pl-10 pr-4 py-3'>
          {content && (
            <ul className='list-disc space-y-2 pl-4'>
              {content.map((item, index) => (
                <li key={index} className='text-gray-800'>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

function FourProngedApproach () {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = index => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const sections = [
    {
      title: 'Improving Learning Outcomes',
      content: [
        'Curriculum Based Learning',
        'STEM & Experiential Learning',
        'Digital Learning Solutions',
        'Sports and Extra-Curricular Activities',
        'Nutrition and Healthcare Support'
      ],
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Capacity Building of Teachers',
      content: [
        'Classroom Management',
        'Subject Specific Knowledge',
        'Child Pedagogy and Wellbeing',
        'Teaching Learning Tools',
        'Use of Digital Tools'
      ],
      bgColor: 'bg-green-100'
    },
    {
      title: 'Creating Enabling Learning Environment',
      content: [
        'Infrastructure Development',
        'Using Building as Learning Aid (BALA)',
        'Solar Panels for Alternative Power',
        'Refurbishment of Classrooms & Science Labs',
        'Setting up STEM Labs, Libraries, Numeracy Labs'
      ],
      bgColor: 'bg-teal-100'
    },
    {
      title: 'Community Engagement',
      content: [
        'Engaging Local Stakeholders',
        'Parent Teachers Associations',
        'School Management Communities'
      ],
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <div className='mx-auto p-4 md:p-6'>
      <h2 className='text-[30px] md:text-[42px] lg:text-[2.5rem] mb-6 font-semibold bebas-neue-regular tracking-wide'>
        4-PRONGED APPROACH
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            bgColor={section.bgColor}
            isOpen={!!openSections[index]}
            onClick={() => toggleSection(index)}
          />
        ))}
      </div>
    </div>
  )
}

const Eductaion = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const closeModal = () => setSelectedVideo(null)

  const stories = [
    {
      name: 'DEBASMITA',
      image: '/Education/stories_1.webp', // Replace with actual image URL
      description:
        "In the slum where I live, many parents are worried about their children's education."
    },
    {
      name: 'LAVANYA',
      image: '/Education/stories_2.webp', // Replace with actual image URL
      description:
        'Some people say I am unlucky. My father went away when I was born, and later my mother died in an accident.'
    },
    {
      name: 'NEHA',
      image: '/Education/stories_3.webp', // Replace with actual image URL
      description:
        'My father used to sell vegetables, but during the pandemic, everything closed down.'
    }
  ]

  const blogs = [
    {
      name: '5 Education Trends 2023 to Change Education in India',
      image: '/Education/blogs_1.webp', // Replace with actual image URL
      description:
        'As a student, you might remember sitting in a classroom listening…'
    },
    {
      name: 'Jaadui Pitara: Foundational Stage Learning Opportunity',
      image: '/Education/blogs_2.webp', // Replace with actual image URL
      description: 'The Ministry of Education, Government of India,  launched….'
    },
    {
      name: 'What Happens When Girls are Stopped from Going to Schools?',
      image: '/Education/blogs_3.webp', // Replace with actual image URL
      description:
        'It’s always a good idea to circle back to the basics when feeling…'
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
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/Education/1.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            EDUCATION IS EMPOWERMENT
          </h2>
        </div>
      </div>
      <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
        <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
          WHY Education
        </h1>
        <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          If we need to address healthcare, poverty, population control,
          unemployment and human rights, there's no better way to start than
          providing education to children in need. Education not only empowers
          children to have a secure future but also helps them grow up as
          responsible national and global citizens. The Right to Education (RTE)
          Act which came into force in 2010 made education free and compulsory
          for all children in the age group of 6-14 years. But even a decade
          later, the learning curve has not been steady for many children in the
          country. The socio-economic conditions of parents and lack of proper
          learning in schools are hindrances which prevent many children from
          having education.
        </p>
      </div>
      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            WHAT WE DO
          </h1>
          <p className='text-justify raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            Smile Foundation’s flagship programme Mission Education works with
            the objective of empowering underprivileged children by providing
            education, nutrition, and wellness support. The programme is well
            aligned to the New Education Policy (2020), and the SDG Goal 4
            (Ensure inclusive and equitable quality education and promote
            lifelong learning opportunities for all). Mission Education works
            with children (3-18 years) living in difficult circumstances,
            children from poor families, differently abled children,
            disaster-struck children, abandoned and street children, and
            children living in tribal belts, remote villages and hard to reach
            areas.
          </p>
        </div>
        <div className='w-[75%] mx-auto mb-16 hidden md:block'>
          <img src='/Education/What-we-do.webp' alt='' />
        </div>
      </div>

      <div className='w-[75%] mx-auto my-16'>
        <FourProngedApproach />
      </div>

      <div className='relative w-full flex flex-col items-center justify-center bg-[#eef5f9]'>
        <div className='w-[75%] mx-auto flex flex-col justify-center gap-4 my-16'>
          <h1 className='text-[30px] md:text-[42px] lg:text-[2.5rem] font-semibold bebas-neue-regular tracking-wide'>
            Impact 2022-23
          </h1>
          <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
            <div>
              <img src='/Education/2.webp' alt='' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-10 items-center'>
              <div>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>120,000+</span>
                  children received quality education
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#88c23f] text-5xl'>44,000+</span>
                  girls received vocational training support
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>25,000+</span>
                  children benefitted through infrastructure support
                </p>
              </div>
              <div className=''>
                <p className='raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7 font-semibold'>
                  <span className='text-[#808080] text-5xl'>2000+</span>
                  girls received scholarship support for higher studies
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
                Donate For Education
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

export default Eductaion
