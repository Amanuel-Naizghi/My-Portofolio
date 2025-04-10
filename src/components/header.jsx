import {Link} from 'react-router-dom';
import homeIcon from '../assets/home.png';

export default function Header() {
    return (
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav
          className="sticky flex items-center justify-center lg:justify-end p-6 px-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center gap-x-4 lg:gap-x-12">
            <Link to="/">
                <img className="hover:blur-[0.8px] pb-[8px]" src={homeIcon} alt="Home" />
            </Link>
            <Link
              to="/projects"
              href="#"
              className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              href="#"
              className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              href="#"
              className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
            >
              Contact
            </Link>
            <Link
              to="/about"
              href="#"
              className="text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 lg:px-5"
            >
              About
            </Link>
          </div>
        </nav>
        <hr />
      </header>
    );
  }