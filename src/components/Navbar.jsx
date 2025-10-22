import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const location = useLocation()
    
    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: "Acceuil", link: "/" },
        { name: "Photobooths", link: "/photobooth" },
        { name: "Nos Services", link: "/forfaits" },
        { name: "Evénements", link: "/evenements" },
        { name: "Nous contacter", link: "/contact" }
    ]

    const MenuToggleButton = ({ isOpen, onClick }) => (
        <button 
            className='p-3 rounded-sm shadow-sm hidden max-sm:block border-none bg-transparent hover:opacity-70 transition-opacity'
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <img 
                src={"/text.png"} 
                alt={isOpen ? "Close menu" : "Open menu"} 
                className='size-6' 
            />
        </button>
    )

    return (
        <>
            <nav className='w-full flex flex-col justify-center items-center bg-[#f1eaea] relative font-sans'>
                <div className='w-11/12 flex items-center justify-between'>
                    {/* Logo */}
                    <Link to="/" aria-label="Home">
                        <img 
                            src='./elikia-event.png' 
                            alt='Company Logo' 
                            className='size-28 my-2 max-sm:size-20 transition-transform hover:scale-105' 
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='flex items-center justify-end max-sm:hidden'>
                        {navLinks.map((link, index) => (
                            <Link 
                                to={link.link} 
                                key={index}
                                className='mx-4 text-lg text-black hover:text-[#9e8121] transition-colors duration-300'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className='flex items-center justify-between max-sm:hidden'>
                        {/* <button className='hover:text-[#9e8121] transition-colors duration-300 cursor-pointer mx-4'>
                            LANGUAGE
                        </button> */}
                        <Link 
                            to="/contact" 
                            className='uppercase bg-[#9e8121]/70 px-5 py-4 cursor-pointer  text-white hover:bg-[#ac8402] transition-colors duration-300'
                        >
                            Reserver
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <MenuToggleButton 
                        isOpen={isMenuOpen} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-gray-950 w-full h-full z-50 transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
                aria-hidden={!isMenuOpen}
            >
                {/* Header with Logo and Close Button */}
                <div className='flex justify-between items-center p-4 border-b border-gray-700'>
                    <Link to="/" aria-label="Home">
                        <img 
                            src='./logo.png' 
                            alt='Company Logo'
                            className='size-20'
                            onClick={() => setIsMenuOpen(false)}
                        />
                    </Link>
                    
                    <button 
                        className='p-2 text-white hover:text-[#9e8121] transition-colors'
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <img 
                            src="./cross.png" 
                            alt="Close menu" 
                            className='size-8' 
                        />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className='flex flex-col items-center justify-center h-[calc(100%-180px)] font-garamond'>
                    {navLinks.map((link, index) => (
                        <Link 
                            to={link.link} 
                            key={index}
                            data-aos="slide-up"
    data-aos-delay={index * 10}
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
                            className='my-4 text-xl font-semibold text-white hover:text-[#9e8121] transition-colors duration-300 py-2'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    {/* Mobile Reservation Button */}
                    <Link 
                        to="/contact" 
                        className='mt-6 uppercase bg-[#9e8121]/70 px-6 py-3 text-white hover:bg-[#ac8402] transition-colors duration-300'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Reserver
                    </Link>
                </div>

                {/* Footer Credit */}
                <a href='https://faurzanext.com/' className='absolute bottom-4 left-0 right-0 text-center'>
                    <p className='text-sm text-[#9e8121] flex items-center justify-center font-AdobeHebrew-italic'>
                        Developed with 
                        <img 
                            src='./love.png' 
                            alt='love' 
                            className='size-4 mx-1' 
                        /> 
                        by Faurza
                    </p>
                </a>
            </div>
        </>
    )
}

export default Navbar