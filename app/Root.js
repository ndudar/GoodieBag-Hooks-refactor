import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Candies from "./Candies";
import Navbar from "./Navbar";
import Candy from "./Candy";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
          <Navbar />
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
          <Routes>
            {/* <Route path="/" element={} /> */}
            <Route path="/candies" element={<Candies />} />
            <Route path="/candies/:candyId" element ={<Candy />} />
          </Routes>
      </main>
    </div>
  );
};

export default Root;
