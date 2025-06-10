import PatientInfoAccordion from '../../components/PatientInfoAccordion';

export default function PatientinformationPage() {
  return (
    <main>
      {/* Hero split screen */}
      <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
        {/* Vänster: Text */}
        <div className="bg-blue-800 text-white flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Patientinformation</h1>
            <p className="text-lg">
              Här kan du läsa om mycket som berör tandvården, exempelvis tandvårdsstödet, olika typer av sjukdomar och besvär m.m.
            </p>
          </div>
        </div>

        {/* Höger: Bild */}
        <div className="w-full h-full">
          <img
            src="/images/Patientinformation.jpg"
            alt="Patientinformation"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Accordion */}
      <PatientInfoAccordion />
    </main>
  );
}
