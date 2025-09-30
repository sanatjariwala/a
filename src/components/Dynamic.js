import { useParams, useSearchParams } from "react-router-dom";

function Dynamic() {
  const { searchQ } = useParams();

  return (
    <div>
      {/* {searchQ && */}
      <h2>Hello , {searchQ}</h2>
      <h3>Welcome to your personalized page.</h3>
    </div>
  );
}
export default Dynamic;
