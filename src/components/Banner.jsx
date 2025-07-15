import React from 'react'
import banner from "../../public/Banner.png"

const Banner = () => {
    
    
    return (
        <>
            <div className= "conatiner mx-auto md:px-24 md:py-3 flex flex-col md:flex-row ">
                <div className='left order-2 md:w-1/2 md:mt-20 mt-8 mx-5'>
                    <div className='space-y-12'>
                        <h1 className='text-5xl font-bold'>Discover Your Next Adventure at WhimsyReads: Books for Every <span className='text-orange-600'>Imagination</span></h1>
                        <p className='text-2xl'>Step into <span className='text-orange-500'>WhimsyReads</span>, where each page twinkles with fairy tale magic. Discover captivating stories and empowering self-discovery journeys that transport you to enchanting worlds of wonder and wisdom.</p>
                    </div>
                    <label className=" my-6 input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-active btn-secondary bg-orange-600 hover:bg-orange-400 text-white hover:text-black transition-all">Secondary</button>
                </div>
                <div className='order-1 mt-10 md:mt-8 md:order-2 mx-auto md:w-1/2'>
                  <img src={banner} className='w-[50vw] h-[30vh] md:w-[80vw] md:h-[80vh]' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
