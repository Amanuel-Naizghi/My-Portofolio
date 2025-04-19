import {Link} from 'react-router-dom';
import {useState} from 'react';
import homeIcon from '../assets/home.png';

export default function Header() {
    const [isOpen,setIsOpen]=useState(false);

    return (
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav
          className="sticky flex justify-end lg:justify-end p-6 px-3 lg:px-8 h-16"
          aria-label="Global"
        >
          <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>☰</button>
          <ul className={`gap-x-4 lg:gap-x-12 hidden md:flex`}>
            <li>
                <Link to="/">
                    <img className="hover:blur-[0.8px] pb-[8px]" src={homeIcon} alt="Home" />
                </Link>
            </li>
            <li>
                <Link
                to="/projects"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Projects
                </Link>
            </li>
            <li>
                <Link
                to="/experience"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Experience
                </Link>
            </li>
            <li>
                <Link
                to="/contact"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Contact
                </Link>
            </li>
            <li>
                <Link
                to="/about"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                About
                </Link>
            </li>
            
          </ul>
         {/* Used for mobile screen size */}
          <ul className={`gap-x-4 lg:gap-x-12 ${(!isOpen)&&"hidden"} md:hidden`}>
            <li className='bg-gray-200 p-2 rounded-t-xl'>
                <Link to="/">
                    <img className="hover:blur-[0.8px] pb-[8px]" src={homeIcon} alt="Home" />
                </Link>
            </li>
            <li className='bg-gray-200 p-2'>
                <Link
                to="/projects"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Projects
                </Link>
            </li>
            <li className='bg-gray-200 p-2'>
                <Link
                to="/experience"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Experience
                </Link>
            </li>
            <li className='bg-gray-200 p-2'>
                <Link
                to="/contact"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                Contact
                </Link>
            </li>
            <li className='bg-gray-200 p-2 rounded-b-xl'>
                <Link
                to="/about"
                href="#"
                className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
                >
                About
                </Link>
            </li>
            
          </ul>
        </nav>
        <hr />
      </header>
    );
  }