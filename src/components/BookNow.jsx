import React from 'react';
import bookNow from "../assets/bookNow.jpg";
import bookNowSmall from "../assets/bookNowSmall.jpg";

const BookNow = () => {
  return (
    <div className='md:mt-36 md:mb-14 mt-10 mb-6 section-container flex justify-center'>
 
      <img 
        src={bookNow} 
        className='hidden md:block cursor-pointer w-full  h-auto' 
        alt="bookNow" 
      />

     
      <img 
        src={bookNowSmall} 
        className='block md:hidden cursor-pointer w-full max-w-[500px] h-auto' 
        alt="bookNowSmall" 
      />
    </div>
  );
}

export default BookNow;
