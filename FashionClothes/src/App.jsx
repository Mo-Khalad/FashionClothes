import React, { useContext ,useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home.jsx";
import Clothes from "./pages/Clothes/Clothes.jsx";
import { About } from "./pages/About/About.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import DetailsProducts from "./pages/DetailsProduct/DetailsProducts.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import ProtectedRoute from "./Component/ProtectedRoute";
import Layout from "./Component/Layout";
import { TokenContext } from "./Store/TokenContext.js";
import { CartContext } from "./Store/CartContext.js";

const App = () => {
  const nameRegex = /^[A-Za-z]{3}/;
  const emailRegex = /@gmail.com/;
  const ageRegex = /^[0-9]{11}/;
  const passwordRegex = /^[A-Z0-9a-z]{4}/;
  const rePasswordRegex = /^[A-Z0-9a-z]{4}/;    
    
  const TokenContextCrx = useContext(TokenContext);
  const {item} = useContext(CartContext);


 if(item.length !== 0){
   localStorage.setItem("items", JSON.stringify(item));
 }else localStorage.setItem("items", JSON.stringify([]));


useEffect(()=>{
  TokenContextCrx.setToken(JSON.parse(localStorage.getItem("token")))
},[TokenContextCrx])

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
  //    errorElement: <NotFound />,
      children: [
        { path: "/", element: <ProtectedRoute> <Home /> </ProtectedRoute>},
        { path:"/clothes" , element: <ProtectedRoute> <Clothes /> </ProtectedRoute>},
        { path: "/clothes/product/:id", element: <ProtectedRoute> <DetailsProducts /> </ProtectedRoute>},
        { path: "/about", element: <ProtectedRoute> <About /> </ProtectedRoute>},
        { path: "/login", element: <ProtectedRoute> <Login 
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}/> 
          </ProtectedRoute>},
        { path: "/register" , element:<ProtectedRoute>
          <Register 
          nameRegex={nameRegex}
          passwordRegex={passwordRegex}
          rePasswordRegex={rePasswordRegex}
          emailRegex={emailRegex}
          ageRegex={ageRegex}
          />
          </ProtectedRoute> },
        { path: "/contact", element: <ProtectedRoute> <Contact />   </ProtectedRoute>},
    ]}])
  return (
    <>
        <RouterProvider router={router} />
        <Cart/>
        <CheckOut/>
    </>
  );
};

export default App;
/*
SiteNavbar />
     

      <Footer />
      
//import React, { useContext } from "react";
/*import Cart from "./Component/Cart/Cart.jsx";
import CheckOut from "./Component/CheckOut/CheckOut.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Navbar from "./Component/Header/Navbar/Navbar.jsx";
import MainNavbar from "./Component/Header/MainNavbar/MainNavbar.jsx";
import DetailsProducts from "./Component/DetailsProduct/DetailsProducts.jsx";
import MainContent from "./Component/MainContent/MainContent.jsx";
import { DisplayContext } from "./Store/DisplayContext.js";
*/
/*
import './App.css'
//import { Contact } from "./pages/Contact/Contact.jsx";
import { About } from "./pages/About/About.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { Home } from "./pages/Home/Home.jsx";

const App = () => {
/*
 

    /*   
  return (
    <> 
      <>
       <Navbar open={UserData === "success" ? "hide" : ""} />
        <Login
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          open={
            (UserData === "success"|| pageShow === "login") &&
            UserData !== "success" 
              ? "d-flex"
              : "hide"
          }
        />
        <Register
          nameRegex={nameRegex}
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          ageRegex={ageRegex}
          open={
            UserData === "success" || pageShow === "login" ?'hide' : "d-flex" 
          }
        />
        {UserData === "success" && (
          <>
            <MainNavbar />
            <Cart />
            <CheckOut />
            {( pageShow === "detailsProduct" || pageShow=== 'cart')? (
              <DetailsProducts />
            ) : (
              <MainContac
          t />
            )}
          </>
        )}
      </>
    </>
  );
*/
/*
return ( <>


<Home/>

<Footer/>
</>
)
};

export default App;
*/

