import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const naveLinks=[{
        name:"Home", link:"/"
    },
    {
        name:"Photobooth",
        link:"/photobooth"
    },{
        name:"Forfaits", link:"/forfaits"
    },{
        name:"Evénements",
        link:"/evenements"
    },{
        name:"Nous contact",
        link:"/contact"
    }
]

  return (
    <>
    <div className='w-full flex flex-col justify-center items-center bg-[#f1eaea]'>
      <div className='w-11/12 flex items-center justify-between '>
        <Link to="/" >
<img src='./logo.png' className='size-28 my-2 max-sm:size-20'/>
</Link>
<div className=' flex items-center justify-end max-sm:hidden '>
    {naveLinks.map((link, index)=>(
        <Link to={link.link} key={index} className='mx-4 text-lg font-semibold text-black hover:text-[#9e8121] ease-in-out duration-300'>{link.name}</Link>
    ))}
</div>

<div className=' flex items-center justify-between max-sm:hidden'>
    <p className='hover:text-[#9e8121] ease-in-out duration-300 cursor-pointer mx-4'>LANGUAGE</p>
    <Link to={"/contact"} className='uppercase bg-[#9e8121]/70 px-5 py-4 cursor-pointer'>Reserver</Link>
</div>

<div className='shadows rounded-sm p-3  hidden max-sm:block'>
        <img src="./text.png" alt="" className='size-6' />
      </div>
      </div>

      </div>
    </>
  )
}

export default Navbar
