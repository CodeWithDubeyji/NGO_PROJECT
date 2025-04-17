import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (

  <div className="about-container mx-auto p-6 max-w-6xl">
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h1 className="text-3xl font-bold text-[#8dc63f] mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        Sanvi Mahila Jan Seva Sansthan is a dedicated non-profit organization based in Gomti Nagar, Lucknow, 
        Uttar Pradesh. We strive to empower communities and create sustainable change through our various initiatives.
      </p>
      <p className="text-gray-700 mb-6">
        Since our inception, we have been committed to strengthening individuals and communities through proactive 
        development programs, timely interventions, and superior service delivery - all while reinforcing innovation, 
        cost leadership, and quality in everything we do.
      </p>
      <Link to="/contact-us" className="inline-block bg-[#8dc63f] text-white px-6 py-2 rounded-md hover:bg-[#66912a] transition-colors">
        Get Involved
      </Link>
    </div>

    <h2 className="text-2xl font-bold text-[#8dc63f] mb-4">Our Impact</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {[
        {
          id: 1,
          image: '/Home/1.jpg',
          title: 'Supporting the Visually Impaired',
          description: 'We offer selfless support and aid for the blind. We understand and look after their needs at all times.'
        },
        {
          id: 2,
          image: '/Home/2.jpg',
          title: 'Community Development',
          description: 'Empowering communities through various programs focused on sustainable growth and self-reliance.'
        },
        {
          id: 3,
          image: '/Home/3.jpg',
          title: 'Education Initiatives',
          description: 'Providing access to quality education and skill development for underprivileged children and adults.'
        }
      ].map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-200 h-48 flex items-center justify-center">
            <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#8dc63f] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-[#f2ffdf] rounded-lg p-6 border border-[#c6f683]">
      <h2 className="text-2xl font-bold text-[#8dc63f] mb-4">Our Mission</h2>
      <p className="text-gray-700">
        We are dedicated to improving lives and empowering communities through sustainable development initiatives, 
        education, and advocacy. Our focus remains on creating lasting change while addressing the immediate needs of 
        the communities we serve.
      </p>
    </div>
  </div>
  )
}

export default About
