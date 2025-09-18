export default function InfoBlocks() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Kontakt */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Kontakta oss</h2>
          <p className="font-bold text-gray-900">Storvreta Tandklinik</p>
          <p className="text-gray-700">Skogsvallsvägen 7, Storvreta</p>
          <p>📞 <a href="tel:018108001" className="text-blue-800 hover:underline">018-10 80 01</a></p>
          <p>📱 <a href="tel:0729293455" className="text-blue-800 hover:underline">072-929 34 55</a></p>
          <p>✉️ <a href="mailto:storvretatandklinik@gmail.com" className="text-blue-800 hover:underline">storvretatandklinik@gmail.com</a></p>
        </div>

        {/* Öppettider */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Öppettider</h2>
          <p className="text-gray-700">Måndag – Torsdag: 09:00 – 17:00</p>
          <p className="text-gray-700">Fredag: Stängt</p>
          <p className="text-gray-700">Lördag: Enligt överenskommelse</p>
          <p className="text-gray-700">Söndag/Helgdagar: Stängt</p>
          <p className="text-gray-700">Övriga tider: Enligt överenskommelse</p>
        </div>

        {/* Länkar */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Välkommen in till oss!</h2>
          <ul className="space-y-1">
            <li><a href="/" className="text-blue-800 hover:underline">Hem</a></li>
            <li><a href="/akut" className="text-blue-800 hover:underline">Akut</a></li>
            <li><a href="/behandlingar" className="text-blue-800 hover:underline">Våra behandlingar</a></li>
            <li><a href="/patientinformation" className="text-blue-800 hover:underline">Patientinformation</a></li>
            <li><a href="/patientfall" className="text-blue-800 hover:underline">Patientfall</a></li>
            <li><a href="/klinik" className="text-blue-800 hover:underline">Om vår klinik</a></li>
            <li><a href="/kontakt" className="text-blue-800 hover:underline">Kontakt</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}
