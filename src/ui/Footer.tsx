// assets
import user from "../assets/white-user.svg";
import heart from "../assets/black-heart.svg";
import search from "../assets/black-search.svg";
import blackBag from "../assets/black-bag.svg";
import blackRec from "../assets/black-Rectangle.svg";

const Footer = () => {
  return (
    <footer
      className="lg:hidden flex items-center gap-5 bg-black bg-opacity-25 rounded-[30px] p-5 w-[292px] 
    h-[40px] border border-transparent fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex items-center gap-2">
        <img src={user} alt="user" />
        <img src={heart} alt="heart" />
      </div>

      <div className="bg-white flex items-center gap-10 py-1 px-5 rounded-lg">
        <div className="flex items-center gap-3">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="search"
            className="border-none outline-none focus:outline-none bg-transparent italic w-11 
              text-xs text-black placeholder:text-black"
          />
        </div>

        <img src={blackRec} alt="" />
        <img src={blackBag} alt="bag" />
      </div>
    </footer>
  );
};

export default Footer;
