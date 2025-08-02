import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { products, currency, cartItem } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItem) {
      const sizeData = cartItem[productId];
      for (const size in sizeData) {
        if (sizeData[size] > 0) {
          const product = products.find((p) => p._id === productId);
          if (product) {
            tempData.push({
              ...product,
              size: size,
              quantity: sizeData[size],
            });
          }
        }
      }
    }

    setCartData(tempData);
  }, [cartItem, products]);

  return (
    <div className="border-t pt-16 px-4 sm:px-10 text-gray-700">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
        <div className="border-t pt-2 mb-6"></div>
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-sm text-gray-500 mt-10">
          No orders found.
        </p>
      ) : (
        cartData.map((item, index) => (
          <div
            key={index}
            className="py-6 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0] || "/placeholder.png"}
                alt={item.name}
                className="w-16 sm:w-20 h-auto object-cover rounded"
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size.toUpperCase()}</p>
                </div>
                <p className="text-sm mt-1">
                  Date: <span className="text-gray-400">25, July, 2025</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Ready to ship</span>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
