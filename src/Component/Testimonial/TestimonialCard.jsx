import React from "react";

const TestimonialCard = ({ img, title, description }) => {
  return (
    <div className="rounded-xl flex p-5 bg-white">
      <div className="h-20 w-30 flex items-center justify-center">
        <img src={img} alt="Testimonial" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl text-[#008Bd8]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
