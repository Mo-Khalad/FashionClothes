import Style from "./Navbar.module.css";
import Button from "../../Ui/Button.jsx";
import { useContext } from "react";
import { DisplayContext } from "../../../Store/DisplayContext.js";
function Navbar({ open }) { 
    const DisplayCrx= useContext(DisplayContext)  
    return (
    <>
      <nav className={`${Style.navLinks} ${open} rounded-3 position-fixed end-0 top-0 pt-2`}>
        <Button
          className={`${DisplayCrx.pageShow ? "bg-main sub-color" : `${Style.btnClickedStyle} main-color`}`}
          onClick={()=>{
            DisplayCrx.handlePageShow("login")
            DisplayCrx.hideError()
          }}
        >
          Login
        </Button>
        <Button
          className={`${!DisplayCrx.pageShow ? "bg-main sub-color" : `${Style.btnClickedStyle} main-color`}`}
          onClick={()=>{
            DisplayCrx.handlePageShow('Register')
            DisplayCrx.hideError()
          }
          }
        >
          Register
        </Button>
      </nav>
    </>
  );
}

export default Navbar;
