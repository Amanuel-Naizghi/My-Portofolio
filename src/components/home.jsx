import {Link} from 'react-router-dom';
import profile1 from '../assets/profile-img1.jpeg';
import profile2 from '../assets/profile-img2.jpeg';
import Header from './header';
import github from '../assets/github.png';
import github2 from '../assets/github2.png';
import linkedin from '../assets/linkedin.png';
import linkedin2 from '../assets/linkedin2.png';
import x from '../assets/x.png';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Experience from './experience';
import Projects from './projects';
import About from './about';
import ContactMe from './contact';


export default function Home(){
    const [index,setIndex]=useState(0);
    const profileImage=[profile1,profile2];

    const {theme}=useContext(ThemeContext);

    const resumeURL="https://my-portofolio-psi-azure.vercel.app/AMANUEL-TESFATSION.pdf";

    useEffect(()=>{
        const changePhoto=()=>{
            (index===0)?setIndex(1):setIndex(0);
        }

        const timer=setTimeout(() => {
            changePhoto();
        }, 7000);

        return ()=> clearTimeout(timer);
    },[profileImage.length,index])
    

    return(    
        <div className={`${theme==='white'?"bg-white":"bg-black"}`}>
            <Header></Header>
            <div className={`flex flex-col items-center justify-center min-h-screen `}>
                <div className="flex flex-col md:flex-row rounded-lg overflow-hidden h:50 lg:h-100 mt-20">

                    <div className="w-full lg:w-[700px] md:w-1/3 flex justify-center items-center p-4">
                        <img src={profileImage[index]} 
                        alt="Profile Image" className="rounded-full lg:h-[400px] lg:w-[400px] w-[200px] h-[200px] object-cover"/>
                    </div>
                                            
                    <div className={`w-full md:w-2/3 p-6 flex flex-col`}>
                        <div>
                            <p className={`m-4 text-center lg:text-2xl text-[17px] ${theme==='white'?"text-gray-600":"text-white"}`}>Hello, I'm</p>
                            <h2 className={`lg:text-4xl font-bold text-center text-[30px] ${theme==='white'?"text-black":"text-white"}`}>Amanuel Tesfatsion</h2>
                            <p className={`text-gray-600 mt-4 text-center lg:text-2xl text-[20px] ${theme==='white'?"text-black":"text-white"}`}>
                                <span className="text-blue-600">Front End Developer</span> with expertise in building responsive and interactive user interfaces. Passionate about creating intuitive user experiences.
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-12 justify-center">
                            <a href={resumeURL}>
                                <button className={`${theme==='white'?"bg-[#797A7E] hover:bg-blue-600":"bg-blue-600 hover:bg-blue-800"} lg:text-[1rem] text-[0.8rem] text-white px-4 py-2 rounded-full `}>Download Resume</button>
                            </a>

                            <Link to="/contact">
                                <button className={`${theme==='white'?"border border-black hover:bg-[#797A7E] hover:text-white hover:border-white`":"bg-white hover:bg-blue-600"} lg:text-[1rem] text-[0.8rem] text-black px-4 py-2 rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white`}>Contact Info</button>
                            </Link>
                        </div>
                        <div className="flex justify-center space-x-7 mt-5">
                            <a href="https://github.com/Amanuel-Naizghi" className="hover:blur-[0.8px] rounded-full">
                                <img className={`w-[50px] h-[50px] ${theme==="black"&&"bg-white"}`} src={theme==='white'?github:github2} alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/amanuel-tesfatsion" className="hover:blur-[0.8px] rounded-full">
                                <img className={`w-[45px] h-[45px] bg-white mt-[4px] rounded-[10px]`} src={theme==='white'?linkedin:linkedin2} alt="linkedin" />
                            </a>
                            <a href="https://x.com/AmanuelNaizghi" className="hover:blur-[0.8px] rounded-full pt-[8px]">
                                <img className={`w-[40px] h-[40px] rounded-[10px] bg-white`} src={x} alt="X" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Experience/>
            <Projects/>
            <About/>
            <ContactMe/>
        </div>
    )
}
