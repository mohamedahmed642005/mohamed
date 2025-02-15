

const ContactUse = () => {
  return (
   <div className="bg-[#3F181C] py-10">
<div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10">


{/* one dev  */}
<div className="bg-[#1E1E1E] w-full my-10 px-10 ">
           <div className="px-6 my-7">
           <h1 className="text-3xl text-[#FDBA74] mb-4 font-bold">
            Need Help? Open a Ticket
            </h1>
            <p className="text-white my-2 font-bold">
            Our support team will get back to you ASAP via email.

Your Name

            </p>
           </div>
            <form >
                <div className=" grid grid-cols-1 sml:grid-cols-2 sml:gap-10">
                    <div className="">
                        <label htmlFor="name"
                        className="text-sm mb-2 text-white font-medium"
                        >
                            Your Name

                        </label>
                        <input id="name"
                        required
                        className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                        focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
                        type="text"
                        placeholder="Enter Your Name"
                        
                        
                        />
                        

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email"
                        className="text-sm mb-2 text-white font-medium"
                        >
                            Your Email

                        </label>
                        <input id="email"
                        required
                        className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                        focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
                        type="email"
                        placeholder="Enter Your Email"
                        
                        
                        />


                        </div>
                </div>
                <div className="my-4">
                    <textarea id="messadge"
                    required
                    rows="5"
                    placeholder="writ you messadge here....."
                    className="w-full p-4 rounded-lg bg-[#3F181C] text-white focus:outline-none
                    focus:ring-2 focus:ring-orange-400  transition duration-200"
                    
                    >



                    </textarea>

            


                </div>
                <button className="bg-orange-500 text-white px-6 py-3  my-2 rounded-full font-bold hover:bg-transparent transition duration-300">
                        Submit Ticket
                    </button>
            </form>



        </div>
        {/* to dev */}
        <div className="bg-[#1E1E1E] w-full my-10 px-10 ">


          
            <div className="px-6 my-7" >
            <h1 className="text-2xl text-[#FDBA74] mb-4 font-bold">Subscribe to receive future updates</h1>
            <p className="text-white">Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
            
            <p className="h-[1px] w-full my-4 bg-gray-700"></p>

            <input id="name"
                        required
                        className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                        focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
                        type="text"
                        placeholder="Enter Your Name"
                        
                        
                        />
                         <input id="email"
                        required
                        className="w-full my-2 bg-[#3F181C] py-3 px-3 rounded-md text-white text-sm 
                        focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
                        type="email"
                        placeholder="Enter Your Email"
                        
                        
                        />
                          <button className="bg-orange-500 text-white px-6 py-3 my-2 w-[300px] rounded-full font-bold hover:bg-transparent transition duration-300">
                        Submit
                    </button>






            </div>

            






        </div>

</div>



   </div>
  )
}

export default ContactUse