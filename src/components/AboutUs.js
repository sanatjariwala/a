import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AboutUs() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1>AboutUs</h1>
      {/* <button onClick={() => navigate("/Home")}> Go to Home</button> */}
    </div>
  );
}

export default AboutUs;
