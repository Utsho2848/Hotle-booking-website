import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom';
import ReviewHouse from '../Components/ReviewHouse';
import WhosComing from '../Components/WhosComing';
import Payment from '../Components/Payment';
import CheckoutCart from '../Components/CheckoutCart';

const Checkout = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const checkoutData = {
        _id: '60kh586ldt25',
        location: 'Dhaka,Bangladesh',
        title: 'Huge appartment with 4 bedroom',
        image: 'https://i.ibb.co/YPXktqs/Home1.jpg',
        from: '17/11/2023',
        to: '20/11/2023',
        host: {
            name: 'Utsho Khan',
            image: 'https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg',
            email: 'uk@gmail.com',
        },
        price: 50,
        total_guest: 4,
        bedrooms: 2,
        bathrooms: 2,
        ratings: 4.5,
        reviews: 91,
    }

    const { user } = useContext(AuthContext)

    return (
        <div className='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 lg:mx-40 py-8'>
            <div className="w-full max-w-md px-2 py-16 sm:px-0">
                <Tab.Group manual selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List className='flex'>
                        <div className='container flex items-center px-6 py-4 mx-auto whitespace-nowrap'>
                            <Link to='/'>
                                <a href="#" className="text-gray-600 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </a>
                            </Link>

                            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>

                        </div>
                        <Tab className="container flex items-center px-6 py-4 mx-auto  whitespace-nowrap">

                            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline hover:text-blue-500 font-semibold">
                                1. Review House Rules
                            </a>

                            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Tab>
                        <Tab className="container flex items-center px-6 py-4 mx-auto  whitespace-nowrap">

                            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline hover:text-blue-500 font-semibold">
                                2. Who's coming
                            </a>

                            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Tab>
                        <Tab className="container flex items-center px-6 py-4 mx-auto  whitespace-nowrap">
                            <a href="#" className="text-gray-600dark:text-gray-200 hover:underline hover:text-blue-500 font-semibold">
                                3. Confirm and pay
                            </a>

                            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <ReviewHouse></ReviewHouse>
                        </Tab.Panel>
                        <Tab.Panel><WhosComing></WhosComing></Tab.Panel>
                        <Tab.Panel><Payment></Payment></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <CheckoutCart data={checkoutData} />
        </div>
    );
};

export default Checkout;