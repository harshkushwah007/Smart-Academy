import React from "react";
import CourseCard from "./CourseCard";
import science from "../../assets/CourseImage/Rectangle.png";
import chef from "../../assets/CourseImage/Rectangle1.png";
import music from "../../assets/CourseImage/Rectangle2.png";
import swimming from "../../assets/CourseImage/Rectangle3.png";
import aerobic from "../../assets/CourseImage/Rectangle4.png";
import languages from "../../assets/CourseImage/Rectangle5.png";
import art from "../../assets/CourseImage/Rectangle6.png";
import green from "../../assets/CourseImage/Rectangle7.png";

const CourseSection = () => {
  const courses = [
    { title: "Kids Science Course", img: science },
    { title: "Kids Chef Course", img: chef },
    { title: "Kids Music Course", img: music },
    { title: "Kids Swimming Course", img: swimming },
    { title: "Kids Aerobic Course", img: aerobic },
    { title: "Kids Science Course", img: languages },
    { title: "Kids Craft & Art Course", img: art },
    { title: "Kids Go Green Course", img: green },
  ];

  return (
    <div className="py-20 px-35">
      <h2 className="text-4xl text-blue-700 text-center font-bold">
        Our Featured Course <br />
        at Smart Academy
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {courses.map((course, index) => (
          <CourseCard key={index} img={course.img} title={course.title} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
