import HeaderComp from './HeaderComp'
import React, { useState } from 'react';

function Rides(){
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [priceDetails, setPriceDetails] = useState(null);

    const get = async () => {
        try {
            const response = await fetch('http://localhost:3000/distance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    route: [
                        { country: 'IND', name: source },
                        { country: 'IND', name: destination }
                    ]
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPriceDetails(data);
        } catch (error) {
            console.error('Error fetching price details:', error);
        }
    };

    return(<div className="font-quick mt-5">
        
        < HeaderComp />

        <div className="flex flex-col justify-center items-center">
            <div className="">
                <img src="Rides-1.png" />
            </div>
            
            <div className="w-9/12 -mt-6 rounded-2xl text-black grid grid-cols-4 gap-1 bg-white border-2 border-black z-100 ">
                <input type="text" className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold " placeholder="Leaving From"/>
                <input type="text" className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold " placeholder="Going To"/>
                <input type="text" className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold " placeholder="1 Passenger"/>
                <input type="button" className="p-3 rounded-r-xl bg-sky-400 hover:bg-sky-300 cursor-pointer font-bold" value="Estimate Price" onClick={get} />
            </div>
            {/* ***********price Details**************** */}
            {priceDetails && (
                    <div className="my-4">
                        <h2 className="text-lg font-bold">Price Details:</h2>
                        <p>Distance: {priceDetails.Distance} km</p>
                        <p>Uber Price: ₹{priceDetails.Uber}</p>
                        <p>Ola Price: ₹{priceDetails.Ola}</p>
                        <p>Rapido Price: ₹{priceDetails.Rapido}</p>
                    </div>
                )}
            
            <div className="my-16  w-10/12 grid grid-cols-1 gap-2 lg:grid-cols-3 ">
                <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                    <img src="Rides-img-1.png" />
                    <h1 className="text-xl font-bold">Your pick of rides at low prices</h1>
                    <p className="text-base font-semibold">No matter where you’re going, by bus or carpool, find the perfect ride from our wide 
                        range of destinations and routes at low prices.</p>
                </div>
                <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                    <img src="Rides-img-2.png" alt="" />
                    <h1 className="text-xl font-bold">Trust who you travel with</h1>
                    <p className="text-base font-semibold">We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re 
                        travelling with and can book your ride at ease on our secure platform.</p>
                </div>
                <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                    <img src="Rides-img-3.png" alt="" />
                    <h1 className="text-xl font-bold">Scroll, click, tap and go!</h1>
                    <p className="text-base font-semibold">Booking a ride has never been easier! Thanks to our simple app powered by great technology, 
                        you can book a ride close to you in just minutes.</p>
                </div>
            </div>
        </div>
        {/* *****************************Footer******************************** */}
        <div className="grid grid-cols-1 place-content-between font-quick place-items-center p-7 lg:grid-cols-3 sm:grid-cols-2 gap-10 border-b bg-black">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <p className="text-2xl font-bold text-white">Best Deal</p>
                </div>
                <div className="text-white flex flex-col items-center cursor-pointer">
                    <p>About Us</p>
                    <p>Success Stories</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div>
                <p className="text-md font-bold pt-3 flex justify-center">About Us</p>
                <div className="text-white ">
                    <p className="flex justify-center">Best Deal is your go-to platform for Fare Price Calculation. We provide easy access to different places to help you go explore different places.</p>
                </div>
            </div>
            <div  className="flex flex-col items-center">
                <div>
                    <p className="text-md font-bold pt-3 flex flex-col items-center">Contact Us</p>
                    <div className="flex justify-center items-center text-white gap-3">
                        <img className="h-4 w-5 " src="phone.png" />
                        <a href="tel:7564941074">7386260157</a>
                    </div>
                    <div className="flex justify-center items-center text-white gap-3">
                        <img className="h-4 w-5" src="mail.png" />
                        <a href="mailto:221fa04637@vignan.ac.in">221fa04637@vignan.ac.in</a>
                    </div>
                </div>
                <div className="pt-10">
                    <p className="text-md font-bold flex justify-center">Follow Us</p>
                    <div className="flex items-center p-1.5 gap-2.5">
                        <a href="https://www.instagram.com/"><img className="h-4 w-4" src="instagram.png" /></a>
                        <a href="https://www.linkedin.com/"><img className="h-4 w-4" src="linkedin.png" /></a>
                        <a href="https://www.twitter.com/"><img className="h-4 w-4" src="twitter.png" /></a>
                        <a href="https://www.youtube.com/"><img className="h-4 w-4" src="youtube.png" /></a>
                        <a href="https://www.facebook.com/"><img className="h-4 w-4" src="facebook.png" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center p-3 bg-black text-white">
            @Best Deal - All rights reserved-2024
        </div>
    </div>)
}


export default Rides;