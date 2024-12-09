import Link from "next/link"
export default function Header2(){
    return(
<div className="bg-[#0D0D0D] h-[90px]">

        <div className="flex justify-between items-center w-10/12 mx-auto text-white">
        <div className="flex justify-center py-11"><img src="/Foodtuck (1).png" alt="" /></div>
<div className="flex gap-6">
<h1>Home</h1>
<Link href="Menu"><h1>Menu</h1></Link>
<h1>Blog</h1>
<h1>Pages</h1>
<h1>About</h1>
<Link href="Shop"><h1>Shop</h1></Link>
<h1>Contact</h1>
</div>
<div className="flex items-center">
<div className=""><img src="MagnifyingGlass.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div>
<Link href="SignIn"><div className=""><img src="User.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div></Link>
<Link href="ShoppingCart"><div className=""><img src="Tote.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div></Link>

</div>
</div>
</div>
    )
}