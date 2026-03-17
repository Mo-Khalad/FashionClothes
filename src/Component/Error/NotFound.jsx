import React from "react";
import Button from "./../Ui/Button.jsx";
import { useNavigate } from "react-router-dom";

export const NotFound = ({ errorMessage , message}) => {
  const navigate = useNavigate();

  return (
    <div className="error-404 w-100 d-flex justify-content-center align-items-center mt-5">
      <div className='w-50 text-center'>
        <h3 className='main-color fs-3 fw-bold'>{errorMessage}</h3>
        <p className='text-center p-2'>We could not find the {message} you were looking for. Please use the navigation or the button below to go back to our website.</p>
        <Button className="bg-main text-white" onClick={() => navigate('/')}>
          Back to Clothes
        </Button>
      </div>
    </div>
  );
};
