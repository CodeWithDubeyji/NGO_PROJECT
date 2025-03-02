import { useState } from 'react'
import { Home, ChevronRight, ChevronDown } from 'lucide-react'

export default function Faq () {
  const [openQuestion, setOpenQuestion] = useState(0)

  const toggleQuestion = index => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  const faqData = [
    {
      question: 'WHAT IS THE BELIEF BEHIND SMILE FOUNDATION?',
      answer:
        "We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Believing in this principle of 'Civic Driven Change' Smile Foundation sensitises the civil society in order to make them partners in its mission."
    },
    {
      question: 'DOES SMILE FOUNDATION WORK IN INDIA OR OTHER COUNTRIES TOO?',
      answer:
        'Smile Foundation is a national level development organization with its welfare projects spread across India.'
    },
    {
      question: 'WHAT IS THE SCENARIO IN INDIA, PRESENTLY?',
      answer:
        'India has about 11 million children living on the streets and 14 million children working as labours. Only 60% of children have access to education despite having a national policy on compulsory elementary education. The time to take collective as well as individual responsibility to remedy the current situation is here. Right now!'
    },
    {
      question: 'HOW OLD IS SMILE FOUNDATION?',
      answer: 'Smile Foundation was established in the year 2002'
    },
    {
      question: 'What is the mission of Smile Foundation?',
      answer:
        'Smile Foundation’s mission is to empower underprivileged children, youth and their families and community through relevant education, innovative healthcare and market-focused livelihood programmes. We aim to deploy best possible methodology and technology for achieving ideal SROI (social return on investment), to practice and promote good governance, to link business competitiveness of the corporate with social development initiatives and to sensitize the privileged section of society to promote Civic Driven Change.'
    },
    {
      question: 'Who are the people behind Smile Foundation?',
      answer:
        'The realization of a group of young corporate professionals, that it was their Social Responsibility to give back to the society, laid the inception of Smile Foundation. Smile Foundation is managed professionally by a Board of Advisors, comprising individuals from diverse backgrounds and expertise, followed by an Executive Committee and a well defined professional workforce.'
    },
    {
      question: 'Which areas does Smile Foundation work in?',
      answer: 'Smile Foundation has been working in the thematic areas of education, healthcare, youth employability and empowerment of women and girls'
    },
    {
      question: 'Why do you stress on education, when there are other equally pressing issues in the country?',
      answer: 'Education alone has the power to liberate people from the vicious cycle of poverty – not only in terms of earning a livelihood but also in becoming aware of the rights and freedoms that a citizen is endowed with. Thus empowering individuals and making them self-sufficient.'
    },
    {
      question: 'What is the working model of Smile Foundation?',
      answer: 'Smile Foundation works under two models, namely Social Venture Philanthropy (SVP) and Outreach.'
    },
    {
      question: 'What is Social Venture Philanthropy model?',
      answer: 'SVP: Social Venture Philanthropy (SVP) is an innovative model based on the business concept of venture capital. Under SVP, Smile Foundation identifies, handholds and builds capacities of genuine grassroots NGOs. Smile focuses on achieving scalability and sustainability, creating a culture of leadership and excellence and inculcating a deep sense of accountability among its partners.'
    },
    {
      question: 'HOW OLD IS SMILE FOUNDATION?',
      answer: 'Smile Foundation was established in the year 2002'
    },
    {
      question: 'What is the Outreach model?',
      answer: 'While working in the remote rural areas, Smile Foundation realized that capacities of community based organisations (CBOs) were not adequate to meet expectations of social investors. Under outreach model, Smile Foundation implements the development interventions directly as it requires intensive and professional engagement for a wider and sustained outcome. Smile Foundation gets a first-hand experience on the nuances of development at the grassroots through its Outreach model and then shares the same with partner organisations.'
    },
    {
      question: 'What is the Lifecycle Approach of Smile Foundation?',
      answer: 'In our hands-on experience, we have come to understand that child education is inseparable from the well-being of the entire family. Health, a crucial part of education, can directly impact a child’s attendance and parental support. Our programs, spanning livelihood, health, and women empowerment, organically complement our education initiative, adopting a holistic lifecycle approach. While children and education remain central, our broader focus ensures the well-rounded welfare of both children and their families.'
    }
    ,
    {
      question: 'What is the source of funding for the organization?',
      answer: 'Around 70-80% funding support of the organization comes from corporates; the rest comes from PSUs, individual donors and private institutions.'
    }
    ,
    {
      question: 'What is the mission of Smile Foundation?',
      answer: 'Smile Foundation’s mission is to empower underprivileged children, youth and their families and community through relevant education, innovative healthcare and market-focused livelihood programmes. We aim to deploy best possible methodology and technology for achieving ideal SROI (social return on investment), to practice and promote good governance, to link business competitiveness of the corporate with social development initiatives and to sensitize the privileged section of society to promote Civic Driven Change.'
    }
    ,
    {
      question: 'How can an NGO apply for assistance?',
      answer: 'There is a user friendly application form available on our website that an NGO can fill. Apart from that we put notices in all our internal modes of communication like our website, mailers, etc. whenever there is a requirement for a partner in any particular geographical area under our various programmes.'
    }
    ,
    {
      question: 'How does Smile choose the projects / grassroots NGOs to work with?',
      answer: 'Smile Foundation looks for emerging and committed grassroots organizations for reaching out to underprivileged communities. We partner with people and organizations that want to make a difference but do not have adequate knowledge and capacity to raise resources or work in a professional manner.'
    },
    {
      question: 'Who all are the target beneficiaries?',
      answer: 'Children, their families and the communities are the target groups of Smile Foundation with children at the centre stage. The organization believes that a child?s education cannot be taken care of without taking care of the family, especially the mother, and the communities they belong to.'
    },
    {
      question: 'At present how many people are directly benefitting from various programmes of Smile Foundation?',
      answer: 'At present Smile Foundation is directly benefitting more than 300,000 children, youth and women through 158 welfare projects across 25 states of India.'
    },
    {
      question: 'How can one associate with the organization?',
      answer: 'In our journey so far, we have received immense support from numerous individuals, many private and public sector companies, development agencies, educational institutions, public figures and the mass media. One can associate with us in any of these above mentioned ways. Please visit the contact us or get involved section of our website for more information on the possible ways of being involved in our journey.'
    },
    {
      question: 'Does Smile provide internships? If yes, how can I apply for it?',
      answer: 'Interested candidates can go to contact us section of our website and write to the relevant section or department they are interesting in interning with.'
    },
    {
      question: 'How can I work for Smile?',
      answer: 'Please go to our “Career” page to know more about the current openings in Smile.'
    },
    {
      question: 'What are the awards and accreditation that Smile has received till date?',
      answer: 'Till date Smile Foundation has been conferred with various awards and accreditations. The major and recent ones are: Smile Foundation is an organization in Special Consultative Status with the Economic and Social Council (ECOSOC) of the United Nations since 2012 • Education Excellence Award 2013 (ASSOCHAM) • The IPE Corporate Excellence Award (NGO Excellence) 2013 • Quality initiative Mission Award 2013 • Healthcare Leadership Award • Asia-Pacific Child Rights Award • Barclays Bank Chairman?s Award • GE Healthcare – Modern Medicare Excellence Award • NTR Memorial Trust Award • World Health Care Congress recognizes Smile on Wheels (SoW) as the “unique delivery model” in taking healthcare to the poor> Smile Foundation is empanelled with National CSR Hub, an initiative by the Central Public Sector Enterprise (CPSE), Department of Public Enterprises, Ministry of Heavy Industries and Public Enterprises, Govt. of India. We are also accredited to Development Foundation of Overseas Indians under the Ministry of Overseas Indian Affairs, Govt. of India.'
    },
    {
      question: 'How can I donate to Smile Foundation?',
      answer: 'You can go to Donate Now section of Smile Foundation’s website and donate online. For other donations related queries please write to donation@smilefoundationindia.org'
    },
    {
      question: 'Does Smile have any merchandise?',
      answer: '“Chanze” is a unique mode of participation promoted by Smile Foundation, an innovative series of Corporate Gifts conceptualised, designed and produced by Smile Foundation. These highly customisable series of corporate gifts are an opportunity to be a part of the change and bring a smile in the lives of thousands of destitute children and youth as all proceeds will be utilized towards funding Smile Foundation’s various development projects. Please visit the “Shop” page on our website to see the product catalogue.'
    },
    {
      question: 'What are the ways of measuring impacts of the various programmes?',
      answer: 'Smile Foundation has a proper programme management system which tracks progress and does periodic analysis – both qualitative and quantitative Periodic external evaluations are also done to gauge the impact and progress of various programmes.'
    },
    {
      question: 'How does Smile Foundation work for the education of underprivileged children?',
      answer: 'Smile Foundation works for the education of underprivileged children through its Mission Education Programme which provides basic education and healthcare. For further information you can visit https://www.smilefoundationindia.org/education.html'
    },
    {
      question: 'Where is Mission Education programme located?',
      answer: 'Mission Education is a national level programme of Smile Foundation with a presence in 22 states in India.'
    },
    {
      question: 'What curriculum do you follow in the education programmes?',
      answer: 'Our educational programme – Mission Education, for underprivileged children, follows the curriculum of the respective state board where the project is present and operational.'
    },
    {
      question: 'What is your healthcare programme?',
      answer: 'Smile on Wheels (a mobile hospital programme) is the flagship healthcare programme of Smile Foundation. In addition, Health with Smile is another programme which provides urgent and specialized health services through multi specialty health camps across India.'
    },
    {
      question: 'What is the idea behind Smile on Wheels?',
      answer: 'The idea behind SoW is to take healthcare to the doorsteps of urban poor and underserved villagers in the remote rural areas and urban slums and to develop health seeking behaviour amongst them.'
    },
    {
      question: 'What kind of medical services are provided through Smile on Wheels?',
      answer: 'Smile on Wheels provides curative, preventive and promotive healthcare services at the doorstep. Each mobile hospital is equipped with an examination table, ECG, a Calorimeter, First Aid kit, IV fluid transmission hook, Nebulizer, Centrifuge for pathological tests, Oxygen cylinders, Stretcher, small chiller cum refrigerator, public address systems among others. Each Smile on Wheels has a qualified doctor, nurse, pharmacist, project officer, driver and a community mobilizer.'
    },
    {
      question: 'On an average how many people receive benefit through Smile on Wheels?',
      answer: 'Smile on wheels benefits 231,000 people directly in a year'
    },
    {
      question: 'How many Smile on Wheels are currently operational in India?',
      answer: 'At present 19 SoWs are providing healthcare in 265 remote villages and urban slums across India.'
    },
    {
      question: 'What is the livelihood programme of Smile Foundation?',
      answer: 'Smile Twin e-Learning Programme (STeP) is the livelihood programme of Smile Foundation that trains urban underprivileged youth with market-oriented job skills and makes them employable in the retail and service sector across India.'
    },
    {
      question: 'Which age group does STeP cater to?',
      answer: '10th and 12th pass youth in the age groups of 18-25 years is the target groups of this programme.'
    },
    {
      question: 'How many STeP centres are there now?',
      answer: 'At present there are 35 STeP centres across India.'
    },
    {
      question: 'Is there a specific curriculum for the STeP programme?',
      answer: 'A special 6-month curriculum is designed with emphasis on computer and English along with personality development, retail management etc. The computer course is developed and certified by Microsoft whereas rest of the curriculum is developed by International Management Institute (IMI, New Delhi).'
    },
    {
      question: 'How many youths have benefitted through this programme?',
      answer: 'More than 13,750 youth have been trained and 9850 have been placed in over 140 brands through STeP programme across India.'
    },
    {
      question: 'How does Smile Foundation work in the area of women empowerment?',
      answer: 'Smile Foundation works for the girl children and women trough its national programme – Swabhiman (meaning self-respect in English).'
    },
    {
      question: 'What is the model of Swabhiman?',
      answer: 'The USP of Swabhiman is its innovative and highly effective approach named “4 S Model” which means: Seeking Healthcare as a Behaviour, Support through Education, Support from Men through Male Involvement, Sustaining Change in the Community.'
    },
    {
      question: 'How many women and girls are benefitted through Swabhiman?',
      answer: 'As many as 150,000 girls and women have benefited under Swabhiman programme.'
    }
  ]

  const faqDonorData = [
    {
      question: 'What information is sent to the donors?',
      answer: 'The donor gets an instant acknowledgement mail along with an SMS. On receiving the reconciliation statement from the bank, a receipt is sent via e-mail immediately, followed by a hard copy by post (within India). The receipt is accompanied by a ‘welcome pack’ which is also a token of appreciation. The donor receives a birthday wish, wishes on important festivals, programme updates and an annual impact report during a year’s time.'
    },
    {
      question: 'What will Smile do with my donation?',
      answer: 'As soon as the donation through cheque or online is reconciled by the bank, the amount is allotted to the specific programme, which it has been meant for. The utilization and results are managed, monitored and audited. The outcome is reflected in the annual impact report, which is shared with the donors.'
    },
    {
      question: 'How does Smile Foundation ensure that the donors contribution is being utilized in the intended way?',
      answer: 'Smile Foundation follows the principle of good governance. We have a four-tier audit mechanism to track and monitor the funds raised and utilized. More details of the process are mentioned at https://www.smilefoundationindia.org/governance.html'
    },
    {
      question: 'Does Smile accept donations in USD or Pounds?',
      answer: 'Yes, the organization accepts donations in USD and pounds as well but only in the form of cheque, drafts or via online payment gateway. As a policy the organization adhere to all government norms and maintains optimum transparency with the donors. The organization does have an FCRA account for its internationals supporters. However tax exemptions are applicable as per the country specific guidelines.'
    },
    {
      question: 'How much should I donate? (we can give break up of monthly expenditure of a child)',
      answer: 'There is no specific amount that should be donated. However all the programmes have a detailed breakup of the expenditure displayed online.'
    },
    {
      question: 'Is the website safe to make online payments?',
      answer: 'Yes, the website is safe for any kind of transaction. Also any information exchange is kept safe and in no condition gets disclosed. Also the payment gateway is a third party payment gateway recognized by the financial institutions under the government of India. So any transaction also is thoroughly secured.'
    },
    {
      question: 'What is the process of keeping the donor?s information safe?',
      answer: 'As a credible organization, we honour the privacy of our donors. The donor data is not exposed or shared with any external agency under any circumstances. We have a robust in-house mechanism and server system where the records are kept safe. The entire setup is protected with password and is guarded by surveillance software. The data is kept strictly confidential and only authorized staff with a special non-disclosure bond have access to it.'
    },
    {
      question: 'What are the Tax benefits that a donor will get?',
      answer: 'A donor will get 50% of tax exemption on the donation under section 80 G of Income Tax Act, 1961.'
    },
    {
      question: 'Do you issue Tax receipts? How soon will the receipts arrive?',
      answer: 'Yes, tax receipts are issued to all the donors irrespective of the amount supported. A digital copy of the receipt is generated on and sent via e-mail post realization of the donated amount. The hard copy of the receipt is delivered to the donor within 10 working days.'
    },
    {
      question: 'What happens if the tax receipt is lost?',
      answer: 'In case of loss of the original receipt, a duplicate tax receipt is issued on receipt of a formal request from the donor.'
    },
    {
      question: 'Can one donate in kind (old clothes, books, stationary etc)?',
      answer: 'Usually in-kind donation is accepted only when there is a need in any of the projects at a given point of time.'
    },
    {
      question: 'Is it possible for a consistent supporter to meet the beneficiary personally?',
      answer: 'While you can visit the school where the children you support are studying we do not encourage donors to directly meet the beneficiaries as we do not want to give special treatment to any child.'
    },
  ]

  return (
    <div className='bg-amber-100 min-h-screen p-4 md:p-8'>
      {/* Breadcrumb Navigation */}
      <div className='max-w-6xl mx-auto mt-16'>
        <div className='bg-white p-4 flex items-center space-x-2 mb-8'>
          <a href='#' className='flex items-center text-black hover:underline'>
            <Home className='w-5 h-5 mr-1' />
            <span className='font-bold'>HOME</span>
          </a>
          <ChevronRight className='w-4 h-4 text-gray-500' />
          <a href='#' className='text-green-500 hover:underline'>
            PAGES
          </a>
          <ChevronRight className='w-4 h-4 text-gray-500' />
          <a href='#' className='text-green-500 hover:underline'>
            FAQS
          </a>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Column - Title */}
          <div className='lg:w-1/3'>
            <h1 className='text-4xl md:text-5xl font-black text-black mb-6 bebas-neue-regular'>
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <a
              href='#'
              className='flex items-center text-black hover:underline'
            >
              <span>More Questions</span>
              <ChevronRight className='w-4 h-4 ml-1' />
            </a>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className='lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-md'>
            <div className='space-y-4'>
              {faqData.map((faq, index) => (
                <div key={index} className='border-b border-gray-200'>
                  <button
                    className='w-full flex justify-between items-center py-4 px-2 text-left'
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3
                      className={`font-light ${
                        openQuestion === index ? 'text-green-500' : 'text-black'
                      } bebas-neue-regular tracking-wide`}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openQuestion === index
                          ? 'text-green-500 rotate-180'
                          : 'text-black'
                      }`}
                    />
                  </button>
                  {openQuestion === index && (
                    <div className='pb-4 px-2 text-gray-500 raleway-400 tracking-normal'>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 mt-20'>
          {/* Left Column - Title */}
          <div className='lg:w-1/3'>
            <h1 className='text-4xl md:text-5xl font-black text-black mb-6 bebas-neue-regular'>
            FAQ's For Individual
            Donors
            </h1>
            <a
              href='#'
              className='flex items-center text-black hover:underline'
            >
              <span>More Questions</span>
              <ChevronRight className='w-4 h-4 ml-1' />
            </a>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className='lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-md'>
            <div className='space-y-4'>
              {faqDonorData.map((faq, index) => (
                <div key={index} className='border-b border-gray-200'>
                  <button
                    className='w-full flex justify-between items-center py-4 px-2 text-left'
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3
                      className={`font-light ${
                        openQuestion === index ? 'text-green-500' : 'text-black'
                      } bebas-neue-regular tracking-wide`}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openQuestion === index
                          ? 'text-green-500 rotate-180'
                          : 'text-black'
                      }`}
                    />
                  </button>
                  {openQuestion === index && (
                    <div className='pb-4 px-2 text-gray-500 raleway-400 tracking-normal'>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
