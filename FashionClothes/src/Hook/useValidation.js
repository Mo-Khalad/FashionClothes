import { useReducer } from "react";
import { checkValidationFormInput } from "../Logic/logic.js";
const inputFormReducer=(state, { type, payload })=>{
   return checkValidationFormInput(state, { type, payload })  
}
const didEditReducer=(state, { type, payload })=>{
    return checkValidationFormInput(state, { type, payload })  
}
export const useValidation=(objectFormSign)=>{
    const [dataSign, inputFormDispatch] = useReducer( inputFormReducer, objectFormSign);
    const [errorSign, errorDispatch] = useReducer( didEditReducer, objectFormSign );
const handleSubmit = (event) => {
      event.preventDefault();
      errorDispatch({
      type: "error",
      payload:true ,
    });   
};
const handleChange = (element, event) => {  
  inputFormDispatch({
    type: element,
    payload: event.target.value,
  }
);
    errorDispatch({
      type: element,
      payload: false,
    });
};
const handleBlue = (element) => {    
    errorDispatch({
      type: element,
      payload: true,
    });
  }

const signInObject={
  handleBlue ,
  errorSign ,
  handleChange ,
  dataSign ,
  handleSubmit
 }
return {signInObject}
}