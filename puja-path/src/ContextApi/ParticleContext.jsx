import { createContext, useState } from "react";

export const ParticleContext=createContext();

export const ParticleContextProvider=({children})=>{
    const [particle, setParticle]=useState("amoungUs");

    const handleAmoungUs=()=>{
        setParticle("amoungUs");
    }

    const handleSpider=()=>{
        setParticle("spider");
    }

    const handleColors=()=>{
        setParticle("colors");
    }

    const handleStarry=()=>{
        setParticle("starry");
    }

    const handleNone =()=>{
        setParticle("none");
    }

    return <ParticleContext.Provider value={{particle, handleAmoungUs,handleSpider,handleColors,handleStarry,handleNone}}>{children}</ParticleContext.Provider>
}