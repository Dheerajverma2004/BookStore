import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center text-xl">
        <div className="text-center justify-center">
         <div className="px-40"> <img src="../../dist/Dheeraj.png" width={250} height={250} /></div>
          <br/>
          <h1>I'm <b><span className="text-red-500">Dheeraj verma</span></b>.</h1>
          <h2>B.Tech CSE Undergrad, Hope you like my <b><span className="text-green-500">MERN</span></b> project</h2>
          <h3>'<b><span className="text-orange-300">Bookstore Website</span></b>' made with <b><span className="text-red-600">♡</span></b> by Dhrj!</h3>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
