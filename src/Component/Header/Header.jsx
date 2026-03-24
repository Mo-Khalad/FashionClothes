import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { DisplayContext } from "../../Store/DisplayContext.js";
import { TokenContext } from "../../Store/TokenContext.js";
import { CartContext } from "../../Store/CartContext.js";

function Header() {
  const DisplayCrx = useContext(DisplayContext);
  const { item } = useContext(CartContext);
  const cartCount = item.reduce((sum, i) => sum + i.quantity, 0);
  const { token, setToken } = useContext(TokenContext);

  const handleClickOnBtnLogOut = () => {
    localStorage.removeItem("UserData");
    localStorage.removeItem("token");
    setToken(JSON.parse(localStorage.getItem("token")));
  };

  return (
    <Navbar
      expand="lg"
      className={token === null ? "bg-sub-color" : "bg-after-login"}
      variant="light"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Fashion Clothes
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {token !== null && (
              <>
                <Nav.Link as={NavLink} end to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} end to="/clothes">
                  Clothes
                </Nav.Link>
                <Nav.Link as={NavLink} end to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} end to="/contact">
                  Contact
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {token === null ? (
              <>
                <Nav.Link as={NavLink}
                  end
                  to="/login"
                  className="text-center nav-btns px-4 py-1 border-0"
                >
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink}
                  end
                  to="/register"
                  className="nav-btns px-4 py-1 text-center border-0"
                >
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link 
                  onClick={handleClickOnBtnLogOut}
                  as={NavLink}
                  end
                  to={"./login"}
                >
                  <button className="logOut-btn px-4 py-1 text-light border-0">
                    Log Out
                  </button>
                </Nav.Link>

                <Nav.Link
                  as="button"
                  className="border-0 cart-shopping nav-link position-relative mt-2"
                  onClick={() => DisplayCrx.handleModalShow("cart")}
                  aria-label="Cart"
                >
                  <i className="fa-solid fa-cart-shopping fs-5 " />
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                      {cartCount}
                    </span>
                  )}
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
