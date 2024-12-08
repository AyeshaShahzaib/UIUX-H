export default function Header(){
    return(
        <div className="h-screen bg-[url('/bg-herosection.png')] ">
            <div className="flex justify-center py-11"><img src="/Foodtuck.png" alt="" /></div>
            <div className="flex justify-between items-center w-10/12 mx-auto text-white">
  <div className="flex gap-6">
    <h1>Home</h1>
    <h1>Menu</h1>
    <h1>Blog</h1>
    <h1>Pages</h1>
    <h1>About</h1>
    <h1>Shop</h1>
    <h1>Contact</h1>
  </div>
  <div className="flex items-center">
    <input type="text" placeholder="Search" className="border p-2 rounded-md bg-none" />
    <div className=""><img src="search-icon.png" alt="Search" className="ml-2 w-5 h-5" /></div>
    
  </div>
</div>
{/* Herosection */}
<div className="flex justify-center items-center mt-20">
  <div className="flex justify-between items-center w-10/12">
    <div className="w-1/2 flex flex-col gap-4">
      <h1 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">Its Quick & Amusing!</h1>
      <h1 className="leading-[68px] text-[60px] font-bold text-white">
        <b className="font-[700] text-[#FF9F0D]">Th</b>e Art of speed <br />
        food Quality
      </h1>
      <p className="leading-[24px] text-[16px] font-normal text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue
      </p>
      <button className="w-[190px]  h-[60px] my-[36px]  bg-[#FF9F0D] rounded-full leading-[24px] text-[16px] font-normal text-white">
        See Menu
      </button>
    </div>
    <div className="flex justify-end ">
      <img src="Food.png" alt="Food" className="w-[90%] h-[90%]" />
    </div>
  </div>
</div>

        </div>

    )
}

