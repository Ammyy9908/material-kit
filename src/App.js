import "./App.css";
import Backdrop from "./components/Feedback/Backdrop/Backdrop";
import Button from "./components/Inputs/Buttons/Button";
import Container from "./components/Layout/Container/Container";
import React from "react";
import Avatar from "./components/Display/Avatar/Avatar";
import Snakbar from "./components/Feedback/Snakbar/Snakbar";
import SimpleCard from "./components/Surfaces/Cards/SimpleCard";
import IconButton from "./components/Inputs/Buttons/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ComplexCard from "./components/Surfaces/Cards/ComplexCard";
import { v4 as uuidv4 } from "uuid";

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
        <h2>Icon Button</h2>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <AddAPhotoIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
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
        <h1>Cards</h1>
        <h2>Simple Card</h2>
        <SimpleCard />
        <div className="cards__complex">
          <ComplexCard
            id={uuidv4()}
            key={uuidv4()}
            avatar="https://randomuser.me/api/portraits/women/26.jpg"
            image="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
          />
          <ComplexCard
            id={uuidv4()}
            key={uuidv4()}
            avatar="https://uifaces.co/our-content/donated/JvCoSCcg.jpeg"
            image="https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
          <ComplexCard
            id={uuidv4()}
            key={uuidv4()}
            avatar="https://randomuser.me/api/portraits/men/42.jpg"
            image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
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
