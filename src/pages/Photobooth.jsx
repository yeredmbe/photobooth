import React from 'react'

const Photobooth = () => {
  const [toggle1, setToggle1] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);
  const [toggle3, setToggle3] = React.useState(false);
  const [toggle4, setToggle4] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

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


//   const text=[ {title:"Survolez-moi !", desc:"Contactez-nous pour plus d'informations!"},
//     {title:"Survolez-moi !", desc:" Contactez-nous pour plus d'informations !"},
//     {title:"Survolez-moi !", desc:" Contactez-nous pour plus d'informations !"},
//     {title:"Survolez-moi !", desc:" Contactez-nous pour plus d'informations !"},

//   ]

  return (
    <>
    <div className='w-full fade'>
      <div className='w-full relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/70 after:z-10 font-GaramondAntiqua'>
        <img src="https://images.unsplash.com/photo-1727892349129-118c3a74823f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" className='w-full h-96' />
        <div className='absolute left-1/2 top-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 z-20'>
        <h1 className='text-8xl text-white my-3 max-sm:text-5xl max-sm:mx-2 uppercase'>Nos Photobooths</h1>
        <p className='text-3xl text-white max-sm:text-xl'>Découvrez les multiples produits disponibles.</p>
        </div>
      </div>

       <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-2xl my-3 uppercase'>Location de photoboothh</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl'>Photobooth Miroir Carré
À partir de  849$.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

      <div className='w-full flex items-center justify-center max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center mt-8 pt-8'>
        <div className='w-11/12 grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 max-sm:px-1'>
            <img src="https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='shadows' />
            <img src="https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='max-sm:hidden shadows' />
        </div>
      </div>


  {/* Fond qui slide */}
  <div className='w-full  flex flex-col items-center justify-center max-sm:items-center max-sm:justify-center max-sm:px-1 max-sm:mt-0 max-sm:pt-0 mt-12 pt-8 '>
<div className="flex w-11/12 justify-evenly items-center max-sm:flex-col max-sm:items-center max-sm:justify-center my-5 font-GaramondAntiqua ">
<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle1}
  onMouseLeave={handleToggle1}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle1 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-5xl py-3 px-2 transition-all duration-500 ease-in-out ${
      toggle1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
  Look Interactif
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle2}
  onMouseLeave={handleToggle2}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle2 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-5xl py-3 transition-all duration-500 ease-in-out ${
      toggle2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Photo De Haute Qualité
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle3}
  onMouseLeave={handleToggle3}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle3 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-5xl py-3 transition-all duration-500 ease-in-out ${
      toggle3 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Animation Amusantes
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle3? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 h-52 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle4}
  onMouseLeave={handleToggle4}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle4 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-5xl py-3 transition-all duration-500 ease-in-out  ${
      toggle4 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
   Option Sur Mesure
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

</div>
<div 
  className=" h-28 bg-[#ad933b] overflow-hidden relative cursor-pointer py-6 w-11/12 max-sm:w-full my-5 shadows font-GaramondAntiqua "
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-white transition-transform duration-500 ease-in-out py-6 ${
      toggle ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center py-3 text-5xl transition-all duration-500 ease-in-out font-GaramondAntiqua text-[#271a02] ${
      toggle ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Parfait Pour Les Mariages - Evernement Corporatifs - Fêtes Privées
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>
</div>

 <div className='bg-[#ad933b]/40 w-full '>
       <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-2xl my-3 uppercase'>Location de photoboothh</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl'>Photobooth Miroir Rond
À partir de 749 $.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

      <div className='w-full flex items-center justify-center max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center mt-8 pt-8'>
        <div className='w-11/12 grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 max-sm:px-1'>
            <img src="https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='shadows' />
            <img src="https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='max-sm:hidden shadows' />
        </div>
      </div>


  {/* Fond qui slide */}
  <div className='w-full  flex flex-col items-center justify-center max-sm:items-center max-sm:justify-center max-sm:px-1 max-sm:mt-0 max-sm:pt-0 mt-12 pt-8 '>
<div className="flex w-11/12 justify-evenly items-center max-sm:flex-col max-sm:items-center max-sm:justify-center my-5 font-GaramondAntiqua ">
<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle1}
  onMouseLeave={handleToggle1}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle1 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle2}
  onMouseLeave={handleToggle2}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle2 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle3}
  onMouseLeave={handleToggle3}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle3 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle3 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle3? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 h-52 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle4}
  onMouseLeave={handleToggle4}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle4 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out  ${
      toggle4 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

</div>
<div 
  className=" h-28 bg-[#ad933b] overflow-hidden relative cursor-pointer py-6 w-11/12 max-sm:w-full my-5 shadows font-GaramondAntiqua "
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-white transition-transform duration-500 ease-in-out py-6 ${
      toggle ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>
</div>

</div>

       <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-2xl my-3 uppercase'>Location de photoboothh</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl'>Vidéo Booth 360
À partir de 849$.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

      <div className='w-full flex items-center justify-center max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center mt-8 pt-8'>
        <div className='w-11/12 grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 max-sm:px-1'>
            <img src="https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='shadows' />
            <img src="https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='max-sm:hidden shadows' />
        </div>
      </div>


  {/* Fond qui slide */}
  <div className='w-full  flex flex-col items-center justify-center max-sm:items-center max-sm:justify-center max-sm:px-1 max-sm:mt-0 max-sm:pt-0 mt-12 pt-8 '>
<div className="flex w-11/12 justify-evenly items-center max-sm:flex-col max-sm:items-center max-sm:justify-center my-5 font-GaramondAntiqua ">
<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle1}
  onMouseLeave={handleToggle1}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle1 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle2}
  onMouseLeave={handleToggle2}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle2 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle3}
  onMouseLeave={handleToggle3}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle3 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle3 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle3? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 h-52 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle4}
  onMouseLeave={handleToggle4}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle4 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out  ${
      toggle4 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

</div>
<div 
  className=" h-28 bg-[#ad933b] overflow-hidden relative cursor-pointer py-6 w-11/12 max-sm:w-full my-5 shadows font-GaramondAntiqua "
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-white transition-transform duration-500 ease-in-out py-6 ${
      toggle ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>
</div>

<div className='bg-[#ad933b]/40 w-full '>
       <div className='w-full flex flex-col items-center justify-center my-8 py-8 font-GaramondAntiqua'>
        <p className='text-[#9e8121]/50 text-2xl my-3 uppercase'>Location de photoboothh</p>
        <div className='w-10/12 max-sm:w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl mx-8 max-sm:mx-3 text-center max-sm:px-3 max-sm:text-center max-sm:text-4xl'>Le Selfie PAD
À partir de 599$.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
      </div>

      <div className='w-full flex items-center justify-center max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center mt-8 pt-8'>
        <div className='w-11/12 grid grid-cols-2 max-sm:grid-cols-1 gap-4 px-4 max-sm:px-1'>
            <img src="https://images.unsplash.com/photo-1617676480063-1f0b26a5e04d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='shadows' />
            <img src="https://images.unsplash.com/photo-1643651576156-c062a5b8c324?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className='max-sm:hidden shadows' />
        </div>
      </div>


  {/* Fond qui slide */}
  <div className='w-full  flex flex-col items-center justify-center max-sm:items-center max-sm:justify-center max-sm:px-1 max-sm:mt-0 max-sm:pt-0 mt-12 pt-8 '>
<div className="flex w-11/12 justify-evenly items-center max-sm:flex-col max-sm:items-center max-sm:justify-center my-5 font-GaramondAntiqua ">
<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle1}
  onMouseLeave={handleToggle1}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle1 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle2}
  onMouseLeave={handleToggle2}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle2 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle2 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full h-52 bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle3}
  onMouseLeave={handleToggle3}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle3 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle3 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle3? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

