import { FaPhone, FaTooth, FaInfo, FaProcedures, FaRegHospital } from 'react-icons/fa';
import { MdMedicalServices } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

export default function InfoSektion() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {/* Akut */}
      <div className="bg-red-600 text-white text-center flex flex-col items-center justify-center p-6 space-y-4">
        <FaRegHospital className="text-5xl" />
        <div>
          <h3 className="text-xl font-bold">Akut</h3>
          <p>Behöver du boka tid för akut tandvård?</p>
        </div>
        <a href="/akut" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-red-600 transition">
          Akut
        </a>
      </div>

      {/* Behandlingar */}
      <div className="bg-purple-700 text-white text-center flex flex-col items-center justify-center p-6 space-y-4">
        <FaTooth className="text-5xl" />
        <div>
          <h3 className="text-xl font-bold">Våra behandlingar</h3>
          <p>Vill du veta mer om våra behandlingar?</p>
        </div>
        <a href="/behandlingar" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-purple-700 transition">
          Våra behandlingar
        </a>
      </div>

      {/* Patientinformation */}
      <div className="bg-sky-400 text-white text-center flex flex-col items-center justify-center p-6 space-y-4">
        <BsInfoCircle className="text-5xl" />
        <div>
          <h3 className="text-xl font-bold">Patientinformation</h3>
          <p>Här kan du läsa om mycket som berör tandvården.</p>
        </div>
        <a href="/patientinformation" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-sky-600 transition">
          Patientinformation
        </a>
      </div>

      {/* Patientfall */}
      <div className="bg-sky-300 text-white text-center flex flex-col items-center justify-center p-6 space-y-4">
        <MdMedicalServices className="text-5xl" />
        <div>
          <h3 className="text-xl font-bold">Patientfall</h3>
          <p>Här kan du se några av våra patientfall.</p>
        </div>
        <a href="/patientfall" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-sky-600 transition">
          Patientfall
        </a>
      </div>

      {/* Boka tid */}
      <div className="bg-sky-200 text-white text-center flex flex-col items-center justify-center p-6 space-y-4">
        <FaPhone className="text-5xl" />
        <div>
          <h3 className="text-xl font-bold">Boka tid</h3>
          <p>Här kan du kolla lediga tider samt boka tid online.</p>
        </div>
        <a href="/boka" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-sky-700 transition">
          Boka tid
        </a>
      </div>
    </section>
  );
}
