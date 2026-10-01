"use client";
import Image from "next/image";

export default function OmKlinikPage() {
  return (
    <main>
      {/* Hero Sektion: Delad skärm */}
      <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
        <div className="bg-blue-800 text-white flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Storvreta Tandklinik
            </h1>
            <p className="text-lg leading-relaxed">
              Vi har etablerat vår klinik i Storvreta som erbjuder högsta
              kvalitet av tandvårdsbehandling. <br /><br />
              Vi har byggt vår klinik med de modernaste utrustningar. Du som
              patient ligger i fokus i vår klinik. <br /><br />
              Ni är hjärtligt välkomna till oss på Storvreta Tandklinik.
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <Image
            src="/images/klinik.jpg"
            alt="Vår klinik"
            width={1600}
            height={1067}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </header>

      {/* Personal */}
      <section className="py-16 bg-gray-50 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Möt vår personal
        </h2>

        {/* Jawad */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8 bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/jawad.jpg"
            alt="Jawad Essa"
            width={400}
            height={400}
            className="w-64 h-64 rounded-full object-cover shadow-md"
            sizes="(max-width: 768px) 200px, 300px"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Jawad Essa</h3>
            <p className="text-sm text-gray-600 mb-4">Legitimerad tandläkare</p>
            <p className="text-gray-700 leading-relaxed">
              Hej, <br />
              Jag heter Jawad Essa och är legitimerad tandläkare från Umeå
              universitet. Jag har flera års erfarenhet i allmän tandvård samt
              vidareutbildat mig inom kirurgi och implantat där jag erhåller
              masterutbildning från Danube Private University i Österrike. Vi
              jobbar mest med STRAUMANN implantsystem, som är ett av de bästa i
              världen.
              <br /><br />
              Jag är i grunden konstnär vilket har avspeglat sig i mitt yrkesliv
              med väldigt fina resultat. Jag tycker att konsten och
              tandläkaryrket hör ihop. Estetiken ligger i fokus i mitt yrke för
              att åstadkomma ett fint resultat.
              <br /><br />
              Med vänliga hälsningar, <br />
              <strong>Tandläkaren Jawad Essa</strong>
            </p>
          </div>
        </div>

        {/* Sandra */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-0 bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/sandra.jpg"
            alt="Sandra"
            width={300}
            height={300}
            className="w-48 h-48 rounded-full object-cover shadow-md"
            sizes="(max-width: 768px) 150px, 200px"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sandra</h3>
            <p className="text-gray-700 leading-relaxed">
              Sandra heter jag, 33 år gammal och är examinerad tandsköterska
              från Folkuniversitet i Uppsala. Jag som person är noggrann,
              trevlig, väldigt positiv, ambitiös och brinner för mitt yrke. För
              mig är det viktigt att våra patienter känner sig trygga. Jag ser
              fram emot att få träffa dig på kliniken!
            </p>
          </div>
        </div>

      </section>

      {/* Maryam */}
      <section className="py-16 bg-white px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Verksamhetschef
        </h2>

        <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/maryam.jpg"
            alt="Maryam, verksamhetschef och ägare"
            width={400}
            height={400}
            className="w-64 h-64 rounded-full object-cover shadow-md"
            sizes="(max-width: 768px) 200px, 300px"
          />
          <div className="text-gray-700 leading-relaxed space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Vår nya verksamhetschef och ägare hälsar er välkommen!
            </h3>
            <p>
              Vi har glädjen att presentera vår nya verksamhetschef Maryam! Med en
              unik dubbelkompetens som både legitimerad tandläkare och legitimerad
              psykolog (med specialistkompetens inom arbets- och
              organisationsutveckling), tar Maryam över rodret för att driva kliniken
              framåt med fokus på högsta kvalitet och ett fantastiskt
              patientomhändertagande.
            </p>
            <p>
              Maryam tog sin tandläkarexamen vid Karolinska Institutet och har varit
              verksam tandläkare sedan 2006. Under åren har hon samlat på sig en bred
              och djup erfarenhet från Folktandvården, sjukhustandvården och stora
              privata tandvårdskedjor runt om i Norden. Med sin unika kombination av
              odontologisk och psykologisk expertis har Maryam lång erfarenhet av att
              behandla patienter med tandvårdsrädsla, vilket skapar en trygg och lugn
              miljö för alla.
            </p>
            <p>
              Genom åren har Maryam framgångsrikt kombinerat sitt kliniska arbete med
              ett starkt ledarskap. Hon har en gedigen ledarbakgrund inom region,
              kommun, stat och stora privata vårdverksamheter, och har haft roller som
              verksamhetschef, klinikchef, handledare, psykolog och tandläkare. Kliniskt
              är Maryam dessutom särskilt nischad inom kirurgi och protetik.
            </p>
            <blockquote className="border-l-4 border-blue-700 pl-4 italic text-gray-600">
              ”Tillsammans med mitt fantastiska team ser jag oerhört mycket fram emot
              att driva kliniken vidare. Vi hälsar både nya och gamla patienter varmt
              välkomna till oss. Håll gärna utkik framöver då vi regelbundet kommer att
              dela med oss av fina erbjudanden inom både traditionell tandvård och våra
              estetiska behandlingar.”
              <footer className="mt-2 font-semibold not-italic">Maryam, verksamhetschef</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
