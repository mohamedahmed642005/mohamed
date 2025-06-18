import { Link } from "react-router-dom"
import { logo1 } from "../assets"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
]

function NAVABAR() {
  const [openBar, setOpenBar] = useState(false)

  return (
    <div className="bg-[#3F181C] h-[70px] relative z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* logo */}
        <div className="text-white flex items-center gap-2">
          <img className="w-10" src={logo1} alt="Logo" />
          <h1 className="text-3xl font-bold">Cofee</h1>
        </div>

        {/* desktop nav */}
        <ul className="hidden mdl:flex items-center gap-8 text-white text-lg">
          {Links.map((item) => (
            <li
              className="px-2 py-1 hover:bg-[#a52935] transition duration-500 rounded"
              key={item.id}
            >
              <Link to={item.path}> {item.page} </Link>
            </li>
          ))}
        </ul>

        {/* desktop button */}
        <div className="hidden mdl:flex text-white gap-4">
          <button className="bg-transparent px-4 py-2 rounded font-medium border border-white hover:border-orange-400 hover:text-orange-300 transition duration-300">
            Get Started
          </button>
        </div>

        {/* mobile menu icon */}
        <div
          className="mdl:hidden relative cursor-pointer text-white"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="24px" />}
        </div>
      </div>

      {/* mobile menu */}
      {openBar && (
        <div className="mdl:hidden fixed top-0 left-0 w-full h-screen bg-[#3F181C] text-white flex flex-col items-center justify-center gap-8 text-2xl z-40">
          {Links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setOpenBar(false)}
              className="hover:text-orange-400 transition"
            >
              {item.page}
            </Link>
          ))}
          <button className="border border-white px-4 py-2 rounded hover:border-orange-400 hover:text-orange-300 transition">
            Get Started
          </button>
        </div>
      )}
    </div>
  )
}

export default NAVABAR
