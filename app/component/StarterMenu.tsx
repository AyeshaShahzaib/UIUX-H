export default function StarterMenu(){
return(
    <div>
<div className="flex items-center justify-center">
        <div className="flex justify-between items-start px-6 py-[120px] w-10/12">
  {/* Left Side: Image */}
  <div className="w-1/3 pr-6">
    <img
      src="DishImage.png"
      alt="Dish Image"
      className="shadow-lg"
    />
  </div>

  {/* Right Side: Menu */}
  <div className="w-[60%] ">
  <img src="/Coffee.png" alt="" className="h-6 w-6"/>
    {/* Header */}
    <h2 className="leading-[56px] text-[48px] font-bold text-[#333333] pb-4">
       Starter Menu
    </h2>
<div className="">
  {/* Menu Items */}
  <div className="space-y-3">
      {/* Item 1 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Alder Grilled Chinook Salmon</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">32$</span>
      </div>

      {/* Item 2 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#FF9F0D]">Berries and Creme Tart</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-[16px] font-normal text-[#828282]">700 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">43$</span>
      </div>

      {/* Item 3 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Tormentoso Bush Pizza Pintoage</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-[16px] font-normal text-[#828282]">1000 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">14$</span>
      </div>

      {/* Item 4 */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Spicy Vegan Potato Curry</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">35$</span>
      </div>
   
</div>
   </div>
  </div>
</div>
    </div>
    <div className="flex items-center justify-center">
        <div className="flex justify-between items-start px-6 py-[120px] w-10/12">
  {/* Left Side: Image */}


  {/* Right Side: Menu */}
  <div className="w-[60%] ">
  <img src="/Coffee.png" alt="" className="h-6 w-6"/>
    {/* Header */}
    <h2 className="leading-[56px] text-[48px] font-bold text-[#333333] pb-4">
    Main Course
    </h2>
<div className="">
  {/* Menu Items */}
  <div className="space-y-3">
      {/* Item 1 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Optic Big Breakfast Combo Menu</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
          Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">32$</span>
      </div>

      {/* Item 2 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Cashew Chicken With Stir-Fry</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-[16px] font-normal text-[#828282]">700 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">43$</span>
      </div>

      {/* Item 3 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]"> Vegetables & Green Salad</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-[16px] font-normal text-[#828282]">1000 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">14$</span>
      </div>

      {/* Item 4 */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Spicy Vegan Potato Curry</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">35$</span>
      </div>
   
</div>
   </div>
  </div>
  <div className="w-1/3 pr-6">
    <img
      src="DishImage2.png"
      alt="Dish Image"
      className="shadow-lg"
    />
  </div>
</div>
    </div>
    <div className="h-[468px] bg-[url('/bg.png')] text-white ">
<div className="h-[468px] flex justify-center items-center">
<div className="container mx-auto flex justify-around items-center">
    {/* Item 1 */}
    <div className="text-center space-y-4">
      <div className="mb-4 text-orange-500 text-5xl">
        {/* Replace with an icon from your icon library */}
        <img src="Chefs.png" alt="Chefs" />
      </div>
      <h3 className="text-3xl font-bold">420</h3>
      <p className="text-sm text-gray-300">Professional Chefs</p>
    </div>

    {/* Item 2 */}
    <div className="text-center space-y-4">
      <div className="mb-4 text-orange-500 text-5xl">
        {/* Replace with an icon from your icon library */}
        <img src="FoodItems.png" alt="FoodItems" />
      </div>
      <h3 className="text-3xl font-bold">320</h3>
      <p className="text-sm text-gray-300">Items Of Food</p>
    </div>

    {/* Item 3 */}
    <div className="text-center space-y-4">
      <div className="mb-4 text-orange-500 text-5xl">
        {/* Replace with an icon from your icon library */}
        <img src="ForkandSpoon.png" alt="ForkandSpoon" />
      </div>
      <h3 className="text-3xl font-bold">30+</h3>
      <p className="text-sm text-gray-300">Years Of Experience</p>
    </div>

    {/* Item 4 */}
    <div className="text-center space-y-4">
      <div className="mb-4 text-orange-500 text-5xl">
        {/* Replace with an icon from your icon library */}
        <img src="Pizza.png" alt="Pizza" />
      </div>
      <h3 className="text-3xl font-bold">220</h3>
      <p className="text-sm text-gray-300">Happy Customers</p>
    </div>
  </div>
</div>
</div>
<div className="flex items-center justify-center">
        <div className="flex justify-between items-start px-6 py-[120px] w-10/12">
  {/* Left Side: Image */}
  <div className="w-1/3 pr-6">
    <img
      src="Desert.png"
      alt="Desert"
      className="shadow-lg"
    />
  </div>

  {/* Right Side: Menu */}
  <div className="w-[60%] ">
  <img src="/Coffee.png" alt="" className="h-6 w-6"/>
    {/* Header */}
    <h2 className="leading-[56px] text-[48px] font-bold text-[#333333] pb-4">
    Dessert
    </h2>
<div className="">
  {/* Menu Items */}
  <div className="space-y-3">
      {/* Item 1 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Fig and lemon cake</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">32$</span>
      </div>

      {/* Item 2 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Creamy mascarpone cake</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-[16px] font-normal text-[#828282]">700 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">43$</span>
      </div>

      {/* Item 3 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Pastry, blueberries, lemon juice</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-[16px] font-normal text-[#828282]">1000 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">14$</span>
      </div>

      {/* Item 4 */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Pain au chocolate</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">35$</span>
      </div>
   
</div>
   </div>
  </div>
</div>
    </div>
    <div className="flex items-center justify-center">
        <div className="flex justify-between items-start px-6 py-[120px] w-10/12">
  {/* Left Side: Image */}


  {/* Right Side: Menu */}
  <div className="w-[60%] ">
  <img src="/Coffee.png" alt="" className="h-6 w-6"/>
    {/* Header */}
    <h2 className="leading-[56px] text-[48px] font-bold text-[#333333] pb-4">
    Drinks
    </h2>
<div className="">
  {/* Menu Items */}
  <div className="space-y-3">
      {/* Item 1 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Caffè macchiato</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
          Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">32$</span>
      </div>

      {/* Item 2 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Aperol Spritz Capacianno</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-[16px] font-normal text-[#828282]">700 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">43$</span>
      </div>

      {/* Item 3 */}
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]"> Caffe Latte Campuri</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-[16px] font-normal text-[#828282]">1000 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">14$</span>
      </div>

      {/* Item 4 */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="leading-[32px] text-[24px] font-bold text-[#333333]">Tormentoso BushTea Pintoage</h3>
          <p className="text-[16px] font-normal text-[#4F4F4F]">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <p className="text-[16px] font-normal text-[#828282]">560 CAL</p>
        </div>
        <span className="text-lg font-bold text-[#FF9F0D]">35$</span>
      </div>
   
</div>
   </div>
  </div>
  <div className="w-1/3 pr-6">
    <img
      src="Drinks.png"
      alt="Dish Image"
      className="shadow-lg"
    />
  </div>
</div>
    </div>
    </div>
    
)
}