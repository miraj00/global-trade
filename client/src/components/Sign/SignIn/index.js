import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, formLabelClasses } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert , Form } from "react-bootstrap";

const display = {
  width: {
    width: "100%"    
  },
  main:{
  margin: "0 auto"
  },
  modalmargin: {
    marginTop: "100px"
  }
}


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

export default function SignIn() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console


    if (data.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });


    console.log({
      userFormData
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
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            style={display.width}
            
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              sorry ... wrong username/password
            </Alert>
            <TextField
              htmlFor="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              onChange={handleInputChange}
              value={userFormData.email}
            />
            <Form.Control.Feedback type="invalid">
              {/* {error && <div>Email is required!</div>} */}
            </Form.Control.Feedback>

            <TextField
              htmlFor="password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
            />
            <Form.Control.Feedback type="invalid">
              {/* {error && <div>Password is required!</div>} */}
            </Form.Control.Feedback>
            <Button
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item style={display.main}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
