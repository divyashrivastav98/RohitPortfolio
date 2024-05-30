
import Navbar from "./Navbar"
import React from 'react';

export default function contactUs(){
    return(
        <>
        <Navbar/>
        <div className="flex min-h-screen bg-gradient-to-r from-pink-500 to-red-400">
      <div className="flex-1 max-w-4xl mx-auto p-2">
        <div className="relative bg-gray-800 rounded-2xl shadow-lg">
          <div className="absolute inset-0 m-2 rounded-2xl shadow-lg"></div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-6">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <div className="text-pink-600 text-3xl font-bold mb-2">
                <span>CONTACT</span>
                <span> US</span>
              </div>
              <div className="text-gray-400 text-xs">CONTACT INFO : +919622922441</div>
            </div>
            <div className="flex-1">
              <form className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <input 
                    className="w-full p-2 bg-transparent border-b border-gray-500 text-gray-200 placeholder-gray-500 focus:border-gray-200 focus:outline-none" 
                  type={Text} 
                    placeholder="NAME" 
                    defaultValue="" 
                  />
                  <input 
                    className="w-full p-2 bg-transparent border-b border-gray-500 text-gray-200 placeholder-gray-500 focus:border-gray-200 focus:outline-none" 
                    type="email" 
                    placeholder="EMAIL" 
                  />
                  <input 
                    className="w-full p-2 bg-transparent border-b border-gray-500 text-gray-200 placeholder-gray-500 focus:border-gray-200 focus:outline-none" 
                    type="tel" 
                    placeholder="CONTACT NO" 
                  />
                  <input 
                    className="w-full p-2 bg-transparent border-b border-gray-500 text-gray-200 placeholder-gray-500 focus:border-gray-200 focus:outline-none" 
                    type="text" 
                    placeholder="MESSAGE" 
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button type="button" className="text-pink-600 hover:text-pink-700">CANCEL</button>
                  <button type="submit" className="text-pink-600 hover:text-pink-700">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 text-pink-300 font-normal text-lg">
          <a href="https://dribbble.com/shots/2666271-Contact" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
            <svg className="w-5 h-5" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
                <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
                <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
              </g>
            </svg>
            <span>Rohit Yadav production</span>
          </a>
        </div>
      </div>
    </div>
  

 </>
    )
}
