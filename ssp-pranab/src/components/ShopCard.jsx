//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetSingleShopQuery } from "../redux/shops/shopApi";
import { FaTwitter, FaFacebookF, FaMobile } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiOnlyoffice } from "react-icons/si";

/* eslint-disable react/prop-types */
const ShopCard = ({ shopId }) => {
  const { data: shop } = useGetSingleShopQuery(shopId);
  console.log(shopId);

  return (
    <div className="card w-full shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40">
      <figure>
        <img
          src={`http://ssp.gov.bd/api/ShopPublicImages/cover/${shop?.shopView.CoverImageUrls[0]}`}
          alt="Shop"
        />
      </figure>
      <div className="card-body">
        <h1 className="flex items-center text-xl font-extrabold">
          <SiOnlyoffice />
          <span className="px-2 text-blue-600">{shop?.shopView.ShopName}</span>
        </h1>
        <h2 className="card-title">{shop?.shopInfo.ShopDescription}</h2>

        <p>{shop?.shopView.ShopAddressText}</p>
        <p>{shop?.shopView.UpazillaBn}</p>

        <p>{shop?.shopInfo.DivisionBn}</p>

        <div className="divider"></div>
        <p className="flex items-center">
          <FaMobile />
          <span className="px-3 text-green-500">{shop?.shopInfo.Mobile}</span>
        </p>
        <p className="flex items-center">
          <FiMail />
          <span className="px-3">{shop?.shopInfo.Email}</span>
        </p>
        <p className="flex items-center">
          <FaFacebookF />
          <span className="px-3">{shop?.shopInfo.FacebookPage}</span>
        </p>
        <p className="flex items-center">
          <FaTwitter />
          <span className="px-3">{shop?.shopInfo.Twitter}</span>
        </p>
        <Link to={`/shop/${shopId}`}>
          <button className="text-white bg-gradient-to-r btn btn-accent btn-block hover:from-green-400 hover:to-blue-500">
            বিস্তারিত
          </button>
        </Link>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ShopCard;
