import { useState, useEffect } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Link
              key={index}
              to={item.href}
              className='block rounded-sm px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

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
            <a
              key={index}
              href={item.href}
              className='block py-2 text-sm text-gray-600'
            >
              {item.title}
            </a>
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
      <div className='fixed right-0 top-0 h-full w-[300px] bg-white p-6 shadow-xl'>
        <div className='mb-8 flex items-center justify-between'>
          <img src={`public/logo.webp`} alt='Logo' className='h-8 w-auto' />
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
        { title: 'About Us', href: '/our-story' },
        { title: 'People Behind Smile', href: '#' },
        { title: 'Impact', href: '#' },
        { title: 'Reach & Presence', href: '#' },
        { title: 'Civic Driven Changes', href: '#' },
        { title: 'Smilestones', href: '#' },
        { title: 'Good Governance', href: '#' },
      ]
    },
    {
      title: 'OUR WORK',
      items: [
        { title: 'Education', href: '#' },
        { title: 'Healthcare', href: '#' },
        { title: 'Livelihood', href: '#' }
      ]
    },
    {
      title: 'CAMPAIGNS',
      items: [
        { title: 'Current Campaigns', href: '#' },
        { title: 'Past Campaigns', href: '#' }
      ]
    },
    {
      title: 'GET INVOLVED',
      items: [
        { title: 'Volunteer', href: '#' },
        { title: 'Partner with Us', href: '#' },
        { title: 'Careers', href: '#' }
      ]
    },
    { title: 'MEDIA CENTRE' },
    { title: 'RESOURCE CENTER' },
    { title: 'CONTACT US' }
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
