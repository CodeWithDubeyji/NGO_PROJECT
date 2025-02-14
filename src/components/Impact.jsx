import React from "react";

const Impact = () => {
  return (
    <div className="w-full">
      {/* Introduction Section */}
      <div className="text-center max-w-6xl mx-auto mb-10 raleway-400 tracking-normal py-[60px]">
        <p className="text-lg text-gray-600">
          Established in 2002, Smile Foundation is an Indian development organization, impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 25 states of India.
        </p>
        <p className="text-lg text-gray-600 my-4">
          Smile Foundation works as a catalyst in the cycle of change, complementing and supplementing government efforts 
          (<span className="text-gray-500">view details</span>) to achieve the Sustainable Development Goals. We sensitize and partner with like-minded institutions and individuals to implement high-impact programs that enable access, enhance quality, and help bring long-term behavioral change at the grassroots.
        </p>
        <a href="#" className="text-[#abc73f] text-lg">read more &gt;</a>
      </div>

      {/* Full-Width Impact Section (Hidden in Mobile View) */}
      <div className="bg-[#f3f2f3] py-[60px] bebas-neue-regular">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[48px]">OUR IMPACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">15+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">LAC</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">children and their families are impacted every year</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">2000+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">VILLAGES</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">and slums are reached out across the country</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">400+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">PROJECTS</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">focused on education, healthcare, and women empowerment</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#8dc73f] lg:text-[100px]">25+</p>
              <p className="text-xl text-[#8dc73f] font-medium lg:text-[30px]">STATES</p>
              <p className="text-gray-600 lg:text-[14px] raleway-400">are reached including the remotest areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
