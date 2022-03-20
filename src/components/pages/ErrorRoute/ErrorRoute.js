import React from "react";
import { Link } from "react-router-dom";

const ErrorRoute = () => {
  return (
    <div className="text-center   pt-4 pb-2">
      <img className="img-fluid w-75 d-block mx-auto py-3 pb-3" src="https://i.ibb.co/BzhJ0BP/bitly-404-page.gif" alt="" />
      <Link to="/home">
        {" "}
        <button className="button"> Go to home</button>
      </Link>
    </div>
  );
};

export default ErrorRoute;
