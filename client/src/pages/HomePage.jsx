import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
        <div>
            <Navbar />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Footer />
        </div>
    </>
  );
}

export default HomePage;
