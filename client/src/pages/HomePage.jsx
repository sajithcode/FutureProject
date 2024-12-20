import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
// import { CartContext } from "../hooks/CartContext";

export const Context = React.createContext();


function HomePage() {

  const [signedIn, setSignedIn] = useState(false);
  

  return (
    <>
    <Context.Provider value={[signedIn, setSignedIn]}>
    <div>
            <Navbar />
        </div>
        <div>
          <h1>{signedIn ? "Signed In": "Signed Out"}</h1>
          <ProductCard />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Footer />
        </div>
    </Context.Provider>
        
    </>
  );
}

export default HomePage;
