import { NavLink } from "react-router-dom";

//assets
import logo from "../assets/DAPPER THREAD 1.svg";
import user from "../assets/user.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search-normal.svg";
import rectangle from "../assets/Rectangle 1.svg";
import bag from "../assets/shopping-bag.svg";
import { useCartContext } from "../hooks/useCartContext";

const Header = () => {
  const { selectedItems, selectedFavorite } = useCartContext();

  return (
    <header className="py-6 px-3 lg:px-16 flex items-center justify-between">
      <div className="">
        <img src={logo} alt="logo" className="w-[73.64px] lg:w-full" />
      </div>

      <nav className="flex items-center gap-8">
        <NavLink to="/" className="head text-xs md:text-base">
          HOME
        </NavLink>
        <NavLink to="/shop" className="head text-xs md:text-base">
          SHOP
        </NavLink>
        <NavLink to="/cart" className="head text-xs md:text-base">
          <span>CART</span>
          <sup className="font-bold">{selectedItems.length}</sup>
        </NavLink>
      </nav>

      <div className="hidden lg:flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img src={user} alt="user" className="cursor-pointer" />
          <p className="relative cursor-pointer">
            <img src={heart} alt="heart" />
            <sup className="absolute -right-1 top-[2px] font-bold text-red-600">
              {selectedFavorite.length}
            </sup>
          </p>
        </div>

        <div className="bg-black flex items-center gap-10 py-2 px-4 rounded-lg">
          <div className="flex items-center gap-3">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="search"
              className="border-none outline-none focus:outline-none bg-transparent italic w-11 
              text-xs text-white"
            />
          </div>

          <img src={rectangle} alt="" />
          <img src={bag} alt="bag" />
        </div>
      </div>
    </header>
  );
};

export default Header;
