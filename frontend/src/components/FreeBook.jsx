import React, { useEffect,useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook =async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data)=>data.category==="Free");
        console.log(data);
        setBook(data);
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-600 dark:text-white'>
        <div>
      <h1 className="font-bold text-xl py-2 text-center">
        Free offered courses
      </h1>
      <p className="text-center">
      Lorem ipsum dolar sit amet consecteur adipilising elite.
      </p>
      </div>
            
      <div>
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div> 
    </>
  )
}

export default FreeBook;