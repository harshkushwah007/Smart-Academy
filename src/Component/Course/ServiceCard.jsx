import React from "react";

const ServiceCard = ({ Icon, title, description, bgColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center text-center max-w-[200px]">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
