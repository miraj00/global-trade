import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CONTACT_FORM } from "../../utils/mutations"
import { validateEmail } from "../../utils/helpers";
import { Snackbar } from "@mui/material";


const display = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: "60px",
  },
  form: {
    width: "80%"
  }
};
function ContactForm(props) {
  //const { onClose } = props  
  const [formState, setFormState] = useState({
    userId: "",
    email: "",
    contactBody: "",
  });
  const [validated] = useState(false);
  const { email, contactBody } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const [contactForm] = useMutation(CONTACT_FORM);


  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("your email is invalid.");
      } else {
        setErrorMessage("");
        console.log("valid email");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });

      // to sync the form data to the state for the other form elements as well.
    }

    console.log(errorMessage);
  }

  // <~!------------------------------------------------------------------------------------!~>

  const handleSubmit =  async (e) => {
    // e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }


    try {
      const { data } = await contactForm({
        variables: {
          email: formState.email,
          contactBody: formState.contactBody,
        },
      });
      console.log(data);

      setFormState({
        email: "",
        contactBody: "",
      });

      console.log({
        formState,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      <div style={display.center}>
        <Form
          onSubmit={handleSubmit}
          style={display.form}
          validated={validated.toString()}
        >
          {/* <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
              placeholder="Name"
            />
          </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address:</Form.Label>
            <Form.Control
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="contactBody"
              defaultValue={contactBody}
              onBlur={handleChange}
            />
          </Form.Group>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            disabled={!(formState.email && formState.contactBody)}
          >
            Submit
          </Button>
        </Form>
        {!errorMessage ? (
          <Snackbar />
        ) : null}
      </div>
    </section>
  );
}
export default ContactForm;
