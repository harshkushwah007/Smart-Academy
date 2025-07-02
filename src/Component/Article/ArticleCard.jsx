import React from 'react'

const ArticleCard = ({img, title, description, button}) => {
  return (
    <div className='bg-white rounded-2xl h-130 w-100'>
        <div>
            <img src={img} alt="Article" className='h-50 w-110' />
        </div>
        <div className='text-center px-20 py-10'>
            <h3 className='text-xl text-[#008Bd8] py-5'>{title}</h3>
            <p className='py-2'>{description}</p>
            <button className='px-4 py-2 bg-pink-600 text-white rounded-full cursor-pointer hover:bg-pink-700'>{button}</button>
        </div>
    </div>
  )
}

export default ArticleCard