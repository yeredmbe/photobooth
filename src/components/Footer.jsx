import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-full py-8 max-sm:py-2 bg-[#222221] flex justify-around max-sm:flex-col max-sm:items-center max-sm:justify-center '>
            <div className='flex items-center max-sm:my-2'><img src='./loaction.png' className='size-12 max-sm:size-8 max-sm:hidden' /> <p className='text-xl max-sm:text-lg text-center text-[#7a6d55] ml-2 font-AdobeHebrew-italic'> place corbeil, Montréal J7K 0E5
Mascouche QC</p> </div>
            <a href='tel:683034005' className='flex items-center max-sm:my-2'><img src='./telephone.png' className='size-12 max-sm:size-8' /><p className='text-xl max-sm:text-lg text-center text-[#7a6d55]  ml-2 font-AdobeHebrew-italic'>+123456789</p> </a>
            <a href='mailto:example66@gmail.com' className='flex items-center max-sm:my-2'><img src='./mail.png' className='size-12 max-sm:size-8' /> <p className='text-xl max-sm:text-lg text-center text-[#7a6d55]  ml-2 font-AdobeHebrew-italic'>example66@gmail.com</p> </a>
        </div>
        <div className='py-8 max-sm:py-2 text-white bg-black flex justify-evenly items-center  max-sm:-flex max-sm:flex-col max-sm:items-center max-sm:justify-center '>
        {/* <hr className='border-1 border-red-600'/> */}
       <p className=''>COPYRIGHT © {new Date().getFullYear()} Elikia Events</p>
       <img src='./logo.png' className='max-sm:my-2 size-28'/> 
       <div className='flex items-center justify-between max-sm:justify-around max-sm:w-8/12 md:w-1/5 responsive  max-sm:px-2 '>
        <a href='' className='max-sm:my-3 flex items-center justify-center'><img src="./google.png" alt="" className='size-6 mr-1' /> <p className='max-sm:hidden'> GOOGLE</p></a>
        <a href='https://www.instagram.com/elikiaevents24?igsh=MWUxMmRiZ2ptajFjZg%3D%3D&utm_source=qr' className='max-sm:my-3 flex items-center justify-center mx-8'><img src="./instagram.png" alt="" className='size-6 mr-1 ' /> <p className='max-sm:hidden'>INSTAGRAM</p> </a>
        <a href='https://www.facebook.com/share/1CyDGcbTWT/?mibextid=wwXIfr' className='max-sm:my-3 flex items-center justify-center'><img src="./social.png" alt="" className='size-6 mr-1' /> <p className='max-sm:hidden'>FACEBOOK</p></a>
       </div>
        </div>
        <div className='w-full text-white text-center p-2'>
       <p className='text-md text-[#7a6d55] text-center'>Copyright &copy;  | All Rights Reserved</p>
        <a href='https://faurzanext.com/' className='text-xs text-black text-center justify-center items-center flex font-AdobeHebrew-italic'> developped with <img src='./love.png' className='size-4 mx-1' /> by Faurza</a>
        </div>
        </div>
    </>
  )
}

export default Footer
