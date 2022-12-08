import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Candies from "./Candies";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <BrowserRouter>
          <Routes>
            <Route path="/candies" element={<Candies />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Root;
