import React, { useContext } from "react";
import { TokenContext } from "../Store/TokenContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { token } = useContext(TokenContext);

//console.log(children[1].type.name);
  
  if (token !== null ) {
    if (children[1]?.type?.name === "Login" || children?.type?.name === "Register" ) {
      return <Navigate to="../"/>
    }
    else return children 
  }
  
   else if (token === null ){    
    if(children?.type?.name === "Register" ){ 
      return <>
       <Navigate to= "../register"/> 
   {children} 
   </>
    }
  
    else{
      return <>
       <Navigate to= "../login"/> 
       {children}
      </>
    }
     
   
    }
  
  }
 /* else{ 
    if ( children.type.name === "ShowAllOrders" ) 
      else return children
     } return children
  */ 


export default ProtectedRoute;
