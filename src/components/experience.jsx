import Header from './header';
import tick from '../assets/tick.png';
import tick2 from '../assets/tick2.png';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Experience(){
    const {theme}=useContext(ThemeContext);

    return(
        <div className={`${theme==='white'?"bg-white":"bg-black"}`}>
            <Header></Header>
            <div className={`p-8 mt-[4rem] flex flex-col items-center min-h-screen justify-center` }>
                <p className={`text-center mb-4 ${theme==="white"?"text-gray-600":"text-white"}`}>
                    Explore My
                </p>        
                <h1 className={`text-3xl font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                    Experience
                </h1>
                <div className="flex-cols lg:flex">
                    <div className="flex flex-col rounded-[10px] border-2 border-black-700 lg:w-[450px] p-3 lg:mr-[1.5rem] ">
                        <h1 className={`text-[1.2rem] font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                            Frontend Development
                        </h1>
                        <div className="grid grid-cols-2 place-items-center gap-7">
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>Html</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>CSS</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>JavaScript</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>React</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>BootStrap</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>Tailwind</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Basic</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col rounded-[10px] border-2 border-black-700 lg:w-[450px] p-3 mt-[2rem] lg:mt-[0rem]">
                        <h1 className={`text-[1.2rem] font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                            Data Base & Other Programming Languages
                        </h1>
                        <div className="grid grid-cols-2 place-items-center gap-7">
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>MySQL</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>Java</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>Payton</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>C#</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={theme==='white'?tick:tick2} alt="Tick" />
                                <p className={`pl-[1rem] ${theme==="white"?"text-black":"text-white"}`}>MangoDB</p>
                                <p className={`col-start-2 pl-[1rem] ${theme==="white"?"text-gray-600 ":"text-gray-500"}`}>Basic</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}