import { useState } from 'react'
import {
  Ambulance,
  Video,
  Building2,
  Tent,
  FlagIcon as Government
} from 'lucide-react'

export default function Interventions () {
  const [activeTab, setActiveTab] = useState('mobile-healthcare')

  const interventions = [
    {
      id: 'mobile-healthcare',
      title: 'Mobile Healthcare',
      icon: <img src='/Healthcare/inter_1.webp' className='w-[100px]' />,
      content:
        'Reaching the unreached through fully-equipped Mobile Healthcare Units staffed with doctors and paramedics, providing OPD services, point-of-care test facilities and medicines',
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200'
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine',
      icon: <img src='/Healthcare/inter_2.png' className='w-[100px]' />,
      content:
        'Connecting people from remote rural areas with doctors for specialized healthcare from nearby urban health centres, through e-Health Kiosks and Telemedicine Centres staffed with paramedics',
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-200'
    },
    {
      id: 'static-clinics',
      title: 'Static Clinics',
      icon: <img src='/Healthcare/inter_3.png' className='w-[100px]' />,
      content:
        'Creating accessible static healthcare centres in remote rural communities providing OPD, medicines, point of care test facilities and counseling, with focus on Physiotherapy Services',
      bgColor: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200'
    },
    {
      id: 'health-camps',
      title: 'Health Camps',
      icon: <img src='/Healthcare/inter_4.png' className='w-[100px]' />,
      content:
        'Providing need-based healthcare services to specific target groups through standalone health camps with specialized doctors, point of care tests, and sometimes surgical facilities',
      bgColor: 'bg-orange-100',
      hoverColor: 'hover:bg-orange-200'
    },
    {
      id: 'govt-convergence',
      title: 'Govt. Convergence',
      icon: <img src='/Healthcare/inter_5.png' className='w-[100px]' />,
      content:
        'Enhancing reach and capacity of Government Health Centres by integrating telemedicine at sub-centres, training of frontline workers and upgradation of PHCs',
      bgColor: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200'
    }
  ]

  const toggleTab = tabId => {
    setActiveTab(activeTab === tabId ? 1 : tabId)
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-8 md:py-12'>
      {/* Desktop Tabs */}
      <div className='hidden md:flex flex-wrap gap-2'>
        {interventions.map(intervention => (
          <button
            key={intervention.id}
            onClick={() => toggleTab(intervention.id)}
            className={`px-6 py-3 text-lg font-medium rounded-md transition-all ${
              activeTab === intervention.id
                ? intervention.bgColor + ' shadow-sm'
                : 'bg-gray-100 ' + intervention.hoverColor
            }`}
          >
            {intervention.title}
          </button>
        ))}
      </div>

      {/* Desktop Content */}
      <div className='hidden md:block mt-2'>
        {interventions.map(
          intervention =>
            activeTab === intervention.id && (
              <div
                key={intervention.id}
                className={`${intervention.bgColor} p-8 rounded-lg flex items-start gap-8 animate-fadeIn`}
              >
                <div className='shrink-0'>{intervention.icon}</div>
                <p className='text-lg'>{intervention.content}</p>
              </div>
            )
        )}
      </div>

      {/* Mobile Accordion */}
      <div className='md:hidden space-y-3'>
        {interventions.map(intervention => (
          <div
            key={intervention.id}
            className='border rounded-md overflow-hidden'
          >
            <button
              onClick={() => toggleTab(intervention.id)}
              className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                activeTab === intervention.id
                  ? intervention.bgColor
                  : 'bg-gray-100 ' + intervention.hoverColor
              }`}
            >
              {intervention.title}
            </button>

            {activeTab === intervention.id && (
              <div
                className={`${intervention.bgColor} p-4 flex flex-col sm:flex-row items-start gap-4 animate-slideDown`}
              >
                <div className='shrink-0 mx-auto sm:mx-0'>
                  {intervention.icon}
                </div>
                <p>{intervention.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
