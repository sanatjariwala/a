import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Cars() {
  const { cname } = useParams();
  console.log(cname);
  const [searchparms, setSearchparams] = useSearchParams();
  const [searchd, setSearchd] = useState(searchparms.get("") || "");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchd) {
      navigate(`/Dynamic/${searchd}`);
    }
  };
  console.log(searchd);

  return (
    <div>
      <h2>Cars</h2>
      <h3>{cname}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchd} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      <ul>
        <li>
          <Link to="/Cars/Audi">Audi</Link>
        </li>
        <li>
          <Link to="/Cars/BMW">BMW</Link>
        </li>
        <li>
          <Link to="/Cars/Volvo">Volvo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Cars;
