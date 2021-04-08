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
import Footer from "./Footer";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

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

const initialState = { email: "", firstName: "", lastName: "", password: "" };

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNote = (e) => {
    setFormData({ ...formData, [e.target.name]: { note } });
  };

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <div className={classes.root}>
      <Container maxwidth="md">
        <form className="registerForm" onSubmit={handleSubmit}>
          <TextField
            className={classes.margin}
            autoFocus="true"
            id="input-with-icon-textfield outlined"
            name="email"
            label="email"
            variant="outlined"
            required="true"
            color="#440a67"
            onChange={isListening ? { handleNote } : { handleChange }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => setIsListening((prevState) => !prevState)}
                  >
                    {isListening ? (
                      <MicIcon color="primary" />
                    ) : (
                      <MicOffIcon color="secondary" />
                    )}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield outlined"
            label="password"
            name="password"
            type="password"
            variant="outlined"
            color="#440a67"
            required="true"
            onChange={handleChange}
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
      <p>{note}</p>
      <Footer />
    </div>
  );
};

export default Login;
