import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Modal, Tab } from "react-bootstrap";
import SignIn from "../Sign/SignIn";
import SignupForm from "../Sign/SignupForm";
// import Cart from "../Cart";
// import About from "./About"

const display = {
  nav: {
    justifyContent: "space-between",
    borderBottom: "none",
  },
  inline: {
    display: "flex",    
  },
  modalmargin: {
    marginTop: "100px",
  },
};

function AppNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [currentText, setCurrentText] = useState();

  return (
    <>
      <div className="topnav">
        <Nav variant="tabs" defaultActiveKey="/home" style={display.nav}>
          {/* <div>
            <Nav.Item>
              <Nav.Link href="#">About</Nav.Link>
            </Nav.Item>
          </div> */}
          <div style={display.inline}>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setShowModal(true);
                  setCurrentText("Sign In");
                }}
              >
                Sign In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setShowModal(true);
                  setCurrentText("Sign Up");
                }}
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
        <Modal
          size=""
          animation={false}
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="signup-modal"
          style={display.modalmargin}
        >
          <Tab.Container defaultActiveKey="login">
            <Modal.Body>
              {currentText === "Sign In" ? <SignIn /> : <SignupForm />}
            </Modal.Body>
          </Tab.Container>
        </Modal>

        

      </div>
     
    </>
  );
}

export default AppNavbar;
