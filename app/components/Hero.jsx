"use client";
import "@/app/style/home.css";
import Link from "next/link";
import Symbol from "@/app/assets/symbol.svg"; // У разі помилок перевірте шляхи
import Image from "next/image";
import React, { useRef, useState } from "react";

const Hero = ({ imgTop, imgLeft, imgRight, title }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            } else {
                audioRef.current.loop = true;
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const amountDays = Math.floor((new Date() - new Date("2022-02-23")) / (1000 * 60 * 60 * 24));

    return (
        <>
            <header>
                <div className="logo-box">
                    <Image src={Symbol} alt="Ukraine Symbol" priority />
                    <p className="logo">UKRAINE</p>
                </div>
                <nav className="nav">
                    <Link href="/" className="nav-link">Hoved</Link>
                    <Link href="/war" className="nav-link">Om krig</Link>
                    <Link href="/support" className="nav-link">Støtte</Link>
                </nav>
                <button className="air-alarm" onClick={handleToggleAudio}>
                    {isPlaying ? "STOP LYD" : "LYT KRIG"}
                </button>
                <audio ref={audioRef} src="/war_sound.mp3"></audio>
            </header>
            <div className="hero">
                <div className="hero-info">
                    <p className="data-text">24.02.22 - NU</p>
                    <h2 className="title">{title}</h2>
                    <h3 className="war-days">{amountDays} dage af krig</h3>
                    <p className="hero-desc">
                        Dette websted blev oprettet for at sprede sandheden om krigen i Ukraine og for at hjælpe dem, der ønsker at støtte den.
                    </p>
                    <Link href="/support" className="btn-support">Støtte Ukraine</Link>
                </div>
                <div className="heroImg">
                    <div className="heroImg-top">
                        <Image src={imgTop} alt="War scene 1" className="img-war" priority />
                    </div>
                    <div className="heroImg-bottom">
                        <Image src={imgLeft} alt="War scene 3" className="img-war" />
                        <Image src={imgRight} alt="War scene 3" className="img-war" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
