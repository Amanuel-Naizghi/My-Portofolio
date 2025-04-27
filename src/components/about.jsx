import Header from './header';
import eit from '../assets/eit.jpeg';
import odin from '../assets/odin.jpeg';
import admas from '../assets/admas.jpeg';
import passion from '../assets/passion.png';
import myPhoto from '../assets/my-photo.jpeg';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export default function About() {
    const {theme}=useContext(ThemeContext);

    return (
      <div className={`${theme==='white'?"bg-white":"bg-black"}`}>
             <Header></Header>
             <div className="p-8 pt-5 mt-[4rem] flex flex-col items-center justify-center min-h-screen">
                <p className={`text-center mb-4 ${theme==="white"?"text-gray-600":"text-white"}`}>
                    Welcome to my portfolio!
                </p>        
                <h1 className={`text-3xl font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                    About Me
                </h1>
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[1rem] lg:h-[400px] lg:w-[800px] flex items-center ">
                    <div className="lg:col-span-1 lg:row-span-2">
                        <img
                        src={myPhoto}
                        alt="My Photo"
                        className="w-full lg:h-[350px] h-[370px] w-[300px] object-cover rounded-full shadow-md"
                        />
                    </div>
                    <div className="lg:col-span-1 border-2 border-black-700 flex p-2 lg:h-[270px]  lg:w-[280px] h-[250px] w-[300px] rounded-[10px]">
                        <div className="flex flex-col space-y-2">
                            <h2 className={`text-[1.2rem] font-bold text-center mb-4 ${theme==="white"?"text-gray-800":"text-white"}`}>
                                Education
                            </h2>
                            <div className="flex">
                                <img className="h-[50px] w-[50px]" src={eit} alt="EIT" />
                                <div className="flex flex-col">
                                    <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                        B.Sc Computer Science
                                    </p>
                                    <em className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                        2014-2019
                                    </em>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="h-[50px] w-[50px]" src={admas} alt="Admas" />
                                <div className="flex flex-col">
                                    <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                        Diploma in Accounting
                                    </p>
                                    <em className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                        2020-2022
                                    </em>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="h-[50px] w-[50px]" src={odin} alt="Odin" />
                                <div className="flex flex-col">
                                    <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                        The Odin Projects
                                    </p>
                                    <p className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                        Full Stack Development
                                    </p>
                                    <em className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                        2024-2025
                                    </em>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="col-span-1 p-2 border-2 border-black-700 flex m-3  lg:h-[270px] lg:w-[340px] rounded-[10px]">
                        <div className="flex flex-col space-y-2">
                        
                            <h2 className={`text-[1.2rem] font-bold text-center mb-4 ${theme==="white"?"text-gray-800":"text-white"}`}>
                                My Passion
                            </h2>
                            <p className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                Building innovative projects that solve real-world problems.
                            </p>
                            <p className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                Always eager to learn and grow in the tech field.
                            </p>
                            <p className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                                Creating an honest and strong relationships with teammates and clients.
                            </p>
                        </div>
                    </div>
                    {/* Second row, second column (spans two columns) */}
                    <div className="col-span-2 lg:h-[120px] lg:w-[670px]">
                        <p className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                        Outside of development, I enjoy exploring the outdoors, reading, and connecting with people from different walks of life. My goal is to create meaningful impacts through technology.
                        </p>
                        <em className={`pl-[1rem] ${theme==="white"?"text-gray-600":"text-white"}`}>"Don’t count the days, make the days count." --- Muhammad Ali</em>
                    </div>
                </div>
            </div>
      </div>
     
    );
  }