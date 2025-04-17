import React from 'react'
import { Link } from 'react-router-dom'
const Impact = () => {
  return (
    <div className='w-full'>
      {/* Introduction Section */}
      <div className='text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]'>
        <p className='text-lg text-gray-600' id='about-us'>
          We, Sanvi Mahila Jan Seva Sansthan, situated at Gomti Nagar, Lucknow,
          Uttar Pradesh are one of the leading firm in the country, set up to
          cater to the growing requirements of in all sectors. We have
          strengthened the business of the customers through proactive product
          development, timely delivery and superior product attributes by
          reinforcing innovation, cost leadership and premium quality.
        </p>
        <Link to='/about-us' className='text-[#abc73f] text-lg'>
          read more &gt;
        </Link>
      </div>

      {/* Full-Width Impact Section (Hidden in Mobile View) */}
      {/* <div className="bg-[#f3f2f3] py-[60px] bebas-neue-regular">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[48px]">OUR IMPACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">15+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">LAC</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">children and their families are impacted every year</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">2000+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">VILLAGES</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">and slums are reached out across the country</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">400+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">PROJECTS</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">focused on education, healthcare, and women empowerment</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">25+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">STATES</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">are reached including the remotest areas</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Impact
