import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link as Anchor} from 'react-router-dom';

const CityDetails = () => {
    const { id } = useParams()

    // Tener una variable de estado para almacenar la info de mi ciudad
    const [city, setCity] = useState()

    useEffect(() => {
        // peticion axios para traerme la informacion de una sola ciudad
        // usar el id del params para hacer la peticion
        const fetchCity = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/cities/${id}`)
                setCity(response.data.city)
            } catch (error) {
                console.log(error)
            }
        };

        fetchCity();
    }, [id]); // Agrego 'id' como dependencia

    return (
        <main className="container mx-auto mt-20 mb-20 flex flex-col items-center justify-center">
            <section className="text-center text-3xl ">
            {city ? (
                <>
                    <h1>{city.name}</h1>
                    <div>
                        <img src={city.image} alt="" className="lg:w-1/2 h-auto mx-auto"/>
                    </div>
                </>
            ) : (
                <p>Loading city information...</p>
            )}
            <section>
                <Anchor key='/cities' to={`/cities/`}>
                    <button className="text-xl bg-green-700 rounded px-2 text-white hover:bg-green-500 font-bold m-2">
                        back
                    </button>
                </Anchor>
            </section>
            </section>
            <section className="text-2xl">Under construction</section>
        </main>
    );
};

export default CityDetails
