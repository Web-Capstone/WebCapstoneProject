import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { registerUser } from "../actions/index";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { useHistory } from "react-router";
import "../styles/Register.css";
import SpeechRec from "./SpeechRec";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "70px",
  },
  margin: {
    margin: theme.spacing(3),
    width: "75ch",
  },
  regButton: {
    backgroundColor: "black",
    marginLeft: "270px",
    "&:hover": { backgroundColor: "rgba(0,0,0,0.8)", color: "white" },
  },
}));

const initialState = { email: "", firstName: "", lastName: "", password: "" };

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const [openEmail, setOpenEmail] = useState(false);
  const [openName, setOpenName] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCloseName = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenName(false);
  };

  const handleCloseEmail = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenEmail(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email)) {
      if (isNaN(formData.firstName) && isNaN(formData.lastName)) {
        if (formData.password.length > 4) {
          dispatch(registerUser(formData, history));
          setOpenSuccess(true);
        } else {
          setOpen(true);
        }
      } else {
        setOpenName(true);
      }
    } else {
      setOpenEmail(true);
    }
  };

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Container maxwidth="md" className={classes.root}>
      <form className="registerForm" onSubmit={handleSubmit}>
        <TextField
          className={classes.margin}
          autoFocus="true"
          id="email"
          name="email"
          type="email"
          label="email"
          variant="outlined"
          required="true"
          color="#440a67"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SpeechRec id="email" handleChange={handleChange} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          // id="input-with-icon-textfield outlined"
          id="firstName"
          label="firstName"
          name="firstName"
          variant="outlined"
          type="text"
          color="#440a67"
          required="true"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SpeechRec id="email" handleChange={handleChange} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          // id="input-with-icon-textfield outlined"
          id="lastName"
          label="lastName"
          name="lastName"
          variant="outlined"
          type="text"
          color="#440a67"
          required="true"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SpeechRec id="email" handleChange={handleChange} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          id="password"
          label="password"
          name="password"
          type="password"
          variant="outlined"
          color="#440a67"
          required="true"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.regButton}
          type="submit"
        >
          Sign UP
        </Button>

        <Snackbar
          open={openEmail}
          autoHideDuration={3000}
          onClose={handleCloseEmail}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleCloseEmail} severity="error">
            Enter Valid Email - Id
          </Alert>
        </Snackbar>

        <Snackbar
          open={openName}
          autoHideDuration={3000}
          onClose={handleCloseName}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleCloseName} severity="error">
            First Name & Last Name can not be a Number
          </Alert>
        </Snackbar>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error">
            Password should be more than 4 character
          </Alert>
        </Snackbar>

        <Snackbar
          open={openSuccess}
          autoHideDuration={3000}
          onClose={handleCloseSuccess}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleCloseSuccess} severity="success">
            Logged In
          </Alert>
        </Snackbar>
      </form>
    </Container>
  );
};

export default Login;
