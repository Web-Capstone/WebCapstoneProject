import React, { useState, useEffect, Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { loginUser, registerUser } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import Footer from "./Footer";
import { useHistory } from "react-router";
import "../styles/Register.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    width: "75ch",
  },
}));

const initialState = { email: "", firstName: "", lastName: "", password: "" };

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
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
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          id="input-with-icon-textfield outlined"
          label="firstName"
          name="firstName"
          variant="outlined"
          color="#440a67"
          required="true"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className={classes.margin}
          id="input-with-icon-textfield outlined"
          label="lastName"
          name="lastName"
          variant="outlined"
          color="#440a67"
          required="true"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
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

        <Button
          className="register"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign UP
        </Button>
      </form>
    </Container>
  );
};

export default Login;
