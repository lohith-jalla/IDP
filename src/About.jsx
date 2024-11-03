import HeaderComp from './HeaderComp'

function About(){
    return(<div className="font-quick ">
        
        <HeaderComp />

        {/* **************************About*********************** */}
        <div className="">
            <div className="p-10 flex justify-center items-center bg-blue gap-5 text-white flex-col lg:flex-row">
                <img src="About-1.png" alt="" />
                <div className="font-quick flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-5">Help us keep you safe from scams</h1>
                    <p className="font-semibold">At BestDeal, we're working hard to make our platform as secure as it can be.<p></p> But when scams do happen, 
                        we want you to know exactly how <p></p> to avoid and report them. Follow our tips to help us keep you safe.</p>
                    <button className="mt-5 text-sm border-2 p-2 font-bold text-blue bg-white hover:bg-slate-200 rounded-2xl">Learn More</button>
                </div>
            </div>
        </div>
        {/* *********************Best Deal Help Center********************* */}
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mt-5 ">Help Center</h1>
            <div className="w-10/12 grid grid-cols-1 gap-10 my-16 lg:grid-cols-2">
                {/* *****************div-1******************** */}
                <div className="hover:bg-slate-200 rounded-2xl p-4">
                    <h1 className="text-base font-bold mb-5">How do I cancel my ride?</h1>
                    <p className="text-small font-semibold">If you have a change of plans, you can always cancel your 
                        ride from the ‘Your rides’ section of our app. 
                        The sooner you cancel, the better. That way the driver has time to accept new passengers. 
                        The amount of your refund will depend on how far in advance you cancel. 
                        If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, 
                        excluding the service fee.</p>
                </div>
                {/* *****************div-2******************** */}
                <div className="hover:bg-slate-200 rounded-2xl p-4">
                    <h1 className="text-base font-bold mb-5">How do I book a ride?</h1>
                    <p className="text-small font-semibold">You can book a ride on our mobile app, or on Best Deal. 
                        Simply search for your destination, choose the date you want to travel and pick vehical that suits 
                        you best! Some rides can be booked instantly, while other rides require manual approval from the driver. 
                        Either way, booking a ride is fast, simple and easy.</p>
                </div>
                {/* *****************div-3******************** */}
                <div className="hover:bg-slate-200 rounded-2xl p-4">
                    <h1 className="text-base font-bold mb-5 ">How much does a ride cost?</h1>
                    <p className="text-small font-semibold">The costs of a carpool ride can vary greatly, and depend on factors 
                    like distance, time of departure, the demand of that ride and more. 
                    It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride. 
                    Check out some of our top destinations to get an idea of price, or 
                    start searching for your next ride on Best Deal.</p>
                </div>
                {/* *****************div-4******************** */}  
                <div className="hover:bg-slate-200 rounded-2xl p-4">
                    <h1 className="text-base font-bold mb-5">What are the benefits of travelling by Best Deal?</h1>
                    <p className="text-small font-semibold">There are multiple advantages, over other means of transport. 
                        Travelling by Best Deal is usually more affordable, especially for longer distances. 
                        Best Deal is also more eco-friendly, as sharing a car means there will be fewer cars on the road, 
                        and therefore fewer emissions. Taking a ride is also a safe way to travel in the current times. 
                        Because there are only a few people in a car, you have fewer points of contact 
                        and there’s less risk than other travel options.</p>
                </div>
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

export default About