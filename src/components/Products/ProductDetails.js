import React, { useEffect, useState } from "react";
import product from "../../app/storeData/shoeDetail.json";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addProductOrder } from "../../features/counterSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [productColors, setproductColors] = useState([]);
  const [currentColourImages, setcurrentColourImages] = useState([]);
  const [image, setimage] = useState("");
  const [currentColor, setcurrentColor] = useState("");
  const [sizes, setsizes] = useState([]);
  const [currentSize, setcurrentSize] = useState("");
  const [quantity, setquantity] = useState(1);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    const getProductColors = () => {
      let productColors = Object.keys(product[0].variantImages);

      setproductColors(
        productColors.map((color) => {
          return {
            name: color.replace("\\/", " and "),
            image: product[0].variantImages[color][0].large,
            colorKey: color,
          };
        })
      );

      setcurrentColor(productColors[0]);
    };

    const getCurrentColorImages = () => {
      let productColors = Object.keys(product[0].variantImages);

      setcurrentColourImages(
        product[0].variantImages[productColors[0]].map((color) => {
          return color.large;
        })
      );

      setimage(product[0].variantImages[productColors[0]][0].large);
    };

    const getProductSizes = () => {
      setsizes(
        product[0].variantSizes.map((size) => {
          return size.size;
        })
      );

      setcurrentSize(product[0].variantSizes[0].size);
    };

    getProductColors();
    getCurrentColorImages();
    getProductSizes();
  }, []);

  const increaseQuantity = () => {
    if (quantity > 30) return;
    setquantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity < 2) return;
    setquantity(quantity - 1);
  };

  const changeShoeView = (img) => {
    return setimage(img);
  };

  const changeShoeColor = (selectedColor) => {
    setcurrentColourImages(
      product[0].variantImages[selectedColor].map((color) => {
        return color.large;
      })
    );

    setimage(product[0].variantImages[selectedColor][0].large);
    return setcurrentColor(selectedColor);
  };

  const changeShoeSize = (selectedSize) => {
    return setcurrentSize(selectedSize);
  };

  const handlePurchase = () => {
    dispatch(
      addProductOrder({
        product_id: product[0].product_id,
        size: currentSize,
        color: currentColor,
        quantity,
        image: currentColourImages[0],
        title: product[0].product_title,
        price: product[0].original_price,
      })
    );

    return navigation(`/product/${product[0].product_id}/pricing`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-6 mt-10 mb-20">
      <div>
        <img
          src={image}
          alt={product[0].product_id}
          className="w-full aspect-auto max-w-lg rounded-lg shadow-lg"
        />

        <div className="flex items-center mt-10 max-w-lg space-x-3 overflow-x-scroll">
          {currentColourImages.map((img, index) => (
            <img
              src={img}
              onClick={() => changeShoeView(img)}
              alt={"image_" + index + 1}
              key={index}
              className={`w-16 aspect-square object-cover cursor-pointer ${
                img == image && "border-2 rounded-md border-rose-500"
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="space-y-3">
          <h2 className="text-xl font-medium">{product[0].product_title}</h2>
          <h3 className="text-2xl font-bold">$ {product[0].original_price}</h3>
        </div>

        <div className="border-t pt-3 my-5 border-gray-300">
          <h3 className="text-gray-600 text-sm">Select Color</h3>
        </div>

        <div className="flex flex-wrap">
          {productColors.map((color, index) => (
            <div
              className="w-20 m-1 cursor-pointer"
              onClick={() => changeShoeColor(color.colorKey)}
            >
              <img
                src={color?.image}
                className={`w-full ${
                  color.colorKey === currentColor && "border border-rose-600"
                } object-cover rounded-sm aspect-video`}
                alt={color?.name}
              />

              <h4
                key={index}
                className={`text-xs ${
                  color.colorKey === currentColor && "text-rose-600"
                }`}
              >
                {color?.name}
              </h4>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 my-5 border-gray-300">
          <h3 className="text-gray-600 text-sm">Select Size</h3>
        </div>

        <div className="flex flex-wrap">
          {sizes.map((size, index) => (
            <h4
              key={index}
              onClick={() => changeShoeSize(size)}
              className={`text-center px-3 py-1 cursor-pointer rounded-sm border text-xs font-medium ${
                currentSize == size
                  ? "border-rose-600 text-rose-600"
                  : "border-gray-600"
              } m-1`}
            >
              {size}
            </h4>
          ))}
        </div>

        <div className="flex items-center my-3 space-x-5">
          <AiFillMinusCircle
            onClick={decreaseQuantity}
            className="text-3xl text-rose-700 cursor-pointer"
          />
          <p className="text-2xl font-semibold">{quantity}</p>
          <IoAddCircleSharp
            onClick={increaseQuantity}
            className="text-3xl text-rose-700 cursor-pointer"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <button className="w-full text-center py-2 rounded-md bg-transparent border-2 text-rose-600 border-rose-600">
            Add {quantity} to Basket
          </button>
          <button
            onClick={handlePurchase}
            className="w-full text-center py-2 rounded-md bg-rose-600 text-white"
          >
            Proceed to Buy ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
