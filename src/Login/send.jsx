import React from "react"
import { Typography, Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export default function Send() {
    const navigate = useNavigate()

    return (
        <section className="bg-gray-50  text-black">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full p-6 bg-white text-black rounded-lg shadow-md md:mt-0 sm:max-w-md  sm:p-8">
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                        Forgot your password?
                    </h1>
                    <p className="font-light text-gray-800">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" name="email" id="email" className="bg-white border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-900 ">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <Button onClick={() => navigate('../login')} color="gray" size="lg" className="mt-6 cursor-pointer" fullWidth>
                            Reset password
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
