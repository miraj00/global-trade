import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert , Form} from "react-bootstrap";


const display = {
  width: {
    width: "100%",
  },
  main: {
    margin: "auto",
  },
};



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Global Trade
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignupForm() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // eslint-disable-next-line no-console

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
    console.log({
      userFormData,
    });
  };

  return (
    <ThemeProvider
      theme={theme}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          style={display.main}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            style={display.width}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              sorry...that username is already taken
            </Alert>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  htmlFor="username"
                  autoComplete="given-name"
                  type="text"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  autoFocus
                />
              </Grid>
              <Form.Control.Feedback type="invalid">
                {/* {error && <div>Username is required!</div>} */}
              </Form.Control.Feedback>
              <Grid item xs={12}>
                <TextField
                  htmlFor="email"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                />
              </Grid>
              <Form.Control.Feedback type="invalid">
                {/* {error && <div>Email is required!</div>} */}
              </Form.Control.Feedback>
              <Grid item xs={12}>
                <TextField
                  htmlFor="password"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={display.main}>
                <Link href="./Sign/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
