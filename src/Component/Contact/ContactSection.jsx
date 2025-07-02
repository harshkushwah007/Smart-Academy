import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#FF3C8A] w-full h-screen">
      <h2 className="text-6xl text-white text-center p-25">
        Ignite Your Child's Potential Take <br /> the Leap with an Online Course
      </h2>
      <div className="flex gap-10 justify-center">
        <input type="email" placeholder="Your email address..." className="px-50 py-5 rounded-full bg-white" />
        <button className="text-xl px-8 py-2 bg-[#008BD8] cursor-pointer rounded-full text-white hover:bg-sky-600">Subscribe</button>
      </div>
    </div>
  );
};

export default ContactSection;
