import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='relative w-full h-screen flex items-center justify-center'>
        <img
          src='/about.jpg'
          alt='About Section'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='relative w-full h-screen flex justify-center items-center bg-black bg-opacity-35 p-4 rounded-lg'>
          <h2 className='text-[30px] md:text-[42px] lg:text-[70px] font-light text-white bebas-neue-regular'>
            Real Work. Real Change.
          </h2>
        </div>
      </div>

      <div className='w-full flex flex-col items-center my-20 gap-24'>
        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 0 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-full relative flex flex-col items-center'>
          <div className='relative text-center w-[73%] raleway-400 text-lg/6'>
            <p className='tracking-wider antialiased z-20 leading-7'>
              Smile Foundation was initiated in 2002 when a group of friends
              came together with the intention of giving back to the society.
              They were inspired by the thought and philosophy of Peter Senge,
              the founder of the Society for Organizational Learning who has
              propagated that “sustainability, social equality and the
              environment are now business problems…” and corporate leaders
              can’t expect governments to solve them alone. <br />
              <br />
              What triggered these thoughts was the liberalisation of the Indian
              economy in the 1990’s which brought with it immense opportunities.
              Business revived, and India became not just a market, but also an
              investment prospect for the developed world. Disposable incomes
              and early settlements became a living reality for the working
              middle-class. For the first time in India, professionals could
              think beyond making a living, and contribute towards the society.
            </p>
          </div>
          <img
            src='/Path_-_Path_.jpg'
            alt=''
            className='absolute bottom-0 left-0 w-40 opacity-30'
          />
        </div>
        <div className='w-full'>
          <img src='/about2.jpg' alt='' className='grayscale object-cover' />
        </div>
        <div className='w-full relative flex flex-col items-center'>
          <div className='relative text-center w-[73%] raleway-400 text-lg/6'>
            <p className='tracking-wider antialiased z-20 leading-7'>
              Fuelled with enthusiasm, Smile’s founders gave a shape to their
              dream, and Smile Foundation was born. Over the last two decades,
              Smile has evolved as a sustainable Indian social institution –
              committed to do real work on the ground, and make the society and
              businesses inclusive in the process of bringing change.
              <br />
              <br /> On our way, we had to make many difficult choices and
              constantly innovate – whether it was choosing to work on the
              ground through a service-delivery approach, practicing management
              principles and adopting a business-like approach in the
              development sector, creating a unique resource modeling keeping
              businesses at the centre, or promoting the concept of civic driven
              change. Yes, we almost always took the road less travelled, and as
              they say, that has made all the difference!
            </p>
          </div>
          <img
            src='/Path_-_Path_.jpg'
            alt=''
            className='absolute bottom-0 right-0 w-40 opacity-30'
          />
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 1 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex gap-4'>
            <div className='flex items-start'>
              <img src='/Group_.png.webp' alt='' />
            </div>
            <div>
              Work as a catalyst in bringing sustainable change in the lives of
              lesser privileged children and families with a life-cycle approach
              of development
            </div>
          </div>
          <div className=' w-full h-fit flex gap-4'>
            <div className='flex items-start'>
              <img src='/Group_2.png.webp' alt='' />
            </div>
            <div>
              Enable the civil society across the world to engage proactively in
              the change process through the philosophy of civic driven change
            </div>
          </div>
          <div className=' w-full h-fit flex gap-4'>
            <div className='flex items-start'>
              <img src='/Group_3.png.webp' alt='' />
            </div>
            <div>
              Adopt highest standards of governance to emerge as a leading
              knowledge and technology driven, innovative and scalable
              development institution
            </div>
          </div>
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 2 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex gap-12'>
            <div className='flex items-start'>
              <img src='/Group_4.png' alt='' />
            </div>
            <div>
              Smile Foundation is to empower underprivileged children, youth and
              women through relevant education, innovative healthcare and
              market-focused livelihood programmes. Smile Foundation is to
              deploy best possible methodology and technology for achieving
              ideal SROI (social return on investment), to practice and promote
              good governance. To link business competitiveness of the corporate
              with social development initiatives; also to sensitize privileged
              children, youth and citizens in general to promote Civic Driven
              Change.
            </div>
          </div>
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 3 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex flex-col gap-8 text-center'>
            <div>
              While our focus as a development organisation has been first and
              foremost to work on the ground for bringing positive change in the
              lives of the less privileged children and families, we have been
              making equal efforts to sustain this change, by sensitising and
              engaging the privileged masses towards their social
              responsibility. Not remaining restricted to the community, and
              with the aim of achieving sustainable development in a wider
              social context, Smile Foundation has adopted the principle of
              Civic Driven Change, making the civil society an active partner in
              all its welfare initiatives.
            </div>
            <Link to={'#'}>read more &gt;</Link>
          </div>
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 4 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex flex-col gap-8 text-center'>
            <div>
              We believe that education is both the means as well as the end to
              a better life: the means because it empowers an individual to earn
              his/her livelihood and the end because it increases one’s
              awareness on a range of issues – from healthcare to appropriate
              social behaviour to understanding one’s rights – and in the
              process help him/her evolve as a better citizen. Education is the
              most effective tool which helps children build a strong
              foundation; enabling them to free themselves from the vicious
              cycle of ignorance, poverty and disease.
            </div>
            <div className='w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-4'>
              <img
                src='/education_story.webp'
                alt=''
                className='w-[200px] h-[200px]'
              />
              <img
                src='/betterlife_story.png'
                alt=''
                className='w-[200px] h-[200px]'
              />
              <img
                src='/socialbehav_story.png'
                alt=''
                className='w-[200px] h-[200px]'
              />
              <img
                src='/aware_story.png'
                alt=''
                className='w-[200px] h-[200px]'
              />
              <img
                src='/rights_story.png'
                alt=''
                className='w-[200px] h-[200px]'
              />
            </div>
            <div className='w-full '>
              <div className='w-full lg:w-1/2 relative mt-20 text-justify'>
                <p>
                  But while working on the ground, we realised that child
                  education cannot be done in isolation, without ensuring the
                  welfare of the whole family. Health is also a part of
                  education. A child will not go to school if he is sick. If a
                  child’s parents are afflicted with health problems, he might
                  drop-out of school and start earning instead. Unless the
                  mother is healthy and empowered, the child cannot be either.
                  It is all interlinked. Our other programmes evolved as a
                  logical progression to our education programme – be it
                  livelihood, health or women empowerment. Today, children and
                  education continue to remain at the centre of all we do, but
                  through the lifecycle approach we also address the needs of
                  the children’s families and communities.
                </p>
              </div>
              <img
                src='/OurStory.png'
                alt=''
                className='absolute -bottom-2 hidden lg:block min-w-full'
              />
            </div>
          </div>
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 5 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex flex-col justify-center items-center gap-20 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex flex-wrap lg:flex-nowrap gap-12'>
            <div className='flex items-center'>
              <img src='/Group_5.png.webp' alt='' />
            </div>
            <div className='flex flex-col gap-y-4'>
              <h1 className='bebas-neue-regular text-[#88c23f] font-bold text-3xl'>
                Social Venture Philanthropy
              </h1>
              Smile Foundation is to empower underprivileged children, youth and
              women through relevant education, innovative healthcare and
              market-focused livelihood programmes. Smile Foundation is to
              deploy best possible methodology and technology for achieving
              ideal SROI (social return on investment), to practice and promote
              good governance. To link business competitiveness of the corporate
              with social development initiatives; also to sensitize privileged
              children, youth and citizens in general to promote Civic Driven
              Change.
            </div>
          </div>

          <div className=' w-full h-fit flex flex-wrap lg:flex-nowrap gap-12'>
            <div className='flex items-center'>
              <img src='/Group_6.png.webp' alt='' />
            </div>
            <div className='flex flex-col gap-y-4'>
              <h1 className='bebas-neue-regular text-[#88c23f] font-bold text-3xl'>
                Outreach
              </h1>
              Under Outreach model, Smile Foundation implements the development
              interventions directly as it requires intensive and professional
              engagement for a wider and sustained outcome. While working in
              remote rural areas, we realized that an intensive on-ground
              intervention is needed, which might be beyond the capacity of
              community based organizations and hence, we directly implement
              such projects, liaising with local community stakeholders for
              better social return on investment.
            </div>
          </div>
        </div>

        <div className='w-[74%] bg-[#ffff00] flex flex-wrap items-center justify-center md:justify-start text-[12px] raleway-400 text-center'>
          {[
            'Our Story',
            'Vision',
            'Mission',
            'Philosophy of Change',
            'The Lifecycle Approach',
            'How We Work',
            'Why Trust Us?'
          ].map((item, index) =>
            index === 6 ? (
              <div className='bg-[#88c23f] py-6 text-white font-bold tracking-widest uppercase antialiased flex-1'>
                {item}
              </div>
            ) : (
              <div
                key={index}
                className='py-4 font-medium tracking-widest uppercase flex-1 whitespace-pre-wrap'
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className='w-[74%] relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
          <div className=' w-full h-fit flex flex-col gap-8 text-center'>
            <div>
              Credibility and accountability have always been the bench mark for
              Smile Foundation and are achieved through the promotion of
              principles of good governance in the processes and practices. We
              have a four- tier audit and evaluation mechanism to ensure impact
              of investment and complete transparency and accountability in
              utilisation of funds
            </div>
            <Link to={'#'}>read more &gt;</Link>
          </div>
        </div>

        <div className='w-full bg-[#f2f2f2] text-white text-center py-20 flex flex-col items-center justify-center gap-10'>
          <h1 className='bebas-neue-regular text-black font-semibold lg:text-5xl md:text-4xl text-3xl tracking-wide antialiased z-20 leading-7'>
            What our supporters say
          </h1>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 '>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/gSOuOY2cXl0?si=E2_he2eQp5qiS9Si'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/eRze_wZrSEE?si=Vi9CATMxIhHGgNxL'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <iframe
              width='300'
              height='250'
              src='https://www.youtube.com/embed/WlqQODlart0?si=d33cQEb2cDY3XvhZ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className='w-full bg-[#c1aacb] text-white text-center py-20 flex flex-col items-center justify-center gap-10 -my-24'>
          <h1 className='bebas-neue-regular text-black font-semibold text-5xl tracking-wide antialiased z-20 leading-7'>
            Awards & Accreditations
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-14  raleway-400 text-lg/6 tracking-wider antialiased z-20 leading-7'>
            <div className='relative'>
              <img
                src='/leaf_Awards.png'
                alt=''
                className='w-[500px] h-[220px]'
              />
              <p className='absolute lg:top-12 lg:left-12 top-10 left-8 text-center lg:w-[400px] lg:h-[180px] w-[300px] h-[180px]'>
                Recognition as “NGO thatbrought most happiness” by India Today
                RPG Happiness Awards 2023
              </p>
            </div>
            <div className='relative'>
              <img
                src='/leaf_Awards.png'
                alt=''
                className='w-[500px] h-[220px]'
              />
              <p className='absolute lg:top-12 lg:left-12 top-10 left-8 text-center lg:w-[400px] lg:h-[180px] w-[300px] h-[180px]'>
                CSR TIMES Award 2022 for Skill Training & Livelihood Initiative
              </p>
            </div>
            <div className='relative'>
              <img
                src='/leaf_Awards.png'
                alt=''
                className='w-[500px] h-[220px]'
              />
              <p className='absolute lg:top-12 lg:left-12 top-10 left-8 text-center lg:w-[400px] lg:h-[180px] w-[300px] h-[180px]'>
                Organization in Special Consultative Status with the United
                Nations Economic and Social Council (ECOSOC) since 2012
              </p>
            </div>
            <div className='relative'>
              <img
                src='/leaf_Awards.png'
                alt=''
                className='w-[500px] h-[220px]'
              />
              <p className='absolute lg:top-12 lg:left-12 top-10 left-8 text-center lg:w-[400px] lg:h-[180px] w-[300px] h-[180px]'>
                Smile Foundation has been accredited as a Guidestar India
                Platinum validated charity
              </p>
            </div>
          </div>
          <Link
            to={'#'}
            className='mx-auto underline underline-offset-4 raleway-400 tracking-wider antialiased z-20 leading-7 hover:text-[#bad596]'
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
