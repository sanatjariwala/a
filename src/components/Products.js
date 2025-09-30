import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <ul>
        <h1>Products list 2</h1>
        <h2>
          <Link to="/Cars/Audi">Cars list</Link>
        </h2>
        <h2>
          <Link to="/Bikes/Yamaha">Bike list</Link>
        </h2>
      </ul>
    </div>
  );
}

export default Products;
