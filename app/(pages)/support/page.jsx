import "@/app/style/war.css"
import "@/app/style/support.css"
import Hero from "@/app/components/Hero";
import SupportPeople from "@/app/components/SupportPeople";
import SupportINFO from "@/app/components/SupportINFO";
import war1 from "@/app/assets/support1.jpg"
import war2 from "@/app/assets/support2.jpg"
import war3 from "@/app/assets/support3.png"
const Support = () => {
    return ( <>
    <Hero imgTop={war1} imgLeft={war2} imgRight={war3} title={"Hjælp os med at stoppe krigen. Vi er stærkere sammen."}></Hero>   
    <SupportPeople></SupportPeople>
    <SupportINFO></SupportINFO>
    </>  );
}
 
export default Support;