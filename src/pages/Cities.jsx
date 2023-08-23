import React from "react";
import axios from 'axios';
import { useEffect , useState} from "react";
import Card from "../components/Card";
import {Link as Anchor} from 'react-router-dom';

const Cities = () => {
    const [cities, setCities] = useState();
    useEffect(() => {
        axios.get(`http://localhost:7000/api/cities?name=`)//lleva la url de la api
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, []);

    const handleInputChange = async(city) => {
        try{
            const response = await axios.get(`http://localhost:7000/api/cities?name=${city.target.value}`)//lleva la url de la api
            setCities(response.data.cities)
        } catch(error){
            console.log(error)
        }
    }

    return (
        <main className="container mx-auto mt-40 mb-20 md:my-20">
                
            <section className="text-center my-5">
                <h1 className="text-3xl">Cities</h1>
                <input onChange={handleInputChange} type="text" placeholder="Search" className="border border-gray-900 rounded px-2"/>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    cities?.map((city) => {
                        return (
                            <Anchor key={city._id} to={`/cities/${city._id}`}>
                                <Card name={city.name} image={city.image}/>
                            </Anchor>
                        )
                    })
                }
            </section>
        </main>
    )
    
}

export default Cities
