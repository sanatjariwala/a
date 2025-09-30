import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <ul>
        <h1>Products list 2</h1>
        <h2>
          <Link to="/Cars/Audi">Cars for new branch</Link>
        </h2>
        <h2>
          <Link to="/Bikes/Yamaha">Bikes products</Link>
        </h2>
      </ul>
    </div>
  );
}

export default Products;
