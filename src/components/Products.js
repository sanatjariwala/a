import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <ul>
        <h1>Products</h1>
        <h2>
          <Link to="/Cars/Audi">Cars</Link>
        </h2>
        <h2>
          <Link to="/Bikes/Yamaha">Bikes</Link>
        </h2>
      </ul>
    </div>
  );
}

export default Products;
