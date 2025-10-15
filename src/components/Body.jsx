import React from 'react'

const Body = () => {
   const images = [
  { img: "https://images.unsplash.com/photo-1727892349129-118c3a74823f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",title:"Photobooth Miroir Carré"},
    {img:"https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",title:"Vidéo Booth 360"},
    {img:"https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",title:"Photobooth Miroir Rond"},
    {img:"https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",title:"Le Selfie PAD"},
  ];

  const data=[{
    icon:"./church.png",
    title:"Mariage",
    desc:"Immortalisez les moments joyeux de votre grand jour grâce à nos cabines photos de mariage."
  },
{
    icon:"./handshake.png",
    title:"Corporatif",
    desc:"Votre prochain événement corporatif aura son plaisir déchaîné avec nos cabines photo de fête !"
  },
{
    icon:"./cake.png",
    title:"Anniversaire",
    desc:"Faites passer votre fête d'anniversaire à la vitesse supérieure grâce à nos cabines photo !"
  },
{
    icon:"./graduate.png",
    title:"Graduation",
    desc:"Le jour de la remise des diplômes a une touche de glamour grâce à nos solutions de photobooth sur mesure !"
  }] 

  const data1=[{
    icon:"./touch.png",
    title:"Touche Personnelle",
    desc:"Ajoutez des graphiques personnalisés qui correspondent à votre thème pour vos célébrations - anniversaires, mariages et autres."
  },
{
    icon:"./beverage.png",
    title:"Ambiance Festive",
    desc:"Rehaussez votre événement avec des superpositions personnalisées, en apportant une touche unique aux photos et vidéos de vos invités."
  },
{
    icon:"./sharee.png",
    title:"Boost Marketing",
    desc:"Attirez l'attention lors d'événements marketing en incorporant des graphiques personnalisés qui mettent en valeur votre marque."
  }]
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex w-11/12 my-12 items-center justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <p className='text-5xl w-1/2 max-sm:hidden'>Vous voulez que votre prochain événement se démarque ?</p>
        <div className=' w-1/2  max-sm:w-11/12 max-sm:py-4' >
            <p className='text-[#9e8121]/50 text-3xl mb-1 max-sm:text-5xl max-sm:text-center max-sm:my-6'>Nous avons le Photobooth qu'il vous faut.</p>
            <p className='text-3xl max-sm:text-center max-sm:text-xl'>En choisissant Fotobo pour votre prochain service de location de Photobooth, vous ajouterez une touche mémorable à votre événement !</p>
        </div>
        </div>
        <div className='w-full p-4 max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <img src="https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" className='w-1/2 max-sm:w-full' />
            <div className='w-1/2 py-14 max-sm:py-3 bg-[#9e8121]/40 grid grid-cols-2 gap-4 p-4 max-sm:w-full max-sm:grid-cols-1 max-sm:my-4'>
                <div className='justify-center items-center flex flex-col ' >
                    <img src='./emoji.png' alt='smiley'  className='size-16'/>
                    <p className='text-3xl my-3'>Say Cheese !</p>
                    <p className='text-md'>Capturez et imprimez des moments en un clin d'œil pour une joie instantanée.</p>
                </div>
                <div className='justify-center items-center flex flex-col' >
                  <img src='./glasses.png' alt='smiley'  className='size-16'/>
                    <p className='text-3xl my-3'>À votre style</p>
                    <p className='text-md'>Personnalisez les accessoires, les toiles de fond et vos photos en fonction de votre événement.</p>
                </div>
                <div className='justify-center items-center flex flex-col' >
                  <img src='./share.png' alt='smiley'  className='size-16'/>
                    <p className='text-3xl my-3'>Partage rapide</p>
                    <p className='text-md'>Partagez sans effort vos moments préférés sur les médias sociaux.</p>
                </div>
                <div className='justify-center items-center flex flex-col' >
                   <img src='./user.png' alt='smiley'  className='size-16'/>
                    <p className='text-3xl my-3'>Facile à utiliser</p>
                    <p className='text-md'>Profitez d'une expérience photo simple, automatisée et adaptée à tous les âges.</p>
                </div>
            </div>
        </div>
   

      <div className='w-full flex flex-col items-center justify-center my-8 py-8'>
        <p className='text-[#9e8121]/50 text-2xl max-sm:hidden'>NOS SÉLECTIONS</p>
        <p className='max-sm:text-5xl max-sm:my-2'>Nos photobooths</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-2xl max-sm:px-3 max-sm:text-center max-sm:text-xl'>Consultez nos différentes options de location.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
         <button className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">EN APPRENDRE D'AVANTAGE</button>
      </div>

      <div className='w-11/12 max-sm:w-full  grid grid-cols-2 max-sm:flex max-sm:flex-col gap-6 p-6  max-sm:px-1 items-center justify-center'>
         {
          images.length > 0 && images.map((image, index) => (
            <div 
            key={index} 
            className={`w-full h-full relative` }
          >
            <img src={image.img} alt="" className='w-full hover:translate-y-[-10px] transition-transform duration-500 ease-in-out' />
            <div className='absolute bottom-0 left-0 right-0 bg-[#ad933b] text-center p-4 text-4xl max-sm:text-2xl'>{image.title}</div>
</div>))
         }
      </div>

      <div className='bg-[#a58e42] w-full py-8 max-sm:my-1 my-8 grid grid-cols-4 max-sm:grid-cols-1 gap-4 max-sm:gap-2 items-center justify-center'>
        {
          data.length > 0 && data.map((item, index) => (
            <div 
            key={index}
            className='w-full flex flex-col items-center justify-center text-center py-8 px-4 max-sm:py-4 max-sm:px-2 text-white'>
              <div className='size-24  bg-white rounded-full p-3  flex items-center justify-center mx-auto'>
                 <img src={item.icon} className='size-16' />
              </div>
              <p className='text-4xl'>{item.title}</p>
              <p className='text-lg'>{item.desc}</p>
              </div>))
        }
      </div>

      <div className='w-full flex flex-col justify-center items-center max-sm:my-0 my-12 max-sm:hidden'>
        <h1 className='text-center text-2xl text-[#9e8121]/50 my-3 '>Personnalisez votre photobooth</h1>
        <h2 className='text-center text-4xl w-10/12'>Transformez l'expérience de votre événement grâce à nos visuels personnalisés !</h2>
<div className='w-full p-4 max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        {
          data1.length > 0 && data1.map((item, index) => (
            <div 
            key={index}
            className='w-full flex bg-[#ad933b] mx-3 flex-col items-center bg-[] justify-center text-center py-8 px-4 max-sm:py-4 max-sm:px-2 text-black max-sm:my-4'>
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
      <img src="https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" className='w-1/2 max-sm:w-full' />
      <div className='w-1/2 ml-16 max-sm:ml-0 max-sm:w-full max-sm:py-4 max-sm:text-center'>
        <h1 className='text-4xl my-5'>Pourquoi choisir Fotobo?</h1>

        <p className='my-4 text-md max-sm:px-1'>Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables.</p>

        <p className='my-4 max-sm:px-1'>Avec notre passion pour les célébrations et notre engagement pour l’excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.</p>

        <p className='my-4 max-sm:px-1'>Quel que soit l’événement que vous organisez, un mariage, une fête d’anniversaire ou une fête d’entreprise, nous avons tout ce qu’il vous faut !</p>

          <button className="mt-6  cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">DECOUVRIR NOS SERVICES</button>
      </div>
      </div>

        <div className='w-full  flex flex-col items-center justify-center max-sm:my-0 mt-2 bg-[#9e8121]/40 py-8'>
        <div className='w-10/12 max-sm:w-full flex flex-col items-center justify-center '>
        <p className='text-[#9e8121]/50 text-2xl my-4'>Demande de réservation</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl text-center max-sm:px-3 max-sm:text-center max-sm:text-3xl'>Capturez les sourires. Créez des souvenirs.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
        <p className='w-2/5 text-center my-4 max-sm:w-full max-sm:px-4'>Créez des souvenirs inoubliables grâce à nos solutions de photobooth à la pointe de la technologie ! Qu'il s'agisse d'une réunion de famille, d'une fête d'anniversaire ou d'un gala d'entreprise, nos cabines photo ajoutent la touche parfaite d'excitation. Réservez votre créneau dès aujourd'hui et laissez les moments parfaits défiler !</p>
         <button className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">RESERVEZ VOTRE PHOTOBOOTH</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default Body
