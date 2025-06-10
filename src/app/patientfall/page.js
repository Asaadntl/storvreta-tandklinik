'use client';
import { useState } from "react";

export default function PatientfallPage() {
    const [leftImage, setLeftImage] = useState("/images/kronorv1.jpeg");
    const [rightImage, setRightImage] = useState("/images/kronorh1.jpeg");
    return (
        <main>
            {/* Hero / Introdelad skärm */}
            <header className="mt-18 grid grid-cols-1 md:grid-cols-2 h-[500px]">
                {/* Vänster: text med blå bakgrund */}
                <div className="bg-blue-800 text-white flex items-center justify-center p-8">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Patientfall</h1>
                        <p className="text-lg">
                            Här kan du se några av våra patientfall, läsa mer och kontrollera resultatet efter behandlingen.
                        </p>
                    </div>
                </div>

                {/* Höger: bild */}
                <div className="w-full h-full">
                    <img
                        src="/images/patientfall.jpg"
                        alt="Patientfall"
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>
            <section className="py-12 bg-white px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Estetiska lagningar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Före-bild */}
                    <div className="text-center">
                        <img
                            src="/images/estetikf.jpeg" // byt till rätt bildnamn om du har
                            alt="Före behandling"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">Estetik behandling före</p>
                    </div>

                    {/* Efter-bild */}
                    <div className="text-center">
                        <img
                            src="/images/estetike.jpeg" // byt till rätt bildnamn om du har
                            alt="Efter behandling"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">Estetik behandling efter</p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50 px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Implantat 14,15
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Implantat före/operation */}
                    <div className="text-center">
                        <img
                            src="/images/Implantatv.jpeg" // byt till rätt bildnamn
                            alt="Implantat regio 14 15"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">
                            Implantat behandling överkäken regio 14 15 – Straumann implantat system
                        </p>
                    </div>

                    {/* Avtryckstagning */}
                    <div className="text-center">
                        <img
                            src="/images/Implantath.jpeg" // byt till rätt bildnamn
                            alt="Implantat avtryck"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">Implantat behandling avtryckstagning</p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Estetiska lagningar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Efter-bild först */}
                    <div className="text-center">
                        <img
                            src="/images/Estetiskaf2.jpeg" // ersätt med korrekt filnamn
                            alt="Efter behandling – tandborstningsskador"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">
                            Estetiska lagningar tandborstningsskador överkäken efter
                        </p>
                    </div>

                    {/* Före-bild */}
                    <div className="text-center">
                        <img
                            src="/images/Estetiskae2.jpeg" // ersätt med korrekt filnamn
                            alt="Före behandling – tandborstningsskador"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">Tandborstningsskador överkäken före</p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50 px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Implantat 3 tänder i fronten
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Vänster bild */}
                    <div className="text-center">
                        <img
                            src="/images/Implantatv2.jpeg" // byt till korrekt filnamn
                            alt="Implantat behandling fronttänder"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">
                            Implantat behandling fronttänder – Straumann implantat system
                        </p>
                    </div>

                    {/* Höger bild */}
                    <div className="text-center">
                        <img
                            src="/images/Implantath2.jpeg" // byt till korrekt filnamn
                            alt="Implantat behandling fronttänder"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <p className="mt-2 text-sm text-gray-700">
                            Implantat behandling fronttänder – Straumann implantat system
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white px-4 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Estetiska kronor i fronten överkäken zirkonium kronor
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Vänster kolumn */}
                    <div className="flex flex-col items-center">
                        <img
                            src={leftImage}
                            alt="Estetik vänster"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <div className="flex gap-4 mt-4">
                            <img
                                src="/images/kronorv1.jpeg"
                                alt="Thumbnail 1"
                                onClick={() => setLeftImage("/images/kronorv1.jpeg")}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${leftImage === "/images/kronorv1.jpeg" ? "border-blue-500" : "border-transparent"}`}
                            />
                            <img
                                src="/images/kronorv2.jpeg"
                                alt="Thumbnail 2"
                                onClick={() => setLeftImage("/images/kronorv2.jpeg")}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${leftImage === "/images/kronorv2.jpeg" ? "border-blue-500" : "border-transparent"}`}
                            />
                        </div>
                    </div>

                    {/* Höger kolumn */}
                    <div className="flex flex-col items-center">
                        <img
                            src={rightImage}
                            alt="Estetik höger"
                            className="w-full h-auto rounded shadow-md object-cover"
                        />
                        <div className="flex gap-4 mt-4">
                            <img
                                src="/images/kronorh1.jpeg"
                                alt="Thumbnail 3"
                                onClick={() => setRightImage("/images/kronorh1.jpeg")}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${rightImage === "/images/kronorh1.jpeg" ? "border-blue-500" : "border-transparent"}`}
                            />
                            <img
                                src="/images/kronorh2.jpeg"
                                alt="Thumbnail 4"
                                onClick={() => setRightImage("/images/kronorh2.jpeg")}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${rightImage === "/images/kronorh2.jpeg" ? "border-blue-500" : "border-transparent"}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
