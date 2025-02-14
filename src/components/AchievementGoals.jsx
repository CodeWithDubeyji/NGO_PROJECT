import React from 'react';

const AchievementGoals = () => {
  const goals = [
    { icon: '/good-health.png.webp' },
    { icon: '/gender-equality.png.webp' },
    { icon: '/quality-education-copy.png.webp' },
    { icon: '/economic-growth.png.webp' },
    { icon: '/reduced-copy.png.webp' },
    { icon: '/partnership.png.webp' }
  ];

  return (
    <div className="hidden md:block py-10 text-center tracking-wide">
      {/* Headings */}
      <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold uppercase bebas-neue-regular">
        TOWARDS ACHIEVING
      </h3>
      <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-10 bebas-neue-regular">
        SUSTAINABLE DEVELOPMENT GOALS
      </h2>

      {/* Image container */}
      <div className="flex justify-center items-center gap-3 md:gap-5 lg:gap-2 px-4 md:px-6 w-[90%] md:w-[75%] mx-auto">
        {goals.map((goal, index) => (
          <div key={index}>
            <img
              src={goal.icon}
              className=" mx-auto"
              alt="SDG Icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementGoals;
