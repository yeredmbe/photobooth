import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false)
    
    const naveLinks = [{
        name: "Home", link: "/"
    }, {
        name: "Photobooths",
        link: "/photobooth"
    }, {
        name: "Forfaits", link: "/forfaits"
    }, {
        name: "Evénements",
        link: "/evenements"
    }, {
        name: "Nous contact",
        link: "/contact"
    }]

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center bg-[#f1eaea] relative font-Sans-Font'>
                <div className='w-11/12 flex items-center justify-between '>
                    <Link to="/" >
                        <img src='./logo.png' className='size-28 my-2 max-sm:size-20'/>
                    </Link>
                    <div className=' flex items-center justify-end max-sm:hidden '>
                        {naveLinks.map((link, index) => (
                            <Link to={link.link} key={index} className='mx-4 text-lg  text-black hover:text-[#9e8121] ease-in-out duration-300'>{link.name}</Link>
                        ))}
                    </div>

                    <div className=' flex items-center justify-between max-sm:hidden'>
                        <p className='hover:text-[#9e8121] ease-in-out duration-300 cursor-pointer mx-4'>LANGUAGE</p>
                        <Link to={"/contact"} className='uppercase bg-[#9e8121]/70 px-5 py-4 cursor-pointer font-GaramondAntiqua text-white hover:bg-[#ac8402] ease-in-out duration-300'>Reserver</Link>
                    </div>

                    <div className='shadows rounded-sm p-3 hidden max-sm:block'>
                        <img src="./text.png" alt="" className='size-6' onClick={() => setToggle(true)} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Fixed with correct animation */}
            <div className={`fixed bg-gray-950 w-full h-full top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
                toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "
            }`}>
                <Link to="/" className='absolute top-1 left-3' >
                    <img src='./logo.png' className='my-2 size-20'/>
                </Link>

                <img src="./cross.png" alt="" className='my-2 size-8 absolute top-6 right-4' onClick={() => setToggle(false)}/>
                
                {/* Add your mobile menu links here */}
                <div className='flex flex-col items-center justify-center h-full font-GaramondAntiqua'>
                    {naveLinks.map((link, index) => (
                        <Link 
                            to={link.link} 
                            key={index} 
                            className='my-4 text-xl font-semibold text-white hover:text-[#9e8121] ease-in-out duration-300'
                            onClick={() => setToggle(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className='text-sm absolute bottom-1 text-[#9e8121] left-1/4  text-center justify-center items-center flex font-AdobeHebrew-italic'> developped with <img src='./love.png' className='size-4 mx-1' /> by Faurza .</div>
            </div>
        </>
    )
}

export default Navbar