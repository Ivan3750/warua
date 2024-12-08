import sp1 from "@/app/assets/sp1.jpg";
import sp2 from "@/app/assets/sp2.jpg";
import sp3 from "@/app/assets/sp3.jpg";
import sp4 from "@/app/assets/sp4.jpg";
import sp5 from "@/app/assets/sp5.jpg";
import sp6 from "@/app/assets/sp6.jpg";
import sp7 from "@/app/assets/sp7.jpg";

import "@/app/style/war.css";
import "@/app/style/support.css";
import Image from "next/image";
const SupportPeople = () => {
  const helpers = [
    {
      title: "DEB KROL",
      text: "Mit navn er Deb Kroll.  Jeg er 70 år gammel og bor i Sautee Nacoochee, et bjergområde i Georgia, USA. bjergområde i Georgia, USA. Det er ikke en by eller en landsby. Vi har den samme postadresse til alle vores beboere. Men selv her støtter vi støtter vi Ukraine af hele vores hjerte. Jeg skriver denne historie, mens jeg sidder foran mit hus med to ukrainske flag - det ene med en solsikke og det andet et med en trefork.  Jeg bærer et vedhæng med en trefork og to armbånd, som jeg har om håndleddet hver dag for at vise min støtte til Ukraine. Før i tiden var jeg avisreporter og arbejdede for regeringen som regeringen som efterforsker af borgerrettigheder. I de sidste 25 år har jeg undervist i undervist i historie og økonomi i gymnasiet. Nu fotograferer jeg, musik, skriver for to blogs (med følgere over hele verden) og nyder at tilbringe at tilbringe tid med min familie.",
      img: sp1,
    },
    {
      title: "OGIYA EIJI",
      text: "Jeg hedder Ogiya, er 46 år og bor i Japan med min kone og to katte.Da jeg så de ødelæggende virkninger af Ruslands krig mod Ukraine, blev jeg dybt berørt af uskyldige menneskers lidelser. Selv om jeg ikke havde familie i Ukraine eller vidste meget om landet før krigen, kunne jeg ikke være ligeglad med aggressionen. Jeg blev donor og sendte et lille beløb hver måned for at hjælpe Ukraine i nødens stund.",
      img: sp2,
    },
    {
      title: "SHARBANI",
      text: "Jeg har støttet Ukraine gennem UNITED24 i mere end et år. Deter sådan en ære at stå sammen med Ukraine!  Jeg beder for jeres sejr hver dag. Tak, mange tak for at være et klart lys af håb for mig ogfor mange mennesker rundt om i verden.",
      img: sp3,
    },
    {
      title: "MICHAEL WIRTZ",
      text: "24. februar 2022, at rusland havde Ukraine, var jeg forfærdet.  Jeg ville gerne hjælpe, men følte mig hjælpeløs. Men hvor modigt du viste dig i sia! Præsident Zelenskyys ord »Jeg har brug for våben, ikke Jeg besluttede at gøre alt, hvad jeg kunne, for at hjælpe jer. I begyndelsen af marts sendte jeg tøj og soveposer til jeres soldater. Som et tegn på solidaritet hængte jeg det ukrainske flag op i mit stuevindue ved siden af det tyske flag.  Jeg deltog i en demonstration i Hamborg i marts 2022, hvor jeg opfordrede Tysklands kansler til at boykotte rusland og oprette #NoFlyZoneUA. Efterfølgende fortsatte han med at gentage opfordringen i adskillige tweets, og senere insisterede på overførsel af Leopard-kampvogne.",
      img: sp4,
    },
    {
      title: "SYLVIA AND ASHER MURER",
      text: "Mit navn er Sylvia, jeg er 62 år, og min mands navn er Asher, han er 73. Vi er pensionerede og bor i en stille lille by i Sydfrankrig. sydlige Frankrig. Den dag, jeg skrev dette brev, modtog jeg min første pension og valgte at donere den fuldt ud til U24 til forsvarsformål. Da rusland indledte en omfattende invasion af Ukraine, følte vi os dybt oprørte og vrede. og vrede. Men vi var ikke overraskede. Efter Kursk-tragedien i 2000 indså vi, at Putin ikke er et menneske, men et monster. Men vi håber at han ikke har lang tid tilbage.",
      img: sp5,
    },
    {
      title: "NEVE MCGARVEY",
      text: "Mit navn er Neve, jeg er 16 år gammel, jeg er fra Storbritannien, og jeg er en af de 24.000 venner af Ukraine. Hver måned giver jeg et bidrag (ca. 23 GBP) for at hjælpe ukrainerne. Nogle gange donerer jeg også til forskellige behov. Nu er jeg ved at afslutte mine studier, og i min fritid har jeg rejst og studeret ukrainsk i næsten to et halvt år.  Jeg har ingen familiebånd i Ukraine, men for et par år siden blev jeg interesseret i jeres land, kultur og sprog. Siden da er der dukket vidunderlige ukrainere op i mit liv, som først hjalp mig med at lære deres sprog, og senere blev mine venner og er nu en vigtig del af mit liv. Min bedstemor havde også mange venner blandt ukrainere som barn og husker stadig, hvordan hun prøvede borsjtj.",
      img: sp6,
    },
    {
      title: "ASHLEY WEBB",
      text: "Jeg er 29 år gammel og har autismespektrumforstyrrelse og flere andre psykiske lidelser, herunder angst. Dette forstyrrer mange af mine daglige aktiviteter, men det forhindrer mig ikke i at støtte Ukraine med en passion aldrig har følt før. At støtte Ukraine er blevet en del af mit liv. Hver dag læser jeg nyheder på r/Ukraine på Reddit og på ukrainske telegramkanaler. Hver dag oplever jeg et enormt antal følelser, fra tristhed, vrede og afsky over Ruslands handlinger til endeløs respekt og beundring for Ukraine og det modige ukrainske folk. Ukraine er et eksempel på, hvordan et smukt land og folk besluttede deres egen skæbne og valgte den gode vej, selv under langvarigt pres fra Sovjetunionen. fra Sovjetunionen. I 2014 sagde I jeres mening og begyndte kampen for jeres rettigheder og frihed. Jeres kamp fortsætter, og det viser mig, at menneskeheden ikke er ikke er dødsdømt. Ukraine viser mig hver dag, at der er håb, og at vi alle bør kæmpe. alle bør kæmpe.",
      img: sp7,
    },
  ];

  return (
    <div className="helpers-box">
      <h2 className="helpers-title">Folk fra andre lande hjælper Ukraine</h2>
      {helpers.map((helper, index) => (
        <div key={index} className="helper-card">
          <div className="helper-card-info">
            <h2>{helper.title}</h2>
            <p className="helper-card-info-text">{helper.text}</p>
          </div>
          <div className="helper-card-img">
            <Image
              src={helper.img}
              alt={helper.title}
              width={300}
              height={0}
              className="helper-img"
            />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default SupportPeople;
