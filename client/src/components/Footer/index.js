import React, {useState} from 'react';
import ModalC from "../Modal";


const display = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  },
  contact: {
    padding: "0 33px",
    textDecorationLine: "none"
  },
  sticky: {
    width: "100%",
    position: "absolute",
    // bottom: 0,
    marginTop: 50
  }
}

function Footer() {
    const [currentText, setCurrentText] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
     const toggleModal = () => {
       setIsModalOpen(!isModalOpen);
     };
  return (
    <div style={display.sticky}>
      <div style={display.flex}>
        <div>
          <span> &copy; 2021 Global Trade, Inc.</span>
        </div>
        <div>
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/30/000000/linkedin.png"
          ></img>
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/30/000000/github--v3.png"
          ></img>
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/fluency/30/000000/twitter-squared.png"
          ></img>
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/38/000000/stackoverflow.png"
          ></img>
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/30/000000/instagram-new--v1.png"
          />
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/30/000000/facebook-new.png"
          />
          <img
            style={{ marginRight: 10 }}
            src="https://img.icons8.com/color/30/000000/pinterest--v6.png"
          />
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
    </div>
  );
    }   

export default Footer;