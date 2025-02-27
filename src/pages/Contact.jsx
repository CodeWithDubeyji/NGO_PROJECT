import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className='bg-white min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <div className=' p-8 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              All General Queries
            </h2>
            <a href='mailto:info@smilefoundationindia.org'>
              info@smilefoundationindia.org
            </a>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='mt-7'>
                  <h3 className='text-xl font-medium text-gray-800 uppercase mb-4'>
                    Donation Related Queries
                  </h3>
                  <h3 className='text-xl font-medium text-gray-800 uppercase'>
                    For new donors
                  </h3>
                  <p className='text-gray-600 mt-1'>
                    Aakanksha Wahi – 7042128777
                    <br />
                    <a href='mailto:donation@smilefoundationindia.org'>
                      donation@smilefoundationindia.org
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className=''>
                  <h3 className='text-xl font-medium text-gray-800 uppercase'>
                    For existing donors
                  </h3>
                  <p className='text-gray-600 mt-1'>
                    Steffi Stephen – 8800277244
                    <br />
                    <a href='mailto:donorcare@smilefoundationindia.org'>
                      donorcare@smilefoundationindia.org
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className=''>
                  <h3 className='text-xl font-medium text-gray-800 uppercase'>
                  FOR MEDIA-RELATED QUERIES
                  </h3>
                  <p className='text-gray-600 mt-1'>
                  Write to Sandip Nayak at
                    <br />
                    <a href='mailto:sandip@smilefoundation.email'>
                    sandip@smilefoundation.email
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
            Helpdesk
            </h2>
            <p className='tracking-normal text-gray-800 mb-2'>For any grievance, suggestions and queries kindly write to us</p>

            {submitSuccess ? (
              <div className='bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6'>
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='Your name'
                />
                {errors.name && (
                  <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                )}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-gray-700 font-medium mb-2'
                  >
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='Your email'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-gray-700 font-medium mb-2'
                  >
                    Phone
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Your phone number'
                  />
                </div>
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='5'
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='Your message'
                ></textarea>
                {errors.message && (
                  <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-black hover:underline text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center bebas-neue-regular'
              >
                {isSubmitting ? (
                  <span className='inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></span>
                ) : (
                  <Send className='h-5 w-5 mr-2' />
                )}
                {isSubmitting ? 'Sending...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
