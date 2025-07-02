import React from "react";
import ServiceCard from "./ServiceCard";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCertificate, FaLaptop, FaThumbsUp } from "react-icons/fa6";
import Button from "../Home/Button";

const ServiceSection = () => {
  return (
    <div>
      <div className="p-20 pt-0">
        <h2 className="text-4xl text-blue-700 font-bold text-center">
          Smart Academy Offers <br /> services like
        </h2>
      </div>
      <div className="flex gap-18 justify-center">
        <ServiceCard
          Icon={FaChalkboardTeacher}
          title="Teachers Profesional"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          bgColor="bg-blue-500"
        />
        <ServiceCard
          Icon={FaLaptop}
          title="Online Course"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          bgColor="bg-pink-700"
        />
        <ServiceCard
          Icon={FaCertificate}
          title="Certificate Course"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          bgColor="bg-blue-500"
        />
        <ServiceCard
          Icon={FaThumbsUp}
          title="Better Value"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          bgColor="bg-pink-700"
        />
      </div>
      <div className="flex justify-center mt-8">
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default ServiceSection;
