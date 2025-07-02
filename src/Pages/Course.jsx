import React from "react";
import ServiceSection from "../Component/Course/ServiceSection";
import CourseSection from "../Component/Course/CourseSection";
import TestimonialSection from "../Component/Testimonial/TestimonialSection";
import ArticleSection from "../Component/Article/ArticleSection";
import ContactSection from "../Component/Contact/ContactSection";
import Footer from "../Component/Footer/Footer";

const Course = () => {
  return (
    <div>
      <ServiceSection />
      <CourseSection />
      <TestimonialSection />
      <ArticleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Course;
