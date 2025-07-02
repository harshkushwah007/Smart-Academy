import React from "react";
import bgImage from "../../assets/background/bg.png";
import Nav from "./Nav";
import Button from "./Button";

const Hero = () => {
  return (
    <>
    <div
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw"
      }}
      className="flex flex-col"
    >
      <Nav />
      <div className="flex flex-col flex-grow ml-10 justify-center px-4 w-180">
        <h1 className="text-white text-7xl font-bold">
          Achieve your future With Smart
          Academy
        </h1>
        <p className="text-white mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam ex
          officiis, fuga veniam id quas, perferendis repellendus, similique iure
          explicabo numquam hic omnis.
        </p>
       <Button className="w-auto self-start mt-8 ml-2">
            Explore Course
        </Button>
      </div>
    </div>
    </>
  );
};

export default Hero;
