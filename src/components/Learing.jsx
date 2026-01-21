import React from 'react';
// Import Swiper React components
{/* Note: You may need to install swiper first: npm install swiper */}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Learning() {
  const slides = [
    { title: "Software Development", icon: "💻", color: "bg-blue-500" },
    { title: "Web Design", icon: "🌐", color: "bg-purple-500" },
    { title: "Tally Prime", icon: "📊", color: "bg-green-500" },
    { title: "Cyber Security", icon: "🛡️", color: "bg-red-500" },
    { title: "Digital Marketing", icon: "📈", color: "bg-yellow-500" },
    { title: "Cloud Computing", icon: "☁️", color: "bg-cyan-500" },
  ];

  return (
    <section className="py-20 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm">Interactive Learning</h2>
          <h3 className="text-4xl font-bold mt-2">Explore Our Modules</h3>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-80 rounded-3xl overflow-hidden bg-white border border-gray-700 hover:border-blue-500 transition-all duration-500">
                {/* Decorative Background Blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${item.color}`}></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-center group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-4 h-1 w-12 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                   <p className="text-sm text-center text-blue-200 uppercase font-bold tracking-tighter">Click to learn more</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for Swiper Buttons (Add to your index.css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev { color: #3b82f6 !important; }
        .swiper-pagination-bullet { background: #3b82f6 !important; }
        .swiper-pagination-bullet-active { width: 24px !important; border-radius: 5px !important; }
      `}} />
    </section>
  );
}