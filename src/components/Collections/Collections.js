import React from "react";
import MenLogo from "../../Images/Mens-Fashion.png";
import WomenLogo from "../../Images/Women-Fashion.png";
import KidsLogo from "../../Images/Kids-Fashion.png";
import AccessoryLogo from "../../Images/Acessory-Fashion.png";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();

  const goToCollection = (name) => {
    return navigate("/collection/" + name);
  };

  return (
    <div className="w-full max-w-4xl space-y-2 mx-auto mt-10">
      <h2 className="SectionName">Collection</h2>

      <div className="h-[40vh] max-h-64 grid grid-rows-2 grid-cols-4 gap-2">
        <div
          className="col-span-2 row-span-2 collectionContainer"
          onClick={() => gotoCollection("Men")}
        >
          <img src={MenLogo} alt="Men-logo" className="collectionImage" />
          <p className="categoryName">Men</p>
        </div>

        <div
          className="collectionContainer"
          onClick={() => gotoCollection("Women")}
        >
          <img src={WomenLogo} alt="Women-logo" className="collectionImage" />
          <p className="categoryName">Women</p>
        </div>

        <div
          className="collectionContainer"
          onClick={() => gotoCollection("Kids")}
        >
          <img src={KidsLogo} alt="Kids-logo" className="collectionImage" />
          <p className="categoryName">Kids</p>
        </div>

        <div
          className="col-span-2 collectionContainer"
          onClick={() => gotoCollection("Accessories")}
        >
          <img src={AccessoryLogo} alt="Men-logo" className="collectionImage" />
          <p className="categoryName">Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
