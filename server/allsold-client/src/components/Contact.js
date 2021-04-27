import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CssBaseline,
  Paper,
  Avatar,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import "../styles/About.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { theme } from "../styles/UniversalTheme";
import SpeechRec from "./SpeechRec";

const font = "'Raleway', sans-serif";

function Contact() {
  const initialState = { name: "", email: "", description: "" };
  const [formData, setFormData] = React.useState(initialState);

  const useStyles = makeStyles(() => ({
    gridStart: {
      display: "flex",
    },
    content: {
      display: "flex",
      height: "100%",
    },
    contactForm: {
      display: "flex",
      height: "100vh",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
    },

    image: {
      backgroundImage:
        "url(https://images.pexels.com/photos/955081/pexels-photo-955081.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "red",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className={classes.root}>
      <Grid container xs={12} direction="column" className={classes.gridStart}>
        <CssBaseline />
        <Grid
          item
          container
          direction="row"
          className={classes.content}
          xs={12}
        >
          <Grid
            item
            container
            direction="column"
            xs={12}
            sm={8}
            md={5}
            className={classes.contactForm}
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <ContactPhoneIcon />
              </Avatar>
              <Typography variant="h3" component="h1">
                Contact Us
              </Typography>
              <Typography
                variant="h6"
                component="p"
                style={{
                  fontFamily: font,
                  fontWeight: "800",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              >
                We value every bit of feedback from our consumers. Please fill
                up our contact us form and we will get back to you shortly
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="name"
                  value={formData.name}
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="name" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="email"
                  value={formData.email}
                  label="Email Address"
                  name="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="email" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="description"
                  label="Enter your message here"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.description}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec
                          id="description"
                          handleChange={handleChange}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
