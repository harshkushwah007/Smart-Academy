import React from 'react'
import { FaBehanceSquare, FaDribbble,  FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#008BD8] h-screen w-full flex gap-50 justify-center items-center text-white p-20'>
        <div>
            <h3 className='font-bold text-3xl'>Smart Academy</h3>
            <p className='py-10'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Vivamus venenatis dolor <br /> vel lacus laoreet tristique. Nunc bibendum justo</p>
            <div className='flex gap-10 text-xl'>
                <FaBehanceSquare />
                <FaDribbble />
                <FaFacebookSquare />
                <FaInstagramSquare />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <strong className='text-xl'>Quick Links</strong>
            <span>Course</span>
            <span>Our Service</span>
            <span>Contact Us</span>
            <span>Blog</span>
        </div>
        <div className='flex flex-col gap-4'>
            <strong className='text-xl'>Course</strong>
            <span>Music Course</span>
            <span>Art & Craft Course</span>
            <span>Aerobic Course</span>
            <span>Science Course</span>
        </div>
    </div>
  )
}

export default Footer