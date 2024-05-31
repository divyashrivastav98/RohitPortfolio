
import Navbar from "./Navbar"
import React from 'react';

export default function contactUs(){
    return(
        <>
        <Navbar/>
        
        <div className="flex min-h-screen  justify-center  item-center bg-gradient-to-r from-pink-500 to-red-400">
      
                <form className=" border-4 w-[800px] h-[600px] border-black p-6 mt-10 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-center">Contact Me!</h2>
                  <div className="mb-4">
                    <label className="block text-black mb-2">First name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="abc@xyz.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black mb-2">Contact No</label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
       </div>
  

 </>
    )
}