<div 
  className="w-full bg-[#f7f6f6] overflow-hidden relative cursor-pointer py-6 h-52 mx-2 max-sm:m-2 shadows"
  onMouseEnter={handleToggle4}
  onMouseLeave={handleToggle4}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-[#ad933b] transition-transform duration-500 ease-in-out py-6 ${
      toggle4 ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out  ${
      toggle4 ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>

</div>
<div 
  className=" h-28 bg-[#ad933b] overflow-hidden relative cursor-pointer py-6 w-11/12 max-sm:w-full my-5 shadows font-GaramondAntiqua "
  onMouseEnter={handleToggle}
  onMouseLeave={handleToggle}
>
  {/* Fond qui slide */}
  <div 
    className={`absolute inset-0 bg-white transition-transform duration-500 ease-in-out py-6 ${
      toggle ? "translate-y-0" : "translate-y-full"
    }`}
  />
  
  {/* Premier texte */}
  <p 
    className={`absolute inset-0 text-center  text-2xl py-3 transition-all duration-500 ease-in-out font-Sans-Font text-[#271a02] ${
      toggle ? "opacity-0 scale-95" : "opacity-100 scale-100"
    }`}
  >
    Survolez-moi !
  </p>
  
  {/* Deuxième texte */}
  <p 
    className={`absolute inset-0 text-center text-black text-2xl py-3 transition-all duration-500 ease-in-out ${
      toggle ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    Contactez-nous pour plus d'informations!
  </p>
</div>
</div>
</div>

      <div className='w-full flex flex-col justify-center items-center max-sm:my-0 my-12 max-sm:hidden'>
        <h1 className='text-center text-2xl text-[#9e8121]/50 my-3 uppercase'>Personnalisez votre photobooth</h1>
        <h2 className='text-center text-5xl w-10/12 font-AdobeHebrew'>Transformez l'expérience de votre événement grâce à nos visuels personnalisés !</h2>
<div className='w-full p-4 max-sm:p-1 flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center'>
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

       <div className='w-full  flex flex-col items-center justify-center max-sm:my-0 mt-2 bg-[#9e8121]/40 py-8 font-GaramondAntiqua'>
        <div className='w-10/12 max-sm:w-full flex flex-col items-center justify-center '>
        <p className='text-white text-2xl my-4'>Demande de réservation</p>
        <div className='w-full flex items-center justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center'>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
           <p className='text-5xl text-center max-sm:px-3 max-sm:text-center max-sm:text-3xl text-[#271a02]'>Capturez les sourires. Créez des souvenirs.</p>
           <hr className=' border-[#9e8121]/40 w-1/5 max-sm:hidden'/> 
        </div>
        <p className='w-2/5 text-center my-4 max-sm:w-full max-sm:px-4 font-Sans-Font max-sm:text-lg text-[#271a02]'>Créez des souvenirs inoubliables grâce à nos solutions de photobooth à la pointe de la technologie ! Qu'il s'agisse d'une réunion de famille, d'une fête d'anniversaire ou d'un gala d'entreprise, nos cabines photo ajoutent la touche parfaite d'excitation. Réservez votre créneau dès aujourd'hui et laissez les moments parfaits défiler !</p>
         <button className="mt-6 mx-3 cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">RESERVEZ VOTRE PHOTOBOOTH</button>
      </div>
      </div>

      <div className='w-full  flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:px-0 max-sm:my-0 max-sm:py-0 py-12  px-24'>
      <img src="https://images.unsplash.com/photo-1727892349075-401c9df83995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBib290aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" className='w-1/2 max-sm:w-full' />
      <div className='w-1/2 relative ml-16 p-5 max-sm:ml-0 max-sm:w-full max-sm:py-4 max-sm:text-center font-Sans-Font text-[#271a02] max-sm:bg-[#9e8121]/40 '>
        <h1 className='text-5xl my-5 font-GaramondAntiqua'>Voici ce que disent de nous</h1>
        <img src="./arrow.png" alt="" className='size-32 absolute top-1 left-0 max-sm:hidden -z-10 opacity-55' />
        <img src="./quote.png" alt="" className='size-20 absolute top-2 left-2 hidden max-sm:block -z-10 opacity-55' />

        <p className='my-4 max-sm:px-1 leading-loose max-sm:text-lg'>Nous sommes plus que le meilleur service de location de Photobooth à Montréal – nous sommes vos partenaires pour créer et immortaliser des moments inoubliables.

        Avec notre passion pour les célébrations et notre engagement pour l’excellence, nous améliorons chaque événement avec notre expertise et notre approche unique des expériences Photobooth.
</p>

          <button className="mt-6  cursor-pointer px-6 py-3 bg-[#000] border border-[#000]  text-white text-lg font-medium hover:text-black  hover:bg-white transition duration-500 hover:border-black ease-in-out">DECOUVRIR NOS SERVICES</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default Photobooth
