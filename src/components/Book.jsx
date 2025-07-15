import React from 'react'
import { useState , useEffect} from 'react'

import Cards from './Cards'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Book() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  
  return (
    <>
     <div className='mx-auto container md:px-24'>
       <div className='md:mt-32 dark:md:mt-16 mt-20 justify-center items-center text-center'>
        <h1 className='text-2xl dark:py-11 md:text-4xl font-semibold'>Welcome to WhimsyReads <span className='text-orange-600'>Exclusive!</span></h1>
        <p className='md:px-32 px-7  text-sm md:text-lg py-3'>We're thrilled to have you in our exclusive community of book lovers. Get ready to dive into a world of enchanting stories, personalized recommendations, and special perks designed just for you. <span className='text-orange-500'>Happy reading!</span></p>
        <Link to={'/'}>
            <button className='mt-3 bg-pink-500 text-white hover:bg-pink-500 btn px-14 duration-500 hover:shadow-2xl hover:scale-125'>Back</button>
        </Link>
       </div>
       <div className='mt-5 grid grid-cols-1 md:grid-cols-3'>
         {
           book.map((items) => (
            <Cards key ={items.id} items = {items} />
           ))
         }
       </div>
     </div>
    </>
  )
}

export default Book
