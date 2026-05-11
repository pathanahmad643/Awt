import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const SliderBar = () => {
 const images=[
    {
      img:'https://www.awtbharat.com/public/s1.jpg',
      h1:'Welcome to Airbos  Infotech',
      p:'Situated at Banke Bihari Market , Near Block Chowk , Ormanjhi Ranchi , Jharkhand - 835219',
      button:'Learn more'
    },
    {
      img:'https://www.awtbharat.com/public/s4.jpg',
      h1:'Social Economic Development',
      p:'Promoting awareness in fields such as health, education and employment.',
      button:'Learn more'
    },
    {
      img:'https://www.awtbharat.com/public/s2.jpg',
      h1:'Health & Sanitation Program',
      p:'Building awareness for better health and hygiene in communities',
      button:'Learn more'
    },
    {
      img:'https://www.awtbharat.com/public/s3.png',
      h1:'Research & Advocacy',
      p:'Providing opportunities and guidance to unemployed youth',
      button:'Learn more'
    },
     {
      img:'https://www.awtbharat.com/public/s10.jpg',
      h1:'Miscellaneous Programme',
      p:'Supporting women, underprivileged and innocent prisoners',
      button:'Learn more'
    }
    ]


  return (
    <div className="w-full h-full mt-15">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true} // ⬅️➡️ arrows
        pagination={{ clickable: true }} // 🔘 dots
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={800} // smooth slide
        slidesPerView={1}
        className="w-full h-[550px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[550px] overflow-hidden">
              
              {/* Image */}
              <img
                src={img.img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/30 ease-in  ">
                 <h1 className=" w-230 text-white text-5xl font-extrabold px-40 py-4 mt-40 ">
                   {img.h1}
                </h1>
                <p className="text-white  font-medium px-40 ">
                  {img.p}
                </p>
                <button 
                 className="flex justify-center items-center w-60 h-13 font-bold text-xl text-white font-sans rounded-full  ml-40 mt-20 bg-purple-600">{img.button}</button>
              </div>
             

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBar;