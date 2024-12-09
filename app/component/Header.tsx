import Link from "next/link"

export default function Header(){
    return(
        <div className="h-screen bg-[url('/bg-herosection.png')] ">
          <div className="flex justify-center items-center h-full w-full">
          <div className="flex justify-center items-center ">
  <div className="flex justify-between items-center w-10/12">
    <div className="w-[58%] flex flex-col gap-4">
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
      <img src="Food.png" alt="Food" className="w-[95%] h-[95%]" />
    </div>
  </div>
</div>
          </div>
{/* Herosection */}


        </div>

    )
}

