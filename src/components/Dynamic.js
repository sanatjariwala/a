import React from "react";
import { useSearchParams } from "react-router-dom";

function Dynamic() {
  const [searchParms] = useSearchParams();
  const searchQ = searchParms.get("search");

  return (
    <div>
      {/* {searchQ && */}
      <h2>Hello , {searchQ}</h2>
      <h3>Welcome to your personalized page.</h3>
    </div>
  );
}
export default Dynamic;
