import { Link, useParams } from "react-router-dom";

function Bikes() {
  const { bname } = useParams();
  console.log(bname);

  return (
    <div>
      <h2>Bikes</h2>
      <h3>{bname}</h3>
      <ul>
        <li>
          <Link to="/Bikes/Yamaha">Yamaha</Link>
        </li>
        <li>
          <Link to="/Bikes/Suzuki">Suzuki</Link>
        </li>
        <li>
          <Link to="/Bikes/Honda">Honda</Link>
        </li>
      </ul>
    </div>
  );
}

export default Bikes;
