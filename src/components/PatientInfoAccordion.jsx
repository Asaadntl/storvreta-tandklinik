'use client';
import { useState } from 'react';

const infoData = [
    {
        id: 'tandvardsstodet',
        title: 'Tandvårdsstödet',
        image: '/images/tandvardsstodet.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Allmänt tandvårdsbidrag</h3>
                <p>
                    Alla som enligt socialförsäkringsbalken anses vara bosatta i Sverige har rätt till allmänt tandvårdsbidrag från och med det år man fyller 19 år.
                    Det betyder att du som fyller 20 år under 2025 måste betala för besök i tandvården från årsskiftet.
                </p>
                <p>
                    Det allmänna tandvårdsbidraget betalas ut till tandläkaren eller tandhygienisten. Däremot tillhör bidraget patienten, och det är patienten
                    som bestämmer om det ska användas eller inte.
                </p>
                <p>
                    Patienten behöver inte ansöka om bidraget med någon blankett, utan säger till om att använda sitt tandvårdsbidrag för att betala en del av kostnaden.
                    Hela bidraget måste användas vid ett tillfälle.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Nytt bidrag varje år</h3>
                <p>
                    Ett nytt tandvårdsbidrag ges den första juli varje år. Du kan spara ett års bidrag och använda två under samma år.
                    Man kan dock aldrig ha mer än två bidrag samtidigt – har du två oanvända den 1 juli ersätts det äldsta med ett nytt.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tandvårdsbidragets storlek</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>600 kr/år från 20–23 år</li>
                    <li>300 kr/år från 24–64 år</li>
                    <li>600 kr/år från 65 år</li>
                </ul>
                <p>
                    Bidraget är i första hand avsett för undersökning och förebyggande behandling, men kan även användas för andra åtgärder.
                    Det får dock inte användas för kosmetisk behandling, som till exempel tandblekning.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Högkostnadsskyddet</h3>
                <p>
                    Om patienten använder sitt tandvårdsbidrag vid behandling dras det av innan eventuell ersättning från högkostnadsskyddet beräknas.
                </p>

                <p className="text-sm text-gray-500">
                    <strong>Källa:</strong>{' '}
                    <a
                        href="https://www.forsakringskassan.se/privatperson/tandvard/tandvardsstod"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Försäkringskassan
                    </a>
                </p>

            </div>
        )
    },
    {
        id: 'muntorrhet',
        title: 'Muntorrhet',
        image: '/images/muntorrhet.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Allmänt</h3>
                <p>
                    Om man har för lite saliv kan man bli torr i munnen. En del kan bli så torra att det blir svårt att svälja och prata, eller besvärligt att äta.
                </p>
                <p>
                    Oftast är muntorrheten en biverkning av mediciner, bland annat sådana som används mot psykiska besvär.
                    Även en del sjukdomar kan göra att man blir torr i munnen men det kan också bero på stress eller att det man äter ger för lite tuggmotstånd.
                </p>
                <p>
                    Mindre saliv i munnen ökar risken för att få hål i tänderna och därför kan man behöva gå till tandläkaren oftare.
                    Om man har en tandprotes kan för lite saliv göra att den inte sitter bra, då kan man få problem med skavsår i munnen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">När ska man söka vård?</h3>
                <p>
                    Man kan ta kontakt med en tandläkare eller tandhygienist för att få råd om man är torr i munnen och har besvär av det.
                </p>
                <p>
                    Om man misstänker att muntorrheten beror på mediciner ska man ta upp det med den läkare som skrev ut receptet.
                </p>

                <p className="text-sm text-gray-500">
                    <strong>Källa:</strong>{' '}
                    <a
                        href="https://www.1177.se/sjukdomar--besvar/mun-och-tander/mun-lappar-och-tunga/muntorrhet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        1177
                    </a>
                </p>
            </div>
        )

    },
    {
        id: 'priser-aterbud-eller-uteblivande',
        title: 'Priser / Återbud eller uteblivande',
        image: '/images/tandvardsstodet.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Undersökning</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>Basundersökning från 1015 kr (inkl. 4 röntgenbilder).</li>
                    <li>Omfattande undersökning: 1960 kr (extra kostnad kan tillkomma vid fler bilder).</li>
                    <li>Akut undersökning: 690 kr (kan tillkomma vid fler röntgenbilder).</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900">Återbud eller uteblivande</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>Sent återbud eller uteblivande (kortare än 1 timme): 700 kr.</li>
                    <li>Långa behandlingar (längre än 1 timme): 1000 kr.</li>
                    <li>Återbud måste lämnas minst 24 timmar innan.</li>
                    <li>Vi debiterar via Payzmart fakturatjänst.</li>
                    <li>Vid fler än 4 om-/avbokningar blir patienten avlistad.</li>
                </ul>

                <p>
                    Onlinebokningar kan av-/ombokas via hemsidan senast 48 timmar innan.
                    Sent återbud inom 48 timmar debiteras med 700 kr.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Övrig information</h3>
                <ul className="list-disc list-inside ml-4">
                    <li>OB-tillägg: 500 kr extra för lördagstider.</li>
                    <li>Vi lämnar inga fakturor – endast betalning via kort eller Swish accepteras.</li>
                </ul>

                <p className="text-base font-semibold text-gray-700">Tack för din förståelse!</p>
            </div>
        )
    }
];

export default function PatientInfoAccordion() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-12 px-6 md:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-6">
                {infoData.map(({ id, title, content, image }) => (
                    <div key={id} className="border rounded shadow">
                        <button
                            onClick={() => toggle(id)}
                            className="w-full text-left p-4 bg-blue-100 hover:bg-blue-200 text-lg font-semibold text-blue-800 flex justify-between items-center"
                        >
                            <span>{title}</span>
                            <span className="text-xl">{openId === id ? '−' : '+'}</span>
                        </button>

                        {openId === id && (
                            <div className="p-4 bg-gray-50 space-y-4">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full max-w-lg mx-auto rounded shadow"
                                />
                                {content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
