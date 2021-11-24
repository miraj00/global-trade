// import * as React from "react";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import Slide from "@mui/material/Slide";



// function TransitionRight(props) {
//   return <Slide {...props} direction="right" />;
// }


// export default function SnackBar(props) {
//   const {open , transition , handleClick , currentText} = props
//   // const [open, setOpen] = React.useState(false);
//   // const [transition, setTransition] = React.useState(undefined);

//   // const handleClick = (Transition) => () => {
//   //   setTransition(() => Transition);
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

 

//     return (
//       <div>
//         <Button
//           style={{ color: "white" }}
//           onClick={handleClick(TransitionRight)}
//         >
//           {currentText}
//         </Button>
//         <Snackbar
//           open={open}
//           // onClose={() => {
//           //   open(false);
//           // }}
//           TransitionComponent={transition}
//           message="welcome back"
//           key={transition ? transition.name : ""}
//         />
//       </div>
//     );
// }


import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBars(props) {
  const { open, handleClick, currentText, setOpen , severity ,message } = props;
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button
        style={{ color: "white" }}
        variant="outlined"
        onClick={handleClick}
      >
        {currentText}
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
