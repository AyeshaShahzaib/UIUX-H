export default function ShopList(){
    return(
        <div>
            <div className="container mx-auto p-4">
  <div className="flex flex-wrap gap-4">
    {/* Sidebar */}
    <aside className="w-full lg:w-1/4 bg-gray-50 p-4">
      {/* Search Product */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Search Product</h3>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Category</h3>
        <ul>
          <li><input type="checkbox" className="mr-2" /> Sandwiches</li>
          <li><input type="checkbox" className="mr-2" /> Burger</li>
          <li><input type="checkbox" className="mr-2" /> Chicken Chop</li>
          <li><input type="checkbox" className="mr-2" /> Pizza</li>
          <li><input type="checkbox" className="mr-2" /> Non-Veg</li>
          <li><input type="checkbox" className="mr-2" /> Uncategorized</li>
        </ul>
      </div>

      {/* Filter by Price */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Filter by Price</h3>
        <input
          type="range"
          className="w-full"
          min="10"
          max="100"
          step="10"
        />
        <button className="mt-2 p-2 w-full bg-orange-500 text-white rounded">
          Filter
        </button>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Latest Products</h3>
        <ul>
          <li className="flex items-center mb-2">
            <img
              src="latest-product-1.jpg"
              alt="Product 1"
              className="w-12 h-12 object-cover rounded mr-2"
            />
            <span>Pizza</span>
          </li>
          <li className="flex items-center mb-2">
            <img
              src="latest-product-2.jpg"
              alt="Product 2"
              className="w-12 h-12 object-cover rounded mr-2"
            />
            <span>Burger</span>
          </li>
        </ul>
      </div>

      {/* Product Tags */}
      <div>
        <h3 className="text-lg font-bold mb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 p-1 rounded">Sandwich</span>
          <span className="bg-gray-200 p-1 rounded">Burger</span>
          <span className="bg-gray-200 p-1 rounded">Pizza</span>
        </div>
      </div>
    </aside>

    {/* Main Content */}
    <main className="w-full lg:w-3/4">
      {/* Sorting Options */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Sort By:</label>
          <select className="p-2 border border-gray-300 rounded">
            <option>Newest</option>
            <option>Popular</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Show:</label>
          <select className="p-2 border border-gray-300 rounded">
            <option>Default</option>
            <option>10</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Single Product */}
        <div className="border p-4">
          <img
            src="product-1.jpg"
            alt="Product"
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h3 className="text-lg font-bold">Fresh Lime</h3>
          <p className="text-orange-500">$12.00</p>
          <p className="line-through text-gray-500">$15.00</p>
        </div>

        <div className="border p-4">
          <img
            src="product-2.jpg"
            alt="Product"
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h3 className="text-lg font-bold">Burger</h3>
          <p className="text-orange-500">$20.00</p>
          <p className="line-through text-gray-500">$25.00</p>
        </div>

        {/* Add more products as needed */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button className="p-2 border border-gray-300">1</button>
        <button className="p-2 border border-gray-300 bg-orange-500 text-white">
          2
        </button>
        <button className="p-2 border border-gray-300">3</button>
      </div>
    </main>
  </div>
</div>
        </div>
    )
}