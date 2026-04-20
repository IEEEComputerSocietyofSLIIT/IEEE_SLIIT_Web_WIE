import React from "react";
import Yasodas from "../assets/committee/past-2023-24/Yasodas.jpg";
import Imethma from "../assets/committee/past-2023-24/Imethma_Kariyawasam.jpg";
import Owadi from "../assets/committee/past-2023-24/Owadi.jpg";
import Nisuni from "../assets/committee/past-2023-24/Nisuni.JPG";
import Safni from "../assets/committee/past-2022-23/Safni Mariyam-Chairperson.jpg";
import Bavatharani from "../assets/committee/past-2022-23/Bavatharani Janahiram _Vice Chairperson.jpg";
import Rozmin from "../assets/committee/past-2022-23/Rozmin Zamha - Secretary.jpg";
import Oshini from "../assets/committee/past-2022-23/Oshini Wickrama - Tresasurer.jpg";
import Shavidini from "../assets/committee/past-2022-23/Shavidini - Design lead.png";
import Dasuni from "../assets/committee/advisor/Dr Dasuni Nawinna.jpg";
import Pehansa from "../assets/committee/current-2026-27/Pehansa_Ranasinghe.jpg";
import Bulani from "../assets/committee/current-2026-27/Bulani_Wijesena.jpg";
import Yasasvi from "../assets/committee/current-2026-27/Yasasvi_Ediriweera.jpg";
import Vihangi from "../assets/committee/current-2026-27/Vihangi_Wijesooriya.jpg";
import Rayani from "../assets/committee/current-2026-27/Rayani_Yapa.jpg";
import Methaya from "../assets/committee/current-2026-27/Methaya_Ranasinghe.jpg";
import Kinkini from "../assets/committee/current-2026-27/IMG-20260416-WA0006 - B. Kinkini B.jpg";

