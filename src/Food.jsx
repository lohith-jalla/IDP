import HeaderComp from './HeaderComp'


function Food(){
    return(<div className={`mt-20`}>
        
        < HeaderComp />
        {/* **********************Foods**************************** */}
        <div className="font-quick my-10 flex flex-col justify-center items-center">
            <h1 className="mb-10 text-6xl font-bold ">Famous Indian Recipies</h1>
            <div className="w-11/12 grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* *************************DIV-1********************** */}
                <div className="flex flex-col rounded-3xl justify-center items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <h1 className="text-5xl font-bold">Biriyani</h1>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>2 tbsp ghee or oil</li>
                            <li>1 large onion, thinly sliced</li>
                            <li>1 large tomato, chopped, 1 green chili, slit lengthwise</li>
                            <li>1 tbsp biryani masala</li>
                            <li>Fresh coriander leaves, chopped
                                Fresh mint leaves, chopped</li>
                            <li>Saffron strands (a pinch) soaked in 2 tbsp warm milk (optional, for color)</li>
                            <li>Fried onions (optional, for garnish)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p></p>Marinate chicken in yogurt, turmeric, chili, and garam masala. Cook basmati rice with bay leaves, 
                        cardamom, cloves, and cinnamon until 80% done. Fry onions until golden, then add tomatoes and green chili. 
                        Layer the rice and chicken, adding biryani masala, fresh coriander, mint, and saffron milk. 
                        Seal and cook on low heat to blend flavors. Garnish with fried onions, coriander, and mint leaves. Serve
                        hot with raita or a fresh salad.
                    </div>
                </div>
                 {/* *************************DIV-2********************** */}
                 <div className="flex flex-col rounded-3xl justify-center items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <p className="text-5xl font-bold">Cake</p>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>1½ cups all-purpose flour</li>
                            <li>1 cup granulated sugar</li>
                            <li>½ cup unsweetened cocoa powder</li>
                            <li>1½ tsp baking powder
                            ½ tsp baking soda</li>
                            <li>2 large eggs
                            1 cup milk</li>
                            <li>½ cup vegetable oil
                            2 tsp vanilla extract
                            1 cup boiling water</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p>Preheat the oven to 350°F (175°C) and grease two 9-inch round baking pans. In a bowl, mix flour, sugar, cocoa powder, baking powder, 
                            baking soda, and salt. 
                            Add eggs, milk, vegetable oil, and vanilla, beating until smooth. 
                            Gradually mix in boiling water to create a thin batter. Pour
                            the batter into the prepared pans and bake for 30-35 minutes until a toothpick comes out clean. 
                            Let cool for 10 minutes before transferring to wire racks to cool completely.</p>
                    </div>
                </div> {/* *************************DIV-3********************** */}
                <div className="flex flex-col rounded-3xl items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <h1 className="text-5xl font-bold">Panner Tikka</h1>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>250g paneer, cubed</li>
                            <li>1 cup yogurt</li>
                            <li>2 tbsp tandoori masala</li>
                            <li>1 bell pepper, cubed</li>
                            <li>1 onion, cubed</li>
                            <li>1 tbsp lemon juice</li>
                            <li>Salt to taste</li>
                            <li>Skewers</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p>Mix yogurt, tandoori masala, lemon juice, and salt. Marinate paneer, bell pepper, and onion for 
                            at least 30 minutes. Preheat the grill or oven. Skewer the marinated vegetables and paneer, 
                            then grill for 15-20 minutes until charred. Serve hot with mint chutney.</p>
                    </div>
                </div> {/* *************************DIV-4********************** */}
                <div className="flex flex-col rounded-3xl justify-center items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <h1 className="text-5xl font-bold">Chole Bature</h1>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>1 cup chickpeas, soaked overnight</li>
                            <li>1 onion, chopped</li>
                            <li>2 tomatoes, pureed</li>
                            <li>2 tbsp chole masala</li>
                            <li>1 tsp ginger-garlic paste</li>
                            <li>2 cups flour</li>
                            <li>1 tbsp yogurt</li>
                            <li>Oil for frying</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p>Cook soaked chickpeas until soft. Sauté onions and ginger-garlic paste until golden, 
                            then add tomato puree and chole masala. Simmer for 10 minutes. For bhature, knead flour with yogurt, 
                            roll into discs, and deep-fry until puffed. Serve chole with bhature.</p>
                    </div>
                </div> {/* *************************DIV-5********************** */}
                <div className="flex flex-col rounded-3xl justify-center items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <h1 className="text-5xl font-bold ">Aloo Gobi</h1>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>2 cups cauliflower florets</li>
                            <li>2 potatoes, diced</li>
                            <li>1 onion, chopped</li>
                            <li>1 tomato, chopped</li>
                            <li>1 tsp cumin seeds</li>
                            <li>1 tsp turmeric powder</li>
                            <li>1 tsp garam masala</li>
                            <li>Salt to taste</li>
                            <li>Fresh coriander for garnish</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p>Heat oil in a pan, add cumin seeds, and sauté onions until golden. Add potatoes and cauliflower, 
                            stirring well. Add turmeric, salt, and chopped tomatoes. Cover and cook until tender, 
                            stirring occasionally. Sprinkle garam masala, mix well, and cook for another minute. 
                            Garnish with fresh coriander and serve with roti or rice.</p>
                    </div>
                </div> {/* *************************DIV-6********************** */}
                <div className="flex flex-col rounded-3xl justify-center items-center border-2 p-4 bg-blue hover:bg-orange-500 hover:scale-95 cursor-pointer transition-all duration-300 hover:text-white">
                    <h1 className="text-5xl font-bold ">Dal Tadaka</h1>
                    <div className="w-full p-4">  
                        <p className="text-3xl font-semibold">Items required</p>
                        <ul>
                            <li>1 cup yellow lentils (moong or toor dal)</li>
                            <li>1 onion, chopped</li>
                            <li>2 tomatoes, chopped</li>
                            <li>2 green chilies, slit</li>
                            <li>1 tsp cumin seeds</li>
                            <li>1 tsp turmeric powder</li>
                            <li>2 tbsp ghee or oil</li>
                            <li>Fresh coriander for garnish</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-3xl font-semibold">Process</h1>
                        <p>Cook lentils with water and turmeric until soft. In a pan, heat ghee, add cumin seeds, 
                            and sauté onions until golden. Add green chilies and tomatoes, cooking until soft. 
                            Mix in the cooked lentils, adjusting salt and consistency as needed. Simmer for 5 minutes, 
                            then garnish with coriander. Serve with rice or roti.</p>
                    </div>
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

export default Food