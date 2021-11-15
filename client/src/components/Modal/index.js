import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import ContactForm from "../ContactForm";

const display = { 
  variant: {
    backgroundColor: "red",
  },
};

function ModalC(props) {
  const { onClose, isModalOpen, currentTitle, currentText, children } = props;

  return (
    <div>
      {currentText === "CONTACT US" ? (
        <Modal
          {...props}
          show={isModalOpen}
          onHide={onClose}
          animation={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>Please Contact Us</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body show={isModalOpen} onHide={onClose} animation={true}>
            <ContactForm />
          </Modal.Body>
          <Modal.Footer>
            <Button style={display.variant}  onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          {...props}
          show={isModalOpen}
          onHide={onClose}
          animation={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              PRIVACY GUIDE
            </Modal.Title>
          </Modal.Header>
          <Modal.Body show={isModalOpen} onHide={onClose} animation={true}>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button style={display.variant} onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ModalC;
