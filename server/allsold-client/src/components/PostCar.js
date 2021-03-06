import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  CssBaseline,
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
import { postCarsAdd, getAllProducts } from "../actions/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const font = "'Raleway', sans-serif";

const initialState = {
  productCarBrand: "",
  productCarYear: "",
  productCarFuelType: "",
  productCarTransmission: "",
  productCarKm: "",
  productCarNumberOfOwners: "",
  prouctTitle: "",
  productDescription: "",
  productPrice: "",
  productImg: "",
  productName: "Cars",
  sellerName: "",
  sellerEmail: "",
  sellerNumber: "",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PostAdd = () => {
  const [formData, setFormData] = useState(initialState);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [file, setFile] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCarsAdd(formData, history));

    console.log(formData);
  };

  const useStyles = makeStyles(() => ({
    gridStart: {
      display: "flex",
    },
    content: {
      display: "flex",
    },
    contactForm: {
      display: "flex",

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

  const handleClose = () => {
    setOpen(false);
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      {user ? (
        <Grid
          container
          xs={12}
          direction="column"
          className={classes.gridStart}
        >
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

                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="brand"
                    value={formData.productCarBrand}
                    label="Brand"
                    name="productCarBrand"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="year"
                    value={formData.productCarYear}
                    label="Year"
                    name="productCarYear"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="fuelType"
                    value={formData.productCarFuelType}
                    label="Fuel type"
                    name="productCarFuelType"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SpeechRec
                            id="fuelType"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="transmission"
                    value={formData.productCarTransmission}
                    label="Transmission"
                    name="productCarTransmission"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="km"
                    value={formData.productCarKm}
                    label="km driven"
                    name="productCarKm"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="numberOfOwners"
                    value={formData.productCarNumberOfOwners}
                    label="Number of owners"
                    name="productCarNumberOfOwners"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="adTitle"
                    value={formData.prouctTitle}
                    label="Ad Title"
                    name="prouctTitle"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="description"
                    value={formData.productDescription}
                    label="Description"
                    name="productDescription"
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
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="price"
                    value={formData.productPrice}
                    label="Price"
                    name="productPrice"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SpeechRec id="price" handleChange={handleChange} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="price"
                    value={formData.sellerNumber}
                    label="Mobile Number"
                    name="sellerNumber"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SpeechRec id="price" handleChange={handleChange} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="price"
                    value={formData.sellerName}
                    label="First Name"
                    name="sellerName"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SpeechRec id="price" handleChange={handleChange} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="price"
                    value={formData.sellerEmail}
                    label="Email"
                    name="sellerEmail"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SpeechRec id="price" handleChange={handleChange} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    id="price"
                    value={formData.productImg}
                    label="Image URL"
                    name="productImg"
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    type="submit"
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
      ) : (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <h1>Login To Continue</h1>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default PostAdd;
