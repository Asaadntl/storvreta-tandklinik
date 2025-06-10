'use client';
import { useState } from 'react';

const behandlingsLista = [
    {
        id: 'akut-tandvard',
        title: 'Akut tandvård',
        image: '/images/frustrated-unhappy-woman-suffering-from-toothache-scaled.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
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
        )
    },
    {
        id: 'allmantandvard',
        title: 'Allmäntandvård',
        image: '/images/allmantandvard.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Det vi kallar allmäntandvård är de undersökningar och behandlingar som är vanligast förekommande och som oftast är okomplicerade.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Undersökning av tandläkare</h3>
                <p>
                    Tandläkarundersökningen görs i syfte att upptäcka och förebygga tandsjukdomar. Tandläkaren gör en omfattande undersökning, vilket inkluderar undersökning av tänderna, mjukvävnaden, käkleder, bett och tandköttsfickor med hjälp av bland annat röntgenbilder. Utifrån detta görs en bedömning om lämpliga åtgärder. Du får ett preliminärt kostnadsförslag och en behandlingsplan.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Förebyggande behandlingar av tandhygienist</h3>
                <p>
                    Tandhygienisten arbetar förebyggande genom regelbundna undersökningar och professionell rengöring. Vi erbjuder individuell riskbedömning och vårdplan, vilket kan inkludera fluortillskott, tätare besök eller instruktion om munvårdsprodukter.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Bettskena</h3>
                <p>
                    Vid huvudvärk eller muskelspänningar som beror på bettavvikelser kan en individuellt anpassad bettskena hjälpa. Den avlastar bettet och skyddar tänderna. Käkledsövningar kan också rekommenderas.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Fyllningar</h3>
                <p>
                    Defekter på tänder kan lagas med kompositfyllningar. All sjuk tandvävnad avlägsnas och tanden byggs upp igen. Bedövning erbjuds vid behov, och vi har god erfarenhet av att behandla även spruträdda patienter.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Kronor</h3>
                <p>
                    Om en tand är för skadad för vanlig fyllning kan en krona göras. Tanden prepareras varsamt och en krona tillverkas av tandtekniker. Den liknar och fungerar som en naturlig tand.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Rotfyllningar</h3>
                <p>
                    Om skadan når tandens pulpa behövs rotfyllning. Rotkanalerna rensas och fylls med guttaperka. Därefter byggs tanden upp med fyllning eller krona.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Röntgen</h3>
                <p>
                    Vi använder digitalröntgen för snabb och tydlig bildvisning. Vid behov kan panoramaröntgen utföras, och i mer avancerade fall kan remiss skickas till sjukhus.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tandkirurgi</h3>
                <p>
                    Vi utför enklare oralkirurgiska ingrepp såsom implantat, borttagning av visdomständer och rotrester.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tandlossningsbehandling</h3>
                <p>
                    Tandlossning är en kronisk bakterieinfektion i tandens fäste. Den påverkas av faktorer som rökning, dålig munhygien och ärftlighet. Behandling innebär professionell rengöring och uppföljning. Vid avancerade fall kan kirurgi bli aktuellt.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Omfattande uppbyggnad av bett</h3>
                <p>
                    Vid stora skador eller saknade tänder kan en omfattande rekonstruktion behövas. Dessa behandlingar planeras noggrant av tandläkare och tandtekniker i samråd med dig som patient.
                </p>
            </div>
        )
    },
    {
        id: 'estetisk-tandvard',
        title: 'Estetisk tandvård',
        image: '/images/estetisk.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Estetisk tandvård innefattar bland annat tandblekning, kompositbehandling eller kronor.
                    Här berättar vi om estetiska behandlingar och vilka vi kan erbjuda dig.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vad är estetisk tandvård?</h3>
                <p>
                    Estetisk tandvård (även kallad kosmetisk tandvård) innebär behandlingar som utförs av skönhetsskäl.
                    Det kan inkludera tandblekning, skalfasader/porslinsfasader, komposit för att fylla gluggar, puts och polering.
                    Vad som upplevs som vackert är individuellt – våra tandläkare arbetar därför med ärlig och tydlig kommunikation och ger alltid professionell rådgivning.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tandblekning</h3>
                <p>
                    Tänderna blir naturligt gulare med åldern då emaljen tunnas ut. Missfärgningar kan även orsakas av t.ex. rött vin, te och rökning.
                    Dessa ytliga missfärgningar kan putsas bort hos tandläkare.
                </p>
                <p>
                    Innan tandblekning utförs gör vi en undersökning för att bedöma om blekning är lämplig. Tandsten och hål måste först åtgärdas.
                    Blekningsgelen appliceras i individuellt anpassade skenor för över- och/eller underkäken, och behandlingen sker hemma.
                </p>
                <p>
                    Resultatet varierar beroende på utgångsläge och kan behöva upprepas.
                    En korrekt utförd blekning ger hållbara resultat i flera år utan att skada tandköttet.
                    Tillfälliga ilningar eller irritation kan förekomma. Efter blekningen bör du undvika färgstarka livsmedel som vin, rödbetor och te,
                    samt gärna använda fluorsköljning för att lindra känslighet.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Kronbehandling</h3>
                <p>
                    Vid kraftiga missfärgningar eller större frakturer kan kronbehandling vara ett alternativ.
                    Kronan täcker hela tanden och ger både funktionellt och estetiskt resultat. En grundlig undersökning krävs inför sådan behandling.
                </p>
            </div>
        )
    },
    {
        id: 'kirurgi-implantat-behandling',
        title: 'Kirurgi / Implantat behandling',
        image: '/images/kirurgi.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Tandimplantat är ett väldigt populärt sätt att ersätta skadade eller saknade tänder. Att leva utan en eller flera tänder påverkar inte bara utseendet utan kan också göra det svårare att tugga. Med dagens teknik blir resultatet så naturligt att man knappt märker skillnaden mellan implantatet och de egna tänderna.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vad är implantatbehandling?</h3>
                <p>
                    Implantat innebär att man fäster små titanskruvar direkt i käkbenet. På dessa skruvar fästs sedan konstgjorda tänder. Titan har den unika egenskapen att växa ihop med käkbenet. Den synliga delen av tanden är ofta tillverkad av titan eller zirkonium med ett porslinsskikt, färgat och format för att smälta in naturligt.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Implantat eller löständer – vad ska man välja?</h3>
                <p>
                    Implantat har flera fördelar jämfört med proteser. De sitter fast i käkbenet och känns som riktiga tänder, vilket gör dem bekvämare och stabilare att tugga med. Dessutom behöver man inte slipa på friska tänder, som man ofta gör vid brobehandlingar.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vilka förutsättningar krävs för implantat?</h3>
                <p>
                    Det viktigaste är att ha ett friskt och starkt käkben. Implantat är inte lämpliga för barn vars käkar inte vuxit färdigt. En individuell bedömning görs alltid, och vi använder röntgen för att utvärdera benets kvalitet. Vissa sjukdomar och mediciner kan påverka möjligheten att få implantat.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Hur går fastsättning av tandimplantat till?</h3>
                <p>
                    Implantatskruvarna fästs under en kort operation i lokalbedövning. Efter det får benet läka och växa samman med skruvarna – en process som kan ta några månader. Under tiden används tillfälliga proteser. När implantaten är stabila fästs de permanenta tänderna ovanpå.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Hur sköter man implantat?</h3>
                <p>
                    Implantat måste rengöras noggrant, precis som vanliga tänder. Dålig hygien kan leda till inflammation runt implantatet. Vi kallar till regelbundna kontroller hos tandläkare eller tandhygienist och ger tydliga instruktioner för bästa rengöring.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Hur mycket kostar implantatbehandling?</h3>
                <p>
                    Kostnaden beror på antalet implantat och förutsättningarna i käken. Implantat är en större behandling och kan därför kosta mer, men omfattas av statligt tandvårdsstöd med högkostnadsskydd. Vi ger alltid en skriftlig kostnadsberäkning och hjälper dig att förstå ersättningen du har rätt till.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Garantier</h3>
                <p>
                    Normalt ingår tre års garanti för tandimplantat, men väl utförda implantat håller ofta betydligt längre. Vi går igenom garantivillkor tillsammans med dig innan behandling.
                </p>
            </div>
        )
    },
    {
        id: 'hygienistbehandling',
        title: 'Hygienistbehandling',
        image: '/images/hygienistbehandling.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Hos oss kan du få förebyggande behandling samt behandling av karies som inte behöver lagas, inflammation i tandköttet och tandlossning.
                    Tandhygienisten utför även undersökningar, och tar bort tandsten, missfärgningar och plack som tandborsten inte klarar av.
                    Du får även råd om hur du bäst sköter dina tänder hemma för att förebygga framtida problem.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Behandling av tandsten</h3>
                <p>
                    För att ta bort tandsten använder tandhygienisten både handinstrument och ultraljud. Handinstrumentet skrapar längs tanden,
                    medan ultraljudsspetsen vibrerar bort tandstenen med hög precision. Vibrationen kan orsaka tillfälliga ilningar, men dessa upphör direkt när behandlingen avslutas.
                </p>
                <p>
                    Vid kraftiga missfärgningar från t.ex. snus, kaffe, te eller rökning används ibland Airflow – en skonsam metod som blåser luft, vatten och ett saltbaserat pulver för att avlägsna ytliga fläckar.
                </p>
                <p>
                    Behandlingen avslutas med polering av tänderna med en polerpasta, vilket gör ytan slätare och svårare för bakterier att fästa på.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vad kostar tandstensborttagning?</h3>
                <p>
                    Priset för tandstensborttagning varierar mellan <strong>1000 – 2485 kr</strong> beroende på mängden tandsten, djupet på tandköttsfickor och var tandstenen sitter.
                    Priset inkluderar även instruktioner för fortsatt munvård hemma.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tips för att förebygga tandsten</h3>
                <ul className="list-disc list-inside">
                    <li>Borsta tänderna noggrant två gånger per dag</li>
                    <li>Använd tandtråd, tandstickor eller mellanrumsborste dagligen</li>
                    <li>Besök tandhygienist eller tandläkare regelbundet</li>
                    <li>Använd alltid fluortandkräm</li>
                    <li>Fluorskölj gärna dagligen för extra skydd</li>
                </ul>
            </div>
        )
    },
    {
        id: 'rotbehandling',
        title: 'Rotbehandling',
        image: '/images/rotbehandling.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Besväras du av molande värk, känslighet för kyla och värme, svullnad eller ömhet kan det vara tecken på en skadad pulpa.
                    Det är dock inte alltid symptomen är tydliga. Trots att en levande pulpa är att föredra, kan tanden räddas även om pulpan dör – genom rotbehandling.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vad orsakar pulpaskador?</h3>
                <p>
                    Pulpan inuti tanden kan skadas av karies, läckande fyllningar eller tandgnissling. När pulpan blir inflammerad eller infekterad måste den avlägsnas för att rädda tanden.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vikten av rätt diagnos</h3>
                <p>
                    En korrekt diagnos är avgörande för lyckad rotbehandling. Tandläkaren använder röntgen och känseltester (kyla, värme) för att avgöra om pulpan lever.
                    Även din egen berättelse om symptomen spelar stor roll i bedömningen.
                </p>
                <p>
                    Vissa tandläkare remitterar till en specialist (endodontist), särskilt vid svårare fall.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Hur går rotbehandlingen till?</h3>
                <p>
                    Tandläkaren avlägsnar först orsaken till skadan, t.ex. karies, och tar sedan bort pulpan. Rotkanalerna rensas noggrant och fylls med guttaperka – ett gummiliknande material som försluts i kanalen.
                    Tanden förses därefter med en fyllning eller krona som återställer dess funktion.
                </p>
                <p>
                    I svårare fall används bakteriedödande inlägg och en provisorisk fyllning under en tid för att säkerställa att infektionen är borta innan permanent rotfyllning görs.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Är behandlingen smärtsam?</h3>
                <p>
                    Behandlingen utförs oftast under lokalbedövning och är helt smärtfri. Om pulpan redan är död kan rotbehandling ske utan bedövning. Du behöver inte vara orolig för smärta.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Apikal parodontit – infektion i käkbenet</h3>
                <p>
                    När bakterier från ett kariesangrepp når pulpan och sprider sig ut i käkbenet uppstår en infektion som kallas apikal parodontit.
                    Då syftar behandlingen till att rensa bort all död vävnad och bekämpa infektionen innan tanden rotfylls permanent.
                </p>
            </div>
        )
    },
    {
        id: 'tmd-kakledsbesvar-behandling',
        title: 'TMD / Käkledsbesvär behandling',
        image: '/images/tmd.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Vad är TMD?</h3>
                <p>
                    TMD (temporomandibulär dysfunktion) innebär att käkleden – den som kopplar ihop överkäken och underkäken – inte fungerar som den ska.
                    Denna led möjliggör rörelser framåt, bakåt och i sidled, och är en av kroppens mest komplexa leder.
                    TMD uppstår när samspelet mellan muskler, ledband, käkben och ledskiva rubbas.
                </p>
                <p>
                    Vanliga upplevelser vid TMD inkluderar knäppningar, klickljud eller att käken låser sig en kort stund. Exakt orsak till TMD är ofta svår att fastställa.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Vanliga symtom</h3>
                <ul className="list-disc list-inside">
                    <li>Huvudvärk (liknande migrän), öronvärk, tryck bakom ögonen</li>
                    <li>Klickande eller knakande ljud vid käkrörelser</li>
                    <li>Smärta vid gäspning, tuggning eller vid stor munsöppning</li>
                    <li>Käken fastnar eller hoppar ur led</li>
                    <li>Ömhet i käkmusklerna</li>
                    <li>Plötslig förändring i hur tänderna biter ihop</li>
                </ul>
                <p>
                    Eftersom dessa symtom kan förekomma vid andra tillstånd är det viktigt att få rätt diagnos av en tandläkare, som gör en klinisk undersökning och eventuellt röntgen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Behandling av TMD</h3>
                <p>
                    Det finns inget definitivt botemedel mot TMD, men flera behandlingsmetoder kan kraftigt minska besvären. Tandläkaren kan rekommendera:
                </p>
                <ul className="list-disc list-inside">
                    <li>Fuktig värme eller receptfria läkemedel som smärtstillande eller antiinflammatoriska</li>
                    <li>Muskelavslappnande medel för att minska muskelspänningar</li>
                    <li>Användning av bettskena för att minska gnissling och slitning</li>
                    <li>Avslappningstekniker eller stresshantering via rådgivning eller kurs</li>
                    <li>Vid svårare fall: remiss till käkkirurgi</li>
                </ul>
                <p>
                    Målet är att minska belastning på käklederna och återställa balans i muskulaturen. Regelbunden uppföljning är viktig för att utvärdera behandlingsresultatet.
                </p>
            </div>
        )
    },
    {
        id: 'gnissling-bruxism-behandling',
        title: 'Gnissling / Bruxism behandling',
        image: '/images/gnissling.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Vad är bruxism?</h3>
                <p>
                    Att gnissla eller pressa tänder är vanligt, särskilt under natten då man ofta inte märker det själv. Det kan också ske omedvetet under dagen, särskilt vid stress.
                    Resultatet kan vara slitage på tänderna och smärta i käkarna eller ansiktet.
                </p>
                <p>
                    Oftast upptäcks det av tandläkaren vid en rutinundersökning, men ibland kan även andra höra att du gnisslar tänder under sömnen.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Symtom vid tandgnissling</h3>
                <ul className="list-disc list-inside">
                    <li>Synligt slitage på tändernas ytor, särskilt framtänder och hörntänder</li>
                    <li>Vassa eller taggiga tandkanter</li>
                    <li>Nötning som sker gradvis över tid</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900">Symtom vid tandpressning</h3>
                <ul className="list-disc list-inside">
                    <li>Klick- eller knakljud från käkarna vid rörelse</li>
                    <li>Svårigheter eller smärta vid stor gapning</li>
                    <li>Trötthet eller ömhet i käkmusklerna – likt träningsvärk i ansiktet</li>
                    <li>Smärta vid tuggning, särskilt av seg mat</li>
                    <li>Värk eller flyttbar ömhet i olika tänder</li>
                    <li>Dov huvudvärk i tinning eller panna, ofta direkt på morgonen</li>
                    <li>Tandsprickor som kan orsaka ilningar eller värk</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900">När ska du kontakta tandläkare?</h3>
                <p>
                    Misstänker du att du gnisslar eller pressar tänder – kontakta oss. Tidig behandling kan förebygga större skador och lindra dina besvär.
                    Vanliga åtgärder inkluderar bettskenor och rådgivning kring avslappning och stresshantering.
                </p>
            </div>
        )
    },
    {
        id: 'protetik-tandkronor-och-broar-behandling',
        title: 'Protetik, tandkronor och broar behandling',
        image: '/images/protetik.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-900">Vad är protetik?</h3>
                <p>
                    Protetik handlar om att ersätta förlorade eller svårt skadade tänder med hjälp av tandkronor och broar.
                    Det återställer både funktion och estetik – och hjälper dig att få tillbaka ditt leende och din livskvalitet.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Kronor</h3>
                <p>
                    En krona används när en tand är så skadad att en vanlig fyllning inte räcker. Tandläkaren slipar då ner tanden och tar ett avtryck.
                    En tandtekniker skapar sedan en individuellt anpassad krona som sätts på plats och ersätter hela tandens tuggyta och väggar.
                    Kronor kan tillverkas i porslin eller en kombination av metall och porslin – beroende på dina behov och önskemål.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Broar</h3>
                <p>
                    En bro används när en eller flera tänder saknas. Då slipas granntänderna ned och används som stöd för bron.
                    Tandteknikern tillverkar en skräddarsydd bro som ersätter både den saknade tanden och ger stabilitet till hela området.
                </p>
            </div>
        )
    },
    {
        id: 'parodontit-tandlossning-behandling',
        title: 'Parodontit / Tandlossning behandling',
        image: 'images/parodontit.jpg',
        content: (
            <div className="space-y-4 text-gray-800">
                <p>
                    Tandlossning, eller parodontit, är en infektionssjukdom som påverkar tandens fäste i käken.
                    Sjukdomen leder till att tänderna gradvis lossnar om den inte behandlas.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tidigt ingripande är avgörande</h3>
                <p>
                    Ju tidigare parodontit upptäcks och behandlas, desto bättre är prognosen. Vid mildare former räcker ofta en enklare behandling,
                    medan allvarligare fall kan kräva kirurgiska åtgärder.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Inflammerat tandkött</h3>
                <p>
                    Gingivit (tandköttsinflammation) är ett förstadium till parodontit. Det orsakas av plack och går ofta att behandla med förbättrad munhygien.
                    Daglig rengöring med tandborste och tandtråd är avgörande.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Tandsten</h3>
                <p>
                    Tandsten kan bildas även vid god munhygien. Eftersom du inte kan ta bort tandsten själv, är regelbundna besök hos tandhygienist eller tandläkare viktiga.
                    Behandlingen är oftast smärtfri, men lokalbedövning kan behövas vid djupa fickor.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Fördjupade fickor och benförlust</h3>
                <p>
                    Vid avancerad parodontit samlas bakterier djupt i fickor runt tanden, vilket skadar benet och tandens fäste.
                    Tandläkaren rengör med specialinstrument och ultraljud. Behandlingen minskar vanligtvis fickdjupet med 2–3 mm.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Eftervård och uppföljning</h3>
                <p>
                    Återfall är vanliga om munhygienen försämras. Regelbundna kontroller och goda rutiner hemma är därför avgörande
                    för långsiktig stabilitet.
                </p>

                <h3 className="text-lg font-semibold text-gray-900">Allvarlig tandlossning och kirurgi</h3>
                <p>
                    Vid allvarlig tandlossning kan tanden kännas lös, och infektion kan uppstå. I vissa fall kan kirurgi eller tandutdragning bli nödvändigt.
                    Operationen innebär att tandköttet öppnas för att avlägsna infektion och rengöra, och görs under lokalbedövning.
                </p>
            </div>
        )
    }
];

export default function BehandlingsLista() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-12 px-6 md:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-6">
                {behandlingsLista.map(({ id, title, content, image }) => (
                    <div key={id} className="border rounded shadow">
                        <button
                            onClick={() => toggle(id)}
                            className="w-full text-left p-4 bg-purple-100 hover:bg-purple-200 text-lg font-semibold text-purple-800 flex justify-between items-center"
                        >
                            <span>{title}</span>
                            <span className="text-xl">{openId === id ? '−' : '+'}</span>
                        </button>

                        {openId === id && (
                            <div className="p-4 bg-gray-50 space-y-4">
                                {image && (
                                    <img src={image} alt={title} className="w-full max-w-lg mx-auto rounded shadow" />
                                )}
                                <div>{content}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
