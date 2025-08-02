import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-700'>Subscribe now & get <span className='text-red-500'>20% off</span> </p>
      <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam amet fugit consectetur.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
        <button className='bg-black text-white text-sm px-10 py-3' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
