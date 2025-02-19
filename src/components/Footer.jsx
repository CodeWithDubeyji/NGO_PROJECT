import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'ABOUT US': [
      'About Smile',
      'Impact',
      'Reach & Presence',
      'Milestones',
      'Privacy Policy'
    ],
    'OUR WORK': [
      'Education',
      'Health',
      'Livelihood',
      'Women Empowerment',
      'Disaster Response'
    ],
    CAMPAIGNS: [
      'Shiksha Na Ruke',
      'Health Cannot Wait',
      'She Can Fly',
      'Swabhiman',
      'Tayyari Kal Ki'
    ],
    'GET INVOLVED': [
      'Individual Support',
      'Corporate Partnerships',
      'Volunteer',
      'School Partnerships',
      'Careers'
    ],
    'RESOURCE CENTRE': [
      'Annual Report',
      'Newsletter',
      'Stories of Change',
      'The Smile Blog',
      'Films'
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ]

  return (
    <footer className='bg-[#4c4d4c] text-gray-300 py-12 px-4 mt-auto'>
      <div className='max-w-7xl mx-auto'>
        {/* Desktop View (Hidden on Mobile) */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8'>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className='space-y-4'>
              <h3 className='text-white font-semibold border-b border-[#9d9c9d] pb-2'>
                {title}
              </h3>
              <ul className='space-y-2'>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href='#'
                      className='hover:text-white transition duration-300'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact, Newsletter & Socials (Always Visible) */}
        <div className='border-t border-[#9d9c9d] pt-8 space-y-4'>
          <div className='flex flex-col justify-between items-center lg:flex-row'>
            <div className=' flex flex-col gap-2'>
              <p className='text-base font-semibold'>Smile Foundation</p>
              <p className='text-sm'>
                161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community
                Centre, New Delhi - 110049, India
              </p>
              <p className='text-sm'>
                Contact: +91-11-43123700 | info@smilefoundationindia.org
              </p>
            </div>

            <div className='flex justify-center space-x-6 pt-4'>
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  aria-label='Social Link'
                  className='text-gray-400 hover:text-white transition duration-300 bg-black p-2 rounded-full'
                >
                  <Icon className='h-6 w-6' />
                </a>
              ))}
            </div>
          </div>

          <h4 className='text-white text-lg font-semibold'>
            Subscribe to Our Newsletter
          </h4>
          <div className='flex gap-2 items-center mx-auto mt-4'>
            <input
              type='text'
              placeholder='Name'
              className='w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#96d643]'
            />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#96d643]'
            />
            <button className='w-full px-6 py-2 bg-[#8dc73f] text-white rounded hover:bg-[#80b739] transition duration-300'>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
