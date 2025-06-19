import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import { logo1 } from "../assets"

const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
]

function NAVABAR() {
  const [openBar, setOpenBar] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleMenu = () => setOpenBar(!openBar)
  const closeMenu = () => setOpenBar(false)

  return (
    <div className="bg-[#3F181C] dark:bg-[#1c1c1c] h-[70px] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
      
        <div className="text-white flex items-center gap-2">
          <img className="w-10" src={logo1} alt="Logo" />
          <h1 className="text-2xl font-bold">Cofee</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden mdl:flex items-center gap-6 text-white text-base">
          {Links.map((item) => (
            <li
              key={item.id}
              className="px-2 py-1 hover:bg-[#a52935] transition duration-300 rounded"
            >
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden mdl:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white border border-white px-3 py-1 rounded hover:border-orange-400 hover:text-orange-300 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="mdl:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {openBar ? <IoMdClose fontSize="26px" /> : <FaBars fontSize="22px" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {openBar && (
        <div className="mdl:hidden absolute top-[70px] left-0 w-full h-[60vh] bg-[#3F181C] dark:bg-[#1c1c1c] text-white flex flex-col items-center justify-center gap-6 text-lg z-40 px-4 shadow-md rounded-b-xl transition-all duration-300">
          {Links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={closeMenu}
              className="hover:text-orange-400 transition"
            >
              {item.page}
            </Link>
          ))}

          <button
            onClick={() => {
              setDarkMode(!darkMode)
              closeMenu()
            }}
            className="border border-white px-4 py-2 rounded text-sm hover:border-orange-400 hover:text-orange-300 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </div>
  )
}

export default NAVABAR
