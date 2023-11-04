import React, { useEffect, useState } from "react";
import { manProducts } from "../../data";
import FadeIn from "../../components/FadeIn";

const Man = () => {
  // const [products,setProducts] = useState([]);
  console.log(manProducts);

  // useEffect(() =>{
  //     fetch('/src/public/data.js')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // },[])

  return (
    <FadeIn delay={0.2} direction='down'>
      <div className="grid grid-cols-4 gap-3 bg-[#F6F6F6] p-10 mt-10">
        {manProducts.map((product) => (
            <div className="bg-[#FFFFFF] shadow-lg rounded-lg hover:border hover:border-black p-1">
            <img src={product.img} alt="" />
            <div className="p-2">
              <p className="text-left text-sm text-zinc-500 mt-3">Men Shirt</p>
              <h2 className="font-medium text-left text-xl ">{product.name}</h2>
              <h2 className="font-medium text-left mt-5">{product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Man;
