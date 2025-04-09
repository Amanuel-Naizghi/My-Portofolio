import Header from './header';
import tick from '../assets/tick.png';

export default function Experience(){
    return(
        <div className="experience-container">
            <Header></Header>
            <div className="p-8 mt-[4rem] flex flex-col items-center ">
                <p className="text-gray-600 text-center mb-4">
                    Explore My
                </p>        
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Experience
                </h1>
                <div className="flex-cols lg:flex">
                    <div className="flex flex-col rounded-[10px] border-2 border-black-700 lg:w-[450px] p-3 lg:mr-[1.5rem] ">
                        <h1 className="text-[1.2rem] font-bold text-center text-gray-800 mb-8">
                            Frontend Development
                        </h1>
                        <div className="grid grid-cols-2 place-items-center gap-7">
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">Html</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">CSS</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">JavaScript</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">React</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">BootStrap</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">Tailwind</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Basic</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col rounded-[10px] border-2 border-black-700 lg:w-[450px] p-3 mt-[2rem] lg:mt-[0rem]">
                        <h1 className="text-[1.2rem] font-bold text-center text-gray-800 mb-8">
                            Data Base & Other Programming Languages
                        </h1>
                        <div className="grid grid-cols-2 place-items-center gap-7">
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">MySQL</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Advanced</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">Java</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Moderate</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">Payton</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">C#</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Basic</p>
                            </div>
                            <div className="grid grid-cols-[1fr,4fr]">
                                <img src={tick} alt="Tick" />
                                <p className="text-black pl-[1rem]">MangoDB</p>
                                <p className="text-gray-600 col-start-2 pl-[1rem]">Basic</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}