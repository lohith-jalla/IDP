import React from 'react';
import HeaderComp from './HeaderComp'
import {PathAtom} from './PathAtom'
import {useRecoilState} from 'recoil'


function Home(){
    const [path,setpath] = useRecoilState(PathAtom)
    return(<div className='font-quick '>
       
       < HeaderComp />
        {/* ***********************************Div-1************************ */}
        <div className='mt-20 h-5/6 flex justify-around items-center '>
            <div className="">
                <h1 className='text-5xl font-bold'>Go Everywhere with </h1> <br />
                <span className='text-6xl font-bold cursor-pointer rounded-2xl text-Black'>Best Deal</span>
                <div className="flex flex-col">
                    <input className="w-3/4 mt-7 border-2 border-black rounded-2xl p-2" placeholder='Search Places' type="text" name="Search Places" />
                    <input type="button" onClick={()=>{setpath('/RidesPage')}} value="See Prices" className='w-1/4 m-3 rounded-xl text-base ml-24 text-white bg-black hover:bg-slate-700 p-2' />
                </div>
            </div>
            <div className="-mr-24">
                <img src="img-1.png" className='w-9/12 rounded-2xl object-fit' />
            </div>
        </div>
        {/* ***************************Div-2****************************** */}
        <div className='m-20 h-5/6 flex justify-around items-center'>  
            <div className="-mr-24">
                <img src="img-2.png" className='w-9/12 rounded-2xl object-fit' />
            </div>
            <div className="">
                <h1 className='text-4xl font-bold'>Become Superstar by saving with <p className='text-5xl mt-4'>Best Deal</p></h1>
                <p className='text-lg mt-4'>Use BestDeal for more cheaper and safer rides. <br /> We ensure the trusted Drivers and a safe Journey </p>
                <input type="button" value="Get Started" className='w-1/4 m-3 rounded-xl text-base text-white bg-black hover:bg-slate-700 p-2' onClick={()=>{
                    setpath('/RidesPage')
                }} />
            </div>
        </div>
        {/* ***********************************Div-3************************ */}
        <div className='mt-20 mb-10 h-5/6 flex justify-around items-center '>
            <div className="">
                <h1 className='text-4xl font-bold'>Wanna Know Some Recipies !<p className='text-5xl mt-4'>Best Deal</p></h1>
                <p className='text-lg mt-4'>Click Here To know about some magical Recipies<br /> Delight your self with these easy and variety cooking meals.</p>
                <div className="flex flex-col">
                    <input type="button" onClick={()=>{setpath('/FoodPage')}} value="Coocking Magic Here!" className='w-2/4 m-3 rounded-xl text-base ml-24 text-white bg-black hover:bg-slate-700 p-2' />
                </div>
            </div>
            <div className="">
                <img src="food.png" className='rounded-2xl' />
            </div>
        </div>

        {/* **********Footer***************** */}
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

export default Home;
