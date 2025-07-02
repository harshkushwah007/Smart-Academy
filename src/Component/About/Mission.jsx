import React from "react";
import missionChild from "../../assets/MissionChild/mission_child.png";

const Mission = () => {
  return (
    <div className="p-20 flex gap-45 justify-center items-center">
      <div className="w-45 ">
        <h2 className="text-4xl text-blue-700 font-bold">
          Welcome to smart Academy
        </h2>
        <p className="py-8">
          Lorem ipsum dolor sit consectetur adipisicing elit. Unde, delectus?
        </p>
      </div>
      <div className="bg-pink-500 pt-10 px-5 ml-25 pb-0 rounded-t-full rounded-b-5xl">
        <img src={missionChild} alt="Mission Child" className="h-100" />
      </div>
      <div className="w-65">
        <h2 className="text-4xl text-blue-700 font-bold">Our Mission</h2>
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          explicabo, veritatis eaque tempora numquam velit?
        </p>
        <div className="flex">
          <div className="w-25 text-center">
            <h3 className="text-3xl font-bold text-blue-700">10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="w-20 text-center">
            <h3 className="text-3xl font-bold text-blue-700">29+</h3>
            <p>Total Course</p>
          </div>
          <div className="w-25 text-center">
            <h3 className="text-3xl font-bold text-blue-700">50K+</h3>
            <p>Student Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
