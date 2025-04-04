import React from "react";
import {useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.error(error);

  const goToPreviousPage = () => navigate(-1);
  const goToHomePage = () => navigate("/");
  

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-lvh">
      <h1 className="text-5xl font-bold">{error.status}</h1>
      <h2 className="text-2xl font-bold mb-2">Oops! Page not Found</h2>
      <div className="flex gap-3 items-center">
        <button onClick={goToPreviousPage} className="border bg-blue-600 text-white font-bold px-4 py-2">
          Back to Previous Page
        </button>
        <button onClick={goToHomePage} className="border bg-blue-600 text-white font-bold px-4 py-2">
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
