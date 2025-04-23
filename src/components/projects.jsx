import shopCart from '../assets/shop-cart2.jpg';
import resumeBuilder from '../assets/resume-builder.jpg';
import weather from '../assets/weather.jpg';
import todoList from '../assets/todo-list.jpg';
import ticTack from '../assets/tic-tac.jpg';
import memoryGame from '../assets/memory-game.jpg';
import bookStore from '../assets/book-store.jpg';
import calculator from '../assets/calculator.jpg';
import Header from './header';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export default function Projects(){
    const {theme}=useContext(ThemeContext);

    return(
        <div className="project-page">
            <Header></Header>
            <div className={`flex flex-col items-center p-4 mt-20 bg-${theme}`}>
                <p className="text-center text-gray-600 mb-4">Browse through my recent projects</p>
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={shopCart} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Shop Cart</h2>
                        <p className="text-sm text-gray-600 mt-2">An amazing website for shopping items online with a nice looking UI</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://shopping-cart-sqlm-git-main-amanuel-naizghis-projects.vercel.app/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Shopping-Cart">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={resumeBuilder} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Resume Builder</h2>
                        <p className="text-sm text-gray-600 mt-2">Excellent tool for generating your resume</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://react-cv-7g6v.vercel.app/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/React-CV">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={weather} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Weather App</h2>
                        <p className="text-sm text-gray-600 mt-2">Real time weather updates and forecast for any locations</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://amanuel-naizghi.github.io/Weather-App/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Weather-App">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={todoList} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Todo List</h2>
                        <p className="text-sm text-gray-600 mt-2">Stay organized by managing tasks and priorities</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://amanuel-naizghi.github.io/Todo-List/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Todo-List">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={ticTack} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Tic Tack Toe</h2>
                        <p className="text-sm text-gray-600 mt-2">Classic and fun two-player strategy game</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://amanuel-naizghi.github.io/Tic-Tac-Toe/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Tic-Tac-Toe">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={memoryGame} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Memory Game</h2>
                        <p className="text-sm text-gray-600 mt-2">A game that challenges the mind in recalling images </p>
                        <div className="flex justify-between mt-4">
                            <a href="https://memory-card-git-main-amanuel-naizghis-projects.vercel.app/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Memory-Card">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={bookStore} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Book Store</h2>
                        <p className="text-sm text-gray-600 mt-2">Stores books that you have read before or planning to read</p>
                        <div className="flex justify-between mt-4">
                            <a href="https://amanuel-naizghi.github.io/book-store/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/book-store">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-4">
                        <img src={calculator} alt="Project Image" className="w-full h-40 object-cover rounded-t-lg"/>
                        <h2 className="text-lg font-semibold mt-4">Calculator</h2>
                        <p className="text-sm text-gray-600 mt-2">Numbers are fun, get a real time calculator </p>
                        <div className="flex justify-between mt-4">
                            <a href="https://amanuel-naizghi.github.io/Calculator/">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Live Demo</button>
                            </a>
                            <a href="https://github.com/Amanuel-Naizghi/Calculator">
                                <button className="px-4 py-2 bg-white border border-[#D6E6F2] rounded-full hover:bg-[#797A7E] hover:text-white hover:border-white">Github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}