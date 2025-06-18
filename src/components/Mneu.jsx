import {imag1, imag2,  imag3, imag4, imag5, imghero} from "../assets"

const Mneu = () => {
  const Data = [
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag: imag1,



    },
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag: imag2,



    },
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag: imag3,



    },
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag: imag4,



    },
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag: imag5,



    },
    {
      id: 1,
      titel: "Hot Beverages",
      desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui",
      imag:  imghero,



    },
    
 



  ];



  return (
    <div className="bg-[#252525] py-10">

      <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
        <h1 className="text-white">Our Menu</h1>
        <div className="bg-orange-400 w-[100px] h-[2px] mt-3"></div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10 ">
        {Data .map((item) => (
        <div className="bg-[#1E1E1E] p-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
          <img className="w-52 rounded-md mb-4" src={item.imag} alt=""  />
          <h2 className="text-white text-xl font-semibold mb-2">{item.titel}</h2>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </div>
        ))}



      </div>
    </div>
  )
}

export default Mneu