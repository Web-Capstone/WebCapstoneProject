import React, { useState, useEffect, Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import "../styles/Register.css";
import { loginUser, fetchGoogleUser } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Footer from "./Footer";

import SpeechRec from "./SpeechRec";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    width: "75ch",
  },

  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const initialState = { email: "", password: "" };

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState(initialState);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, history));
    setOpen(true);
  };

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const handleNote = (e) => {
  //   setFormData({ ...formData, [e.target.name]: { note } });
  // };

  return (
    <div className={classes.root}>
      <Container maxwidth="md">
        <form className="registerForm" onSubmit={handleSubmit}>
          <TextField
            className={classes.margin}
            autoFocus="true"
            // id="input-with-icon-textfield outlined"
            id="email"
            name="email"
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
                  <SpeechRec
                    id="email"
                    className="speech"
                    handleChange={handleChange}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            // id="input-with-icon-textfield outlined"
            label="password"
            name="password"
            type="password"
            variant="outlined"
            color="#440a67"
            id="password"
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
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>

          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Succesfully Loged In
            </Alert>
          </Snackbar>
          <Button
            className="register"
            variant="contained"
            color="primary"
            type="submit"
            href="/Register"
          >
            Dont have account? Sign UP
          </Button>
          <Button
            href="/oauth20/google"
            variant="contained"
            className="loginGoogle"
          >
            Login with Google
          </Button>
        </form>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
