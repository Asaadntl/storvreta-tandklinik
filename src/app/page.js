"use client";
import Image from "next/image";
import InfoSektion from "../components/InfoSektion";

export default function HomePage() {
  return (
    <main>
      {/* Hero-section */}
      <header className="mt-18 relative w-full bg-black">
        {/* Bildcontainer */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
          <Image
            src="/images/hero.jpg"
            alt="Tandklinik"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Ljuseffekt */}
          <div className="absolute inset-0 bg-white/20" />

          {/* Textinnehåll */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-16">
            <div className="bg-black/60 p-4 md:p-6 rounded-lg text-white max-w-xl text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                Välkommen till Storvreta Tandklinik
              </h1>
              <p className="text-base md:text-lg mt-2 drop-shadow">
                Trygg och professionell tandvård nära dig
              </p>
            </div>
          </div>
        </div>
      </header>

      <InfoSektion />
    </main>
  );
}
