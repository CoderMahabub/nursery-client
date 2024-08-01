import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="hero text-black bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://lustria.g5plus.net/main/wp-content/uploads/2022/01/72104935_404361396911785_6698094569396402364_n-1.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Our Journey to Dreams</h1>
          <p className="py-6">
            Empowering all people to be plant people — a collection of articles
            from The Sill’s team of Plant Experts across a variety of plant care
            topics to inspire confidence in the next generation of plant
            parents. Welcome to Plant Parenthood™. Luckily, we have a few ideas
            on watering for optimum plant health.The Lustria succulents and
            other smaller specimen.
          </p>
          <button className="btn text-xl font-normal bg-[#597E52] text-white hover:bg-black">
            <NavLink to="/products">View the shop</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
