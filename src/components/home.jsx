import {Link} from 'react-router-dom';
import profile1 from '../assets/profile-img1.jpeg';
import profile2 from '../assets/profile-img2.jpeg';
import Header from './header';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { useEffect, useState } from 'react';

export default function Home(){
    const profileImage=[profile1,profile2];
    const [index,setIndex]=useState(0);

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
       <div className="home-page">
            <Header></Header>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col md:flex-row rounded-lg overflow-hidden h:50 lg:h-100 mt-20">

                    <div className="w-full lg:w-[700px] md:w-1/3 flex justify-center items-center p-4">
                        <img src={profileImage[index]} 
                        alt="Profile Image" className="rounded-full lg:h-[350px] lg:w-[350px] w-[150px] h-[150px] object-cover"/>
                    </div>
                                            
                    <div className="w-full md:w-2/3 p-6 flex flex-col">
                        <div>
                            <p className="text-gray-600 m-4 text-center lg:text-2xl text-[17px]">Hello, I'm</p>
                            <h2 className="lg:text-4xl font-bold text-center text-[30px]">Amanuel Tesfatsion</h2>
                            <p className="text-gray-600 mt-4 text-center lg:text-2xl text-[20px]">
                                <span className="text-blue-600">Front End Developer</span> with expertise in building responsive and interactive user interfaces. Passionate about creating intuitive user experiences.
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-12 justify-center">
                            <button className="bg-[#797A7E] lg:text-[1rem] text-[0.8rem] text-white px-4 py-2 rounded-full hover:bg-blue-600">Download Resume</button>
                            <button className="border border-black lg:text-[1rem] text-[0.8rem] text-black px-4 py-2 rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Contact Info</button>
                        </div>
                        <div className="flex justify-center space-x-7 mt-5">
                            <a href="https://github.com/Amanuel-Naizghi" className="hover:blur-[0.8px] rounded-full">
                                <img className="w-[50px] h-[50px]" src={github} alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/amanuel-tesfatsion" className="hover:blur-[0.8px] rounded-full">
                                <img className="w-[57px] h-[57px]" src={linkedin} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
