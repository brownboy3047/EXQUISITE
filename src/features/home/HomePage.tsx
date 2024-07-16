import { Link } from "react-router-dom";
import suit from "../../assets/SUIT MAN 1.png";

const HomePage = () => {
  return (
    <div className="mt-4 px-3 lg:px-8 relative">
      <p className="text-white text-[11px] md:text-2xl bg-black py-2 px-4 md:py-[15px] md:px-[30px] rounded-full max-w-[230px] md:max-w-[491px] m-auto">
        No. 1 Leading Fashion Store Globally
      </p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-[70px] sm:text-[120px] md:text-[160px] lg:text-[260px] leading-none font-balthazar">
          EXQUISITE
        </p>
        <p className="text-[42px]  sm:text-[100px] md:text-[150px] self-end leading-none font-balthazar">
          Styling
        </p>
      </div>

      {/* <img src={suit} alt="" className="home-img hidden" /> */}

      <p className="w-[270px] md:w-[400px] text-sm md:text-2xl text-black text-opacity-50 text-left mt-2">
        A new trend for the{" "}
        <span className="font-bold text-black text-opacity-100">
          Great Men.
        </span>
        <br />
        We keep in mind, the thought <br /> of Elegance and Luxurious while{" "}
        <br /> crafting your{" "}
        <span className="font-bold text-black text-opacity-100">
          Stylish Suit.
        </span>
      </p>

      <div className="flex items-end justify-end mt-10">
        <button
          className="border border-black text-xl md:text-4xl text-black py-2 px-6 
        md:py-[25px] md:px-[50px] rounded-full"
        >
          <Link to="/shop">Explore</Link>
        </button>
      </div>

      <img
        src={suit}
        alt=""
        className="home-img lg:absolute lg:top-[75%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
      />
    </div>
  );
};

export default HomePage;
