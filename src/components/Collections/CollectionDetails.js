import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import collection from "../../app/storeData/mensCollection.json";
import CollectionProduct from "./CollectionProduct";

const CollectionDetails = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 mb-20">
      <div className="flex items-center justify-between px-3 pb-3 mb-3 border-b border-gray-300">
        <h3 className="text-gray-500 font-medium">44 results</h3>

        <div className="flex items-center space-x-4">
          <BiSortAlt2 className="collectionAction" />
          <FaFilter className="collectionAction" />
          <BsFillGridFill className="collectionAction" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {collection.docs.map((product) => (
          <CollectionProduct
            key={product.product_id}
            id={product.product_id}
            title={product.product_title}
            price={product.app_sale_price}
            imgSrc={product.product_main_image_url}
            rating={product.evaluate_rate}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
