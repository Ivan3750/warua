import "@/app/style/home.css"
import Hero from "@/app/components/Hero";
import Day from "./components/Days";
import SupportINFO from "./components/SupportINFO";
import war1 from "@/app/assets/war1.png"
import war2 from "@/app/assets/war2.png"
import war3 from "@/app/assets/war3.png"
export default function Home() {
  return (
    <><Hero imgTop={war1} imgLeft={war2} imgRight={war3} title={"Kraften i sandheden om krig"}></Hero>   

    <Day/>
    <SupportINFO></SupportINFO>

    </>
  );
}
