import React from "react";
import Profile from "../assets/profile.jpg";
import Yasodas from "../assets/Yasodas.jpg";
import Imethma from "../assets/Imethma_Kariyawasam.jpg"
import Owadi from "../assets/Owadi.jpg";
import Nisuni from "../assets/Nisuni.JPG"
import Safni from '../assets/Safni Mariyam-Chairperson.jpg'
import Bavatharani from '../assets/Bavatharani Janahiram _Vice Chairperson.jpg'
import Rozmin from '../assets/Rozmin Zamha - Secretary.jpg'
import Oshini from '../assets/Oshini Wickrama - Tresasurer.jpg'
import Shavidini from '../assets/Shavidini - Design lead.png'
import Dasuni from '../assets/Dr Dasuni Nawinna.jpg'

export default function Team() {
    return (
        <>
            <section class="max-w-screen-2xl px-10 mx-auto mb-20">
                <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">Chapter Advisor<span class="text-black">.</span></h1>
                {/* <p class=" text-gray-600 text-md text-center max-w mb-10"></p> */}
                <div class="mx-auto flex align-middle justify-center">
                    <article class="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <div class="relative w-full flex items-end overflow-hidden rounded-xl">
                            <img src={Dasuni} alt="Hotel Photo" className="w-full " />

                        </div>

                        <div class="mt-1 p-2 md:p-10">
                            <h2 class="text-gray-900 font-semibold text-lg">Ms. Dasuni Nawinna</h2>
                            <p class="text-primary mt-1 text-sm font-semibold ">Associate Dean (Research), Faculty of Computing, SLIIT Assistant Professor, Department of ISE, Faculty of Computing - SLIIT (Sept 2020-Present) Program Coordinator – BSc Hons IT Sp. in Information Systems Engineering (Jan 2019 to present)</p>


                        </div>
                    </article>
                </div>
            </section>
            <section class="max-w-screen-2xl px-10 mx-auto mb-32">


                <h1 class="my-3 text-center font-sans text-4xl font-bold text-primary">Current executive board<span class="text-black">.</span></h1>
                <p class=" text-gray-600 text-md text-center max-w mb-10">The Executive Board of IEEE WIE Affinity Group 2023/24 of SLIIT.</p>

                <div class="mx-auto mb-14 grid max-w-screen-xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="https://www.linkedin.com/in/yashodha-athapattu-883228235/">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Yasodas} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Yashoda Athapattu</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Chairperson</p>
                                {/* <a href="https://www.linkedin.com/in/yashodha-athapattu-883228235/" aria-label="Find us on LinkedIn">
                                    <svg class="h-6 w-6 text-black" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="https://www.linkedin.com/in/imethmakariyawasam">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Imethma} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Imethma Kariyawasam</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Vice Chairperson</p>
                                {/* <a href="https://www.linkedin.com/in/imethmakariyawasam" aria-label="Find us on LinkedIn">
                                    <svg class="h-6 w-6 text-black" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="http://www.linkedin.com/in/owadibandara">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Owadi} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Owadi Bandara</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Secretary</p>
                                {/* <a href="http://www.linkedin.com/in/owadibandara" aria-label="Find us on LinkedIn">
                                    <svg class="h-6 w-6 text-black" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="https://www.linkedin.com/in/nisuni-sineja-184414304">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Nisuni} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Nisuni Sineja</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Vice Secretary</p>
                                {/* <a href="https://www.linkedin.com/in/nisuni-sineja-184414304" aria-label="Find us on LinkedIn">
                                    <svg class="h-6 w-6 text-black" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </a>
                    </article>



                </div>


                <h1 class="my-3 text-center font-sans text-4xl font-bold text-primary">Past executive board<span class="text-black">.</span></h1>
                <p class=" text-gray-600 text-md text-center max-w mb-10">Recognizing the Past Executive Committee Members of IEEE WIE Affinity Group 2022/23  of SLIIT, whose dedication and leadership paved the way for our organization's success.</p>
                <div class="mx-auto  grid w-full grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-5">
                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Safni} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Safni Mariyam</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Bavatharani} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Bavatharani Janahiram</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Vice Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Rozmin} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Rozmin Zamha</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Secretary</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Oshini} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Oshini Wickrama</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Treasurer</p>
                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Shavidini} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Shavidini Ekanayake</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Webmaster</p>


                            </div>
                        </a>
                    </article>


                </div>
            </section>

        </>

    )
}