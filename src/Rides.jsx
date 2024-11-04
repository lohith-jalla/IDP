import HeaderComp from './HeaderComp';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function Rides() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [priceDetails, setPriceDetails] = useState(null);

    const url = 'https://distanceto.p.rapidapi.com/distance/route/detailed';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '7d4ea70568mshf533f2d36c95d05p1b208bjsn8eeb57519e40',
            'x-rapidapi-host': 'distanceto.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            route: [
                { country: 'IND', name: source },
                { country: 'IND', name: destination }
            ]
        }
    };

    const get = async () => {
        try {
            const response = await axios(url, options);
            
            // Extract distance from response
            const distance = response.data.route.car.distance; 

            // Calculate prices
            const uberPrice = (distance * 8.4).toFixed(2);
            const olaPrice = (distance * 9.2).toFixed(2);
            const rapidoPrice = distance <= 30 ? (distance * 7.5).toFixed(2) : 'N/A';

            // Update state to display in UI
            setPriceDetails({
                Distance: distance,
                Uber: uberPrice,
                Ola: olaPrice,
                Rapido: rapidoPrice
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            setPriceDetails({ error: "Failed to retrieve distance or calculate prices." });
        }
    };

    return (
        <div className="font-quick mt-5">
            <HeaderComp />
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src="Rides-1.png" alt="Rides" />
                </div>
                
                <div className="w-9/12 -mt-6 rounded-2xl text-black grid grid-cols-4 gap-1 bg-white border-2 border-black z-100">
                    <input 
                        type="text" 
                        className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold" 
                        placeholder="Leaving From"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold" 
                        placeholder="Going To"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <input type="text" className="p-3 rounded-2xl hover:bg-slate-200 focus:outline-none focus:bg-slate-200 placeholder-gray-600 placeholder:font-bold" placeholder="1 Passenger"/>
                    <input type="button" className="p-3 rounded-r-xl bg-sky-400 hover:bg-sky-300 cursor-pointer font-bold" value="Estimate Price" onClick={get} />
                </div>

                {/* Price Details */}
                {priceDetails && (
                    <div className="my-4">
                        <h2 className="text-lg font-bold">Price Details:</h2>
                        <div className="flex flex-col justify-start items-start">
                            {priceDetails.error ? (
                                <p className="text-red-500">{priceDetails.error}</p>
                            ) : (
                                <>
                                    <p className=''>Distance: {priceDetails.Distance} km</p>
                                    <p>Uber Price: ₹{priceDetails.Uber}</p>
                                    <p>Ola Price: ₹{priceDetails.Ola}</p>
                                    <p>Rapido Price: ₹{priceDetails.Rapido}</p>
                                </>
                            )}
                        </div>
                    </div>
                )}
              
                <div className="my-16  w-10/12 grid grid-cols-1 gap-2 lg:grid-cols-3 ">
                    <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                        <img src="Rides-img-1.png" alt="Rides 1"/>
                        <h1 className="text-xl font-bold">Your pick of rides at low prices</h1>
                        <p className="text-base font-semibold">No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</p>
                    </div>
                    <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                        <img src="Rides-img-2.png" alt="Rides 2"/>
                        <h1 className="text-xl font-bold">Trust who you travel with</h1>
                        <p className="text-base font-semibold">We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</p>
                    </div>
                    <div className="p-5 border-2 rounded-2xl hover:bg-slate-100 cursor-pointer">
                        <img src="Rides-img-3.png" alt="Rides 3"/>
                        <h1 className="text-xl font-bold">Scroll, click, tap and go!</h1>
                        <p className="text-base font-semibold">Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</p>
                    </div>
                </div>

            </div>
            
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
                <div className="flex flex-col items-center">
                    <div>
                        <p className="text-md font-bold pt-3 flex flex-col items-center">Contact Us</p>
                        <div className="flex justify-center items-center text-white gap-3">
                            <img className="h-4 w-5 " src="phone.png" alt="Phone"/>
                            <a href="tel:7564941074">7386260157</a>
                        </div>
                        <div className="flex justify-center items-center text-white gap-3">
                            <img className="h-4 w-5" src="mail.png" alt="Mail"/>
                            <a href="mailto:221fa04637@vignan.ac.in">221fa04637@vignan.ac.in</a>
                        </div>
                    </div>
                    <div className="pt-10">
                        <p className="text-md font-bold flex justify-center">Follow Us</p>
                        <div className="flex items-center p-1.5 gap-2.5">
                            <a href="https://www.instagram.com/"><img className="h-4 w-4" src="instagram.png" alt="Instagram"/></a>
                            <a href="https://www.linkedin.com/"><img className="h-4 w-4" src="linkedin.png" alt="LinkedIn"/></a>
                            <a href="https://www.twitter.com/"><img className="h-4 w-4" src="twitter.png" alt="Twitter"/></a>
                            <a href="https://www.youtube.com/"><img className="h-4 w-4" src="youtube.png" alt="YouTube"/></a>
                            <a href="https://www.facebook.com/"><img className="h-4 w-4" src="facebook.png" alt="Facebook"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-3 bg-black text-white">
                @Best Deal - All rights reserved-2024
            </div>      
        </div>
    );
}

export default Rides;
