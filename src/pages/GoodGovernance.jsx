import React, { useState } from 'react'

const GoodGovernence = () => {
  const accordionData = [
    {
      title: 'Making Policies & Decisions',
      mainContent:
        'Smile Foundation, from the inception itself, works on a delegated work environment. Each and every person in the organization is involved in the process of decision making in a scientifically designed system. Making Policy & Decision in the Foundation are done through a four tier system.',
      questions: [
        {
          question: 'a. Departments & Divisions',
          answer:
            'Monthly review meetings are held for each division and department regularly.'
        },
        {
          question: 'b. Executive Committee',
          answer:
            'The Executive Committee manages the Foundation’s operation directly and it reports to the Board of Advisors. Members of this committee are professionals working with Smile Foundation and it is mandatory to include a member from the Board of Advisors. The Executive Committee of Smile Foundation holds a meeting each Quarter (every three months) and looks after day to day management.'
        },
        {
          question: 'c. Advisory Body',
          answer:
            'The Board of Advisors comprises of technically competent people from diverse backgrounds and expertise. The body is formed for a period of one year and a few independent members with eminence and reputation are nominated each year. Members of this board also meet once every Quarter. The Board of Advisors advises the Trustees of Smile Foundation, taking regular inputs from the Executive Committee.'
        },
        {
          question: 'd. Board of Trustees',
          answer:
            'The Board of Trustees sets the vision and broad guidelines for the Foundation and ensures good governance in liaison with the Board of Advisors; although, the Board of Trustees is not involved in the day to day operation of Smile Foundation.'
        }
      ]
    },
    {
      title: 'Credibility Norms',
      mainContent:
        'Smile Foundation encourages its partners to follow Credibility norms for ensuring good governance in the development sector. Smile Foundation also follows norms of good governance itself. The Foundation strives to build capabilities of its grassroots NGO partners towards good governance. The Governance & Credibility System includes a systematic set of norms, which is administered and monitored by a qualified Company Secretary.',
      questions: []
    },
    {
      title: 'Project Management & Monitoring System',
      mainContent:
        'The project management & monitoring system in Smile Foundation comprises of a systematic and well laid down processes. These are as follow –',
      questions: [
        {
          question: 'a. Selection of NGO Partners',
          answer:
            'Partners are invited selection of partners for required locations under specified programme through advertisement in relevant forum, websites; and also through reference from credible partners as well as perennial ‘submit a proposal’ section in Smile Foundation website. Also, prospective partners keep on submitting proposals directly to the foundation round the year. Initial selection is done on these bases.'
        },
        {
          question: 'b. Desk Appraisal',
          answer:
            'Prospective proposals are put through the desk appraisal process at respective programme divisions.'
        },
        {
          question: 'c. Monitoring',
          answer:
            'Once a partner is selected under a particular programme, an MoU is signed, guidelines and initial trainings are imparted and the particular project is started. The project is put under a systematic and periodic monitoring system. The processes include the following steps: i. Project Auditing ii. Activity report analysis iii. Field evaluation The process of project monitoring is followed by impact analysis, which is a done internally; and external evaluation, done by an external and professional agency.'
        },
        {
          question: 'd. Impact analysis',
          answer: ''
        },
        {
          question: 'e. External evaluation',
          answer: ''
        }
      ]
    },
    {
      title: 'Audit System',
      mainContent:
        'Smile Foundation has a four tier audit system to ensure that funds are utilized to the optimum level in an accountable manner.',
      questions: [
        {
          question: 'a. Internal & Process Audit System',
          answer:
            'This is conducted throughout the year in order to ensure accountability in the internal operation of the organisation Internal & Process Auditors Prashant Luthra & Co. (Chartered Accountant)'
        },
        {
          question: 'b. Statutory Audit',
          answer:
            'is held by the statutory auditor for finalization of balance sheet and statement of affairs. This is also done to comply with standard statutory norms. Statutory Auditor M.K. Kuchhal & Co. (Chartered Accountant)'
        },
        {
          question: 'c. External Evaluation',
          answer:
            'On the basis of need, impact and outcome of various welfare programmes of Smile Foundation are evaluated by external evaluation agencies having relevant experience on the subject. Various agencies who have done external evaluation are; KPMG, INTRAC London, PRIA, India Development Foundation, Utrecht University The Netherlands'
        },
        {
          question: 'd. Governance Compliance Certification',
          answer:
            'S. Behera & Co. (Company Secretaries) Audit reports are discussed with the Board of Trustees, Advisory Body and the Executive Committee to take suitable and necessary steps if required.'
        }
      ]
    },
    {
      title: 'Use of Technology for Good Governance',
      mainContent: '',
      questions: [
        {
          question: 'a) Online Monitoring System',
          answer:
            'Smile Foundation advocates use of technology for ensuring impartial monitoring and to cut down over head cost. Smile Foundation has already started the system in a few of its national level programmes. Gradually, all its projects will be compatible with this system. The biggest challenges so far have been lack of access to technology in remote project areas and lack of working knowledge among grassroots NGO partners. The Foundation is taking up the task of building capacities of all its NGO partners and project staffs. Two separate and customized monitoring systems have been developed for 50 Smile Twin e-Learning Programme (STeP) centres and 41 Mission Education projects across India.'
        },
        {
          question: 'b) Beneficiaries Management System',
          answer:
            'A successful beneficiary management system is operational across 100 projects in 21 states of India. This technology is helping Smile Foundation in tracking the progress and development of all the beneficiaries in two major national level programmes as of now.'
        },
        {
          question: 'c) Microsoft Groove – the decision making software',
          answer:
            'Smile Foundation practises participatory and democratic decision making process, which involves all possible professionals in the organisation.Microsoft Groove software is operational, connecting all major offices and divisions, since last one year.'
        },
        {
          question: 'd) Management Information System (MIS)',
          answer:
            'A monthly MIS is prepared and analyzed by the MIS Officers and it is submitted and discussed in Executive Committee meetings for assessing the operational activities and to do future planning.'
        },
        {
          question: 'e) Accounting System',
          answer:
            'With increasing use of relevant technology in each division and department, along with projects, both quantitative and qualitative MIS are managed technologically. The Accounts Team of Smile Foundation consists of competent and qualified accounts professionals. The accounts are maintained on daily basis through advanced and updated computerized systems. The same is also analyzed and checked periodically by the internal control system and Internal Auditor, in compliance with standardized HR and Management Policy.'
        },
        {
          question: 'f) Future Technology',
          answer:
            'Smile Foundation is exploring various technologies like GPS (Global Positioning System) to track and to do real time monitoring of all Smile on Wheels projects, its national mobile hospital programme. Next in line is also video conferencing system which would eventually connect all Smile Foundation offices and centres. It will facilitate decision making, monitoring, optimum involvement of all stake holders – including supporters, capacity building and training etc.'
        }
      ]
    },
    {
      title: 'People Management',
      mainContent: 'Our people are our assets. Smile Foundation believes in a democratic and participatory work culture. Appraisal and review system is conducted twice a year in a democratic way to identify the future leaders of the organization.',
      questions: []
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bebas-neue-regular'>
      {/* Header Section */}
      <h1 className='text-3xl sm:text-5xl font-bold text-black mb-6'>
        Good governance
      </h1>

      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-sm sm:text-base mb-12'>
        <a
          href='/'
          className='flex items-center hover:text-gray-600 transition-colors'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          <p className='ml-1'>HOME</p>
        </a>
        <p className='text-gray-500'>&gt;</p>
        <a href='/pages' className='text-green-500 hover:text-green-600'>
          PAGES
        </a>
        <p className='text-gray-500'>&gt;</p>
        <p className='text-green-500'>Good governance</p>
      </nav>
      <div className='flex lg:flex-row flex-col items-center justify-center raleway-400 tracking-wide gap-12 '>
        <p className='text-justify'>
          Credibility and accountability have always been the benchmark for
          Smile Foundation and are achieved through the promotion of principles
          of good governance in the processes and practices. We have a four-tier
          audit and evaluation mechanism to ensure the impact of investment, and
          complete transparency and accountability in utilisation of funds.
        </p>
        <img src='/good-governance-gg.jpg.webp' alt='' />
      </div>

      <div className='tracking-wide mt-24'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[30px] font-bold ml-4 bebas-neue-regular'>
          Registration Details
        </h2>

        <div className='flex gap-4 raleway-400 tracking-wide flex-wrap'>
          <p className='text-justify p-6 bg-[#f0f0f0] flex-1 rounded-lg'>
            Smile Foundation is registered with the Income Tax Department under
            Section 12A. The said certificate is valid till AY 2026-27.
            <br />
            <p className='mt-8'>Registration No: AACTS7973GE20212</p>
          </p>
          <p className='text-justify p-6 bg-[#f0f0f0] flex-1 rounded-lg '>
            Smile Foundation is registered with the Ministry of Home Affairs
            Foreigners Division (FCRA Wing), the Government of India. The
            renewed certificate is valid till 01/04/2029.
            <br />
            <p className='mt-8'>Registration No: 231660712</p>
          </p>
          <p className='text-justify p-6 bg-[#f0f0f0] flex-1 rounded-lg'>
            All contributions to Smile Foundation are eligible for 50% tax
            exemption under Section 80G of the Income Tax Act. The said
            certificate is valid till AY 2026-27. <br />
            <p className='mt-8'>URN: AACTS7973GF20210</p>
          </p>
        </div>
      </div>

      <div className='max-w-4xl tracking-wide mt-24 raleway-400'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[30px] font-bold ml-4 bebas-neue-regular'>
          Audit System
        </h2>
        <div className='grid gird-cols-1 md:grid-cols-2 '>
          <div className='flex-1 min-w-[200px] p-5'>
            <h2 className=' font-semibold'>Statutory Auditors:</h2>
            <p className=''>
              M.K. Kuchchhal & Co.
              <br />
              (Chartered Accountants)
            </p>
          </div>
          <div className='flex-1 min-w-[200px] p-5'>
            <h2 className='font-semibold'>FCRA Auditors</h2>
            <p className=''>
              S. Sahoo & Co.
              <br />
              (Chartered Accountants)
            </p>
          </div>
          <div className='flex-1 min-w-[200px] p-5'>
            <h2 className='font-semibold'>
              Governance Compliance Certification
            </h2>
            <p className=''>
              S. Behera & Co.
              <br />
              (Company Secretaries)
            </p>
          </div>
          <div className='flex-1 min-w-[200px] p-5'>
            <h2 className='font-semibold'>Programme & Internal Auditors</h2>
            <p className=''>
              Luthra & Company
              <br />
              (Chartered Accountants)
            </p>
          </div>
        </div>
      </div>

      <div className='mt-24'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[30px] font-bold ml-4 bebas-neue-regular'>
          Utilization of funds
        </h2>
        <div className='max-w-6xl flex justify-center items-center lg:flex-row flex-col gap-4 mx-auto mt-8'>
          <div className=''>
            <img src='/Smile-Foundation-Financials-1.png' alt='' />
          </div>
          <div className=''>
            <img src='/Smile-Foundation-Financials-1.png' alt='' />
          </div>
          <div className=''>
            <img src='/Smile-Foundation-Financials-1.png' alt='' />
          </div>
        </div>
      </div>

      <div className='mx-auto mt-24'>
        <h2 className='text-[28px] md:text-[36px] lg:text-[30px] font-bold ml-4 bebas-neue-regular'>
          Practising good governance
        </h2>
        <div className='space-y-4 raleway-400 tracking-wide font-bold'>
          {accordionData.map((item, index) => (
            <div key={index} className='border-b border-gray-200'>
              <h2
                className='flex justify-between items-center p-4 text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 transition-colors duration-200'
                onClick={() => handleToggle(index)}
              >
                {item.title}
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h2>
              {activeIndex === index && (
                <div className='p-4 font-light'>
                  <p>{item.mainContent}</p>
                  <ul className='list-none mt-4'>
                    {item.questions.map((question, index) => (
                      <li key={index} className='mb-4'>
                        <p className='font-semibold'>{question.question}</p>
                        <p className='font-light'>{question.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GoodGovernence
