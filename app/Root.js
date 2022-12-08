import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Candies from "./Candies";

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
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
