import React, {useState} from 'react';
import ModalC from "../Modal";

function Footer() {
    const [currentText, setCurrentText] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
     const toggleModal = () => {
       setIsModalOpen(!isModalOpen);
     };
    return (

      <div>
        <a
          href="#"
          onClick={() => {
            setIsModalOpen(true);
            setCurrentText("CONTACT US");
          }}
        >
          CONTACT US
        </a>
        <a
          href="#"
          onClick={() => {
            setIsModalOpen(true);
            setCurrentText("PRIVACY");
          }}
        >
          {" "}
          PRIVACY
        </a>
        {isModalOpen && (
          <ModalC
            onClose={toggleModal}
            isModalOpen={isModalOpen}
            currentText={currentText}
          >            
          </ModalC>
        )}
      </div>
    );
    }   

export default Footer;