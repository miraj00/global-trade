// import * as React from "react";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import Fade from "@mui/material/Fade";
// import Slide from "@mui/material/Slide";
// import Grow from "@mui/material/Grow";

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

// export default function TransitionsSnackbar() {
//   const [state, setState] = React.useState({
//     open: false,
//     Transition: SlideTransition,
//   });

  

//   const handleClose = () => {
//     setState({
//       ...state,
//       open: false,
//     });
//   };

//   return (
//     <div>
//       {/* <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button> */}
//       <Snackbar
//         open={state.open}
//         onClose={handleClose}
//         TransitionComponent={state.Transition}
//         message="I love snacks"
//         key={state.Transition.name}
//       />
//     </div>
//   );
// }
