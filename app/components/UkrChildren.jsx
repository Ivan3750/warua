import Image from "next/image";
import UkrBarn from "@/app/assets/ukrBarn.jpg";

const UkrChildren = () => {
  return (
    <div className="UkrChildrenBox">
      <div className="UC-info">
        <h2>Mere 19.000 ukrainske børn</h2>
        <p>
          rusland har tvangsfjernet ukrainske børn på mange forskellige måder:
          adskilt dem fra deres forældre på den anden side af frontlinjen,
          lokket dem under påskud af »sundhedslejre« og aldrig sendt dem
          tilbage, og taget dem under evakueringer eller fra forældre, der er
          tilbageholdt i de besatte områder. Mange børn ender i familiepleje, på
          børnehjem eller hospitaler i rusland, hvor de udsættes for propaganda,
          herunder forsøg på at ændre deres nationale identitet og nogle gange
          endda russisk statsborgerskab.
        </p>
      </div>
      <div className="UC-image">
        <Image src={UkrBarn} width={600}></Image>
      </div>
    </div>
  );
};

export default UkrChildren;
