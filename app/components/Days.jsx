"use client";
import "@/app/style/war.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Day = () => {
    const [data, setData] = useState([]); // For storing data
    const [rand, setRand] = useState(0); // For random image selection
    const [largestSrc, setLargestSrc] = useState(""); // URL for largest image
    const [translatedCaption, setTranslatedCaption] = useState(""); // Translated caption

    const translateToDanish = async (text) => {
        try {
            const response = await axios.post("https://libretranslate.de/translate", {
                q: text,
                source: "en",  // Source language (English)
                target: "da",  // Target language (Danish)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data.translatedText;
        } catch (error) {
            console.error("Error translating text:", error);
            return text; // Fallback to original text if translation fails
        }
    };
    

    useEffect(() => {
        // Fetch data
        fetch("https://day.alerts.in.ua/photos.json")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json);
                setRand(Math.floor(Math.random() * json.length)); // Random index
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        if (data.length && data[rand]?.[0]?.srcset) {
            // Function to select the largest image from srcset
            const largestImage = data[rand][0].srcset
                .split(",")
                .map((item) => {
                    const [url, size] = item.trim().split(" ");
                    return { url, size: parseInt(size) };
                })
                .sort((a, b) => b.size - a.size)[0]; // Largest image
            setLargestSrc(largestImage?.url || ""); // Update URL
        }
    }, [data, rand]);

    useEffect(() => {
        // Update random image every 30 seconds
        const interval = setInterval(() => {
            if (data.length) {
                setRand(Math.floor(Math.random() * data.length)); 
            }
        }, 15000);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [data]);

    useEffect(() => {
        if (data.length && data[rand]?.[0]?.caption) {
            // Translate the caption to Danish
            translateToDanish(data[rand][0]?.caption).then((translated) => {
                setTranslatedCaption(translated);
            });
        }
    }, [data, rand]);

    if (!data.length || !data[0]?.length || !largestSrc) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Image onClick={    ()=>{            setRand(Math.floor(Math.random() * data.length))} 
}
                src={largestSrc} 
                alt={data[rand][0]?.attribute || "Random image"} 
                className="Image-Days" 
                width={1000} 
                height={500} 
            />
            <p>{translatedCaption}</p>
        </>
    );
};

export default Day;
