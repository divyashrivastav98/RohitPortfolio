import Navbar from "./Navbar"
import weatherAPI from '../assets/Projects/Weather API/weatherAPI.png'
import CountryApp from "../assets/Projects/Country App/CountryguideAPP.png"
import Gymweb from "../assets/Projects/Gym website/gymweb.webp"

export default function Project(){
    return(
        <>
        <Navbar/>
        <section id="projects">
            <h1 className="text-white font-extrabold text-4xl items-center flex justify-center mb-10 gap-3">Projects</h1>
            <div className="flex">
                <div className="w-[400px] h-[600px] ml-28  max-h-[600px]  ml-10">
                    <div class="project-container project-card p-8 bg-white rounded-lg shadow-md">
                        <img
                            src={weatherAPI}
                            alt="Weather API"
                            loading="lazy"
                            class="project-pic w-full h-auto rounded-lg"
                        />
                        <h3 class="project-title text-xl font-semibold mt-4">Weather Api</h3>
                            <p class="project-details mt-2 text-gray-700">
                            A weather API app delivers real-time weather updates and forecasts to users through a simple
                            interface. Users input their location or search for a specific area to access information like 
                            current conditions, temperature, humidity, and wind speed. 
                            </p>
                            <a href="https://github.com/DerHarteCoder/weatherAPI" target="_blank" class="project-link mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Check it Out</a>
                        </div>                        
                </div>
                <div className="w-[400px] h-[600px]  max-h-[600px] ml-10">
                        <div class="project-container project-card p-8 bg-white rounded-lg shadow-md">
                            <img
                                src={CountryApp}
                                alt="Country Guide App"
                                loading="lazy"
                                class="project-pic w-full h-auto rounded-lg"
                            />
                            <h3 class="project-title text-xl font-semibold mt-4">Country Guide App</h3>
                                <p class="project-details mt-2 text-gray-700">
                                A country guide app is your passport to global exploration. It offers a snapshot of each country's culture, history, attractions, and practical
                                travel tips. With concise summaries and interactive features, it's the perfect tool for planning your next adventure or satisfying your wanderlust
                                from the comfort of your device.

                                </p>
                                <a href="https://github.com/DerHarteCoder/countryGuide" target="_blank" class="project-link mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Check it Out</a>
                        </div>
                     </div>   
                        <div className="w-[400px] h-[600px] max-h-[600px] ml-10">
                    
                        <div class="project-container project-card p-8 bg-white rounded-lg pt-10 shadow-md">
                            <img
                                src={Gymweb}
                                alt="Gym Website"
                                loading="lazy"
                                class="project-pic w-full h-auto rounded-lg"
                            />
                            <h3 class="project-title text-xl font-semibold mt-4">Gym Website</h3>
                                <p class="project-details mt-2 text-gray-700">
                                Using HTML for structure, CSS for styling, and JavaScript for interactivity, this website can be visually appealing, responsive, and user-friendly. JavaScript can enhance functionality, such
                                as interactive schedules, pop-up modal windows for class registration, or dynamic form validation.
                                </p>
                                <a href="https://github.com/DerHarteCoder/gymWebsite" target="_blank" class="project-link mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Check it Out</a>
                            </div>    
                    </div>
            </div>
                
</section>

        </>
    )
}