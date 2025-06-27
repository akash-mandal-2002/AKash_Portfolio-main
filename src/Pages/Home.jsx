import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../Style/Home.css";
import Typing from "../../public/Home/typing.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div className="top_header text-gray-200  mt-24">
        <div className="leading-[9rem]">
          <div className="flex items-center space-x-8 px-6">
            <h1 className=" text-[8em] tracking-widest">FRONT</h1>
            <div className="h-[2px] bg-gray-200 w-72"></div>
            <h1 className="text-[8em] tracking-widest">END</h1>
            <div className="border p-3 px-5 rounded-full">
              <p className="text-5xl font-[200]">&</p>
            </div>
          </div>
          <h1 className="text-[8em] px-6 tracking-widest">DEVELOPER</h1>
        </div>
        <div className="sub_header mt-2">
          <h1 className="text-[3rem] tracking-widest px-6">WEB DESIGNER</h1>
          <div className="h-[1px] mx-10 bg-gray-200 w-[22rem]"></div>
        </div>
      </div>
      <div className="text-2xl text-gray-300 font-light flex space-x-8 justify-end mt-36 mx-14">
        <span className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-3xl">
          <FaInstagram />
        </span>

        <Link to="https://www.linkedin.com/in/akash-mandal-6b2112354">
          <span className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-3xl">
            <FaLinkedin />
          </span>
        </Link>
        <Link to="https://github.com/akash-mandal-2002/akash-mandal-2002">
          <span className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-3xl">
            <FaGithub />
          </span>
        </Link>
        <Link to="9871849243">
          <span className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-3xl">
            <FaWhatsapp />
          </span>
        </Link>
      </div>
      <div className="">
        <img
          src={Typing}
          alt="typing_illustrations"
          className="absolute w-96 right-56 mx-12 top-80"
        />
      </div>
    </div>
  );
};

export default Home;
