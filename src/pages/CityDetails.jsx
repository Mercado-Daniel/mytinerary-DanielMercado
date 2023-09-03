import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link as Anchor} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { get_itineraries } from "../store/actions/itineraryActions";
import { current } from "@reduxjs/toolkit";
import CardItinerary from "../components/CardItinerary";

const CityDetails = () => {
    const { id } = useParams()
    console.log(id)

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

    const itineraries = useSelector((store) => store.itineraryReducer.itineraries)
    console.log(itineraries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_itineraries({
            id: id
        }))
        
    }, []);

    return (
        <main className="container mx-auto my-40 flex flex-col items-center justify-center bg-gray-200 rounded-3xl">
            <section className="w-full bg-gray-900 rounded-3xl px-4 text-center text-3xl">
                {city ? (
                    <div className="w-full pb-20">
                        <h1 className="my-4 text-gray-100 text-5xl">{city.name}</h1>
                        <div className="w-full">
                            <img src={city.image} alt="" className="w-full mx-auto mx-auto rounded-3xl  object-cover"/>
                        </div>
                    </div>
                ) : (
                    <p>Loading city information...</p>
                )}
            </section>
            <section>
                <Anchor key='/cities' to={`/cities/`}>
                    <button className="text-xl bg-green-700 rounded px-2 text-white hover:bg-green-500 font-bold m-2">
                        back
                    </button>
                </Anchor>
            </section>
            {
                
                itineraries?.length > 0 
                ? 
                <section className="w-full grid grid-cols-1 gap-4">
                    {

                        itineraries?.map((itinerary) => {
                            return (
                                <CardItinerary  
                                userImage = {itinerary.user.image}
                                userName = {itinerary.user.name}
                                price = {itinerary.price}
                                name  = {itinerary.name}
                                duration = {itinerary.duration}
                                likes = {itinerary.likes}
                                hashtags = {itinerary.hashtags}
                                >
                                </CardItinerary>
                            )
                        })
                    }
                </section>
                :<section className="text-center">
                    <p className="text-2xl">No itineraries were found.</p>
                </section>
            }
        </main>
    );
};

export default CityDetails
