import React from "react";
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function MyCourse() {
  return (
    <>
    <div>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-600 dark:text-white">
      <div className="mt-12 item-center justify-center text-center ">
        <h1 className="text-2xl md:text-4xl pt-32">We're delighted to have you <span className="text-pink-500">here! :)</span></h1>
        <p className="italic mt-10 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <Link to="/">
        <button className="btn btn-secondary bg-pink-500">Back</button>
        </Link>      
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
          ))
          }
        </div>
      </div>  
      </div>    
    </>
  );
}

export default MyCourse;
