import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import "../styles/Register.css";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    width: "75ch",
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <>
      <div className="registerForm">
        <TextField
          className={classes.margin}
          autoFocus="true"
          id="input-with-icon-textfield outlined"
          label="Email id"
          variant="outlined"
          required="true"
          color="#440a67"
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
          label="First Name"
          variant="outlined"
          color="#440a67"
          required="true"
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
          label="Last Name"
          variant="outlined"
          color="#440a67"
          required="true"
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
          label="Password"
          type="password"
          variant="outlined"
          color="#440a67"
          required="true"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          Login
        </Button>

        <Button className="newAccount" variant="contained" color="primary">
          Create New Account
        </Button>
      </div>
    </>
  );
};

export default Register;
