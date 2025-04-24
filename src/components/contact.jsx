import Header from './header';
import github from '../assets/github.png';
import github2 from '../assets/github2.png';
import linkedin from '../assets/linkedin.png';
import linkedin2 from '../assets/linkedin2.png';
import x from '../assets/x.png';
import x2 from '../assets/x2.png';
import tick from '../assets/icons8-tick.gif';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';


export default function ContactMe() {
    const {theme}=useContext(ThemeContext);

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const [isVisible,setIsVisible]=useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
        'service_d13rhai',
        'template_rb06v9s',
        formData,
        'cS_jDzwuNTCDgoMdz'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send the message. Please try again.');
        });

        // Clear the form
        setFormData({ name: '', email: '', message: '' });
        setIsVisible(true);
        setTimeout(()=>{
            setIsVisible(false);
        },3000);
    };

    return (
        <div className={`${theme==='white'?"bg-white":"bg-black"}`}>
            <Header></Header>
            <div className="min-h-screen p-8 mt-[4rem]">
                <p className={`text-center mb-4 ${theme==="white"?"text-gray-600":"text-white"}`}>
                    This is how you get in contact with me
                </p>
                <h1 className={`text-3xl font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                    Contact Me
                </h1>
                <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-4 justify-center w-full max-w-5xl mx-auto mb-[2rem]">
                    <div className="rounded-[10px] border-2 border-black-700 p-6 flex flex-col lg:w-[300px]">
                        <h2 className={`text-[1.8rem] font-bold text-center mb-8 ${theme==="white"?"text-gray-800":"text-white"}`}>
                            Contact me for Collaboration
                        </h2>
                        <p className={`text-gray-600 mb-[5rem] ${theme==="white"?"text-gray-600":"text-white"}`}>
                            Feel free to reach out to me via any of the platforms below or send me a message directly and start collaborating on something amazing
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/Amanuel-Naizghi" className="hover:blur-[0.8px] rounded-full">
                                <img className={`w-[35px] h-[35px] bg-white rounded-full ${theme==="black"&&"bg-white"}`} src={theme==='white'?github:github2} alt="github"  />
                            </a>
                            <a href="https://www.linkedin.com/in/amanuel-tesfatsion" className="hover:blur-[0.8px] rounded-full">
                                <img className={`w-[40px] h-[40px] bg-white rounded-full ${theme==="black"&&"bg-white"}`} src={theme==='white'?linkedin:linkedin2} alt="linkedin" />
                            </a>
                            <a href="https://x.com/AmanuelNaizghi" className="hover:blur-[0.8px] rounded-full pt-[5px]">
                                <img className={`bg-white  rounded-full w-[35px] h-[35px]`} src={x} alt="X" />
                            </a>
                        </div>
                    </div>
                    <div className="rounded-[10px] border-2 border-black-700 p-6">
                        <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            required
                            />
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            required
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                            placeholder="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                        </form>
                    </div>
                </div>
                {
                    isVisible&&(
                        <div className="flex justify-center mt-[1rem]">
                            <img className="w-[40px]" src={tick} alt="Tick" /> 
                            <p className="mt-[8px] ml-[2px] text-gray-600 text-[1rem]">Message Submitted</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
  }