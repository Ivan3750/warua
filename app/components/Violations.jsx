import img1 from "@/app/assets/1.jpeg";
import img2 from "@/app/assets/2.jpg";
import img3 from "@/app/assets/3.jpg";
import img4 from "@/app/assets/4.jpeg";
import img5 from "@/app/assets/5.jpg";
import img6 from "@/app/assets/6.jpg";
import img7 from "@/app/assets/7.jpg";
import img8 from "@/app/assets/8.jpg";
import img9 from "@/app/assets/9.jpg";
import img10 from "@/app/assets/10.jpeg";
import Image from "next/image";

const Violations = () => {
    const examples = [
        {
          title: "Angreb på civil infrastruktur",
          text: "Russiske styrker angriber beboelsesejendomme, skoler, hospitaler og energifaciliteter, hvilket fører til tab af mange civile liv. Disse handlinger krænker Genevekonventionens regler, som forbyder angreb på civile mål.",
          article: "Genevekonventionen (IV) om beskyttelse af civile personer, artikel 18, 53, 147",
          img: img1,
        },
        {
          title: "Brug af forbudte våben",
          text: "Rusland anvender klyngebomber og fosforammunition, hvilket forårsager alvorlige skader og er forbudt i henhold til international lovgivning.",
          article: "Konventionen om forbud mod brug af visse konventionelle våben (CCW), Protokol III og Oslo-konventionen om klyngevåben",
          img: img2,
        },
        {
          title: "Tortur af krigsfanger",
          text: "Ukrainske soldater og civile udsættes for tortur, herunder tæsk, nægtelse af mad og vand samt fratagelse af lægehjælp. Dette er en klar overtrædelse af reglerne om behandling af krigsfanger.",
          article: "Genevekonventionen (III) om behandling af krigsfanger, artikel 13, 17, 130",
          img: img3,
        },
        {
          title: "Kidnapning af børn",
          text: "Rusland deporterer ulovligt ukrainske børn til deres territorium, hvor deres identitet og statsborgerskab ændres tvangsmæssigt. Dette er en form for kulturel udryddelse.",
          article: "Genevekonventionen (IV) artikel 49 og FN's Børnekonvention artikel 11",
          img: img4,
        },
        {
          title: "Minering af områder",
          text: "Russiske styrker efterlader miner i beboelsesområder, marker og skove, hvilket gør det farligt for civile at vende tilbage til deres hjem.",
          article: "Ottawa-konventionen om forbud mod antipersonelminer",
          img: img5,
        },
        {
          title: "Forhindring af humanitær hjælp",
          text: "Humanitære korridorer bliver blokeret, og forsyninger til nødlidende bliver stjålet eller angrebet af russiske styrker.",
          article: "Genevekonventionen (IV) artikel 23 og 55",
          img: img6,
        },
        {
          title: "Ødelæggelse af kulturelle arv",
          text: "Angreb på kirker, museer og historiske bygninger ødelægger Ukrainens kulturelle arv og krænker Haagerkonventionen.",
          article: "Haagerkonventionen om beskyttelse af kulturværdier i tilfælde af væbnet konflikt, artikel 4",
          img: img7,
        },
        {
          title: "Angreb på medicinske faciliteter",
          text: "Hospitaler og ambulancer bliver angrebet, hvilket efterlader civile uden adgang til livsvigtig medicinsk hjælp.",
          article: "Genevekonventionen (IV) artikel 18, 19 og 21",
          img: img8,
        },
        {
          title: "Tvangsflytning af civile",
          text: "Titusinder af ukrainere bliver deporteret til Rusland og tvunget til at gennemgå umenneskelige 'filtreringslejre'.",
          article: "Genevekonventionen (IV) artikel 49",
          img: img9,
        },
        {
          title: "Henrettelser af civile",
          text: "Massegrave fundet i byer som Bucha og Irpin viser systematiske henrettelser af civile. Dette er en krigsforbrydelse og en forbrydelse mod menneskeheden.",
          article: "Genevekonventionen (IV) artikel 32 og Rom-statutten for Den Internationale Straffedomstol, artikel 7 og 8",
          img: img10,
        },
      ];
      

  return (
    <div>
        <h2 className="violations-title">rusland har overtrådt mere end 400 internationale traktater</h2>
      {examples.map((example, index) => (
        <div key={index} className="violation-card">
          <div className="violetion-card-info">
            <h2>{example.title}</h2>
            <p className="violetion-card-info-text">{example.text}</p>
            <p className="violation-article"><span>§ </span>{example.article}</p>
          </div>
          <div className="violetion-card-img">
            <Image src={example.img} alt={example.title} width={700} height={700} className="vialetion-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Violations;
