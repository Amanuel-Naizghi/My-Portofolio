import {Link} from 'react-router-dom';
import myProfileImg from '../assets/profile-img.jpeg';
import filled from '../assets/filled.png';
import notFilled from '../assets/not-filled.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function Home(){

    return(    
       <div className="bg-[#EEEEEE]">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-center lg:justify-end p-6 px-3 lg:px-8" aria-label="Global">
                    <div className="flex gap-x-4 lg:gap-x-12">
                        <Link to='/about' href="#" className="text-sm/6 font-semibold hover:shadow lg:px-5 rounded-full">About</Link>
                        <Link to='/projects' href="#" className="text-sm/6 font-semibold hover:shadow lg:px-5 rounded-full">Projects</Link>
                        <Link to='/experience' href="#" className="text-sm/6 font-semibold hover:shadow lg:px-5 rounded-full">Experience</Link>
                        <Link to='/contact' href="#" className="text-sm/6 font-semibold hover:shadow lg:px-5 rounded-full">Contact</Link>
                    </div>
                </nav>
            </header>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col md:flex-row rounded-lg overflow-hidden h:50 lg:h-100">
                    
                    <div className="w-full lg:w-[700px] md:w-1/3 flex justify-center items-center p-4">
                        <img src={myProfileImg} alt="Profile Image" className="rounded-full lg:h-[350px] lg:w-[350px] w-[250px] h-[250px] object-cover"/>
                    </div>
                                            
                    <div className="w-full md:w-2/3 p-6 flex flex-col">
                        <div>
                            <p className="lg:text-2xl text-gray-600 m-4 text-center text:1xl">Hello, I'm</p>
                            <h2 className="lg:text-4xl font-bold text-center text:[25px]">Amanuel Tesfatsion</h2>
                            <p className="lg:text-2xl text-gray-600 mt-4 text-center text:1xl">
                                Web Developer with expertise in building responsive and interactive user interfaces. Passionate about creating intuitive user experiences.
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-12 justify-center">
                            <button className="bg-[#797A7E] text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:bg-[#B7B7B7]">Download Resume</button>
                            <button className="border border-black text-black px-4 py-2 rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Contact Info</button>
                        </div>
                        <div className="flex justify-center space-x-7 mt-5">
                            <a href="https://github.com/Amanuel-Naizghi" className="hover:shadow rounded-full"><img className="w-[50px] h-[50px]" src={github} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/amanuel-tesfatsion" className="hover:shadow rounded-full"><img className="w-[57px] h-[57px]" src={linkedin} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <div className="home-page">
<div className="top-home-page">
     <div className="name">
         Amanuel N.Tesfatsion
     </div>
     <div className="navigation-container">
         <Link to='/about'>About</Link>
         <Link to='/projects'>Projects</Link>
         <Link to='/experience'>Experience</Link>
         <Link to='/contact'>Contact</Link>
     </div>
 </div>
<div className="home-page-content">
    <div className="profile-img-container">
         <img src={myProfileImg} alt="Amanuel N.Tesfatsion" />
    </div>
    <div className="profile-container">
         <p className="intro">Hello, I'm</p>
         <h2 className="name">Amanuel N.Tesfatsion</h2>
         <p className="profession">Frontend Developer</p>
         <div className="buttons">
             <button className="download-cv">Download CV</button>
             <Link to='/contact'>
                 <button className="contact-info">Contact Info</button>
             </Link>
         </div>
         <div className="social-links">
             <a href="" className="linked-in">
                 <img src={linkedin} alt="Linkedin" />
             </a>
             <a href="" className="github">
                 <img src={github} alt="github" />
             </a>
         </div>
    </div>
</div>
</div> */}