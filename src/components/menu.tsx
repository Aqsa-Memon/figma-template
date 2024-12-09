import React from "react";
import Image from "next/image";

// Array of menu items containing details like name, description, price, and image
const menuItems = [
  {
    name: "Lettuce Leaf",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu1.png",
  },
  {
    name: "Fresh Breakfast",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: "/menu2.png",
  },
  {
    name: "Mild Butter",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu3.png",
  },
  {
    name: "Fresh Bread",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu4.png",
  },
  {
    name: "Glow Cheese",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu5.png",
  },
  {
    name: "Italian Pizza",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: "/menu6.png",
  },
  {
    name: "Slice Beef",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu7.png",
  },
  {
    name: "Mushroom Pizza",
    description: "Lacus nisl, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: "/menu8.png",
  },
];

const MenuCom = () => {
  return (
    <section className="bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12">
      {/* Container for all menu-related content */}
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-[#FF9F0D]">
          Choose & Pick
        </h2>
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h1>

        {/* Navigation bar for menu categories */}
        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((category) => (
              <li
                key={category}
                className="cursor-pointer hover:text-yellow-500"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Decorative Image, displayed only on large screens */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            <Image
              src={"/pic2.png"}
              alt="Menu Decor"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>

          {/* Right Section: Displaying menu items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex rounded-lg overflow-hidden shadow-lg"
              >
                {/* Image Section of Menu Item */}
                <div className="w-1/3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                {/* Details Section of Menu Item */}
                <div className="p-4 w-2/3">
                  {/* Menu Item Name */}
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  {/* Menu Item Description */}
                  <p className="text-[11px] text-gray-400 mb-2">
                    {item.description}
                  </p>
                  {/* Menu Item Price */}
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCom;
