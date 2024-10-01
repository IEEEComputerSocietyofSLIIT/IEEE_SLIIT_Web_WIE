import React from "react";
import bg from "../assets/bg2.jpg"

export default function About() {
    return (
        <section class="pb-10 bg-white" id="aboutus">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center space-y-8">
                    <h2 class="text-4xl font-bold text-center text-primary">Who are we?</h2>
                    <p class="text-gray-600 text-md text-center max-w-2xl">  IEEE Women in Engineering (WIE) Affinity Group of SLIIT, a network of members and volunteers dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering and science.</p>
                </div>
            </div>

            <div class="container mx-auto px-4 mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-300 rounded-xl">
                        <h3 class="text-3xl font-bold text-primary">Our Vision</h3>
                        <p class="text-gray-600 text-md text-center">Facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-300 rounded-xl">
                        <h3 class="text-3xl font-bold text-primary">Our Mission</h3>
                        <p class="text-gray-600 text-md text-center">To connect, support, and inspire women and girls worldwide, and facilitate their recruitment and retention in STEM fields, fostering technological innovation and excellence for the benefit of humanity.
                        </p>
                    </div>
                </div>

            </div>
            <div className="my-20 w-full mx-auto">
                <div className="relative grid gap-10 md:px-40 sm:px-32  max-[640px]:px-14 bg-cover filter " style={{ backgroundImage: `url(${bg})` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white text-center py-10">Strategy</h3>
                        <p className="text-center pb-10 text-md text-white">
                            Our Affinity group organizes women empowerment discussions, charities, technical workshops, competitions, collaborations, and many other events to empower women engineers, support and help young undergraduates to explore new technical and social skills ethically by reflecting the goals of our team.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}