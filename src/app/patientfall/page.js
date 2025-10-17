"use client";
import { useState } from "react";
import Image from "next/image";

export default function PatientfallPage() {
  const [leftImage, setLeftImage] = useState("/images/kronorv1.jpeg");
  const [rightImage, setRightImage] = useState("/images/kronorh1.jpeg");

  return (
    <main>
      {/* Hero / Introdelad skärm */}
      <header className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Vänster: text med blå bakgrund */}
        <div className="bg-blue-800 text-white flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Patientfall</h1>
            <p className="text-lg">
              Här kan du se några av våra patientfall, läsa mer och kontrollera
              resultatet efter behandlingen.
            </p>
          </div>
        </div>

        {/* Höger: bild */}
        <div className="w-full h-full">
          <Image
            src="/images/Patientfall.jpg"
            alt="Patientfall"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </header>

      {/* Estetiska lagningar */}
      <section className="py-12 bg-white px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Estetiska lagningar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <Image
              src="/images/estetikf.jpeg"
              alt="Före behandling"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Estetik behandling före
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/images/estetike.jpeg"
              alt="Efter behandling"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Estetik behandling efter
            </p>
          </div>
        </div>
      </section>

      {/* Implantat 14,15 */}
      <section className="py-12 bg-gray-50 px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Implantat 14,15
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <Image
              src="/images/Implantatv.jpeg"
              alt="Implantat regio 14 15"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Implantat behandling överkäken regio 14 15 – Straumann implantat
              system
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Implantath.jpeg"
              alt="Implantat avtryck"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Implantat behandling avtryckstagning
            </p>
          </div>
        </div>
      </section>

      {/* Estetiska lagningar 2 */}
      <section className="py-12 bg-white px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Estetiska lagningar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <Image
              src="/images/Estetiskaf2.jpeg"
              alt="Efter behandling – tandborstningsskador"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Estetiska lagningar tandborstningsskador överkäken efter
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Estetiskae2.jpeg"
              alt="Före behandling – tandborstningsskador"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Tandborstningsskador överkäken före
            </p>
          </div>
        </div>
      </section>

      {/* Implantat fronten */}
      <section className="py-12 bg-gray-50 px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Implantat 3 tänder i fronten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <Image
              src="/images/Implantatv2.jpeg"
              alt="Implantat behandling fronttänder"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Implantat behandling fronttänder – Straumann implantat system
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/images/Implantath2.jpeg"
              alt="Implantat behandling fronttänder"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p className="mt-2 text-sm text-gray-700">
              Implantat behandling fronttänder – Straumann implantat system
            </p>
          </div>
        </div>
      </section>

      {/* Estetiska kronor i fronten – zirkonium */}
      <section className="py-12 bg-white px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Estetiska kronor i fronten överkäken zirkonium kronor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Vänster kolumn (stor bild som byts via state) */}
          <div className="flex flex-col items-center">
            <Image
              src={leftImage}
              alt="Estetik vänster"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex gap-4 mt-4">
              <Image
                src="/images/kronorv1.jpeg"
                alt="Thumbnail 1"
                width={80}
                height={80}
                onClick={() => setLeftImage("/images/kronorv1.jpeg")}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  leftImage === "/images/kronorv1.jpeg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
              <Image
                src="/images/kronorv2.jpeg"
                alt="Thumbnail 2"
                width={80}
                height={80}
                onClick={() => setLeftImage("/images/kronorv2.jpeg")}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  leftImage === "/images/kronorv2.jpeg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </div>
          </div>

          {/* Höger kolumn (stor bild som byts via state) */}
          <div className="flex flex-col items-center">
            <Image
              src={rightImage}
              alt="Estetik höger"
              width={1200}
              height={800}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex gap-4 mt-4">
              <Image
                src="/images/kronorh1.jpeg"
                alt="Thumbnail 3"
                width={80}
                height={80}
                onClick={() => setRightImage("/images/kronorh1.jpeg")}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  rightImage === "/images/kronorh1.jpeg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
              <Image
                src="/images/kronorh2.jpeg"
                alt="Thumbnail 4"
                width={80}
                height={80}
                onClick={() => setRightImage("/images/kronorh2.jpeg")}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  rightImage === "/images/kronorh2.jpeg"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zirconium bro – vänster sida */}
      <section className="py-12 bg-gray-50 px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Zirconium bro vänster sidan överkäke och underkäke
        </h2>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <Image
            src="/images/zirconiumbro.jpg"
            alt="Zirconium bro vänster sidan överkäke och underkäke"
            width={1200}
            height={800}
            className="w-full h-auto rounded shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <p className="mt-4 text-sm text-gray-700 text-center">
            Före och efter behandling med zirconium bro i vänster sidan av
            överkäke och underkäke.
          </p>
        </div>
      </section>
    </main>
  );
}
