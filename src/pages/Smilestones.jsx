import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Smilestones = () => {
  const milestones = [
    {
      year: '2023',
      events: [
        {
          title: '20 Years of Spreading Smiles',
          img: '/smilestones/2023_1.jpg',
          description:
            'Smile Foundation completed two decades of its journey in serving marginalised communities through our work in education, healthcare, livelihood and women empowerment.'
        },
        {
          title: '100 Smile on Wheels Mobile Health Units',
          img: '/smilestones/2023_2.jpg',
          description:
            'We reached the milestone of operating 100 Smile on Wheels mobile health units, providing doorstep healthcare services across the length & breadth of India.'
        },
        {
          title:
            'Recognised by India Today & RPG Group as Organisation that spread Most Happiness',
          img: '/smilestones/2023_3.jpg',
          description:
            'India Today and the RPG Group recognised Smile Foundation with the Happiness Award, as a non-profit that “spread most happiness”, ringing true to its name.'
        },
        {
          title:
            'Telemedicine Project in Aspirational District awarded by ASSOCHAM at Healthcare Summit ',
          img: '/smilestones/2023_4.jpg',
          description:
            'Smile Foundation’s initiative to support installation & implementation of e-Arogya Clinics in Mewat, Haryana, supported by SBI Cards, received “Best CSR Excellence Award” by ASSOCHAM'
        }
      ]
    },
    {
      year: '2022',
      events: [
        {
          title: 'Business World Social Impact Leadership Award to Co-Founder',
          img: '/smilestones/2022_1.jpg',
          description:
            'Smile Foundation’s Co-Founder & Executive Trustee Mr Santanu Mishra was awarded with the Business World Social Impact Leadership Award for his contribution in leading Smile Foundation’s work for two decades.'
        },
        {
          title: 'CSR Health Impact Award 2022 for Smile on Wheels',
          img: '/smilestones/2022_2.jpg',
          description:
            'Smile Foundation was recognized for its mobile healthcare programme Smile on Wheels for delivering primary healthcare services to the most vulnerable during the difficult time of Covid-19 pandemic by the CSR Health Impact Award.'
        },
        {
          title:
            'Healthcare Asia Award for Covid Management Initiative of the Year',
          img: '/smilestones/2022_3.jpg',
          description:
            'Smile Foundation’s extensive and multi-pronged relief efforts during the pandemic were recognized as the Covid Management Initiative of the Year in India by the Healthcare Asia Awards 2022. Smile Foundation was the only Indian non-profit organization to get this award.'
        },
        {
          title: 'CSR Times Award 2022 for skilling & livelihood programme',
          img: '/smilestones/2022_4.jpg',
          description:
            'Smile Foundation’s skilling and livelihood programme for urban underserved youth – STeP won the CSR Times Award 2022 in the Gold category at the National CSR Summit. STeP has trained over 65,000 youth and employed more than 45,000 young men and women so far.'
        }
      ]
    },
    {
      year: '2021',
      events: [
        {
          title: 'Responding to Covid – Phase II',
          img: '/smilestones/2021_1.jpg',
          description: `Food & Safety: 3 million meals distributed benefitting 3,662,210 people, 20,377 hygiene & safety kits distributed. Strengthening Health Infrastructure: 515 oxygen concentrators, 80 oxygen cylinders provided to Govt. & private hospitals & health centres 867,000 3-ply masks and 28,000 N95 masks distributed to healthcare workers, patients and general public, 3593 thermal scanners, 6580 oximeters, 4347 sanitizers, 5038 home isolation kits provided to Govt. & private hospitals & health centres.233,766 RTPCR Kits provided to Govt. & private hospitals & health centres. Support in Screening & Testing: A total of 32,759 samples were collected through Covid-19 mobile medical units in Pune & Chennai and testing was done as directed by government laboratories`
        },
        {
          title: 'Recognised as a Great Place to Work',
          img: '/smilestones/2021.2.jpg.webp',
          description: `Smile Foundation was recognized as a Great Place to Work by the GPTW Institute. Great Place to Work® is the global authority on workplace culture. The Institute serves businesses, non-profits, and government agencies in more than 60 countries and has conducted pioneering research on the characteristics of great workplaces for over three decades.`
        },
        {
          title: 'Reached 1 Million Annual Beneficiaries',
          img: '/smilestones/2021.3.jpg.webp',
          description: `Through its intensive welfare projects in education, livelihood, healthcare, nutrition and women empowerment, Smile Foundation benefitted over 1 million beneficiaries during the year, reaching a milestone in the 20 year journey of doing real work to bring real change.`
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          title: 'Responding to Covid – Phase I',
          img: '/smilestones/2020_1.jpg',
          description: `Doorstep Healthcare Services to 1 million people, 30 million meals to affected families, 200,000+ hygiene kits distributed, 100,000+ people sensitized on Covid through tele-counseling`
        },
        {
          title: 'CSR NGO Award by ASSOCHAM',
          img: '/smilestones/2020.2.png.webp',
          description: `Smile Foundation was felicitated with the CSR NGO Award 2020 by the Associated Chambers of Commerce and Industry of India (ASSOCHAM) for doing exceptional work during the Covid-19 lockdown.`
        },
        {
          title: 'CSR Health Impact Award 2020',
          img: '/smilestones/2020.3.jpg.webp',
          description: `Smile Foundation was honored with the CSR Health Impact Award 2020, under the category of ‘COVID Relief Project (NGOs)’ for its extensive Dry Ration Distribution Program that aided thousands of migrant workers, women, children and the elderly.`
        }
      ]
    },
    {
      year: '2019',
      events: [
        {
          title: 'CSR Health Impact Award 2019',
          img: '/smilestones/2019.1.jpg.webp',
          description: `The CSR Health Impact Awards recognized Smile Foundation for its mobile health initiative “Smile on Wheels” across India.`
        },
        {
          title: '5 years of SIFFCY',
          img: '/smilestones/2019_2.jpg',
          description: `The milestone 5th edition of the week-long celebration of Good Cinema – Smile International Film Festival for Children and Youth (SIFFCY) was held, showcasing 150+ critically acclaimed films from more than 50 countries to an audience of over 20,000 children.`
        },
        {
          title: 'Co-founder awarded Bharatiya Manavata Puraskar',
          img: '/smilestones/2019_3.jpg',
          description: `Mr Santanu Mishra, Smile Foundation’s Co-Founder & Executive Trustee, was conferred with the Bharatiya Manavata Vikas Puraskar by the former President of India Shri Pranab Mukherjee for the organisation’s contribution towards human welfare.`
        }
      ]
    },
    {
      year: '2018',
      events: [
        {
          title: 'CSR Health Impact Award 2019',
          img: '/smilestones/2018_1.jpg',
          description: `Smile Foundation was conferred the GuideStar India – NGO Transparency Award (Platinum Winner 2018) for adopting comprehensive transparency, accountability and good governance procedures with an exemplary level of public disclosure.`
        },
        {
          title: 'Co-Founder honoured with Living Legend of Odisha Award',
          img: '/smilestones/2018.2.jpg.webp',
          description: `Smile Foundation’s Co-Founder & Executive Trustee Mr Santanu Mishra was recognized with the Odisha Living Legend Award by the then Hon’ble Odisha Minister of Health Family and Welfare Shri Pratap Jena. With his able stewardship and farsighted vision, Mr. Mishra has been the guiding force for the organisation since its inception.`
        }
      ]
    },
    {
      year: '2017',
      events: [
        {
          title: 'CSR Person of the Year Award to Co-Founder',
          img: '/smilestones/2017.1.jpg.webp',
          description: `
Mr. Santanu Mishra, Co-Founder & Executive Trustee of Smile Foundation, was conferred with the ‘CSR Person of the Year Award’, instituted by SPO India. Mr. Mathew Cherian (CEO, HelpAge India), Mr. Shrikant Sinha (CEO, NASSCOM Foundation), Ms. Meenakshi Batra (Chief Executive, CAF India) and Mr. D. R. Sarin (CMD, ALIMCO) were the other four winners of the award. The leaders were judged on the parameter of having created a sustained impact of more than 15 years in the CSR sector, having earned recognition by other industry, training, education etc. among others.`
        },
        {
          title: 'Member of the United Nations Global Compact',
          img: '/smilestones/2017.2.png',
          description: `
Smile Foundation became a participant member of the United Nations Global Compact (UNGC), a voluntary initiative by the United Nations that aims to align strategies and operations with universal sustainability principles and support Sustainable Development Goals.`
        }
      ]
    },
    {
      year: '2016',
      events: [
        {
          title:
            'Implementing partner for international e-Learning platform for CBOs in India',
          img: '/smilestones/2016.1.jpg',
          description: `Smile Foundation has partnered with Change the Game Academy, an international e-learning platform that aims to strengthen the capacity of Community Based Organisations (CBOs) to implement the capacity building initiative in India. The programme will help CBOs involve the civil society in bringing change at the grassroots level, enabling them to raise support locally and become self-sustainable. Besides India, the initiative has also been launched in Brazil, Ethiopia, India, Kenya, Uganda and South-Africa.`
        },
        {
          title: 'Virat Kohli hosts Charity Gala Dinner',
          img: '/smilestones/2016.2.jpg.webp',
          description: `
Virat Kohli Foundation joined hands with Smile Foundation to support the cause of empowerment of underprivileged children and youth. As part of this endeavour, Indian Cricket Team Captain Virat hosted a one-of-its-kind charity dinner attended by over 200 influential civil society members in Mumbai, and was joined by his colleagues Mahendra Singh Dhoni, Shikhar Dhawan, Yuvraj Singh and Ajinkay Rahane. The fund raiser also saw an auction of cricket memorabilia close to the heart of the star batsman and his cricketer friends.`
        }
      ]
    },
    {
      year: '2015',
      events: [
        {
          title:
            'Launch of the Smile International Film Festival for Children and Youth',
          img: '/smilestones/2015.1.jpg.webp',
          description: `
The maiden edition of the Smile International Film Festival for Children and Youth (SIFFCY) was held at the Siri Fort Auditorium in New Delhi, and was an instant success with more than 80 internationally acclaimed films from around the globe being screened to a 10,000+ young audience. SIFFCY is a unique concept aimed at promotion of good, meaningful and value based films as a medium to engage young minds positively and inspire them to lead a better life.`
        },
        {
          title:
            'CSR Award for Women Empowerment by Institute of Chartered Accountants of India (ICAI)',
          img: '/smilestones/2015.2.jpg',
          description: `Smile Foundation received recognition at the 1st ICAI CSR Awards for the ‘Best CSR Project in Women Empowerment’. The award has been instituted and conferred by the Committee for Cooperative and NPOS Sector and IND (AS) Implementation Committee of the Institute of Chartered Accountants of India. Established in 1949, ICAI is the national professional accounting body of India, and the only licensing cum regulating body of the financial audit and accountancy profession in India.`
        }
      ]
    },
    {
      year: '2014',
      events: [
        {
          title:
            'Recognised by ASSOCHAM for significant contribution towards Skill Development in India',
          img: '/smilestones/2014.1.jpg',
          description: `Smile Foundation was recognised by ASSOCHAM for its “outstanding contribution to skill development training & placement in the country” through a Certificate of Merit in Best NGO category for its Smile Twin e-Learning programme. Established in 1920, ASSOCHAM has in its fold more than 400 Chambers and Trade Associations, and serves more than 4,50,000 members from all over the country, representing the interests of trade and commerce in India, and acting as an interface between industry, government and other relevant stakeholders on policy issues and initiatives.`
        }
      ]
    },
    {
      year: '2013',
      events: [
        {
          title: '',
          img: '/smilestones/2013.1.jpg',
          description: `Smile Foundation was conferred with the Education Excellence Award by the Associated Chambers of Commerce and Industries (ASSOCHAM), and The Education Post. The award also recognised Smile Foundation’s unique working model by felicitating it with the certificate of ‘Leader in Social Venture Philanthropy in Child Education.’ The Awards aim to promote the best performing universities, colleges, institutions, academicians, NGOs working on education, and corporate working on education through CSR.`
        }
      ]
    },
    {
      year: '2012',
      events: [
        {
          title:
            'Special Consultative Status with the United Nations Economic and Social Council',
          img: '/smilestones/2012.jpg.webp',
          description: `In 2012, Smile Foundation became an organisation in Special Consultative Status with the Economic and Social Council of the United Nations. The Special Consultative Status allows Smile Foundation an opportunity to bring adequate global attention to the situation of child education, youth livelihood, family health and women empowerment in India by attending international conferences, participating in discussions and submitting written statements at major UN forums.`
        }
      ]
    },
    {
      year: '2011',
      events: [
        {
          title:
            'Initiated one of India’s biggest charity fundraising events “Ramp for Champs”',
          img: '/smilestones/2011.1.jpg',
          description: `
Ramp for Champs, an innovative initiative weaving fashion with the cause of child education, was commenced in 2011. The show brings together people from different walks of lives and the children studying at Mission Education centres of Smile Foundation. The motivation for Ramp for Champs comes from the need to sensitize and engage the civil society proactively to bring meaningful change in the lives of these underprivileged children, by supporting their education. Over the years, the initiative has become one of the biggest and most awaited charity fashion events in the country, having hosted 12 successful editions.`
        },
        {
          title: 'GE Healthcare – Modern Medicare Excellence Award',
          img: '/smilestones/2011-2.jpg',
          description: `Smile Foundation was conferred with the GE Healthcare – Modern Medicare Excellence Award for its phenomenal work in healthcare through its mobile hospital programme. The ‘NGO of the Year’ award was given to Smile Foundation from among five nominations, in recognition of its phenomenal work supporting medical causes and offering various services within healthcare industry. This award is instituted by GE Healthcare, the pharmaceutical division of global giant General Electrical.`
        }
      ]
    },
    {
      year: '2010',
      events: [
        {
          title:
            'Made the internationally acclaimed children’s film ‘I am Kalam’',
          img: '/smilestones/2010.jpg.webp',
          description: `As a major step towards sensitising the civil society towards the needs, aspirations and dreams of a less privileged child, Smile Foundation produced the highly acclaimed film I am Kalam in 2010. It became the first film ever in India to be produced by a development organization. The film went on to inspire millions of children, youth and adults alike all over the world, travelling to 30 film festivals across the globe, including a world premiere at the 63rd Cannes Film Festival. I am Kalam won 17 national and international awards.`
        }
      ]
    },
    {
      year: '2009',
      events: [
        {
          title: 'Widening rural outreach for intensive impact on the ground',
          img: '/smilestones/2009.1.jpg',
          description: `In 2009, Smile Foundation decided to diversify its modus operandi. Having chosen to work with grassroots NGOs as the implementing partners for its programmes on ground, it realized that many a times the capacities of community based organisations (CBOs) were not adequate to meet the high expectations of large corporate social investors. The outreach model was adopted by Smile Foundation to directly implement its development initiatives in areas that required a highly intensive engagement for a wider and sustained outcome.`
        },
        {
          title:
            'Asia Pacific Child Rights Award for the Choone Do Aasman campaign',
          img: '/smilestones/2009.2.jpg.webp',
          description: `The very year the Right to Education (RTE) Act was enacted by the Parliament of India, Smile Foundation was conferred with the Asia Pacific Child Rights Award for its television campaign “Choone Do Aasman”, broadcasted on NDTV India. Instituted by CASBAA, ABU and UNICEF, the Award is given to the best television programme produced in the Asia-Pacific region with a focus on child rights. “Choone do Aasman” was a breakthrough partnership in the Indian development sector, with real stories of struggle, survival and hope of children living in the interiors of India being showcased on the national television.`
        }
      ]
    },
    {
      year: '2008',
      events: [
        {
          title:
            'International alliance to drive civic driven change and grassroots sustainability in India',
          img: '/smilestones/2008.jpg',
          description: `Smile Foundation became the implementing partner in India for the global “Action for Children” programme that was initiated in 2008 by Together4Change alliance, a consortium of four international organisations – Wilde Ganzen (Wild Geese), Wereldkinderen (NICWO), SOS kinderdorpen (SOS Children’s Villages) and Investing in Children and their Societies (ICS), and supported by the Dutch government. Focused on initiatives aimed at improving the welfare of children by scaling up the brand and fundraising of grassroots organisations, the programme aligned closely with Smile Foundation’s philosophy of Civic Driven Change, giving the highest priority to change being achieved by local communities and masses themselves.`
        }
      ]
    },
    {
      year: '2007',
      events: [
        {
          title:
            'A “STeP” to prepare urban underprivileged youth for a dignified livelihood',
          img: '/smilestones/2007.jpg',
          description: `Smile Twin e-learning Programme (STeP) was introduced as a national livelihood programme providing market-oriented skill training, along with placement support, to the less educated, unemployed and socio-economically marginalised youth in 2007. The programme evolved as a logical extension of the Mission Education programme, as an attempt to bridge the gap between limited accessibility of higher education and consequently viable job opportunities for youth from urban slums, and lack of skilled workforce to meet the needs of a fast growing retail and service sector in the country. STeP has so far trained more than 22,600 youth and placed over 14,500 in 150 reputed brands across India.`
        }
      ]
    },
    {
      year: '2006',
      events: [
        {
          title: 'Launch of Mobile Hospital programme ‘Smile on Wheels’',
          img: '/smilestones/2006.jpg',
          description: `National mobile hospital programme Smile on Wheels was launched in New Delhi on June 19, 2006. Mrs. Sheila Dikshit, the then Chief Minister of Govt. of NCT of Delhi, flagged off the first five pilot projects in Odisha, Chhattisgarh, Uttarakhand, Uttar Pradesh and Maharashtra. Designed to address the issues of mobility, accessibility, availability, affordability and awareness, today, the programme has so far taken primary healthcare services to the doorsteps of, and directly benefitted, more than 10 lakh children and families in the remotest of rural areas and urban slums.`
        },
        {
          title:
            'Sensitisation programme for privileged children ‘Child for Child’ initiated',
          img: null,
          description: `The Child for Child (CFC) programme was initiated in 2006, with the aim to sensitise privileged children towards the life and aspirations of their less privileged counterparts, and inculcate in them feelings of empathy and conscience, helping them grow up to be responsible individuals and significant change makers. CFC currently reaches out to nearly 1.2 million children in more than 5000 schools, spread across 417 districts of India. In addition, their parents and teachers are also involved in the process. The programme has today reached out to every part of India with the exception of Lakshadweep.`
        }
      ]
    },
    {
      year: '2005',
      events: [
        {
          title:
            'Initiation of women and girl child empowerment programme “Swabhiman”',
          img: '/smilestones/2005.jpeg',
          description: `Swabhiman started as a safety, self-defence and awareness programme for women and adolescent girls in 2005, eventually evolving into a community intervention programme as more and more women, youth and even male members of the community joined the movement to ensure equal participation, access and opportunities for women, particularly in the areas of health and education. Swabhiman has so far benefitted and empowered more than 1.5 lakh women and girls, led by a strong cadre of change agents from within the communities.`
        }
      ]
    },
    {
      year: '2004',
      events: [
        {
          title:
            'Responding to the call of humanity – Relief Aid to Tsunami survivors',
          img: '/smilestones/2004.png.webp',
          description: `Affecting an estimated 2.79 million people, the Tsunami of 2004 was the single most devastating natural disaster that shook the whole world at the beginning of the 21st century. Smile Foundation too joined forces with the numerous government bodies, organisations and individuals to aid the relief and rehabilitation efforts for the survivors in Southern India. This led to the initiation of Smile Foundation’s Disaster Response programme, aimed at taking proactive action in face of the growing frequency and severity of natural disasters. Focused on children and families, the programme has ever since acted promptly to reach out and respond to the immediate needs of the disaster affected people, while also maintaining a sustainable approach to help them rebuild their lives by facilitating their education, healthcare and livelihood.`
        }
      ]
    },
    {
      year: '2003',
      events: [
        {
          title:
            'A beginning to enable and empower community based organisations',
          img: '/smilestones/2003.1.jpg.webp',
          description: `Addressing the need of a comprehensive capacity building programme for grassroots development initiatives and community based organisations (CBOs), Empowering Grassroots, was initiated in 2003. The programme is aimed at handholding, training and enabling CBOs to maximise their impact on the ground, through intensive trainings and face to face learning sessions throughout the year. Empowering Grassroots is not only an effort to strengthen the bottom of the socio-economic pyramid in India, but also an attempt to bring transparency and accountability in the workings of the development sector at the grassroots level. So far, Smile Foundation has built the capacities of more than 5000 grassroots organisations under the initiative.`
        }
      ]
    },
    {
      year: '2002',
      events: [
        {
          title:
            'A group of young corporate professionals establish Smile Foundation',
          img: '/smilestones/2002.1.png',
          description: `Smile Foundation was established in 2002 when a group of young corporate professionals came together to give back to the society in their own way. Driven by a passion and commitment to work with grassroots initiatives for effecting positive changes in the lives of less privileged children, they were convinced that education was the cornerstone of all progress. However, it did not take them long to realise that child education could not be done in isolation, and Smile Foundation adopted a holistic lifecycle approach, working for the welfare of children, their families and the community.`
        },
        {
          title: 'Flagship programme ‘Mission Education’ launched',
          img: '/smilestones/2002.2.jpg',
          description: `In 2002, Smile Foundation initiated its flagship programme. Mission Education, to provide quality education and healthcare to less privileged children, focusing on remote tribal belts, underserved slums, and first generation learners. Beginning from a handful of projects benefitting a few hundred children, the programme at present has more than hundred projects spread across 23 states of India. Over 200,000 children have been educated and empowered under Mission Education so far.`
        }
      ]
    }
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bebas-neue-regular'>
      {/* Header Section */}
      <h1 className='text-3xl sm:text-5xl font-bold text-black mb-6'>
        Smilestones
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
          <span className='ml-1'>HOME</span>
        </a>
        <span className='text-gray-500'>&gt;</span>
        <a href='/pages' className='text-green-500 hover:text-green-600'>
          PAGES
        </a>
        <span className='text-gray-500'>&gt;</span>
        <span className='text-green-500'>Smilestones</span>
      </nav>

      <div>
        <VerticalTimeline lineColor='#FF007F'>
          {milestones.map((milestone, index) => (
            <VerticalTimelineElement
              key={milestone.year}
              className='vertical-timeline-element--work'
              contentStyle={{
                background: '#fff',
                color: '#000',
                border: '1px solid #ddd',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                padding: '20px'
              }}
              contentArrowStyle={{ borderRight: '10px solid #fff212' }}
              iconStyle={{ display: 'none' }}
              icon={null}
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className='text-left mb-4'>
                <span className='text-4xl font-bold text-[#339933]'>
                  {milestone.year}
                </span>
              </div>
              <div className='text-right'>
                {milestone.events.map((event, eventIndex) => (
                  <div key={eventIndex} className='mb-6'>
                    <h3 className='text-xl font-bold text-neutral-600 raleway-400 tracking-tight'>
                      {event.title}
                    </h3>
                    {event.img && (
                      <img
                        src={event.img}
                        alt={event.title}
                        className='w-full h-64 object-contain mx-auto mt-4'
                      />
                    )}

                    <p className='mt-3 font-light text-neutral-400 raleway-400 tracking-normal text-justify'>
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Smilestones
