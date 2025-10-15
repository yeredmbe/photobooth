import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-full py-8 max-sm:py-2 bg-[#222221] flex justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center '>
            <div className='flex items-center max-sm:my-2'><img src='./loaction.png' className='size-12 max-sm:size-8' /> <p className='text-xl max-sm:text-lg text-center text-white font-semibold ml-2'>Your Location</p> </div>
            <div className='flex items-center max-sm:my-2'><img src='./telephone.png' className='size-12 max-sm:size-8' /><p className='text-xl max-sm:text-lg text-center text-white font-semibold  ml-2'>Your Phone</p> </div>
            <div className='flex items-center max-sm:my-2'><img src='./mail.png' className='size-12 max-sm:size-8' /> <p className='text-xl max-sm:text-lg text-center text-white font-semibold  ml-2'>Your Email</p> </div>
        </div>
        <div className='py-8 max-sm:py-2 text-white bg-black flex justify-evenly items-center  max-sm:-flex max-sm:flex-col max-sm:items-center max-sm:justify-center '>
        {/* <hr className='border-1 border-red-600'/> */}
       <p className=''>COPYRIGHT © 2024 Elika Events</p>
       <img src='./logo.png' className='max-sm:my-2 size-28'/> 
       <div className='flex items-center justify-between max-sm:justify-around max-sm:w-8/12 md:w-1/5 responsive  max-sm:px-2 '>
        <div className='max-sm:my-3 flex items-center justify-center'><img src="./google.png" alt="" className='size-6 mr-1' /> <p className='max-sm:hidden'> GOOGLE</p></div>
        <div className='max-sm:my-3 flex items-center justify-center mx-8'><img src="./instagram.png" alt="" className='size-6 mr-1 ' /> <p className='max-sm:hidden'>INSTAGRAM</p> </div>
        <div className='max-sm:my-3 flex items-center justify-center'><img src="./social.png" alt="" className='size-6 mr-1' /> <p className='max-sm:hidden'>FACEBOOK</p></div>
       </div>
        </div>
        <div className='w-full text-white text-center p-2'>
       <p className='text-md text-black text-center'>Copyright &copy; {new Date().getFullYear()} | All Rights Reserved</p>
        <div className='text-xs text-black text-center justify-center items-center flex'> developped with <img src='./love.png' className='size-4 mx-1' /> by Faurza</div>
        </div>
        </div>
    </>
  )
}

export default Footer
