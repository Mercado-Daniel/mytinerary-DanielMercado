import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { user_login, user_photo } from "../store/actions/userActions"
import {Link as Anchor} from 'react-router-dom'

//import axios from "axios"




const SignIn = () => {

    const store = useSelector(store => store.userReducer)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const handleInput = (event) => {//obtiene los datos de los input
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        
        try {
            //const {data} = await axios.post('http://localhost:7000/api/auth/signin', formData)
            //console.log(data)
            //localStorage.setItem('token', JSON.stringify(data.response.token))
            //localStorage.setItem('user', JSON.stringify(data.response.user))
            dispatch(user_login({
                data: formData
                
            }))
            
        } catch (error) {
            console.error
        }
        
    }

    const handPhoto = (event) => {
        event.preventDefault()
        const usua = {
            photo: 'data:image/jpeg;base64,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'
        }
        dispatch(user_photo(usua))
    }


    return (
        
        <main className="container mx-auto rounded-3xl bg-gray-100 my-40">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 rounded-xl">
                <div className="bg-gray-900 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-100">LogIn</h2>
                    <form onSubmit={handleSignIn} action="">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-100">Email</label>
                            <input name="email" onChange={handleInput} type="email" id="email" className="w-full text-gray-100 border border-gray-300 bg-gray-600 rounded px-3 py-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-100">Password</label>
                            <input name="password" onChange={handleInput} type="password" id="password" className="w-full text-gray-100 border border-gray-300  bg-gray-600 rounded px-3 py-2" />
                        </div>
                        <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500"  >Sign In</button>
                    </form>
                    <Anchor to={`/signup`}>
                        <p className="text-gray-100">Create an account</p>    
                    </Anchor>
                </div>
            </div>
        </main>
    )
    
}

export default SignIn
