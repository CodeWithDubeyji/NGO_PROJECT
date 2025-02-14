import React from 'react';

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/170",
  "https://via.placeholder.com/180",
  "https://via.placeholder.com/190"
];

const Marquee = () => {
  return (
    <div className="w-full h-64 my-5 mx-auto overflow-hidden bg-[#b2d3d1] relative flex space-x-5 justify-center">
      {Array(5).fill().map((_, index) => (
        <ul key={index} className={`space-y-3 animate-marquee delay-${index*200}`}>
          {images.map((src, idx) => (
            <li key={idx} className="flex justify-center">
              <img src={src} alt={`Marquee ${idx}`} className="w-32 h-32 object-cover rounded-lg shadow-lg" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Marquee;
