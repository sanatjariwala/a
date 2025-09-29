import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import Cars from "./components/Cars";
import Bikes from "./components/Bikes";
import Dynamic from "./components/Dynamic";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cars/:cname" element={<Cars />} />
          <Route path="/Bikes/:bname" element={<Bikes />} />
          <Route path="/Dynamic" element={<Dynamic />} />
          <></>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
