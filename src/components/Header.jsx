import { useState, useEffect } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium whitespace-nowrap'>
        {title}
        {items && <ChevronDown className='h-3 w-3 ml-1' />}
      </button>

      {items && isOpen && (
        <div className='absolute left-0 top-full z-50 min-w-[200px] rounded-md bg-white p-2 shadow-lg'>
          {items.map((item, index) => (
            <div key={index} className='relative group'>
              {item.items ? (
                <>
                  <button className='flex justify-between w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'>
                    {item.title}
                    <ChevronDown className='h-3 w-3 ml-1 transform group-hover:rotate-180' />
                  </button>
                  <div className='absolute left-full top-0 hidden w-[200px] rounded-md bg-white p-2 shadow-lg group-hover:block'>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        target={subItem.target}
                        className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
                  target={item.target}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Updated MobileNavItem component to handle nested items
const MobileNavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b border-gray-200'>
      <button
        className='flex w-full items-center justify-between px-4 py-3 text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-gray-700 text-sm font-medium'>{title}</span>
        {items && (
          <ChevronDown
            className={`h-3 w-3 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>
      {items && isOpen && (
        <div className='bg-gray-50 px-4 py-2'>
          {items.map((item, index) => (
            <div key={index} className='mb-2'>
              {item.items ? (
                <MobileSubItem item={item} />
              ) : (
                <Link
                  to={item.href}
                  target={item.target}
                  className='block py-2 text-sm text-gray-600 hover:text-gray-900'
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// New component for handling nested mobile sub-items
const MobileSubItem = ({ item }) => {
  const [isSubOpen, setIsSubOpen] = useState(false)

  return (
    <div className='py-1'>
      <button
        className='flex w-full items-center justify-between py-2 text-left text-sm text-gray-600 hover:text-gray-900'
        onClick={() => setIsSubOpen(!isSubOpen)}
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${
            isSubOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isSubOpen && (
        <div className='pl-4 mt-1 border-l-2 border-gray-200'>
          {item.items.map((subItem, subIndex) => (
            <Link
              key={subIndex}
              to={subItem.href}
              target={subItem.target}
              className='block py-2 text-sm text-gray-600 hover:text-gray-900'
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 lg:hidden'>
      <div className='fixed inset-0 bg-black/50' onClick={onClose} />
      <div className='fixed right-0 top-0 h-full w-[300px] bg-white p-6 shadow-xl overflow-y-auto'>
        <div className='mb-8 flex items-center justify-between'>
          <img src={`logo.webp`} alt='Logo' className='h-8 w-auto' />
          <button onClick={onClose} className='text-gray-500'>
            <X className='h-6 w-6' />
          </button>
        </div>
        {navItems.map((item, index) => (
          <MobileNavItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function Navbar () {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      title: 'ABOUT US',
      items: [
        { title: 'About Us', href: '/about-us' },
        // {
        //   title: 'People Behind Smile',
        //   href: '#',
        //   items: [
        //     { title: 'Leadership', href: '#' },
        //     { title: 'Mentors', href: '#' },
        //     { title: 'Our People', href: '#' }
        //   ]
        // },
        // { title: 'Impact', href: '/impact' },
        // { title: 'Reach & Presence', href: '/reach-presence' },
        // { title: 'Civic Driven Changes', href: '/civic-driven-changes' },
        // { title: 'Smilestones', href: '/smilestones' },
        // { title: 'Good Governance', href: '/good-governance' }
      ]
    },
    // {
    //   title: 'OUR WORK',
    //   items: [
    //     { title: 'Education', href: '/education' },
    //     { title: 'Healthcare', href: '/healthcare' },
    //     { title: 'Livelihood', href: '/livelihood' },
    //     { title: 'Women Empowerment', href: '/women-empowerment' },
    //     { title: 'Disaster Response', href: '/disaster-response' },
    //     {
    //       title: 'Empowering Grassroots',
    //       href: 'https://www.smilefoundationindia.org/ctgi/',
    //       target: '_blank'
    //     },
    //     // {
    //     //   title: 'Privileged Children',
    //     //   href: '#',
    //     //   items: [
    //     //     { title: 'Child For Child', href: '/child-for-child' },
    //     //     { title: 'Sciffy', href: 'https://siffcy.org/', target: '_blank' }
    //     //   ]
    //     // }
    //   ]
    // },
    // {
    //   title: 'CAMPAIGNS',
    //   items: [
    //     {
    //       title: 'Siksha Na Ruke',
    //       href: 'https://donate.smilefoundationindia.org/donate-for-education/',
    //       target: '_blank'
    //     },
    //     {
    //       title: 'Health Cannot Wait',
    //       href: 'https://donate.smilefoundationindia.org/donate-for-healthcare/',
    //       target: '_blank'
    //     },
    //     {
    //       title: 'She Can Fly',
    //       href: 'https://donate.smilefoundationindia.org/donate-for-girl-child',
    //       target: '_blank'
    //     },
    //     {
    //       title: 'Swabhiman',
    //       href: 'https://donate.smilefoundationindia.org/women-empowerment/',
    //       target: '_blank'
    //     },
    //     {
    //       title: 'Tayaari Kal Ki',
    //       href: 'https://donate.smilefoundationindia.org/donate-for-livelihood/',
    //       target: '_blank'
    //     },
    //     {
    //       title: 'Disaster Relief',
    //       href: 'https://donate.smilefoundationindia.org/disaster-relief/',
    //       target: '_blank'
    //     }
    //   ]
    // },
    // {
    //   title: 'GET INVOLVED',
    //   items: [
    //     { title: 'Individual Support', href: '/individual-support' },
    //     {
    //       title: 'Corporate Partnership',
    //       href: '#',
    //       items: [
    //         { title: 'Corporate Social Responsibility', href: '/corporate-social-responsibility' },
    //         { title: 'Cause Marketing & Events', href: '/cause-marketing-and-events' },
    //         { title: 'Employee Engagement', href: '/employee-engagement' },
    //         { title: 'Payroll Giving', href: '/payroll-giving' },
    //       ]
    //     },
    //     { title: 'School Partnership', href: '/school-partnership' },
    //     { title: 'Volunteers & Internship', href: '/volunteers-and-internship' },
    //     { title: 'Work With Us', href: '/work-with-us' },
    //   ]
    // },
    // { title: 'MEDIA CENTRE' },
    // { title: 'RESOURCE CENTER' },
    {
      title: 'CONTACT US',
      items: [
        { title: 'Get In Touch', href: '/contact-us' },
        // { title: 'Faq', href: '/faq' }
      ]
    }
  ]

  return (
    <header className='relative border-b border-gray-200'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='/' className='flex items-center'>
              <img src={`/logo.webp`} alt='Logo' className='h-12 w-auto' />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex lg:items-center lg:space-x-1'>
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className='hidden items-center space-x-4 lg:flex'>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className='text-gray-600 hover:text-gray-900'
            >
              <Search className='h-5 w-5' />
            </button>
            <button className='rounded-md bg-[#8DC63F] px-6 py-2 text-sm font-medium text-white hover:bg-[#7ab32f] whitespace-nowrap min-w-max'>
              SUPPORT A CAUSE
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className='flex items-center lg:hidden'>
            <button className='rounded-full bg-[#8DC63F] px-4 py-2 text-sm font-medium text-white hover:bg-[#7ab32f] mr-2'>
              DONATE
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className='p-2 text-gray-600'
            >
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className='absolute left-0 top-full z-50 w-full bg-white p-4 shadow-lg'>
            <div className='relative mx-auto max-w-3xl'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full rounded-full border border-gray-300 px-4 py-2 pr-10 focus:border-green-500 focus:outline-none'
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
              >
                <X className='h-5 w-5' />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={navItems}
        />
      </div>
    </header>
  )
}
