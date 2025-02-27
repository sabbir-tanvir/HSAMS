import React from 'react';
import { Input, Button } from "@material-tailwind/react";

export function Manage() {
    return (
        <div className='flex flex-col bg-white min-h-screen'>
            <nav className='flex justify-between w-full bg-amber-300 p-4'>
                <a href='/admin' className='text-2xl font-bold'>Admin</a>
                <a href='/manage' className='text-2xl font-bold'>Dashboard</a>
            </nav>
            <div className='grid grid-cols-5 gap-4 p-6'>
                <div className='bg-white col-span-1  gap-4 flex flex-col rounded-lg shadow-lg p-6'>
                    <Button>
                        Seat
                    </Button>
                    <Button>
                        online
                    </Button>
                </div>




                <div className='bg-white col-span-4  rounded-lg grid shadow-lg p-6'>
                    <h2 className='text-2xl font-bold mb-4'>Seat Management</h2>

                    <table className='w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='border border-gray-300 p-2'>Seat</th>
                                <th className='border border-gray-300 p-2'>Name</th>
                                <th className='border border-gray-300 p-2'>Time</th>
                                <th className='border border-gray-300 p-2'>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example rows - you can make this dynamic */}
                            <tr>
                                <td className='border border-gray-300 p-2'>D01</td>
                                <td className='border border-gray-300 p-2'>John Doe</td>
                                <td className='border border-gray-300 p-2'>10:00 AM</td>
                                <td className='border border-gray-300 p-2'>Paid</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-2'>D02</td>
                                <td className='border border-gray-300 p-2'>Jane Smith</td>
                                <td className='border border-gray-300 p-2'>11:00 AM</td>
                                <td className='border border-gray-300 p-2'>Pending</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>

                    <div>
                        <h3 className='text-xl font-bold mt-4'>Actions</h3>
                        <div className='flex gap-2 mt-2'>
                            <div>
                                <Input
                                    id="email"
                                    color="gray"
                                    size="lg"
                                    type="email"
                                    name="email"
                                    placeholder="name@mail.com"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <Button color='blue'>Add Seat</Button>
                            <Button color='red'>Remove Seat</Button>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h3 className='text-xl font-bold mb-2'>Online Status</h3>
                        <div className='flex gap-2'>
                            <span className='inline-block w-3 h-3 bg-green-500 rounded-full'></span>
                            <span>Active Users: 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;