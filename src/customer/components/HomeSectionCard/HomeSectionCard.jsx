import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
  className="cursor-pointer flex flex-col justify-between items-center bg-white shadow-lg 
    overflow-hidden w-full h-full mx-3 transition-all productCard"
>
  <div className="h-[13rem] w-[10rem] flex-shrink-0">
    <img
      className="object-cover object-center w-full h-full"
      src={product.imageUrl}
      alt={product.tittle}
    />
  </div>
  <div className="p-4 flex-grow">
    <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
    <p className="mt-2 text-sm text-gray-500">
      {product.tittle}
    </p>
  </div>
</div>

  );
};

export default HomeSectionCard;
