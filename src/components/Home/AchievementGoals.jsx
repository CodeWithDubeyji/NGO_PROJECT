import React, { useState } from 'react';

const achievementData = {
  Education: [
    {
      title: 'Balshalaa Initiative',
      points: [
        'Established the first center in Pratapgarh, Uttar Pradesh, providing quality early childhood education to underprivileged toddlers.',
        'Services include accessible infrastructure, nutrition programs, and tailored teaching in local languages.',
        'Impact: Overcame barriers like poverty and lack of preschool access.',
        'Plans are underway to launch 10 more centers by 2025.',
      ],
    },
    {
      title: 'Beti Bachao Beti Padhao',
      points: [
        'Focused on girl-child education to break gender discrimination and empower them as future leaders.',
        'Educated 353 girls.',
        'Distributed stationery kits to 2,152 girls.',
        'Provided financial aid to 75 underprivileged individuals.',
        'Reduced dropout rates and increased parental support for girls\' education.',
      ],
    },
    {
      title: 'Remedial Education Program',
      points: [
        'Supported children at risk of dropping out by bridging learning gaps and offering daily tutoring.',
        'Enrolled 35 children in government schools and provided tutoring to 160 children.',
        'Supplied learning materials and conducted recreational activities to boost interest in education.',
      ],
    },
    {
      title: 'Digital Transformation in Rural Education',
      points: [
        'Partnered with Muthoot Finance to establish a digital classroom in a rural school.',
        'Enabled access to modern tools like smartboards and internet resources.',
        'Trained educators in digital teaching techniques.',
        'Improved engagement and understanding among students.',
      ],
    },
  ],
  'Health & Wellness': [
    {
      title: 'Health and Awareness Program',
      points: [
        'Organized 15 health camps, reaching 6,000 individuals with free medical care and medicines.',
        'Addressed maternal and child health:',
        'Educated 3,200 women on prenatal care.',
        'Distributed 1,000 maternal kits with hygiene and nutritional supplements.',
      ],
    },
    {
      title: 'Hygiene and Nutrition',
      points: [
        'Conducted hygiene workshops in 25 villages, reaching 8,500 participants.',
        'Installed 20 handwashing stations in schools.',
        'Organized nutrition drives benefiting 1,800 mothers and children.',
      ],
    },
    {
      title: 'Mental Health and Disease Prevention',
      points: [
        'Educated 10,000 individuals about diseases like tuberculosis and malaria.',
        'Organized mental health sessions for 1,200 participants, offering free counseling services.',
      ],
    },
  ],
  'Women Empowerment': [
    {
      title: 'Cutting and Tailoring Program',
      points: [
        'Trained 200 women in tailoring and garment-making techniques to foster financial independence.',
        'Equipped women with entrepreneurial skills.',
        '10 participants now run small tailoring businesses or work in garment industries.',
      ],
    },
    {
      title: 'Awareness Campaigns on Women\'s Rights',
      points: [
        'Conducted workshops on gender equality, financial literacy, and legal protections.',
        'Boosted confidence and self-reliance among women.',
      ],
    },
  ],
  MHHM: [
    {
      title: 'Workshops and Awareness',
      points: [
        'Conducted 25 workshops in collaboration with Project Baala across Uttar Pradesh.',
        'Reached 5,100 women and girls.',
        'Educated participants on menstrual health and sustainable hygiene practices.',
      ],
    },
    {
      title: 'Reusable Cloth Pads Distribution',
      points: [
        'Distributed 5,100 eco-friendly reusable cloth pads.',
        'Promoted eco-friendly practices and reduced costs for women.',
      ],
    },
    {
      title: 'Breaking Taboos',
      points: [
        'Fostered open discussions about menstruation.',
        'Empowered women to address misconceptions and stigma.',
      ],
    },
  ],
  'Child Welfare': [
    {
      title: 'Rescuing Children from Labor',
      points: [
        'Identified and rehabilitated 7 children engaged in labor by sponsoring their education.',
        'Partnered with local governments to form Village Child Protection Committees and Bal Sabhas in 9 villages.',
        'Success story: Reesha and Rishabh, siblings forced into labor, are now thriving in school.',
      ],
    },
    {
      title: 'Winter Relief Efforts',
      points: ['Distributed woolen clothing to 3,300 children in need during the winter season.'],
    },
  ],
  'Youth & Gender Equity': [
    {
      title: 'Umang Program',
      points: [
        'Aimed at combating gender-based violence through sports and leadership development.',
        'Trained 190 Youth Champions who conducted 1,518 safety audits in villages.',
      ],
    },
    {
      title: 'Youth Engagement Program',
      points: [
        'Conducted workshops for adolescents in schools on legal rights, gender equality, and LGBTQIA+ inclusion.',
        'Reached 600 youth and adolescents through civic education sessions.',
      ],
    },
  ],
  'Community Development': [
    {
      title: 'Leadership Training',
      points: [
        'Organized refresher training sessions for 44 community leaders and 24 young leaders.',
        'Promoted skills in decision-making, advocacy, and leadership roles.',
      ],
    },
    {
      title: 'Community Engagement',
      points: [
        'Used tools like songs, role-plays, and games to raise awareness on issues such as domestic violence and child marriage.',
        'Emphasized women\'s rights to mobility and education through targeted interventions.',
      ],
    },
  ],
  'Humanitarian Relief': [
    {
      title: 'Flood Relief in Prayagraj',
      points: [
        'In 2024, provided life-saving support to 500 affected individuals during the Prayagraj floods.',
        'Distributed relief kits containing food, toiletries, medicines, and blankets.',
        'Ensured immediate relief, improved hygiene, and restored hope to vulnerable communities in crisis.',
      ],
    },
  ],
};

const categories = Object.keys(achievementData);

const AchievementGoalsWithDetails = () => {
  const [activeCategory, setActiveCategory] = useState('Education');
  const [expandedAccordions, setExpandedAccordions] = useState({});

  const toggleAccordion = (category, index) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <div id='achievements' className="py-12 text-center tracking-wide bg-white">
      {/* Headings with enhanced styling */}
      <div className="mb-12">
        <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold uppercase bebas-neue-regular text-[#8dc63f]">
          TOWARDS ACHIEVING
        </h3>
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold bebas-neue-regular text-gray-800">
          SUSTAINABLE DEVELOPMENT GOALS
        </h2>
        <div className="w-24 h-1 bg-[#8dc63f] mx-auto mt-4"></div>
      </div>

      {/* Tabs with updated color scheme */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 border-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#8dc63f] text-white border-[#8dc63f] shadow-md'
                : 'border-[#c6f683] text-gray-700 hover:bg-[#f2ffdf] hover:border-[#8dc63f]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion style implementation */}
      <div className="max-w-5xl mx-auto text-left px-6 md:px-0 space-y-4">
        {achievementData[activeCategory].map((item, idx) => {
          const isExpanded = expandedAccordions[`${activeCategory}-${idx}`];
          
          return (
            <div
              key={idx}
              className="border-2 border-[#c6f683] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Accordion header */}
              <button
                onClick={() => toggleAccordion(activeCategory, idx)}
                className={`w-full p-4 flex justify-between items-center text-left ${
                  isExpanded ? 'bg-[#f2ffdf]' : 'bg-white hover:bg-[#f2ffdf]'
                } transition-colors duration-200`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#8dc63f]">{item.title}</h3>
                <div className="text-[#8dc63f] transition-transform duration-300 transform">
                  {isExpanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </button>
              
              {/* Accordion content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } bg-[#f2ffdf]`}
              >
                <div className="p-4 border-t border-[#c6f683]">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                    {item.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementGoalsWithDetails;
