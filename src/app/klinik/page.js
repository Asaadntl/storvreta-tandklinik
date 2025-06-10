export default function OmKlinikPage() {
    return (
        <main>
            {/* Hero Sektion: Delad skärm */}
            <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
                {/* Vänster sida: Blå bakgrund med text */}
                <div className="bg-blue-800 text-white flex items-center justify-center p-8">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Storvreta Tandklinik</h1>
                        <p className="text-lg leading-relaxed">
                            Vi har etablerat vår klinik i Storvreta som erbjuder högsta kvalitet av tandvårdsbehandling. <br /><br />
                            Vi har byggt vår klinik med de modernaste utrustningar. Du som patient ligger i fokus i vår klinik. <br /><br />
                            Ni är hjärtligt välkomna till oss på Storvreta Tandklinik.
                        </p>
                    </div>
                </div>

                {/* Höger sida: Bild */}
                <div className="w-full h-full">
                    <img
                        src="/images/klinik.jpg"
                        alt="Vår klinik"
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>
            <section className="py-16 bg-gray-50 px-4 md:px-12">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Möt vår personal</h2>

                {/* Sandra */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white p-6 rounded-lg shadow-md">
                    <img
                        src="/images/sandra.jpg"
                        alt="Sandra"
                        className="w-48 h-48 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sandra</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Sandra heter jag, 33 år gammal och är examinerad tandsköterska från Folkuniversitet i Uppsala.
                            Jag som person är noggrann, trevlig, väldigt positiv, ambitiös och brinner för mitt yrke.
                            För mig är det viktigt att våra patienter känner sig trygga.
                            Jag ser fram emot att få träffa dig på kliniken!
                        </p>
                    </div>
                </div>

                {/* Aleksandra */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                    <img
                        src="/images/aleksandra.jpg"
                        alt="Aleksandra"
                        className="w-48 h-48 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Aleksandra Jansson</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Aleksandra Jansson heter jag, utbildad i mitt hemland Ukraina som tandläkare från Crimean Universitet sedan 1990.
                            Jag har jobbat i mitt hemland som tandläkare drygt 20 år.
                            Jag jobbar just nu som tandsköterska, tycker om mitt yrke.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white px-4 md:px-12">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Klinikchef</h2>

                <div className="max-w-8xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
                    <img
                        src="/images/jawad.jpg"
                        alt="Jawad Essa"
                        className="w-100 h-100 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-1">Jawad Essa</h3>
                        <p className="text-sm text-gray-600 mb-4">Legitimerad tandläkare & Klinikchef</p>
                        <p className="text-gray-700 leading-relaxed">
                            Hej, <br />
                            Jag heter Jawad Essa och är legitimerad tandläkare från Umeå universitet.
                            Jag har flera års erfarenhet i allmän tandvård samt vidareutbildat mig inom kirurgi och implantat
                            där jag erhåller masterutbildning från Danube Private University i Österrike.
                            Vi jobbar mest med STRAUMANN implantat system som är en av de bästa i världen.
                            <br /><br />
                            Jag är i grunden konstnär vilket har avspeglat sig i mitt yrkesliv med väldigt fina resultat.
                            Jag tycker att konsten och tandläkaryrket hör ihop.
                            Estetiken ligger i fokus i mitt yrke för att åstadkomma ett fint resultat.
                            <br /><br />
                            Med vänliga hälsningar, <br />
                            <strong>Tandläkaren Jawad Essa</strong>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
