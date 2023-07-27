import { useGetSingleShopQuery } from "../redux/shops/shopApi";
import { useParams } from "react-router-dom";

const ShopDetails = () => {
  const { id } = useParams();
  const { data: shops } = useGetSingleShopQuery(id);
  console.log(shops);

  return (
    <>
      <div className="card w-5/6 mt-24 m-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={`http://ssp.gov.bd/api/ShopPublicImages/cover/${shops?.shopView.CoverImageUrls[0]}`}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shops!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="text-3xl font-semibold">
            {shops?.shopInfo.ShopDescription}
          </h2>
          <p>{shops?.shopInfo.Email}</p>
          <p>{shops?.shopInfo.ShopName}</p>
          <p>{shops?.shopInfo.Mobile}</p>
          <p>{shops?.shopView.ShopAddressText}</p>
          <p>{shops?.shopView.UpazillaBn}</p>
          <p>{shops?.shopView.ShopName}</p>
          <p>{shops?.shopInfo.DivisionBn}</p>
          <p>{shops?.shopInfo.FacebookPage}</p>
          <p>{shops?.shopInfo.Twitter}</p>
          <p>{shops?.shopInfo.ShopAddressText}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Upadated</div>
            <div className="badge badge-outline">SSP</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
