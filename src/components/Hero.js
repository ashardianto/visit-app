import React from "react";
import pageHero from "../images/hero-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={pageHero} alt="Logo" className="hero--image"/>
            <h1 className="hero--header">Capture Every Memories</h1>
            <p className="hero--text">Find your-travelling-and-documentary-needs here, 
                We believe every journey leaves a memories.</p>

        </section>
            
        
    )
}