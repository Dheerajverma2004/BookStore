import React from "react";
import MyCourse from "../components/MyCourse.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Courses() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <MyCourse />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Courses;
