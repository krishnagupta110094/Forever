import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

    //   console.log(productsCopy.slice(0,5));
    setRelated(productsCopy.slice(0,4));

    }
  }, [products]);
  return( 
  <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore more from our curated collection. Based on your interest in this product, we’ve picked some similar styles just for you from the same category.
        </p>
      </div>
      {/** Rendering products */}
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-10">
        {
            related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  );
};

export default RelatedProduct;
