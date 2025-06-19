import { imghero } from "../assets"

const Hero = () => {
  return (
    <div className="bg-[#3F181C] dark:bg-[#121212] transition-colors duration-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
      
        <div className="text-white dark:text-gray-100 flex flex-col gap-6 max-w-lg">
          <h1 className="text-4xl font-bold font-mono text-orange-300">
            Best Coffee
          </h1>
          <h2 className="text-4xl font-bold">
            Make Your Day Great With Our Special Coffee
          </h2>
          <p className="text-lg text-gray-200 dark:text-gray-300">
            Welcome to our coffee paradise. Where every bean tells a story and every cup sparks joy.
          </p>

       
          <div className="flex gap-4 flex-wrap">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 dark:hover:bg-orange-400 transition duration-300">
              Order Now
            </button>
            <button className="bg-transparent text-white dark:text-gray-100 px-6 py-3 rounded-full font-medium border border-white dark:border-gray-300 hover:border-orange-500 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={imghero}
            alt="Hero Coffee"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
