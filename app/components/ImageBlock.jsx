import Image from "next/image";



const ImageBlock = ({beforeImg, afterImg}) => {
 return ( 
    <div className="img-block">
    <Image src={beforeImg} alt="" className="img-war-ba" />
    <Image src={afterImg} alt="" className="img-war-ba" />
   </div> 
    );
}
 
export default ImageBlock;