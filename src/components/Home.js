import { Navigate, useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          {/* <h3>
            <Link to="/">Home</Link>
          </h3> */}
          <h3>
            <Link to="/Products">Product</Link>
          </h3>
          <h3>
            <Link to="/AboutUs">About Us</Link>
          </h3>
          <h3>
            <Link to="/ContactUs">Contact Us</Link>
          </h3>
        </ul>
      </nav>
      {/* <button onClick={() => navigate("/ContactUs")}> Go to Contact Us</button>
      <br></br>
      <button onClick={() => navigate("/AboutUs")}> Go to About Us</button>
      <br></br>
      <button onClick={() => navigate("/Products")}> Go to Products</button> */}
    </div>
  );
}

export default Home;
