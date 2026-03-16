import React, { useContext, useEffect, useState } from "react";
import Inputs from "../Ui/Inputs.jsx";
import Button from "../Ui/Button.jsx";
import { useValidation } from "../../Hook/useValidation.js";
import { useHttp } from "../../Hook/usehttp.js";
import { DisplayContext } from "../../Store/DisplayContext.js";
import { TokenContext } from "../../Store/TokenContext.js";
import { useNavigate } from "react-router-dom";

const formInputs = {
  email: "",
  password: "",
};

const Login = ({ emailRegex, passwordRegex }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const DisplayCrx = useContext(DisplayContext);
  const TokenContextCrx = useContext(TokenContext);
  const { signInObject } = useValidation(formInputs);
  const navigate = useNavigate()
  const email = emailRegex.test(signInObject.dataSign.email);
  const password = passwordRegex.test(signInObject.dataSign.password);

  const { data , sendRequest , error } = useHttp(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    "post"
  );


useEffect(()=>{
  if (data?.message === "success") {      
    localStorage.setItem("token", JSON.stringify(data?.token));
    TokenContextCrx.setToken(data?.token)
    navigate('./../')
  }
} ,[data , TokenContextCrx , DisplayCrx , navigate , signInObject.dataSign])

  const handleChange = (value, event) => {
    setErrorMessage(false);
    signInObject.handleChange(value, event);
  };

  const handleSubmits = (event) => {
    signInObject.handleSubmit(event);
    const formObjectData = new FormData(event.target);
    const customerData = Object.fromEntries(formObjectData.entries());
    email && password && sendRequest(customerData);
    DisplayCrx.showError();
    setErrorMessage(true);
  };

console.log("login");

/*

    <div
          className={`coverLoginAndRegister d-flex flex-wrap w-100 justify-content-around
         align-items-center`}
        >
          <div className="cover"></div>
          <form
            onSubmit={handleSubmits}
            className={`coverFromLoginAndRegister d-flex flex-wrap rounded justify-content-center align-items-center`}
          >
            <h3 className="fs-2 p-2 text-center main-color w-100 fw-bolder text-login">
              Login
            </h3>
            <Inputs
              name="email"
              handleChange={(event) => handleChange("email", event)}
              handleBlue={() => signInObject.handleBlue("email")}
              type="email"
              value={signInObject.dataSign.email}
              id="email"
              errorSign={signInObject.errorSign.email}
              error={"email is not valid add @.com"}
              Regex={emailRegex}
              className="inputsFromLoginAndRegister "
            />
            <Inputs
              id="password"
              name="password"
              handleChange={(event) => handleChange("password", event)}
              value={signInObject.dataSign.password}
              handleBlue={() => signInObject.handleBlue("password")}
              className="inputsFromLoginAndRegister"
              type="password"
              error={
                "It must be no less than 4 numbers and no more than 9 numbers"
              }
              errorSign={signInObject.errorSign.password}
              Regex={passwordRegex}
            />
            {signInObject.messageLogin === "incorrect password" ||
              (errorMessage && data?.message !== "success" && (
                <h2 className="errorLoginAndRegister fs">{data?.message}</h2>
              ))}
  
            <Button className="sub-color bg-main px-5" onClick={DisplayCrx.showError}>
              Login
            </Button>
            <h5
              onClick={() => {
                navigate('./../register')
                DisplayCrx.hideError();
              }}
              className="main-color fs-6 w-100 text-center cursor"
            >
              Create a new account
            </h5>
            <h6>{error && error?.errors?.msg === 'Email is required'  ? '' : error?.message}</h6>
          </form>
          
         </div>
      </div>


*/

return (
<>
      <div
          className={`coverLoginAndRegister d-flex flex-wrap w-100 justify-content-around
         align-items-center`}
        >
          <div className="cover"></div>
          <form
            onSubmit={handleSubmits}
            className={`coverFromLoginAndRegister d-flex flex-wrap rounded justify-content-center align-items-center`}
          >
            <h3 className="fs-2 p-2 text-center main-color w-100 fw-bolder text-login">
              Login
            </h3>
            <Inputs
              name="email"
              handleChange={(event) => handleChange("email", event)}
              handleBlue={() => signInObject.handleBlue("email")}
              type="email"
              value={signInObject.dataSign.email}
              id="email"
              errorSign={signInObject.errorSign.email}
              error={"email is not valid add @.com"}
              Regex={emailRegex}
              className="inputsFromLoginAndRegister "
            />
            <Inputs
              id="password"
              name="password"
              handleChange={(event) => handleChange("password", event)}
              value={signInObject.dataSign.password}
              handleBlue={() => signInObject.handleBlue("password")}
              className="inputsFromLoginAndRegister"
              type="password"
              error={
                "It must be no less than 4 numbers and no more than 9 numbers"
              }
              errorSign={signInObject.errorSign.password}
              Regex={passwordRegex}
            />
            {signInObject.messageLogin === "incorrect password" ||
              (errorMessage && data?.message !== "success" && (
                <h2 className="errorLoginAndRegister fs">{data?.message}</h2>
              ))}
  
            <Button className="sub-color bg-main px-5" onClick={DisplayCrx.showError}>
              Login
            </Button>
            <h5
              onClick={() => {
                navigate('./../register')
                DisplayCrx.hideError();
              }}
              className="main-color fs-6 w-100 text-center cursor"
            >
              Create a new account
            </h5>
            <h6>{error && error?.errors?.msg === 'Email is required'  ? '' : error?.message}</h6>
          </form>
          
         </div>
</>
)    
      
   

};
export default Login;
