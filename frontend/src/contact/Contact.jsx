import React from "react";
import MyContact from "../components/MyContact.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <MyContact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
