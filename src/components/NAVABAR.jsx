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

  const closeMobileMenu = () => setOpenBar(false)

  return (
    <div className="bg-[#3F181C] h-[70px] relative z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* logo */}
        <div className="text-white flex items-center gap-2">
          <img className="w-10" src={logo1} alt="Logo" />
          <h1 className="text-2xl font-bold">Cofee</h1>
        </div>

        {/* desktop nav */}
        <ul className="hidden mdl:flex items-center gap-6 text-white text-base">
          {Links.map((item) => (
            <li
              className="px-2 py-1 hover:bg-[#a52935] transition duration-300 rounded"
              key={item.id}
            >
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>

        {/* desktop button */}
        <div className="hidden mdl:flex text-white">
          <button className="bg-transparent px-4 py-2 rounded font-medium border border-white hover:border-orange-400 hover:text-orange-300 transition duration-300">
            Get Started
          </button>
        </div>

        {/* mobile menu icon */}
        <div
          className="mdl:hidden text-white cursor-pointer"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar ? <FaBars fontSize="22px" /> : <IoMdClose fontSize="26px" />}
        </div>
      </div>

      {/* mobile menu */}
      {openBar && (
        <div className="mdl:hidden fixed top-[70px] left-0 w-full h-[60vh] bg-[#3F181C] text-white flex flex-col items-center justify-center gap-5 text-lg z-40 px-4 shadow-lg rounded-b-xl">
          
        
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-white text-xl"
            title="Close Menu"
          >
            <IoMdClose />
          </button>

        
          {Links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={closeMobileMenu}
              className="hover:text-orange-400 transition"
            >
              {item.page}
            </Link>
          ))}

          <button
            onClick={closeMobileMenu}
            className="border border-white px-4 py-2 rounded text-sm hover:border-orange-400 hover:text-orange-300 transition"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  )
}

export default NAVABAR
