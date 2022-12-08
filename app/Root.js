import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Candies from "./Candies";
import Navbar from "./Navbar";
import Candy from "./Candy";
import Home from "./Home";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candies" element={<Candies />} />
          <Route path="/candies/:candyId" element={<Candy />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
