import React, { useEffect } from 'react';
import {Link} from "react-router-dom"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    "https://images.unsplash.com/photo-1727892349129-118c3a74823f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://plus.unsplash.com/premium_photo-1732818659738-edd686a45d82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1661030220966-f1223eeafb5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    "https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Dark overlay container */}
      <div className="relative w-full h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-20">
        {images.length > 0 && images.map((image, index) => (
          <div 
            key={index} 
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center z-30 font-GaramondAntiqua">
            <h1 className="text-white my-2 max-sm:my-1 text-center text-7xl max-sm:text-6xl uppercase font-bold "  data-aos="slide-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Êtes-vous prêt à fêter avec style ?</h1> 
               <h3 className="text-white text-center text-[calc(1.5rem+1vw)] md:text-3xl  font-GaramondAntiqua max-sm:mx-1"  data-aos="slide-up"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Bienvenue chez <span className='text-[#9e8121] font-semibold font-Alexandra-One text-6xl max-sm:text-5xl tracking-wider'>Elikia Events</span>, le meilleur service de location de Photobooth à Montréal.</h3>
               <div className='w-full max-sm:flex-col flex items-center justify-center'>
                 <Link to="/contact" className="mt-6 max-sm:w-2/3 w-[20%] mx-3 cursor-pointer px-6 py-3 bg-[#9e8121] border border-[#9e8121]  text-white font-medium  hover:bg-black/30 transition duration-500 hover:border-white ease-in-out text-2xl max-sm:text-lg"> Réservez Maintenant </Link> 
                   <a href="tel:+15551234567" className="mt-6 max-sm:w-2/3 w-[20%] px-6 cursor-pointer text-center py-3 bg-black/30 border border-white text-white text-2xl max-sm:text-lg font-medium  hover:bg-white hover:text-black ease-in-out transition duration-500">Appelez  Nous</a>
               </div>
              
        </div>
      </div>
    </div>
  );
};

export default Carousel;