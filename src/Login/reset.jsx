import React from "react"
import { Typography, Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export default function Reset() {
    const navigate = useNavigate()

    return (
        <section className="bg-gray-100 text-black ">
            <div className="flex flex-col items-center justify-center px-6 shadow-md py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full text-center p-6 shadow-md  bg-white rounded-lg  md:mt-0 sm:max-w-md sm:p-8">

                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Change Password
                    </Typography>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-left ">New Password</label>
                            <Input type="password" name="password" id="password" placeholder="••••••••" className="" required />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-left ">Confirm password</label>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" " required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-black rounded bg-gray-50 " required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="newsletter" className=" text-black ">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <Button onClick={() => navigate('../dashbord')} color="gray" size="lg" className="mt-6 cursor-pointer" fullWidth>
                            sign in
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
