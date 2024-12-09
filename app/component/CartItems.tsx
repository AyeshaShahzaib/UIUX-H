export default function CartItems(){
    return(
       <div>
<div className="container mx-auto py-20 w-10/12">
  <table className="table-auto w-full border-collapse border border-gray-200">
    <thead className="">
      <tr>
        <th className="px-4 py-2 text-left">Product</th>
        <th className="px-4 py-2 text-left">Price</th>
        <th className="px-4 py-2 text-left">Quantity</th>
        <th className="px-4 py-2 text-left">Total</th>
        <th className="px-4 py-2 text-left">Remove</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id} className="border-b border-gray-200">
          <td className="px-4 py-4 flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
              <p>{product.name}</p>
              <div className="text-yellow-500 flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={index < product.rating ? "text-yellow-500" : "text-gray-400"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </td>
          <td className="px-4 py-4">${product.price.toFixed(2)}</td>
          <td className="px-4 py-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-2">-</button>
              <input
                type="text"
                value={product.quantity}
                readOnly
                className="w-8 text-center border-none focus:outline-none"
              />
              <button className="px-2">+</button>
            </div>
          </td>
          <td className="px-4 py-4">${(product.price * product.quantity).toFixed(2)}</td>
          <td className="px-9 py-4 text-red-500 cursor-pointer "><img src="X.svg" alt="delete" className="text-black" /></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="container mx-auto py-8 flex justify-between w-10/12">
  {/* Coupon Code Section */}
  <div className="w-1/2 p-6">
    <h2 className="text-[32px] leading-[40px] text-[#333333] font-bold mb-4">Coupon Code</h2>
    <p className="text-[16px] leading-[26px] text-[#333333] mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non.
    </p>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter Here code"
        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button className="bg-[#FF9F0D] text-white px-4 py-2 rounded ml-2 ">
        Apply
      </button>
    </div>
  </div>

  {/* Total Bill Section */}
  <div className="w-1/2 p-6">
    <h2 className="text-[32px] leading-[40px] text-[#333333] font-bold mb-4">Total Bill</h2>
    <table className="table-auto w-full mb-4">
      <tbody>
        <tr>
          <td className="text-[20px] leading-[28px] text-[#333333] font-bold py-2">Cart Subtotal</td>
          <td className="text-sm text-right">$120.00</td>
        </tr>
        <tr>
          <td className="text-[16px] leading-[26px] text-[#333333] ">Shipping Charge</td>
          <td className="text-sm text-right">$0.00</td>
        </tr>
        <tr className="border-t border-gray-300">
          <td className="text-[20px] leading-[28px] text-[#333333] font-bold py-2">Total Amount</td>
          <td className="text-base font-semibold text-right">$205.00</td>
        </tr>
      </tbody>
    </table>
    <button className="bg-[#FF9F0D] text-white px-4 py-2 w-full rounded ">
      Proceed to Checkout →
    </button>
  </div>
</div>
       </div>
)
    
}

const products = [
    {
      id: 1,
      name: "Burger",
      price: 36.0,
      quantity: 1,
      image: "burger1.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25.0,
      quantity: 1,
      image: "FreshLime.png",
      rating: 3,
    },
    {
      id: 3,
      name: "Pizza",
      price: 15.0,
      quantity: 1,
      image: "Food4.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45.0,
      quantity: 1,
      image: "Muffins.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 15.0,
      quantity: 1,
      image: "CheeseButter.png",
      rating: 4,
    },
  ];