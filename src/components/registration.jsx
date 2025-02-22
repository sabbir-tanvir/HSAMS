import React from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";

export function RegisterUser() {
    return (
        <div className="bg-gray-100  h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
                    Sign Up
                </Typography>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                            <i className="mx-2 fa fa-solid fa-user"></i>
                        </label>
                        <Input type="text" id="name" name="name" placeholder="Enter your name" className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                            <i className="fa-solid fa-envelope mx-2"></i>
                        </label>
                        <Input type="email" id="email" name="email" placeholder="Enter your email" className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                            <i className="fa-solid fa-lock mx-2"></i>
                        </label>
                        <Input type="password" id="password" name="password" placeholder="Enter your password" className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pfp" className="block text-sm font-medium text-gray-700">
                            Picture
                            <i className="fa-solid fa-image mx-2"></i>
                        </label>
                        <div className="relative">
                            <Input
                                type="file" 
                                id="pfp" 
                                name="pfp"  
                                className="w-full !border-t-blue-gray-200 focus:!border-t-primary"
                                variant="standard"
                                accept="image/*"
                                containerProps={{
                                    className: "min-w-full"
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                            <i className="fa-solid fa-location-dot mx-2"></i>
                        </label>
                        <div className="relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387132.4772381346!2d-74.25819214602015!3d40.70582517274754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1644558351325!5m2!1sen!2suk"
                                width="100%" height="200" style={{ border: 0 }} loading="lazy" className="rounded">
                            </iframe>
                        </div>
                        <Button type="submit" fullWidth className=" cursor-pointer mt-6 h-12 items-center justify-center gap-2 transition duration-200">
                            SignUp
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;
