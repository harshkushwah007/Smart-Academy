import React from 'react'

const CourseCard = ({img, title}) => {
  return (
    <div className='rounded-xl p-10 flex flex-col'>
        <div className='w-40 h-40'>
        <img src={img} alt="img" />
        </div>
        <h3 className='font-semibold p-4 text-[#008Bd8]'>{title}</h3>
    </div>
  )
}

export default CourseCard