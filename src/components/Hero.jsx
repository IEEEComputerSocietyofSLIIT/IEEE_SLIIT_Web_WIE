import React from "react";
import hero from "../assets/hero.jpg"

export default function Hero() {
    return(
        

<div >
<main class="">
        <section class="relative bg-gradient-to-br from-purple-950 to-purple-400 text-white overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-70">
                    <img src={hero} alt="Background Image" class="object-cover object-center w-full h-[90vh]" />
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                </div>
           
            
            
            
            <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <div class="w-full md:w-2/3 mb-12 md:mb-0 ">
                        <h1 class="text-5xl text-center md:text-6xl font-bold mb-6 leading-tight">
                        IEEE WIE Student Affinity Group of SLIIT
                        </h1>
                        <p class="text-xl text-center mb-8 text-gray-300">Join the tribe of women who are changing the narrative on technology and empowerment. We welcome and encourage everyone, in all STEM fields to support IEEE WIE mission.</p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-20">
                        <a href="#aboutus" class="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Explore</a>
                        </div>
                    </div>
                    
                    {/* <div class="w-full md:w-1/2 md:pl-12">
                        
                    </div>  */}
                </div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                </svg>
            </div>
        </section>
        </main>
    
</div>

    )}