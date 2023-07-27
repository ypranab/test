import { FiLogIn, FiUserPlus } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top backdrop-blur-lg z-10 bg-red/60 px-10">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            Smart Service Point
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <button className="btn btn-link">
                <FiLogIn />
                লগিন
              </button>
            </span>
            <span className="flex items-center">
              <button className="btn btn-link">
                <FiUserPlus />
                নিবন্ধন
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
