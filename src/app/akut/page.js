export default function AkutPage() {
    return (
        <main>
            {/* Hero */}
            <header className="mt-18 grid grid-cols-1 md:grid-cols-2 min-h-[500px] h-auto overflow-hidden">
                {/* Vänster sida: text + knapp */}
                <div className="bg-red-700 text-white flex items-center justify-center p-8">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Akut</h1>
                        <p className="text-lg mb-6">
                            Slagit ut en tand? Tappat en krona/bro? Akut tandvärk? <br />
                            Vi hjälper dig med akuta tandbesvär. <br />
                            Ring oss omgående eller hitta en snabb tid på vår online bokning!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://bokatid.frenda.se/100076"
                                target="_blank"
                                className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-red-700 transition text-center"
                            >
                                Boka tid
                            </a>
                            <a
                                href="tel:018108001"
                                className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-red-700 transition text-center"
                            >
                                Ringa oss
                            </a>
                        </div>

                    </div>
                </div>

                {/* Höger sida: bild */}
                <div className="w-full h-full">
                    <img
                        src="/images/frustrated-unhappy-woman-suffering-from-toothache-scaled.jpg"
                        alt="Tandvärk"
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>

            <section className="py-12 bg-white px-6 md:px-10">
                <details className="max-w-4xl mx-auto bg-gray-100 rounded shadow p-6">
                    <summary className="text-2xl font-bold text-blue-700 cursor-pointer select-none">
                        Akut tandvård
                    </summary>

                    <div className="mt-6 space-y-4 text-gray-800">
                        <img
                            src="/images/frustrated-unhappy-woman-suffering-from-toothache-scaled.jpg"
                            alt="Tandvärk"
                            className="w-full max-w-md mx-auto rounded shadow"
                        />

                        <p>
                            Vid akuta besvär med svår tandvärk, tandinfektion och trasiga lagningar bör du kontakta oss omgående.
                            Vi har öppet 9:00–17:00 vardagar och nås på telefon: <strong>018-10 80 01</strong>. Övriga tider nås vi på: <strong>072-929 34 55</strong>.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900">Vad innebär akut tandvård?</h3>
                        <p>
                            Akut tandvärk är tandvärk som man inte kan vänta med. Det kan till exempel vara att du har slagit ut en tand, tappat en krona/bro
                            eller annan typ av akut smärta. Vi hjälper dig med akuta tandbesvär. Ring oss omgående eller hitta en snabb tid i vår online bokning!
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900">När ska man söka akut tandvård?</h3>
                        <p>
                            Akut tandvård kan inkludera tandvärk, tandskador från en olycka, svullnad i ansiktet och/eller munnen.
                            En nödsituation är hur du själv uppfattar den – tveka inte att kontakta oss!
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900">Vad kostar akut tandvård?</h3>
                        <p>
                            Vid akuta besvär betalar du en undersökningskostnad från <strong>690 kr</strong> (2 BW-röntgenbilder ingår).
                            Tandläkaren bedömer sedan vilka åtgärder som krävs. Återbesök och kostnadsförslag ges vid behov.
                        </p>
                    </div>
                </details>
            </section>
        </main>
    );
}
