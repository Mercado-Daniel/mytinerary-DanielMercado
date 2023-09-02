import React from "react"

import { useEffect , useState} from "react"
import Card from "../components/Card"
import {Link as Anchor} from 'react-router-dom'
import { useRef } from "react"
import {useDispatch, useSelector} from "react-redux"
import { get_cities, filter_cities } from "../store/actions/cityActions"

const Cities = () => {
    //const [cities, setCities] = useState([]);

    const cities = useSelector((store) => store.cityReducer.cities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_cities())
        //axios.get(`http://localhost:7000/api/cities?name=`)//lleva la url de la api
        //    .then(response => setCities(response.data.cities))
        //    .catch(err => console.log(err))
    }, []);

    const handleSearch = () => {
        
            //const response = await axios.get(`http://localhost:7000/api/cities?name=${inputSearch.current.value}`)//lleva la url de la api
            //setCities(response.data.cities)
            dispatch(filter_cities({
                name:inputSearch.current.value
            }))
        
    }

    let inputSearch = useRef(() => {

    })
    

    return (
        <main className="container  mx-auto mt-40 mb-20 md:my-20" >
                
            <section className="text-center my-5">
                <h1 className="text-3xl">Cities</h1>
                <div>
                    <input ref={inputSearch}  type="text" placeholder="Search" className="border border-gray-900 rounded px-2"/>
                    <button onClick={handleSearch} className="bg-green-700 rounded-full px-2 text-white hover:bg-green-500 font-bold m-2">
                        Search
                    </button>
                </div>
            </section>
            {
                cities?.length > 0 
                ? 
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
                :<section className="text-center">
                    <p className="text-2xl">No cities were found.</p>
                </section>
            }

            
        </main>
    )
    
}

export default Cities
