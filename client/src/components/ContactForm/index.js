import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, Button } from "react-bootstrap";

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
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  return (
    <section>
      
      <div style={display.center}>
        <Form onSubmit={handleSubmit} style= {display.form}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
              placeholder="Name"
            />
          </Form.Group>
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
              name="message"
              defaultValue={message}
              onBlur={handleChange}
            />
          </Form.Group>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}
export default ContactForm;
