import React, {useState} from "react";
import { register } from "../actions/auth"
import { useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom";

export default function Register() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confpass, setConfpass] = useState("")

    const handleRegister = async (event) => {
        // exeption processing part
        event.preventDefault();

        const data = {
            username,
            email,
            password
        }
        dispatch(register(data))
        history.push("/home")
    }

    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-3xl text-gray-700 text-center font-semibold">
                            Register
                        </label>
                        <div className="mt-10">
                            <div>
                                <input 
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    type="text" 
                                    placeholder="Username" 
                                    className="p-2 mt-1 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />
                            </div>
                
                            <div className="mt-4">                
                                <input 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email" 
                                    placeholder="Email" 
                                    className="p-2 mt-1 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />                           
                            </div>

                            <div className="mt-4">                
                                <input 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password" 
                                    placeholder="Password" 
                                    className="p-2 mt-1 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />                           
                            </div>

                            <div className="mt-4">                
                                <input 
                                    value={confpass}
                                    onChange={e => setConfpass(e.target.value)}
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    className="p-2 mt-1 block w-full border-none bg-gray-100 h-12 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />                           
                            </div>
                
                            <div className="mt-4">
                                <button 
                                    onClick={handleRegister}
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Register
                                </button>
                            </div>
                
                            <div className="flex mt-4 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Register with
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>
                
                            <div className="flex mt-4 justify-center w-full">
                                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Github
                                </button>
                
                                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Google
                                </button>
                            </div>
                
                            <div className="mt-4">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >You have already the account?</label>
                                    <Link to="/login" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

