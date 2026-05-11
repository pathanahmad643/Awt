
import { useEffect, useState,useRef } from "react";

const data = [
  { img: "https://www.awtbharat.com/public/s1.jpg",
     title: "Education",
     p:"To undertake educational programme,women awarness and womens development programme for eridication of illetracy"
     },

  { img: "https://www.awtbharat.com/public/s4.jpg", 
    title: "Social Economic Development Programme",
    p:"To work for the development of Agriculture with application of appropriate technology, modern equipments, developed seeds, pesticides for better yield" 
  },

  { img: "https://www.awtbharat.com/public/Card4.jpg",
     title: "Wash",
     p:"We encourage communities to adopt secure sanitation and hygiene behaviour and help build household infrastructure. Our incorporated water and sanitation model ."
     },

  { img: "https://www.awtbharat.com/public/s3.png",
     title: " Enviorement Development Program",
     p:"To create awareness among people especially youth and women to protect and preserve existing forest and to create awareness."
    },

  { img: "https://www.awtbharat.com/public/Card8.png",
     title: "Skill development",
     p:"Skill development refers to identifying the skill gap in a person and ensuring that he or she develops these skills. Skills determine the ability to achieve goals and execute better plans"
   },

  { img:"https://www.awtbharat.com/public/card5.jpg",
     title: "Children",
    p:"Better nutrition is related to improved infant, child and maternal health, stronger immune systems, safer pregnancy and childbirth, lowe......" },

     { img:"https://www.awtbharat.com/public/health.jpg",
     title: "HealthCare",
    p:"Sports are very essential for every human life which keeps them fit and fine and physical strength. It has great importance in each stage of life. It also improves the personality of people. " },
];

export default function Slider3() {

  const [visible, setVisible] = useState(3);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setVisible((prev) => {
            if (prev >= data.length) return prev;
            return prev + 3;
          });
        }
      },
      {
        threshold: 0.5, // important
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[90%] mx-auto py-10 ">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Area of Work
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(0, visible).map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full h-115 
                       transition-all duration-500 hover:scale-105"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-56 object-cover"
            />
         <div className="p-5 w-full h-full">
               <h3 className="text-center py-3 font-bold text-xl uppercase ">
              {item.title}
            </h3>
            <p className="font-light text-gray-800 text-center">{item.p}</p>
            <button className="text-bold text-purple-600 text-lg decoration-1 underline m-auto block rounded-2xl w-45 h-14">Learn More</button>
         </div>
          </div>
        ))}
      </div>

      {/* Invisible trigger (VERY IMPORTANT) */}
      <div ref={loaderRef} className="h-20"></div>
    </div>
  );
 }
        
