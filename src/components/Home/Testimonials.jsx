import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Shirish Mehra',
    feedback: 'Very trustworthy and genuine. Been dealing with them for quite a while now.',
  },
  {
    name: 'Neha Kapoor',
    feedback: 'I totally recommend them. They are the best.',
  },
  {
    name: 'Pankaj Jha',
    feedback: 'They offer everything excellent quality. Really appreciated.',
  },
];

export default function TestimonialSwiper() {
  return (
    <section
      id="testimonials"
      className="bg-white/90 py-24 px-4 md:px-12 lg:px-20 scroll-mt-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-2 bebas-neue-regular">Testimonials</h2>
        <div className="mt-4 flex justify-center">
          <img
            src="https://image3.jdomni.in/banner/12102022/D3/E4/D4/EBA8AAE9E01047D98573F5FEB7_1665572725423.png?output-format=webp"
            alt="Quote"
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map(({ name, feedback }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">{feedback}</p>
              <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
