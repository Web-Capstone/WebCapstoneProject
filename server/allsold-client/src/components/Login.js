import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import "../styles/Register.css";
import { loginUser } from "../actions/index";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Footer from "./Footer";
import SpeechRec from "./SpeechRec";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },

  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialState = { email: "", password: "" };

const Login = () => {
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

  const handleGoogle = () => {
    window.location.href = "/oauth20/google";
  };

  return (
    <Grid container style={{ marginTop: "68px" }}>
      <Grid item xs={12}>
        <form
          className="registerForm"
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Grid
            container
            xs={12}
            md={8}
            direction="column"
            alignItems="center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={8} style={{ width: "100%" }}>
              <TextField
                style={{ width: "calc(100% - 24px)" }}
                className={classes.margin}
                autoFocus="true"
                id="email"
                name="email"
                label="E-mail"
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
            </Grid>
            <Grid item xs={12} md={8} style={{ width: "100%" }}>
              <TextField
                style={{ width: "calc(100% - 24px)" }}
                className={classes.margin}
                label="Password"
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
            </Grid>
            <Grid
              container
              direction="row"
              xs={12}
              md={8}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <Button variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={handleGoogle}
                  variant="contained"
                  style={{
                    float: "right",
                    backgroundColor: "#1976d2",
                    color: "white",
                  }}
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} style={{ width: "100%" }}>
              <Button
                color="primary"
                type="submit"
                href="/Register"
                style={{ float: "right", marginTop: "30px", color: "#0066ff" }}
              >
                Dont have an account? Register now!
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Succesfully Loged In
          </Alert>
        </Snackbar>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Login;
