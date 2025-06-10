'use client';
import { useState } from "react";
import {
  FaCalendarAlt,
  FaPhone,
  FaAmbulance,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkedAlt,
} from "react-icons/fa";
export default function KontaktPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      namn: form.namn.value,
      email: form.email.value,
      meddelande: form.meddelande.value,
    };

    const res = await fetch("https://formspree.io/f/manjepzl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsSent(true);
      form.reset();
    } else {
      alert("Ett fel uppstod. Försök igen senare.");
    }
  };
  return (
    <main>
      {/* Hero: Delad skärm */}
      <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
        {/* Vänster sida: text */}
        <div className="bg-blue-800 text-white flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakta oss</h1>
            <p className="text-lg leading-relaxed">
              Här finner du öppettider och kontaktinformation till vår klinik i Storvreta.
              Använd kartan för att hitta kliniken, eller scrolla längre ner där all kontaktinformation är listad.
            </p>
          </div>
        </div>

        {/* Höger sida: bild */}
        <div className="w-full h-full">
          <img
            src="/images/kontakt.jpg"
            alt="Kontakt Storvreta Tandklinik"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <section className="w-full">
        <iframe
          title="Storvreta Tandklinik Karta"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2046.7385801453656!2d17.72520171582701!3d60.01626418194286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e7f9e7c7a4f79%3A0x1f9636cb573f2044!2sSkogsvallsv%C3%A4gen%207%2C%20740%2047%20Storvreta!5e0!3m2!1ssv!2sse!4v1717863781149!5m2!1ssv!2sse"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>
      <section className="py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Öppettider</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex justify-between border-b pb-1">
              <span>Vardagar</span>
              <span>09:00 – 17:00</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span>Telefontider</span>
              <span>08:30 – 16:30</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span>Söndag/Helgdagar</span>
              <span>Stängt</span>
            </li>
            <li className="flex justify-between">
              <span>Övriga tider</span>
              <span>Enligt överenskommelse</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Mejla oss</h2>
          {isSent ? (
            <p className="text-green-600 font-medium text-lg">Meddelandet har skickats! Tack för att du kontaktade oss.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium" htmlFor="namn">Nämn</label>
                <input
                  type="text"
                  name="namn"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">E-post</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="meddelande">Meddelande</label>
                <textarea
                  name="meddelande"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Skicka meddelande
              </button>
            </form>
          )}
        </div>
      </section>
      <section className="py-12 bg-white text-gray-800">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-bold mb-8">Här kan du hitta oss</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center text-sm">
      <a href="https://bokatid.frenda.se/100076" target="_blank" className="flex flex-col items-center hover:text-blue-600 transition">
        <FaCalendarAlt size={32} className="mb-2" />
        Boka online
      </a>
      <a href="tel:018108001" className="flex flex-col items-center hover:text-blue-600 transition">
        <FaPhone size={32} className="mb-2" />
        Ringa oss
      </a>
      <a href="tel:0729293455" className="flex flex-col items-center hover:text-blue-600 transition">
         <FaAmbulance size={32} className="mb-2" />
        Akut telefon
      </a>
      <a href="mailto:storvretatandklinik@gmail.com" className="flex flex-col items-center hover:text-blue-600 transition">
        <FaEnvelope size={32} className="mb-2" />
        Mejla oss
      </a>
      <a href="https://www.facebook.com/storvreta.tandklinik" target="_blank" className="flex flex-col items-center hover:text-blue-600 transition">
         <FaFacebook size={32} className="mb-2" />
        Facebook
      </a>
      <a href="https://www.instagram.com/storvretatandklinik/" target="_blank" className="flex flex-col items-center hover:text-blue-600 transition">
        <FaInstagram size={32} className="mb-2" />
        Instagram
      </a>
      <a href="https://www.google.com/maps/place/Skogsvallsvägen+7,+740+47+Storvreta" target="_blank" className="flex flex-col items-center hover:text-blue-600 transition">
        <FaMapMarkedAlt size={32} className="mb-2" />
        Vägbeskrivning
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
