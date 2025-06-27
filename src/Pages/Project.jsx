import "../Style/Project.css";
import Bookmyshow from "../../public/Images/Project/bookmyshow.png";
import pokemon_card from "../../public/Images/Project/pokemon_card.png";
import myMart from "../../public/Images/Project/myMart.png";
import Pichancer from "../../public/Images/Project/pichancer.png";
const Project = () => {
  return (
    <div className="project_section text-gray-200">
      <div className=" px-6 mt-20">
        <h1 className="text-5xl text-gray-200">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 place-items-center my-12 gap-20">
        <div className="border w-[80%] p-4 rounded-md border-gray-400">
          <img src={Bookmyshow} alt="bookmyshow_screen" />
          <h1 className="text-2xl pt-4">Bookmyshow Clone</h1>
          <p className="text-lg pt-1 text-gray-400">
            The BookMyShow clone is a web application designed to replicate the
            key features of the popular ticket-booking platform.
          </p>
          <div className="flex space-x-8 text-xl mt-4">
            <p>React Js</p>
            <p>Tailwind Css</p>
            <p>Movie API</p>
          </div>
        </div>
        <div className="border w-[80%] p-4 rounded-md border-gray-400">
          <img src={pokemon_card} alt="pokemon_screen" />
          <h1 className="text-2xl pt-4">Pokemon Card</h1>
          <p className="text-lg pt-1 text-gray-400">
            A modern Pokémon Explorer web app allowing users to view detailed
            info about Pokémon in a visually rich layout.
          </p>
          <div className="flex space-x-8 text-xl mt-4">
            <p>React Js</p>
            <p>Tailwind Css</p>
            <p>Pokemon API</p>
          </div>
        </div>
        <div className="border w-[80%] p-4 rounded-md border-gray-400">
          <img src={myMart} alt="myMart_screen" />
          <h1 className="text-2xl pt-4">myMart (Ecommerce Website)</h1>
          <p className="text-lg pt-1 text-gray-400">
            A fully functional and responsive e-commerce website built using
            React, Redux, and Tailwind CSS.
          </p>
          <div className="flex space-x-8 text-xl mt-4">
            <p>React Js</p>
            <p>Tailwind Css</p>
            <p>Redux</p>
          </div>
        </div>
        <div className="border w-[80%] p-4 rounded-md border-gray-400">
          <img src={Pichancer} alt="myMart_screen" />
          <h1 className="text-2xl pt-4">Pichancer</h1>
          <p className="text-lg pt-1 text-gray-400">
            Pichancer is your all-in-one photo editing workspace designed for
            creators, brands, and businesses. From removing backgrounds and
            cropping images to enhancing photo quality make photo editing fast,
            simple, and hassle-free.
          </p>
          <div className="flex space-x-8 text-xl mt-4">
            <p>React Js</p>
            <p>Tailwind Css</p>
            <p>Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
