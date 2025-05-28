import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container mx-auto p-6 max-w-6xl'>
      <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
        <h1 className='text-3xl font-bold text-[#8dc63f] mb-4'>About Us</h1>
        <p className='text-gray-700 mb-6'>
          Founded in July 2023 in Pratapgarh, Uttar Pradesh, Sanvi Mahila Jan
          Seva Sansthan is a nonprofit organization committed to empowering
          women and children, fostering health and education, and creating a
          more equitable society. Guided by the belief that sustainable change
          begins with empowered individuals, our NGO works tirelessly to address
          critical issues in women’s health and hygiene, education, skill
          development, and child welfare.
        </p>
        <p className='text-gray-700 mb-6'>
          Our initiatives focus on promoting menstrual health awareness,
          providing access to essential hygiene products, offering educational
          support to underprivileged children, and empowering women through
          vocational training and financial literacy programs. We also run
          advocacy campaigns to raise awareness about gender equality, child
          rights, and community well-being.
        </p>
        <p className='text-gray-700 mb-6'>
          Rooted in the vibrant and diverse community of Pratapgarh, our work
          reflects the unique challenges and opportunities of the region. With a
          dedicated team of volunteers, supporters, and change-makers, we strive
          to uplift lives and create lasting impact at the grassroots level.
        </p>
        <p className='text-gray-700 mb-6'>
          At Sanvi Mahila Jan Seva Sansthan, we envision a society where every
          woman and child has the tools, resources, and confidence to lead a
          life of dignity, health, and opportunity. Together, we are building a
          brighter tomorrow, one life at a time.
        </p>
        <Link
          to='/contact-us'
          className='inline-block bg-[#8dc63f] text-white px-6 py-2 rounded-md hover:bg-[#66912a] transition-colors'
        >
          Get Involved
        </Link>
      </div>

      <h2 className='text-2xl font-bold text-[#8dc63f] mb-4'>Our Impact</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {[
          {
            id: 1,
            image: '/Home/1.jpg',
            title: 'Supporting the Visually Impaired',
            description:
              'We offer selfless support and aid for the blind. We understand and look after their needs at all times.'
          },
          {
            id: 2,
            image: '/Home/2.jpg',
            title: 'Community Development',
            description:
              'Empowering communities through various programs focused on sustainable growth and self-reliance.'
          },
          {
            id: 3,
            image: '/Home/3.jpg',
            title: 'Education Initiatives',
            description:
              'Providing access to quality education and skill development for underprivileged children and adults.'
          }
        ].map(item => (
          <div
            key={item.id}
            className='bg-white rounded-lg shadow-md overflow-hidden'
          >
            <div className='bg-gray-200 h-48 flex items-center justify-center'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-[#8dc63f] mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#f2ffdf] rounded-lg p-6 border border-[#c6f683]'>
        <h2 className='text-2xl font-bold text-[#8dc63f] mb-4'>Our Mission</h2>
        <p className='text-gray-700'>
          The mission of Sanvi Mahila Jan Seva Sansthan is to empower women and
          children to lead lives of dignity, health, and opportunity by
          addressing the critical challenges they face. We are dedicated to
          promoting women’s health and hygiene through awareness, accessibility,
          and advocacy, while fostering education for underprivileged children
          and encouraging lifelong learning. By equipping women with essential
          skills, knowledge, and financial independence, we aim to enable them
          to become active contributors to their communities. Our work also
          extends to advocating for child welfare, ensuring that every child has
          access to a safe, nurturing, and supportive environment. Through
          compassion, innovation, and community-driven initiatives, we aspire to
          create a more inclusive, equitable, and sustainable society for all.
        </p>
      </div>
    </div>
  )
}

export default About
