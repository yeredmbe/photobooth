import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Evenements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const data1 = [
    {
      icon: "./touch.png",
      title: "Touche Personnelle",
      desc: "Ajoutez des graphiques personnalisés qui correspondent à votre thème pour vos célébrations - anniversaires, mariages et autres."
    },
    {
      icon: "./beverage.png",
      title: "Ambiance Festive",
      desc: "Rehaussez votre événement avec des superpositions personnalisées, en apportant une touche unique aux photos et vidéos de vos invités."
    },
    {
      icon: "./sharee.png",
      title: "Boost Marketing",
      desc: "Attirez l'attention lors d'événements marketing en incorporant des graphiques personnalisés qui mettent en valeur votre marque."
    }
  ];

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

  const renderHeroSection = () => (
    <div className='w-full '>
      <div className='w-full relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/70 after:z-10 font-GaramondAntiqua'>
        <img 
          src="photo_2_2025-10-18_13-20-11.jpg" 
          alt="Photobooth event" 
          className='w-full h-96 object-cover'
        />
        <div className='absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-20 w-10/12'>
          <h1 className='text-8xl text-white my-3 max-sm:text-5xl max-sm:mx-2 uppercase' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            Services événements
          </h1>
          <p className='text-3xl text-white max-sm:text-xl'>
            Les services de location de photobooth de Fotobo pour élever l'expérience de votre prochain événement.
          </p>
        </div>
      </div>
    </div>
  );

  const renderProductSection = () => (
    <>
    <div className='w-full flex flex-col items-center justify-center my-2 py-8 font-GaramondAntiqua'>
      <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center text-[#271a02]'>
        <div className='p-3 w-1/2 max-sm:w-full'>
          <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Mariages</h1>
          <div>
            <p className='my-1 font-Sans-Font max-sm:text-xl text-xl' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Faites ressortir le romantisme de votre journée spéciale grâce à nos magnifiques
              cabines photo de mariage. Plongez dans la magie de
              l'amour, en capturant chaque moment de joie qui rendra votre mariage unique.
            </p>
        
            <h2 className='font-Sans-Font my-2 max-sm:text-2xl text-2xl underline'
            data-aos="slide-up"
          data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Pourquoi choisir Elikia Events:
            </h2>
            <ul className='font-Sans-Font max-sm:text-xl'>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Options de décors romantiques
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Cadres personnalisés pour les jeunes mariés
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Installation d’un photobooth élégant et stylé
              </li>
             
            </ul>
            <Link to="/contact">
              <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">
               FAIRE UNE RESERVATION
              </button>
            </Link>
          </div>
        </div>
        <div className='max-sm:w-full w-1/2'>
          <img 
            src='photo_19_2025-10-18_13-20-12.jpg' 
            alt="Photobooth miroir magique"
            className='w-full  h-2/3'
          />
        </div>
      </div>
    </div>

      <div className='w-full flex flex-col bg-[#9e8121]/30 items-center justify-center my-2 py-8 font-GaramondAntiqua text-[#271a02]'>
      <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='p-3 w-1/2 max-sm:w-full'>
          <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Fêtes d'anniversaire</h1>
          <div>
            <p className='my-1 font-Sans-Font max-sm:text-xl text-xl' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Transformez votre fête d'anniversaire en une fiesta remplie de photos grâce à nos cabines photo
              pour fêtes d'anniversaire. Laissez les rires fuser et les 
             souvenirs se multiplier alors que vous célébrez une nouvelle année de vie fantastique
            </p>
        
          <h2 className='font-Sans-Font my-2 max-sm:text-2xl text-2xl underline' data-aos="slide-up"
          data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Pourquoi choisir Elikia Events:
            </h2>
            <ul className='font-Sans-Font max-sm:text-xl'>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Accessoires amusants et colorés
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
              Cadres personnalisés pour la star de l’anniversaire
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
              Options GIF animés pour plus de fun
              </li>
             
            </ul>
            <Link to="/contact">
              <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">
               FAIRE UNE RESERVATION
              </button>
            </Link>
          </div>
        </div>
        <div className='h-1/2 max-sm:w-full'>
          <img 
            src='photo_4_2025-10-21_00-31-23.jpg' 
            alt="Photobooth miroir magique"
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>

      <div className='w-full flex flex-col items-center justify-center my-2 py-8 font-GaramondAntiqua'>
      <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center text-[#271a02]'>
        <div className='p-3 w-1/2 max-sm:w-full'>
          <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Événements d'entreprise</h1>
          <div>
            <p className='my-1 font-Sans-Font max-sm:text-xl text-xl' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Donnez de la vie à vos fêtes et événements d'entreprise grâce à nos cabines photo dynamiques.
              Qu'il s'agisse de célébrations de consolidation d'équipe ou de fêtes d'entreprise, nos cabines
               photo ajoutent une touche d'excitation et créent des souvenirs impérissables.
            </p>
        
              <h2 className='font-Sans-Font my-2 max-sm:text-2xl text-2xl underline' data-aos="slide-up"
          data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Pourquoi choisir Elikia Events:
            </h2>
            <ul className='font-Sans-Font max-sm:text-xl'>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
               Personnalisation de la marque pour les événements d’entreprise
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
            Fonctionnalités interactives attrayantes
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Partage instantané des médias sociaux pour une meilleure visibilité de l’entreprise
              </li>
             
            </ul>
            <Link to="/contact">
              <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">
               FAIRE UNE RESERVATION
              </button>
            </Link>
          </div>
        </div>
        <div className=' w-1/2 max-sm:w-full'>
          <img 
            src='photo_9_2025-10-18_13-20-12.jpg' 
            alt="Photobooth miroir magique"
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>

          <div className='w-full flex flex-col bg-[#9e8121]/30 items-center justify-center my-2 py-8 font-GaramondAntiqua text-[#271a02]'>
      <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='p-3 w-1/2 max-sm:w-full'>
          <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Événements Privés</h1>
          <div>
            <p className='my-1 font-Sans-Font max-sm:text-xl text-xl' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            Célébrez n'importe quelle occasion grâce à nos cabines photographiques polyvalentes.
             Des réunions de famille aux anniversaires, nos cabines photographiques 
            s'adaptent à tous les événements, ajoutant une touche supplémentaire de plaisir et de spontanéité
            </p>
        
            <h2 className='font-Sans-Font my-2 max-sm:text-2xl text-2xl underline' data-aos="slide-up"
          data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
             Pourquoi choisir Elikia Events:
            </h2>
            <ul className='font-Sans-Font max-sm:text-xl'>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
                Installations flexibles et personnalisables
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
              Diverses options de décors
              </li>
              <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'>
              Convivialité pour tous les groupes d’âge
              </li>
             
            </ul>
            <Link to="/contact">
              <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">
               FAIRE UNE RESERVATION
              </button>
            </Link>
          </div>
        </div>
        <div className=' max-sm:w-full w-1/2'>
          <img 
            src='photo_13_2025-10-18_13-20-12.jpg' 
            alt="Photobooth miroir magique"
            className='w-full'
          />
        </div>
      </div>
    </div>
    </>
  );

  const renderFeaturesSection = () => (
       <div className='w-full flex flex-col justify-center items-center max-sm:my-0 my-12 '>
        <h1 className='text-center text-2xl text-[#9e8121]/50 my-3 uppercase'>Personnalisez votre photobooth</h1>
        <h2 className='text-center text-5xl w-10/12 font-AdobeHebrew' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Transformez l'expérience de votre événement grâce à nos visuels personnalisés !</h2>
<div className='w-full p-4 max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        {
          data1.length > 0 && data1.map((item, index) => (
            <div 
            key={index}
            data-aos="slide-up"
          data-aos-delay={index * 10}
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
            className='w-full flex bg-[#ad933b]/80 mx-3 font-GaramondAntiqua flex-col items-center hover:scale-[1.1] hover:translate-y-[-15px] transition-transform duration-500 ease-in-out justify-center text-center py-8 px-4 max-sm:py-4 max-sm:px-2 text-black max-sm:my-4'>
              <div className='size-24  rounded-full p-3  flex items-center  justify-center mx-auto'>
                 <img src={item.icon} className='size-16' />  
              </div>
              <p className='text-4xl '>{item.title}</p>
              <p className='text-lg'>{item.desc}</p>
              </div>))
        }
        </div>
      </div>

  );

  const renderBookingSection = () => (
    <div className='w-full flex flex-col items-center justify-center max-sm:my-0 mt-2 bg-[#9e8121]/40 py-8 font-GaramondAntiqua'>
      <div className='w-10/12 max-sm:w-full flex flex-col items-center justify-center'>
        <p className='text-white text-2xl my-4'>Demande de réservation</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
          <hr className='border-[#9e8121]/40 w-1/5 max-sm:hidden' />
          <p className='text-5xl text-center max-sm:px-3 max-sm:text-center max-sm:text-3xl text-[#271a02]' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            Capturez les sourires. Créez des souvenirs.
          </p>
          <hr className='border-[#9e8121]/40 w-1/5 max-sm:hidden' />
        </div>
        <p className='w-2/5 text-center my-4 max-sm:w-full max-sm:px-4 font-Sans-Font max-sm:text-lg text-[#271a02]' data-aos="slide-up"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          Créez des souvenirs inoubliables grâce à nos solutions de photobooth à la pointe de la technologie ! Qu'il s'agisse d'une réunion de famille, d'une fête d'anniversaire ou d'un gala d'entreprise, nos cabines photo ajoutent la touche parfaite d'excitation. Réservez votre créneau dès aujourd'hui et laissez les moments parfaits défiler !
        </p>
        <Link to="/contact" className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000] text-white text-lg font-medium hover:text-black hover:bg-white transition duration-500 hover:border-black ease-in-out">
          RESERVEZ VOTRE PHOTOBOOTH
        </Link>
      </div>
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className='w-full relative flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:px-0 max-sm:my-0 max-sm:py-0 py-12 px-24'>
      <img 
        src="photo_12_2025-10-18_13-20-12.jpg" 
        alt="Testimonials background" 
        className='w-1/2 max-sm:w-full object-cover'
      />
      <div className='w-1/2 relative ml-16 p-5 max-sm:ml-0 max-sm:w-full max-sm:py-4 max-sm:text-center font-Sans-Font text-[#271a02] max-sm:bg-[#9e8121]/40'>
        <h1 className='text-5xl my-2 font-GaramondAntiqua max-sm:text-3xl' data-aos="slide-right"
          data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
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

        <Link to="/evenements" className="mt-6 cursor-pointer px-6 py-3 bg-[#000] border border-[#000] text-white text-lg font-medium hover:text-black hover:bg-white transition duration-500 hover:border-black ease-in-out max-sm:text-base max-sm:px-4 max-sm:py-2">
          DECOUVRIR NOS SERVICES
        </Link>
      </div>
    </div>
  );

  return (
    <div className='fade'>
      {renderHeroSection()}
      {renderProductSection()}
      {renderFeaturesSection()}
      {renderBookingSection()}
      {renderTestimonialsSection()}
    </div>
  );
};

export default Evenements;