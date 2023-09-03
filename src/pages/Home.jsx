import React from "react"
import Carrousel from "../components/Carrousel"
import Hero from "../components/Hero"
import '../App.css'
import '../styles/Header.css'

const Home = () => {
    return (
    
        <main className="container mx-auto rounded-3xl bg-gray-100 my-40">
                
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