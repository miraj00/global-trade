import React, {useState} from 'react';
import ModalC from "../Modal";
import WorldMap from "../WorldMap";
import CountrySelector from "../map-list";

import Skyllar from '../../assets/images/Skyllar.JPG';

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
      <div className="Fonts2">
      <div style={display.flex}>

          <span className="block-example border border-dark"  >
         <WorldMap /> </span> 
    

          <div className="Fonts">
          <span> &copy; 2021 Global Trade, Inc.</span>
        </div>
        
        <div className="Fonts">
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