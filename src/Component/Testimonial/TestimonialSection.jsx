import React from "react";
import park from "../../assets/TestimonialImage/park.png";
import jasmine from "../../assets/TestimonialImage/jasmine.png";
import jasmine2 from "../../assets/TestimonialImage/jasmine2.png";
import husna from "../../assets/TestimonialImage/husna.png";
import jacob from "../../assets/TestimonialImage/Jacob.png";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      img: park,
      title: "Park Jee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.",
    },
    {
      img: jasmine,
      title: "Jasmine Vandervort",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.",
    },
    {
      img: jasmine2,
      title: "Jasmine",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.",
    },
    {
      img: husna,
      title: "Husna Mawadus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.",
    },
    {
      img: jacob,
      title: "Jacob Kozey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-blue-700 font-bold text-center pb-20">
        Our Testimonial <br />
        at Smart Academy
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-center">
        {testimonials.map((testimonial, index)=>(
          <TestimonialCard key={index} img={testimonial.img} title={testimonial.title} description={testimonial.description} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
