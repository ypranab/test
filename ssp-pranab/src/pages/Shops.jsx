import ShopCard from "../components/ShopCard";
import { useGetShopsQuery } from "../redux/shops/shopApi";

const Shops = () => {
  // const [shops, setShops] = useState([]);
  // useEffect(() => {
  //   fetch("http://ssp.gov.bd/api/ShopPage/getshoplist")
  //     .then((res) => res.json())
  //     .then((data) => setShops(data));
  // }, []);
  const { data: shops } = useGetShopsQuery(undefined);
  console.log(shops);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shops?.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId}></ShopCard>
      ))}
    </div>
  );
};

export default Shops;