export default function Team() {
    const currentExcom = [
        { name: "Pehansa Ranasinghe", role: "Chairperson", image: Pehansa },
        { name: "Bulani Wijesena", role: "Vice Chairperson", image: Bulani, profile: "https://www.linkedin.com/in/bulani-wijesena-7630053b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
        { name: "Yasasvi Ediriweera", role: "Secretary", image: Yasasvi, profile: "https://www.linkedin.com/in/yasasvi-ediriweera-97b0692a4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
        { name: "Vihangi Wijesooriya", role: "Treasurer", image: Vihangi },
        { name: "Rayani Yapa", role: "Editor", image: Rayani, profile: "https://www.linkedin.com/in/rayani-yapa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Methaya Ranasinghe", role: "Assistant Secretary", image: Methaya, profile: "https://www.linkedin.com/in/methaya-r-68b3bb373?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
        { name: "Banchana Kinkini Balasuriya", role: "Assistant Treasurer", image: Kinkini },
    ];

    const pastExcom202324 = [
        { name: "Yashoda Athapattu", role: "Chairperson", image: Yasodas, profile: "https://www.linkedin.com/in/yashodha-athapattu-883228235/" },
        { name: "Imethma Kariyawasam", role: "Vice Chairperson", image: Imethma, profile: "https://www.linkedin.com/in/imethmakariyawasam" },
        { name: "Owadi Bandara", role: "Secretary", image: Owadi, profile: "http://www.linkedin.com/in/owadibandara" },
        { name: "Nisuni Sineja", role: "Vice Secretary", image: Nisuni, profile: "https://www.linkedin.com/in/nisuni-sineja-184414304" },
    ];

    const pastExcom202223 = [
        { name: "Safni Mariyam", role: "Chairperson", image: Safni },
        { name: "Bavatharani Janahiram", role: "Vice Chairperson", image: Bavatharani },
        { name: "Rozmin Zamha", role: "Secretary", image: Rozmin },
        { name: "Oshini Wickrama", role: "Treasurer", image: Oshini },
        { name: "Shavidini Ekanayake", role: "Webmaster", image: Shavidini },
    ];

    return (
        <>
            <section className="max-w-screen-2xl px-10 mx-auto mb-20">
                <h1 className="mb-8 text-center font-sans text-4xl font-bold text-primary">Chapter Advisor<span className="text-black">.</span></h1>
                <div className="mx-auto flex align-middle justify-center">
                    <article className="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <div className="relative w-full flex items-end overflow-hidden rounded-xl">
                            <img src={Dasuni} alt="Ms. Dasuni Nawinna" className="w-full" />
                        </div>

                        <div className="mt-1 p-2 md:p-10">
                            <h2 className="text-gray-900 font-semibold text-lg">Ms. Dasuni Nawinna</h2>
                            <p className="text-primary mt-1 text-sm font-semibold ">Associate Dean (Research), Faculty of Computing, SLIIT Assistant Professor, Department of ISE, Faculty of Computing - SLIIT (Sept 2020-Present) Program Coordinator - BSc Hons IT Sp. in Information Systems Engineering (Jan 2019 to present)</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="max-w-screen-2xl px-10 mx-auto mb-32">
                <h1 className="my-3 text-center font-sans text-4xl font-bold text-primary">Current executive board<span className="text-black">.</span></h1>
                <p className=" text-gray-600 text-md text-center max-w mb-10">The Executive Board of IEEE WIE Affinity Group 2026/27 of SLIIT.</p>

                <div className="mx-auto mb-14 grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
                    {currentExcom.map((member, index) => (
                        <article
                            key={member.name}
                            className={`rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300 lg:col-span-2 ${
                                currentExcom.length === 7 && index === 4
                                    ? "lg:col-start-2"
                                    : ""
                            }`}
                        >
                            {member.profile ? (
                                <a href={member.profile} target="_blank" rel="noopener noreferrer">
                                    <div className="relative flex items-end overflow-hidden rounded-xl">
                                        <img src={member.image} alt={member.name} />
                                    </div>

                                    <div className="mt-1 p-2">
                                        <h2 className="text-gray-900 font-semibold text-lg">{member.name}</h2>
                                        <p className="text-primary mt-1 text-md font-semibold ">{member.role}</p>
                                    </div>
                                </a>
                            ) : (
                                <div>
                                    <div className="relative flex items-end overflow-hidden rounded-xl">
                                        <img src={member.image} alt={member.name} />
                                    </div>

                                    <div className="mt-1 p-2">
                                        <h2 className="text-gray-900 font-semibold text-lg">{member.name}</h2>
                                        <p className="text-primary mt-1 text-md font-semibold ">{member.role}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                <h1 className="my-3 text-center font-sans text-4xl font-bold text-primary">Past executive board<span className="text-black">.</span></h1>
                <p className=" text-gray-600 text-md text-center max-w mb-10">Recognizing the Past Executive Committee Members of IEEE WIE Affinity Group 2023/24 of SLIIT.</p>

                <div className="mx-auto mb-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {pastExcom202324.map((member) => (
                        <article key={member.name} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                            <a href={member.profile || "#"}>
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={member.image} alt={member.name} />
                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-gray-900 font-semibold text-lg">{member.name}</h2>
                                    <p className="text-primary mt-1 text-md font-semibold ">{member.role}</p>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>

                <h1 className="my-3 text-center font-sans text-4xl font-bold text-primary">Past executive board<span className="text-black">.</span></h1>
                <p className=" text-gray-600 text-md text-center max-w mb-10">Recognizing the Past Executive Committee Members of IEEE WIE Affinity Group 2022/23 of SLIIT, whose dedication and leadership paved the way for our organization's success.</p>

                <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {pastExcom202223.map((member) => (
                        <article key={member.name} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                            <div>
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={member.image} alt={member.name} />
                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-gray-900 font-semibold text-lg">{member.name}</h2>
                                    <p className="text-primary mt-1 text-md font-semibold ">{member.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
