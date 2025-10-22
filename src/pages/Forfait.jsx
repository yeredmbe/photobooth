import React from 'react'
import { Link } from 'react-router-dom'

const Forfait = () => {
  return (
    <>
    <div className='fade overflow-hidden'>
         <div className='w-full relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/70 after:z-10 font-GaramondAntiqua'>
        <img src="photo_16_2025-10-18_13-20-12.jpg" alt="" className='w-full h-96' />
        <div className='absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-20 w-10/12 '>
        <h1 className='text-8xl text-white my-3 max-sm:text-5xl max-sm:mx-2' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Choisissez votre photobooth</h1>
        <p className='text-3xl text-white max-sm:text-xl'>Explorez nos différents forfaits pour rehausser l'expérience de votre événement.</p>
        <Link to="/contact">
         <button className="mt-6 mx-3 text-3xl max-sm:text-xl cursor-pointer px-6 py-3 bg-[#9e8121]/80 border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-transparent transition duration-500 hover:border-white ease-in-out">OBTENEZ UNE SOUMISSION RAPIDE</button>
         </Link>
        </div>
      </div>


      <div className='w-full flex flex-col bg-[#9e8121]/30 items-center justify-center my-2 py-8 font-GaramondAntiqua '>
       <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='p-3 w-1/2 max-sm:w-full'>
            <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">DSLR Booth</h1>
            <div>
                <p className='my-1 font-Sans-Font max-sm:text-xl' data-aos="slide-up"
                data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Libérez la magie avec notre photobooth à miroir carré.</p>
                <hr className='bg-[#9e8121]/80 border-2 border-[#9e8121] w-1/5 max-sm:w-2/5 my-5 ' />

                <h2 className='font-Sans-Font my-2 max-sm:text-xl' data-aos="slide-up"
                data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Inclus dans ce forfait photobooth :</h2>

                <div>
                    <ul className='font-Sans-Font max-sm:text-xl'>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1 '> Livraison et installation</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Partage de photos par SMS</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Costumes et accessoires amusants</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Cadre photo personnalisé</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Choix de la toile de fond</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Technicien-hôte sympathique sur place</li>
                    </ul>
                    <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
                </div>
            </div>
        </div>
        <div className='h-1/2'>
        <img src='https://images.unsplash.com/photo-1727892349129-118c3a74823f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500' />
        </div>
        
      </div>

      <div className='w-11/12 my-8 grid grid-cols-3 max-sm:grid-cols-1 gap-6 max-sm:gap-4 px-4 max-sm:px-1'>

           <div className='border flex items-center justify-center flex-col py-2 px-2' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>3 HEURES DE SERVICE</p>
                <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]'>749$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
           
          <div className='border flex items-center justify-center flex-col py-2 px-2 bg-black' data-aos="slide-up"
                data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl text-white'>4 HEURES DE SERVICE</p>
               <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl text-[#947306] font-AdobeHebrew-italic'>849$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-black hover:bg-white transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>

           <div className='border flex items-center justify-center flex-col py-2 px-2'
           data-aos="slide-up"
                data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>6 HEURES DE SERVICE</p>
           <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]l'>999$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
        </div>
      </div>

       <div className='w-full flex flex-col items-center justify-center my-2 py-8 font-GaramondAntiqua'>
           <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='p-3 w-1/2 max-sm:w-full'>
            <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Vidéo Booth 360</h1>
            <div>
                <p className='my-1 font-Sans-Font max-sm:text-xl' data-aos="slide-up"
                data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Libérez la magie avec notre photobooth à miroir carré.</p>
                <hr className='bg-[#9e8121]/80 border-2 border-[#9e8121] w-1/5 max-sm:w-2/5 my-5 ' />

                <h2 className='font-Sans-Font my-2 max-sm:text-xl'
                data-aos="slide-up"
                data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Inclus dans ce forfait photobooth :</h2>

                <div>
                    <ul className='font-Sans-Font max-sm:text-xl'>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1 '> Livraison et installation</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Partage de photos par SMS</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Costumes et accessoires amusants</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Cadre photo personnalisé</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Choix de la toile de fond</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Technicien-hôte sympathique sur place</li>
                    </ul>
                    <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
                </div>
            </div>
        </div>
        <div className='h-1/2 w-1/2 max-sm:w-full'>
        <img src='photo_1_2025-10-18_13-20-11.jpg' />
        </div>
        
      </div>

      <div className='w-11/12 my-8 grid grid-cols-3 max-sm:grid-cols-1 gap-6 max-sm:gap-4 px-4 max-sm:px-1'>

           <div className='border flex items-center justify-center flex-col py-2 px-2' data-aos="slide-up"
                data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>3 HEURES DE SERVICE</p>
                <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]'>749$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
           
          <div className='border flex items-center justify-center flex-col py-2 px-2 bg-black' data-aos="slide-up"
                data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl text-white'>4 HEURES DE SERVICE</p>
               <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl text-[#947306] font-AdobeHebrew-italic'>849$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-black hover:bg-white  transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>

           <div className='border flex items-center justify-center flex-col py-2 px-2' data-aos="slide-up"
                data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>6 HEURES DE SERVICE</p>
           <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]l'>999$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
        </div>
      </div>

       <div className='w-full flex flex-col bg-[#9e8121]/30 items-center justify-center my-2 py-8 font-GaramondAntiqua'>
           <div className='w-11/12 flex items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div className='p-3 w-1/2 max-sm:w-full'>
            <h1 className='text-6xl max-sm:text-5xl' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Livre audio d'or</h1>
            <div>
                <p className='my-1 font-Sans-Font max-sm:text-xl' data-aos="slide-up"
                data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Libérez la magie avec notre photobooth à miroir carré.</p>
                <hr className='bg-[#9e8121]/80 border-2 border-[#9e8121] w-1/5 max-sm:w-2/5 my-5 ' />

                <h2 className='font-Sans-Font my-2 max-sm:text-xl' data-aos="slide-up"
                data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Inclus dans ce forfait photobooth :</h2>

                <div>
                    <ul className='font-Sans-Font max-sm:text-xl'>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1 '> Livraison et installation</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Partage de photos par SMS</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Costumes et accessoires amusants</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Cadre photo personnalisé</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Choix de la toile de fond</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Technicien-hôte sympathique sur place</li>
                    </ul>
                    <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
                </div>
            </div>
        </div>
        <div className='h-1/2'>
        <img src='photo_10_2025-10-18_13-20-12.jpg' />
        </div>
        
      </div>

      <div className='w-11/12 my-8 grid grid-cols-3 max-sm:grid-cols-1 gap-6 max-sm:gap-4 px-4 max-sm:px-1'>

           <div className='border flex items-center justify-center flex-col py-2 px-2' data-aos="slide-up"
                data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>3 HEURES DE SERVICE</p>
                <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]'>749$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
           
          <div className='border flex items-center justify-center flex-col py-2 px-2 bg-black' data-aos="slide-up"
                data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl text-white'>4 HEURES DE SERVICE</p>
               <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl text-[#947306] font-AdobeHebrew-italic'>849$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-black hover:bg-white transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>

           <div className='border flex items-center justify-center flex-col py-2 px-2' data-aos="slide-up"
                data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <p className='mt-2 font-Sans-Font max-sm:text-2xl'>6 HEURES DE SERVICE</p>
           <hr className='bg-[#9e8121] border border-[#9e8121] w-1/5 my-5 ' />
                <p className='text-6xl font-AdobeHebrew-italic text-[#271a02]l'>999$</p>
                 <Link to="/contact">
         <button className="mt-6 mx-3 text-lg cursor-pointer px-6 py-3 bg-[#9e8121] border-[#9e8121] border  text-white font-medium hover:text-white hover:bg-black transition duration-500 hover:border-black ease-in-out">DEMANDER UN DEVIS</button>
         </Link>
            </div>
        </div>
      </div>
 

         <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-3xl my-3 '>Les étapes clés</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-6xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl text-black/75' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Processus de location de photobooth</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

<div className='w-full flex flex-col items-center justify-center my-2 py-8 font-GaramondAntiqua'>
      <div className='w-10/12 max-sm:px-4 max-sm:w-full py-7 max-sm:py-2 text-center flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-between'>
        <div >
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic' data-aos="slide-left"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">01</h1>
            <p className='text-3xl my-2' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Demande de devis</p>
            <p className='font-Sans-Font text-black/65' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Remplissez notre formulaire avec les détails de votre Photobooth et de votre événement pour un devis personnalisé.</p>
        </div>

       <div className='mx-4 max-sm:mx-0 max-sm:my-6 ' data-aos="slide-left"
     >
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic'   data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">02</h1>
            <p className='text-3xl my-2' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Réservation de service</p>
            <p className='font-Sans-Font text-black/65' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Nous vous contacterons le plus rapidement possible pour discuter de vos besoins, fixer la date de votre événement et commencer les préparatifs.</p>
        </div>

        <div data-aos="slide-left"
      >
            <h1 className='text-9xl text-[#9e8121]/70 font-AdobeHebrew-italic'   data-aos-delay="150"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">03</h1>
            <p className='text-3xl my-2' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Jour de l'événement</p>
            <p className='font-Sans-Font text-black/65' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Notre équipe livre, installe, assure une expérience sans faille et vous envoie un dossier cloud après l’événement.</p>
        </div>
      </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center mt-2 py-5 max-sm:py-2 bg-[#9e8121]/30'>

      <div className='w-10/12 max-sm:px-4 max-sm:w-full py-7 max-sm:py-2 flex justify-center max-sm:flex-col max-sm:items-center max-sm:justify-between font-GaramondAntiqua'>
      <div className='bg-black/80 py-8 px-5 w-1/2 max-sm:w-full'>
        <h1 className='text-white text-3xl ' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Rôle du technicien</h1>
         <hr className='border border-[#9e8121] w-1/5 my-2 '/> 

         <div >
                    <ul className='text-white font-Sans-Font max-sm:text-xl leading-loose'>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1 '> Un technicien expérimenté animera le Photobooth afin de garantir une expérience sans faille.</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Gère le processus d’impression pour vous faciliter la tâche.</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Organise la table des accessoires pour une installation propre et agréable.</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Crée une station de photobooth attrayante pour une expérience mémorable.</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Propose des idées de poses créatives, afin d’améliorer l’ensemble des séances photo.</li>
                    </ul>
                
                </div>
      </div>

        <div className='bg-black py-8 px-5 w-1/2 max-sm:w-full '>
        <h1 className='text-white text-3xl ' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Services complémentaires</h1>
         <hr className='border border-[#9e8121] w-1/5 my-2 '/> 
         
         <p className='text-2xl text-[#a0710c] my-2 max-sm:text-lg'>Nous proposons plusieurs options pour améliorer votre expérience du photobooth.</p>
         <div >
                    <ul className='text-white font-Sans-Font max-sm:text-xl leading-loose'>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1 '> Impressions instantanés illimités : 199$</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Tapis rouge VIP : 99$</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Écran vert : 99$</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Album photo physique : 150$</li>
                        <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Panneaux de visage : 99$</li>
                         <li className='before:content-["*"] before:text-red-600 before:text-lg before:ml-1'> Événement AI : 99$</li>
                    </ul>
                
                </div>
      </div>
      </div>
      </div>

        <div className='w-full flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:px-0 max-sm:my-0 my-12 max-sm:py-0 py-12 bg-[#9e8121]/40 px-24'>
           <img src="photo_3_2025-10-18_13-20-11.jpg" alt="" className='w-1/2 max-sm:w-full' />
           <div className='w-1/2 ml-16 max-sm:ml-0 max-sm:w-full max-sm:py-4 max-sm:text-center font-Sans-Font text-[#271a02]'>
             <h1 className='text-4xl my-5 font-GaramondAntiqua'
             data-aos="slide-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">Pourquoi choisir Elikiabooth?</h1>
     
             <p className='my-4 max-sm:px-1 leading-loose max-sm:text-lg' data-aos="slide-up"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">Nous ne sommes pas seulement un service de photobooth à Montréal — nous sommes vos partenaires pour créer des souvenirs mémorables.</p>
     
             <p className='my-4 max-sm:px-1 leading-loose max-sm:text-lg' data-aos="slide-up"
         data-aos-delay="100"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">Grâce à notre passion pour les célébrations et notre souci de l’excellence, nous transformons chaque événement en une expérience unique et inoubliable.</p>
     
             <p className='my-4 max-sm:px-1 leading-loose max-sm:text-lg' data-aos="slide-up"
         data-aos-delay="150"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">Mariage, anniversaire ou événement corporatif, Elikiabooth a tout ce qu’il vous faut pour capturer chaque sourire et chaque moment de joie.</p>
     
           </div>
           </div>

      </div>
    </>
  )
}

export default Forfait
