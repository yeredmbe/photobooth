import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

   const testimonials = [
    {
      text: "Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables. Avec notre passion pour les célébrations et notre engagement pour l'excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.",
      author: "- Sarah L."
    },
    {
      text: "Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables. Avec notre passion pour les célébrations et notre engagement pour l'excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.",
      author: "- John D."
    },
    {
      text: "Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables. Avec notre passion pour les célébrations et notre engagement pour l'excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.",
      author: "- John D."
    },
    {
      text: "Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables. Avec notre passion pour les célébrations et notre engagement pour l'excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.",
      author: "- Sarah L."
    }
  ];

  return (
    <div className='w-full fade'>

         <div className='w-full relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/70 after:z-10 font-GaramondAntiqua'>
           <img 
             src="https://images.unsplash.com/photo-1727892349129-118c3a74823f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" 
             alt="Photobooth event" 
             className='w-full h-96 object-cover'
           />
           <div className='absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-20 w-10/12'>
             <h1 className='text-8xl text-white my-3 max-sm:text-5xl max-sm:mx-2 uppercase'>
            Nous Contacter
             </h1>
             <p className='text-3xl text-white max-sm:text-xl'>
               Questions & Réservations
             </p>
           </div>
         </div>

           <div className='w-full  flex flex-col items-center justify-center max-sm:my-0 mt-2 bg-[#9e8121]/40 py-8 font-GaramondAntiqua'>
        <div className='w-10/12 max-sm:w-full flex flex-col items-center justify-center '>
        <p className='text-white text-2xl my-4'>Demande de devis</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl text-center max-sm:px-3 max-sm:text-center max-sm:text-3xl text-[#271a02]'>Réservez votre Photobooth</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
        <p className='w-2/5 text-center my-4 max-sm:w-full max-sm:px-4 font-Sans-Font max-sm:text-lg text-[#271a02]'>Simplifiez votre réservation de photobooth grâce à notre formulaire convivial. Saisissez vos coordonnées et les informations relatives à l'événement pour obtenir une réponse rapide de notre part.</p>
         
      </div>
      </div>

         <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-3xl my-3 '>Les étapes clés</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-6xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl text-black/75'>Processus de location de photobooth</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

<div className='w-full flex flex-col items-center justify-center my-2 py-8 font-GaramondAntiqua'>
      <div className='w-10/12 max-sm:px-4 max-sm:w-full py-7 max-sm:py-2 text-center flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-between'>
        <div>
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic'>01</h1>
            <p className='text-3xl my-2'>Demande de devis</p>
            <p className='font-Sans-Font text-black/65'>Remplissez notre formulaire avec les détails de votre Photobooth et de votre événement pour un devis personnalisé.</p>
        </div>

       <div className='mx-4 max-sm:mx-0 max-sm:my-6 '>
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic'>02</h1>
            <p className='text-3xl my-2'>Réservation de service</p>
            <p className='font-Sans-Font text-black/65'>Nous vous contacterons le plus rapidement possible pour discuter de vos besoins, fixer la date de votre événement et commencer les préparatifs.</p>
        </div>

        <div>
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic'>03</h1>
            <p className='text-3xl my-2'>Jour de l'événement</p>
            <p className='font-Sans-Font text-black/65'>Notre équipe livre, installe, assure une expérience sans faille et vous envoie un dossier cloud après l’événement.</p>
        </div>
      </div>
      </div>


 <div className='w-full relative flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:px-0 max-sm:my-0 max-sm:py-0 py-12 px-24'>
      <img 
        src="https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" 
        alt="Testimonials background" 
        className='w-1/2 max-sm:w-full object-cover'
      />
      <div className='w-1/2 relative ml-16 p-5 max-sm:ml-0 max-sm:w-full max-sm:py-4 max-sm:text-center font-Sans-Font text-[#271a02] max-sm:bg-[#9e8121]/40'>
        <h1 className='text-5xl my-2 font-GaramondAntiqua max-sm:text-3xl'>
          Voici ce que disent de nous
        </h1>
        <img src="./arrow.png" alt="" className='size-32 absolute top-1 left-0 max-sm:hidden -z-10 opacity-55' />
        <img src="./quote.png" alt="" className='size-20 absolute top-2 left-2 hidden max-sm:block -z-10 opacity-55' />

        <div className='w-full min-h-60 overflow-hidden relative max-sm:min-h-64'>
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={`my-4 absolute top-0 left-0 w-full max-sm:w-full flex flex-col items-center justify-center ${
                index === currentIndex 
                  ? 'translate-x-0 opacity-100 transition-all duration-700 ease-in-out' 
                  : 'translate-x-full opacity-0 transition-all duration-700 ease-in-out'
              }`}
            >
              <p className='italic text-lg max-sm:text-base leading-relaxed px-4 text-justify max-sm:text-center'>
                "{item.text}"
              </p>
       
            </div>
          ))}
        </div>

        <button className="mt-6 cursor-pointer px-6 py-3 bg-[#000] border border-[#000] text-white text-lg font-medium hover:text-black hover:bg-white transition duration-500 hover:border-black ease-in-out max-sm:text-base max-sm:px-4 max-sm:py-2">
          DECOUVRIR NOS SERVICES
        </button>
      </div>
    </div>
       </div>
      
  )
}

export default Contact
