import React from 'react'
import { Link } from 'react-router-dom';

const Body = () => {
   const images = [
  { img: "photo_2025-10-24_02-39-37.jpg",title:"Photobooth Miroir Carré"},
    {img:"photo_2025-10-23_10-22-18.jpg",title:"Vidéo Booth 360"}
  ];

  const data=[{
    icon:"./church.png",
    title:"Mariage",
    desc:"Transformez chaque instant de votre grand jour en un souvenir inoubliable avec Elikiabooth."
  },
{
    icon:"./handshake.png",
    title:"Corporatif",
    desc:"Ajoutez une touche de fun et de convivialité à votre événement d’entreprise avec Elikiabooth !"
  },
{
    icon:"./cake.png",
    title:"Anniversaire",
    desc:"Transformez chaque sourire en un souvenir inoubliable avec Elikiabooth."
  },
{
    icon:"./graduate.png",
    title:"Graduation",
    desc:"Célébrez votre remise de diplôme avec style grâce aux cabines photo sur mesure d’Elikiabooth."
  }] 

  const data1=[{
    icon:"./touch.png",
    title:"Touche Personnelle",
    desc:"Apportez votre signature unique à chaque célébration grâce à des visuels et accessoires sur mesure qui subliment vos anniversaires, mariages et événements spéciaux."
  },
{
    icon:"./beverage.png",
    title:"Fête inoubliable",
    desc:"Apportez une touche unique à vos photos et vidéos avec des superpositions personnalisées qui font briller chaque moment de votre événement."
  },
{
    icon:"./sharee.png",
    title:"Marketing impactant ",
    desc:"Faites briller votre marque lors de vos événements grâce à des graphiques personnalisés qui captivent et marquent les esprits."
  }]
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center font-GaramondAntiqua'>
        <div className='flex w-11/12 my-12 items-center justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <p className='text-6xl w-1/2 max-sm:hidden mr-7'  data-aos="slide-right"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Vous voulez que votre prochain événement se démarque ?</p>
        <div className=' w-1/2  max-sm:w-11/12 max-sm:py-4' >
            <p className='text-[#9e8121]/50 text-3xl mb-1 max-sm:text-2xl max-sm:text-center max-sm:my-6 uppercase'
             data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Si l’originalité vous préoccupe pour vos souvenirs inoubliables, notre Photobooth répond à ce besoin !</p>
            <p className='text-2xl max-sm:text-center max-sm:text-lg text-black/45'
             data-aos="slide-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Immortalisez les moments les plus drôles et les plus émouvants de votre vie avec notre Photobooth ! Notre équipe de professionnels vous offre une expérience unique et amusante pour capturer les meilleurs moments de votre événement.</p>
        </div>
        </div>
        <div className='w-full  max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <img src="photo_3_2025-10-21_00-31-23.jpg" alt="" className='w-1/2 max-sm:w-full'  data-aos="slide-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" />
            <div className='w-1/2 py-14 max-sm:py-3 bg-[#9e8121]/30 grid grid-cols-2 gap-4 p-4 max-sm:w-full max-sm:grid-cols-1 max-sm:my-4'>
                <div className='justify-center items-center flex flex-col ' >
                    <img src='./emoji.png' alt='smiley'  className='size-16'/>
                    <p className='text-4xl my-1'>Say Cheese !</p>
                    <p className='text-md max-sm:text-lg font-Sans-Font text-center text-black/65'>Immortalisez vos plus beaux sourires et repartez avec des souvenirs imprimés en un clin d’œil.</p>
                </div>
                <div className='justify-center items-center flex flex-col ' >
                  <img src='./glasses.png' alt='smiley'  className='size-16'/>
                    <p className='text-4xl my-1'>À votre style</p>
                    <p className='text-md max-sm:text-lg font-Sans-Font text-center text-black/65'>À votre image, tout en élégance
Avec Elikiabooth, chaque détail reflète votre histoire d’amour.</p>
                </div>
                <div className='justify-center items-center flex flex-col' >
                  <img src='./share.png' alt='smiley'  className='size-16'/>
                    <p className='text-4xl my-1'>Partage rapide</p>
                    <p className='text-md max-sm:text-lg font-Sans-Font text-center text-black/65'> Partage instantané
Avec Elikiabooth, vos plus beaux souvenirs se partagent en un clic !</p>
                </div>
                <div className='justify-center items-center flex flex-col' >
                   <img src='./user.png' alt='smiley'  className='size-16'/>
                    <p className='text-4xl my-1'>Simple et intuitif</p>
                    <p className='text-md max-sm:text-lg font-Sans-Font text-center text-black/65'>Notre borne photo est entièrement automatisée et pensée pour tous les âges — il suffit d’un sourire pour capturer la magie du moment.</p>
                </div>
            </div>
        </div>
   

      <div className='w-full flex flex-col items-center justify-center my-8 py-8'>
        <p className='text-[#9e8121]/50 text-xl max-sm:hidden my-2'>NOS SÉLECTIONS</p>
        <p className='max-sm:text-6xl text-6xl max-sm:my-2'  data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Nos photobooths</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-3xl max-sm:px-3 max-sm:text-center max-sm:text-2xl text-black/75' data-aos="slide-up"
    data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Consultez nos différentes options de location.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
         <Link to={"/photobooth"} className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-xl font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">EN APPRENDRE D'AVANTAGE</Link>
      </div>

      <div className='w-11/12 max-sm:w-full  grid grid-cols-2 max-sm:flex max-sm:flex-col gap-6 p-6  max-sm:px-1 items-center justify-center'>
         {
          images.length > 0 && images.map((image, index) => (
            <div 
            key={index} 
            className={`w-full h-full relative bg-amber-200/60` }
            data-aos="slide-up"
    data-aos-delay={index * 10}
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
          >
            <img src={image.img} alt="" className='w-full hover:translate-y-[-10px] transition-transform duration-500 ease-in-out' />
            <div className='absolute bottom-0 left-0 right-0 bg-[#ad933b]  text-[#271a02] text-center p-4 text-4xl max-sm:text-2xl'>{image.title}</div>
</div>))
         }
      </div>

      <div className='bg-[#a58e42]/80 w-full py-8 max-sm:my-1 my-8 grid grid-cols-4 max-sm:grid-cols-1 gap-4 max-sm:gap-2 items-center justify-center'>
        {
          data.length > 0 && data.map((item, index) => (
            <div 
            key={index}
            className='w-full flex flex-col items-center justify-center text-center py-8 px-4 max-sm:py-4 max-sm:px-2 text-white'>
              <div className='size-24  bg-white rounded-full hover:scale-[1.1] hover:translate-y-[-15px] transition-transform duration-500 p-3  flex items-center justify-center mx-auto'>
                 <img src={item.icon} className='size-16' />
              </div>
              <p className='text-4xl'>{item.title}</p>
              <p className='text-lg font-Sans-Font'>{item.desc}</p>
              </div>))
        }
      </div>

      <div className='w-full flex flex-col justify-center items-center max-sm:my-0 my-12 max-sm:hidden'>
        <h1 className='text-center text-2xl text-[#9e8121]/50 my-3 uppercase'>Photobooth personnalisé</h1>
        <h2 className='text-center text-5xl w-10/12 font-AdobeHebrew' 
        data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">TPersonnalisez votre photobooth avec des accessoires, fonds et visuels qui reflètent parfaitement le style de votre événement.</h2>

<div className='w-full p-4 max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'
data-aos="slide-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        {
          data1.length > 0 && data1.map((item, index) => (
            <div 
            key={index}
            className='w-full flex bg-[#ad933b]/80 mx-3 flex-col items-center hover:scale-[1.1] hover:translate-y-[-15px] transition-transform duration-500 ease-in-out justify-center text-center py-8 px-4 max-sm:py-4 max-sm:px-2 text-black max-sm:my-4'>
              <div className='size-24  rounded-full p-3  flex items-center  justify-center mx-auto'>
                 <img src={item.icon} className='size-16' />  
              </div>
              <p className='text-4xl'>{item.title}</p>
              <p className='text-lg'>{item.desc}</p>
              </div>))
        }
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

          <Link to="/evenements" className="mt-6  cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">DECOUVRIR NOS SERVICES</Link>
      </div>
      </div>

        <div className='w-full  flex flex-col items-center justify-center max-sm:my-0 mt-2 bg-[#9e8121]/40 py-8'>
        <div className='w-10/12 max-sm:w-full flex flex-col items-center justify-center '>
        <p className='text-white text-2xl my-4'>Demande de réservation</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl text-center max-sm:px-3 max-sm:text-center max-sm:text-3xl text-[#271a02]' data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Souriez, immortalisez, revivez chaque instant.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
        <p className='w-2/5 text-center my-4 max-sm:w-full max-sm:px-4 font-Sans-Font max-sm:text-lg text-[#271a02]' data-aos="slide-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Immortalisez chaque instant avec nos photobooths modernes et personnalisés ! Que ce soit un mariage, un anniversaire ou un événement corporatif, nos cabines ajoutent fun, style et émotions à vos célébrations. Réservez dès maintenant et transformez chaque sourire en un souvenir mémorable.</p>
         <Link to="/contact" className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">RESERVEZ VOTRE PHOTOBOOTH</Link>
      </div>
      </div>
     </div>
    </>
  )
}

export default Body
