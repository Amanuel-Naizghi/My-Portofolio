import Header from './header';
import education from '../assets/education.png';
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
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:h-[400px] lg:w-[800px] flex items-center">
                    <div className="lg:col-span-1 lg:row-span-2">
                        <img
                        src={myPhoto}
                        alt="My Photo"
                        className="w-full lg:h-[350px] h-[370px] w-[300px] object-cover rounded-full shadow-md"
                        />
                    </div>
                    <div className="lg:col-span-1 border-2 border-black-700 flex justify-center items-center lg:h-[250px]  lg:w-full h-[250px] w-[300px] rounded-[10px]">
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 text-4xl mb-2">
                                <img className="h-[70px]" src={education} alt="Education" />
                            </div>
                            <h2 className={`text-[1.2rem] font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                                Education
                            </h2>
                            <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                B.Sc Bachelors Degree
                            </p>
                            <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                Computer Science 2014-2019
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 border-2 border-black-700 flex justify-center items-center lg:h-[250px] lg:w-[380px] rounded-[10px]">
                        <div className="flex flex-col p-[1rem]">
                            <div className="text-green-500 text-4xl mb-2 flex justify-center">
                                <img src={passion} alt="Passion" />
                            </div>
                            <h2 className={`text-[1.2rem] font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                                My Passion
                            </h2>
                            <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                Building innovative projects that solve real-world problems
                            </p>
                            <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                                Always eager to learn and grow in the tech field.
                            </p>
                        </div>
                    </div>
            
                    {/* Second row, second column (spans two columns) */}
                    <div className="col-span-2 lg:h-[120px] lg:w-[670px]">
                        <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>
                        Outside of development, I enjoy exploring the outdoors, reading, and connecting with people from different walks of life. My goal is to create meaningful impacts through technology.
                        </p>
                        <em className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>"Don’t count the days, make the days count." --- Muhammad Ali</em>
                    </div>
                </div>
            </div>
      </div>
     
    );
  }