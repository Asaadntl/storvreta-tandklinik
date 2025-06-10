import BehandlingsLista from '../../components/BehandlingsLista';

export default function BehandlingarPage() {
  return (
    <main>
      {/* Hero split screen */}
      <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
        {/* Vänster: Text */}
        <div className="bg-purple-800 text-white flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Våra behandlingar</h1>
            <p className="text-lg">
              Storvreta Tandklinik är inriktade på traditionell tandvård, estetisk tandvård samt olika former av specialisttandvård. Här erbjuds du som patient tandvård med hög kvalitet och ditt välbefinnande står alltid i fokus. Det är möjligt tack vare erfarna och högt kompetenta tandläkare. Här nedan kan du läsa mer om den tandvård vi erbjuder och våra behandlingsmetoder.
            </p>
          </div>
        </div>

        {/* Höger: Bild */}
        <div className="w-full h-full">
          <img
            src="/images/behandlingar.jpg"
            alt="Tandbehandling"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
<BehandlingsLista />
    </main>
  );
}
