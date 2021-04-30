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
import PostAddIcon from "@material-ui/icons/PostAdd";
import { theme } from "../styles/UniversalTheme";
import SpeechRec from "./SpeechRec";

const font = "'Raleway', sans-serif";

function Contact() {
  const initialState = {
    brand: "",
    year: "",
    fuelType: "",
    transmission: "",
    km: "",
    numberOfOwners: "",
    adTitle: "",
    description: "",
    price: "",
  };
  const [formData, setFormData] = React.useState(initialState);
  const [file, setFile] = React.useState();

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
        "url(https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
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
    buttonUpload: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const publishAd = (event) => {
    console.log("Image uploaded");
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
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
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
                <PostAddIcon />
              </Avatar>
              <Typography variant="h3" component="h1">
                Post Your Ad
              </Typography>

              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="brand"
                  value={formData.brand}
                  label="Brand"
                  name="brand"
                  autoComplete="brand"
                  autoFocus
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="brand" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="year"
                  value={formData.year}
                  label="Year"
                  name="year"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="year" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="fuelType"
                  value={formData.fuelType}
                  label="Fuel type"
                  name="fuelType"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="fuelType" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="transmission"
                  value={formData.transmission}
                  label="Transmission"
                  name="transmission"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec
                          id="transmission"
                          handleChange={handleChange}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="km"
                  value={formData.km}
                  label="km driven"
                  name="km"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="km" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="numberOfOwners"
                  value={formData.numberOfOwners}
                  label="Number of owners"
                  name="numberOfOwners"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec
                          id="numberOfOwners"
                          handleChange={handleChange}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="adTitle"
                  value={formData.adTitle}
                  label="Ad Title"
                  name="adTitle"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="adTitle" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="description"
                  value={formData.description}
                  label="Description"
                  name="description"
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

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  id="price"
                  value={formData.price}
                  label="Price"
                  name="price"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SpeechRec id="price" handleChange={handleChange} />
                      </InputAdornment>
                    ),
                  }}
                />

                <input
                  accept="image/*"
                  className={classes.input}
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                  }}
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.buttonUpload}
                  >
                    Upload images
                  </Button>
                </label>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={publishAd}
                >
                  Post Ad
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
