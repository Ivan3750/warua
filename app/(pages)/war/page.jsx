import "@/app/style/home.css"
import "@/app/style/war.css"
import Hero from "@/app/components/Hero";
import ImagesPage from "@/app/components/ImagesPage";
import MapComponent from "@/app/components/MapComponent"
import Losses from "@/app/components/Losses"
import UkrChildren from "@/app/components/UkrChildren"
import Violations from "@/app/components/Violations"
import war1 from "@/app/assets/wwar1.jpg"
import war2 from "@/app/assets/wwar2.jpg"
import war3 from "@/app/assets/wwar3.jpg"


const War = () => {
    return ( <>

<Hero imgTop={war1} imgLeft={war2} imgRight={war3} title={"Ukraine står stærkt "}></Hero>   
 <ImagesPage></ImagesPage>
    <MapComponent/>
    <Losses></Losses>
    <UkrChildren></UkrChildren>
    <Violations/>
    </> );
}
 
export default War;