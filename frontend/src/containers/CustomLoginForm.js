import React, { useState } from 'react';
import Eye from './Eye';
import EyeSlash from './EyeSlash';
import facelogo from '../assets/images/face-logo.svg'
import googlelogo from '../assets/images/google-logo.svg'
import LogoInsta from '../assets/images/LogoInsta';
import logorecoblack from '../assets/images/logorecognize-black.svg'
import { Link } from "react-router-dom";

const CustomLoginForm = ({ username, password, onChange, onSubmit }) => {
    const [show, setShow] = useState(true)
    return (
        <div>
            <div className={"bg-white w-full min-h-screen flex items-center justify-center"}>
                <div className={"w-full py-8"}>
                    <div className={"flex items-center justify-center space-x-2"}>
                        <img src={logorecoblack} style={{ width: "200px" }} />
                    </div>
                    <div className="bg-white w-5/6 md:w-3/6 lg:w-2/5 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

                        <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Login</h2>
                        <p className="text-center text-sm text-gray-600 mt-2">Don't have an account?
                            <Link to="/signup" className="text-blue-600 hover:text-blue-700 hover:underline" > Sign up here</Link>
                        </p>


                        <form className="my-8 text-sm" onSubmit={onSubmit}>
                            <div className="flex flex-col my-4">
                                <label htmlFor="username" className="text-gray-700">Username</label>
                                <input
                                    value={username}
                                    onChange={onChange}
                                    type="text"
                                    name="username"
                                    id="username"
                                    class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="flex flex-col my-4">
                                <label htmlFor="password" className="text-gray-700">Password</label>
                                <div className="relative flex items-center mt-2">
                                    <input value={password} onChange={onChange} type={show ? 'password' : 'text'} name="password" id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" />
                                    {show ?
                                        <button onClick={() => setShow(!show)} type="button" className={`focus:outline-0 absolute right-2 bg-transparent flex items-center justify-center hover:text-black text-gray-400 ${show ? "hover:text-black" : "hover:text-gray-400"}`}>
                                            <Eye />
                                        </button> :
                                        <button onClick={() => setShow(!show)} type="button" className="focus:outline-0 absolute right-2 bg-transparent flex items-center justify-center text-black">
                                            <EyeSlash />
                                        </button>
                                    }

                                </div>
                            </div>

                            <div className="my-4 flex items-center justify-center space-x-4">
                                <button type="submit" className="bg-black font-bold hover:bg-gray-700 rounded-lg px-20 py-3 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Login</button>
                            </div>

                        </form>

                        <div className="flex items-center justify-between">
                            <div className="w-full h-[1px] bg-gray-300"></div>
                            <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                            <div className="w-full h-[1px] bg-gray-300"></div>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <img src={googlelogo} />


                                <span>Continue with Google</span>
                            </a>

                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <img src={facelogo} />
                                <span>Continue  with Facebook</span>
                            </a>

                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <LogoInsta />
                                <span>Continue with Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default CustomLoginForm
