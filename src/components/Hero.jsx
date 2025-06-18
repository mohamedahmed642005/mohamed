import { imghero } from "../assets"


const Hero = () => {
  return (
    <div className="bg-[#3F181C]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
            {/* one dev  */}
            <div className="text-white flex flex-col gap-6 max-w-lg">
                <h1 className="text-4xl font-bold font-mono text-orange-300">
                    Best Coffe
                </h1>
                <h2 className="text-4xl font-bold">
                    Make Your Day Great Whith Our Spicle Coffe
                    
                    </h2> 
                <p className="text-lg">
                    Welcome to our Coffe paradisen Where every bean tells  a story and every cup spakrs joy
                </p>
                {/* الازرار  */}
                <div className="flex gap-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-transparent transition duration-300">
                        Order Now
                    </button>
                    <button className="bg-transparent text-white px-6 py-3 rounded-full font-medium border border-white transition duration-300">
                        Contact US
                    </button>
                </div>
               


            </div>
               {/* scend dev */} 
            <div className="flex justify-center">
                    <img src={imghero} alt="Hero Coffe"  />
                </div>




        </div>



    </div>
  )
}

export default Hero