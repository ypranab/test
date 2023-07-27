import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-36 px-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Rootlayout;
