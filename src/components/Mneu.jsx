import {
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imghero
} from "../assets"

const Mneu = () => {
  const Data = [
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui.",
      imag: imag1,
    },
    {
      id: 2,
      titel: "Cold Brews",
      desc: "Delicious and refreshing cold brews for every occasion. Handcrafted with love and premium beans to boost your energy and mood.",
      imag: imag2,
    },
    {
      id: 3,
      titel: "Espresso Shots",
      desc: "Rich, bold espresso shots to keep you going strong all day. Experience the real taste of authentic espresso blends.",
      imag: imag3,
    },
    {
      id: 4,
      titel: "Iced Latte",
      desc: "Smooth and creamy iced lattes, balanced to perfection. A delightful blend of milk, ice, and rich coffee goodness.",
      imag: imag4,
    },
    {
      id: 5,
      titel: "Cappuccino",
      desc: "Classic cappuccino with a foamy top and strong flavor, perfect for your coffee break moments.",
      imag: imag5,
    },
    {
      id: 6,
      titel: "Signature Blend",
      desc: "Our unique signature blend. Carefully selected beans roasted to a perfect balance of flavor and aroma.",
      imag: imghero,
    },
  ]

  return (
    <div className="bg-[#252525] dark:bg-[#121212] py-10 transition-colors duration-300">
      <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
        <h1 className="text-white dark:text-gray-100">Our Menu</h1>
        <div className="bg-orange-400 w-[100px] h-[2px] mt-3"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10 px-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="bg-[#1E1E1E] dark:bg-[#1a1a1a] p-5 rounded-lg shadow-md hover:shadow-orange-500/20 hover:scale-105 transition duration-300"
          >
            <img
              className="w-52 h-52 object-cover rounded-md mb-4 mx-auto"
              src={item.imag}
              alt={item.titel}
            />
            <h2 className="text-white dark:text-orange-200 text-xl font-semibold mb-2">
              {item.titel}
            </h2>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mneu
