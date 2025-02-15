import { Link } from "react-router-dom"

const Linkss = [

  {id: 1, page: "Home", path: "/"},
  
  {id: 2, page: "About", path: "/about"},
  
  
  {id: 3, page: "Contact", path: "/contact"},
  
  
  {id: 4, page: "Support", path: "/support"},
  
  
  {id: 5, page: "Pricing", path: "/pricing"},
  
  ]
  
  
  

function Footer() {
  return (
    <div className="bg-[#3F181C] py-10">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10">

<div className="">
<h1 className="  text-orange-300 font-bold text-2xl my-5 ">About Us</h1>

<p className="text-white m-3">We are committed to delivering high-quality solutions and services to meet your needs. Our mission is to empower your digital presence.</p>


</div>
<div>
<h1 className=" text-orange-300 font-bold text-2xl my-5 ]">Quick Links</h1>
<ul className=" text-white">
            {Linkss .map((item) => (
                    <li className=" hover:bg-[#a52935] transition duration-500 rounded" key={item.id}>
                        <Link to={item.path} > {item.page} </Link>
                    </li>
                ))}
            </ul>
  
</div>
<div>
<h1 className=" text-orange-300 font-bold text-2xl my-5 ">Contact Us</h1>
<p className="text-white m-3">123 Street Name, City, Country</p>
<p className="text-white m-3">+123 456 7890</p>
<p className="text-white m-3">support@example.com</p>

</div>
<p className="h-[1px] w-[1200px] my-4 bg-gray-700"></p>
</div>
      
      
      
      
    </div>
  )
}

export default Footer