import React from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone
} from 'lucide-react'

const HeaderNav = () => {
  return (
    <div className='bg-gray-800 text-white p-2 text-xs sm:text-sm lg:text-base'>
      <div className='hidden lg:flex justify-around items-center'>
        <a
          href='tel:+917007681030'
          className='flex items-center gap-2 hover:text-green-400 transition-all duration-200'
        >
          <Phone size={20} className='stroke-white' />
          <p>
            +91-7007681030, Village & Post - Sarai Shankar, Tahsil: Patti,
            District- Pratapgarh, UP- 230401
          </p>
        </a>

        <a
          href='mailto:support@smjssindia.org'
          className='flex items-center gap-2 hover:text-green-400 transition-all duration-200'
        >
          <Mail size={20} className='stroke-white' />
          <p>support@smjssindia.org</p>
        </a>

        <div className='flex gap-4 items-center'>
          <a href='#' className='group'>
            <Facebook
              size={20}
              className='stroke-white fill-white group-hover:fill-[#71b44d] group-hover:stroke-[#71b44d] transition-all duration-200'
            />
          </a>
          <a href='#' className='group'>
            <Instagram
              size={20}
              className='stroke-white group-hover:stroke-[#71b44d] transition-all duration-200'
            />
          </a>
          <a href='#' className='group'>
            <Linkedin
              size={20}
              className='stroke-white fill-white group-hover:fill-[#71b44d] group-hover:stroke-[#71b44d] transition-all duration-200'
            />
          </a>
          <a href='#' className='group'>
            <Twitter
              size={20}
              className='stroke-white fill-white group-hover:fill-[#71b44d] group-hover:stroke-[#71b44d] transition-all duration-200'
            />
          </a>
          <a href='#' className='group'>
            <Youtube
              size={20}
              className='stroke-white group-hover:stroke-[#71b44d] transition-all duration-200'
            />
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='lg:hidden flex flex-col items-center text-center gap-2'>
        <a href='tel:+917007681030' className='flex items-center gap-1 hover:text-green-400'>
          <Phone size={18} className='stroke-white' />
          <p>+91-7007681030</p>
        </a>

        <a href='mailto:support@smjssindia.org' className='flex items-center gap-1 hover:text-green-400'>
          <Mail size={18} className='stroke-white' />
          <p>Email Us</p>
        </a>

        <div className='flex gap-3'>
          <a href='#' className='group'>
            <Facebook size={18} className='stroke-white fill-white group-hover:fill-[#71b44d]' />
          </a>
          <a href='#' className='group'>
            <Instagram size={18} className='stroke-white group-hover:stroke-[#71b44d]' />
          </a>
          <a href='#' className='group'>
            <Linkedin size={18} className='stroke-white fill-white group-hover:fill-[#71b44d]' />
          </a>
          <a href='#' className='group'>
            <Twitter size={18} className='stroke-white fill-white group-hover:fill-[#71b44d]' />
          </a>
          <a href='#' className='group'>
            <Youtube size={18} className='stroke-white group-hover:stroke-[#71b44d]' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderNav
