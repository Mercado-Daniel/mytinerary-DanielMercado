import React from "react"
import Carrousel from "../components/Carrousel"
import Hero from "../components/Hero"
import '../App.css'
import '../styles/Header.css'

const Home = () => {
    return (
    
        <main>
                
            <section>
                <Carrousel/>
            </section>
            <section>
                <Hero></Hero>
            </section>
        </main>
    );
}

export default Home 