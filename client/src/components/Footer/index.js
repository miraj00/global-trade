import React, {useState} from 'react';
import ModalC from "../Modal";


const display = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  },
  contact: {
    padding: "0 35px",
    textDecorationLine: "none"
  }
}

function Footer() {
    const [currentText, setCurrentText] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
     const toggleModal = () => {
       setIsModalOpen(!isModalOpen);
     };
    return (
      <div style={display.flex}>
        <div>
          <span> &copy; 2021 Global Trade, Inc.</span>
        </div>
        <div>
          <a
            href="#"
            onClick={() => {
              setIsModalOpen(true);
              setCurrentText("CONTACT US");
            }}
            style={display.contact}
          >
            CONTACT US
          </a>
          <a
            href="#"
            onClick={() => {
              setIsModalOpen(true);
              setCurrentText("Privacy Policy");
            }}
            style={display.contact}
          >
            {" "}
            Privacy Policy
          </a>
          {isModalOpen && (
            <ModalC
              onClose={toggleModal}
              isModalOpen={isModalOpen}
              currentText={currentText}
            ></ModalC>
          )}
        </div>
      </div>
    );
    }   

export default Footer;