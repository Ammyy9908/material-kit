import "./App.css";
import Backdrop from "./components/Feedback/Backdrop/Backdrop";
import Button from "./components/Inputs/Buttons/Button";
import Container from "./components/Layout/Container/Container";
import React from "react";
import Avatar from "./components/Display/Avatar/Avatar";
import Snakbar from "./components/Feedback/Snakbar/Snakbar";

function App() {
  const [isBackdrop, setBackdrop] = React.useState(false);
  const [isSnackbar, setSnackbar] = React.useState(false);

  const handleClose = () => {
    setBackdrop(false);
    setSnackbar(false);
  };

  const handleAutoClose = () => {
    setTimeout(() => {
      setSnackbar(false);
    }, 5000);
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>Buttons</h1>
        <h2>Contained Buttons</h2>
        <Button variant="contained" color="primary" disableElevation>
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" text="Disabled" disabled>
          Disabled
        </Button>
        <Button variant="contained" text="Link" color="link" disableElevation>
          Link
        </Button>
        <h2>Outlined Buttons</h2>

        <Button
          variant="outlined"
          text="Primary"
          color="default"
          disableElevation
        >
          Default
        </Button>
        <Button
          variant="outlined"
          text="Primary"
          color="primary"
          disableElevation
        >
          Primary
        </Button>
        <Button
          variant="outlined"
          text="Secondary"
          color="secondary"
          disableElevation
        >
          Secondary
        </Button>
        <Button variant="outlined" text="Link" color="link" disableElevation>
          Link
        </Button>

        <h2>Text Buttons</h2>

        <Button variant="text" text="Primary" color="default" disableElevation>
          Default
        </Button>
        <Button variant="text" text="Primary" color="primary" disableElevation>
          Primary
        </Button>
        <Button
          variant="text"
          text="Secondary"
          color="secondary"
          disableElevation
        >
          Secondary
        </Button>
        <Button variant="text" text="Link" color="link" disableElevation>
          Link
        </Button>
        <h2>Sizes</h2>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="link" size="large">
          Large
        </Button>
        <h1>Backdrop</h1>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={(e) => setBackdrop(true)}
        >
          Show Backdrop
        </Button>
        <h1>Avatars</h1>
        <Avatar
          color="primary"
          src="https://randomuser.me/api/portraits/women/95.jpg"
          size="large"
          alt="A Female Avatar"
        ></Avatar>
        <Avatar size="large" color="secondary">
          S
        </Avatar>
        <Avatar size="small" color="link">
          R
        </Avatar>
        <Avatar color="primary">A</Avatar>
        <h1>Snackbar</h1>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={() => setSnackbar(true)}
        >
          Show Snackbar
        </Button>
        <Snakbar
          snackbar={isSnackbar}
          onClick={handleClose}
          message="This is a Snackbar"
          handleAutoClose={handleAutoClose}
          direction="bottom-right"
        />
      </Container>

      <Backdrop
        backdrop={isBackdrop}
        justify="center"
        onClick={handleClose}
        align="center"
      >
        <h1>Text</h1>
      </Backdrop>
    </div>
  );
}

export default App;
