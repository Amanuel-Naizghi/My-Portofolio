import Header from './header';
import education from '../assets/education.png';
import passion from '../assets/passion.png';
import myPhoto from '../assets/my-photo.jpeg';

export default function About() {
    return (
      <div className="about-me-container">
             <Header></Header>
             <div className="p-8 mt-[4rem] flex flex-col items-center justify-center">
                <p className="text-gray-600 text-center mb-4">
                    Welcome to my portfolio!
                </p>        
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
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
                    <div className="lg:col-span-1 bg-gray-100 flex justify-center items-center lg:h-[250px]  lg:w-full h-[250px] w-[300px] rounded-[10px]">
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 text-4xl mb-2">
                                <img className="h-[70px]" src={education} alt="Education" />
                            </div>
                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-2">
                                Education
                            </h2>
                            <p className="text-gray-600 text-[1rem] mb-2">
                                B.Sc Bachelors Degree
                            </p>
                            <p className="text-gray-600 text-[1rem]">
                                Computer Science
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 bg-gray-100 flex justify-center items-center lg:h-[250px] lg:w-[380px] rounded-[10px]">
                        <div className="flex flex-col p-[1rem]">
                            <div className="text-green-500 text-4xl mb-2 flex justify-center">
                                <img src={passion} alt="Passion" />
                            </div>
                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-2 flex justify-center">
                                My Passion
                            </h2>
                            <p className="text-gray-600 text-[1rem] mb-2">
                                Building innovative projects that solve real-world problems
                            </p>
                            <p className="text-gray-600 text-[1rem]">
                                Always eager to learn and grow in the tech field.
                            </p>
                        </div>
                    </div>
            
                    {/* Second row, second column (spans two columns) */}
                    <div className="col-span-2 lg:h-[120px] lg:w-[670px]">
                        <p className="text-gray-600 text-[1.1rem] mb-[1rem]">
                        Outside of development, I enjoy exploring the outdoors, reading, and connecting with people from different walks of life. My goal is to create meaningful impacts through technology.
                        </p>
                        <em className="text-gray-600 text-[1.1rem]">"Don’t count the days, make the days count." --- Muhammad Ali</em>
                    </div>
                </div>
            </div>
      </div>
     
    );
  }