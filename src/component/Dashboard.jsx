
import DP from '../assets/logos/DP.jpg'
import JS from '../assets/logos/JS.png'
import CSS from '../assets/logos/CSS.png'
import REACT from '../assets/logos/REACT.png'
import HTML from '../assets/logos/HTML.png'
import TW from '../assets/logos/TW.png'
import Navbar from "./Navbar"
import CV from "../assets/cv.pdf"

export default function Dashboard(){
    return(
        
        <div>
            <Navbar/>

            <h1 className='text-white text-center transition-all font-extrabold text-4xl italic'>Hi I am Rohit and I am a Frontend Developer </h1>
            <div className="border-2 border-white text-white h-60 m-20 flex justify-center items-center gap-4">
                <img className="rounded-full h-[230px]" src={DP} alt="ppic"/>
                    <div className='flex flex-col gap-y-3 items-center'>                        
                        <p className='font-bold'>Results-driven React Developer with a strong foundation in front-end development and a passion for creating 
                            engaging and responsive user interfaces. Proficient in leveraging React.js, Redux, and other modern web 
                            technologies to build scalable and efficient applications. Collaborated in Agile development teams using Scrum 
                            methodologies to deliver high-quality software solutions.
                        </p>
                        <div className='flex'>
                          <a  className='bg-white flex text-black text-bold rounded-3xl  p-4 px-35 absolute border-2 border-rose-500 hover:bg-orange-300' href='cv.pdf' download={CV}>Download CV</a>
                        </div>
                    </div>
            </div>
           
            <div className='flex gap-4 flex-col'>
                <h2 className='text-center text-white font-extrabold text-2xl'>Tech Stacks</h2>
                        <div className='bg-black w-full  flex content-evenly'>
                            <div className='text-center text-white font-extrabold'>
                                <img src={REACT} alt='react'/>
                                <h2>React</h2>
                                </div>
                                <div className='text-center text-white font-extrabold'>
                                <img src={JS} alt='javascript'/>
                                <h2>Javascript</h2>
                                </div>
                                <div className='text-center text-white font-extrabold'>
                                <img src={TW} alt='tailwind'/>
                                <h2>Tailwind</h2>
                                </div>
                                <div className='text-center text-white font-extrabold'>
                                <img src={HTML} alt='html'/>
                                <h2>HTML</h2>
                                </div>
                                <div className='text-center text-white font-extrabold'>
                                <img src={CSS} alt='css'/>
                                <h2>CSS</h2>
                            </div>
                         </div>
                       </div>
             </div>

    )
}