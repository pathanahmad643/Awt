import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// CSS
import "swiper/css";
import "swiper/css/navigation";

const Slider2 = () => {
  const cards = [
    {
      img: "https://awtbharat.com/public/s1.jpg",
      
    },
    {
      img: "https://awtbharat.com/public/s2.jpg",
     
    },
    {
      img: "https://awtbharat.com/public/s3.png",
     
    },
    {
      img: "https://awtbharat.com/public/s4.jpg",
    
    },
    {
      img: "https://awtbharat.com/public/s6.jpg",
     
    },
    {
      img: "https://www.awtbharat.com/public/s11.jpg",
     
    },
    {
      img: "https://www.awtbharat.com/public/s7.jpg",
     
    },
    {
      img:"https://www.awtbharat.com/public/Card4.jpg"
    }
  ];

  return (
    <div className=" w-[80%] h-full m-auto px-6 py-10 mt-10">
      <h2 className="text-white text-4xl mb-6 font-extrabold text-center">School & Events</h2>

      <Swiper
        modules={[ Autoplay]}
       
        loop={true} // 🔥 infinite loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

             

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;