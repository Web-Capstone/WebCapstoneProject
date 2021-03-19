import React, { useState, useEffect, Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import "../styles/Register.css";
import { loginUser } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import Footer from "./Footer";
import { useHistory } from "react-router";

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
    console.log(formData);
    dispatch(loginUser(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
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

        {/* <TextField
              className={classes.margin}
              id="input-with-icon-textfield outlined"
              label="First Name"
              variant="outlined"
              color="#440a67"
              required="true"
              onChange={e => setfname(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
     */}
        {/* <TextField
              className={classes.margin}
              id="input-with-icon-textfield outlined"
              label="Last Name"
              variant="outlined"
              color="#440a67"
              required="true"
              onChange={e => setlname(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            /> */}

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
      </form>
    </>
  );
};

export default Login;

// class Register extends Component {
//   state = {
//     email: "",
//     fname: "",
//     lname:"",
//     passowrd:"",
//     }

//     static propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     register: PropTypes.func.isRequired,
//   }

//   componentDidUpdate(prevProps) {
//     const { error } = this.props;
//     if (error !== prevProps.error) {
//       //Check for Registration Error
//       if (error.id === "REGISTER_FAIL") {
//         this.setState({ msg: error.msg.msg });
//       } else {
//         this.setState({ msg: null });
//       }
//     }
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     const {  email, fname, lname, password } = this.state;
//     // create user object
//     const newUser = {

//       email,
//       fname,
//       lname,
//       password,
//     };
//     // Attempt to register
//     this.props.register(newUser);
//   };

//   render() {
//     const classes = useStyles;
//     return (
//           <>
//             <form className="registerForm" onSubmit={this.onSubmit}>
//               <TextField
//                 className={classes.margin}
//                 autoFocus="true"
//                 id="input-with-icon-textfield outlined"
//                 label="Email id"
//                 variant="outlined"
//                 required="true"
//                 color="#440a67"
//                 onChange={this.onChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 className={classes.margin}
//                 id="input-with-icon-textfield outlined"
//                 label="First Name"
//                 variant="outlined"
//                 color="#440a67"
//                 required="true"
//                 onChange={this.onChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <AccountCircle />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 className={classes.margin}
//                 id="input-with-icon-textfield outlined"
//                 label="Last Name"
//                 variant="outlined"
//                 color="#440a67"
//                 required="true"
//                 onChange={this.onChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <AccountCircle />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 className={classes.margin}
//                 id="input-with-icon-textfield outlined"
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 color="#440a67"
//                 required="true"
//                 onChange={this.onChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <VpnKeyIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button variant="contained" color="primary">
//                 Login
//               </Button>

//               <Button className="register" variant="contained" color="primary" onClick={ this.props.isAuthenticated ? history.push("/") || window.location.reload() : null } >
//                 Register
//                 { this.props.isAuthenticated ? console.log("true") : console.log("false")}
//               </Button>

//             </form>
//           </> );
//   }
// }

// function Register(props){

//   const [email, setemail] = useState('');
//   const [fname, setfname] = useState('');
//   const [lname, setlname] = useState('');
//   const [password, setpassword] = useState('');

//    Register.propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     register: PropTypes.func.isRequired,
//   }

//   // useEffect(() => {
//   //   props.register();
//   // }, []);

//   const onSubmit = (e) => {

//      e.preventDefault();

//     // create a new User object
//     const newUser = {
//       email,
//       fname,
//       lname,
//       password
//     }
//     // Attempt to register
//     this.props.registerUser(newUser);
//   };

//   const checkingProps = () => {
//     const {isAuthenticated} = props;
//     console.log(isAuthenticated);
//   }

//   return (
//     <>
//       <form className="registerForm" onSubmit={onSubmit}>
//         <TextField
//           className={classes.margin}
//           autoFocus="true"
//           id="input-with-icon-textfield outlined"
//           label="Email id"
//           variant="outlined"
//           required="true"
//           color="#440a67"
//           onChange={e => setemail(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <EmailIcon />
//               </InputAdornment>
//             ),
//           }}
//         />

//         <TextField
//           className={classes.margin}
//           id="input-with-icon-textfield outlined"
//           label="First Name"
//           variant="outlined"
//           color="#440a67"
//           required="true"
//           onChange={e => setfname(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <AccountCircle />
//               </InputAdornment>
//             ),
//           }}
//         />

//         <TextField
//           className={classes.margin}
//           id="input-with-icon-textfield outlined"
//           label="Last Name"
//           variant="outlined"
//           color="#440a67"
//           required="true"
//           onChange={e => setlname(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <AccountCircle />
//               </InputAdornment>
//             ),
//           }}
//         />

//         <TextField
//           className={classes.margin}
//           id="input-with-icon-textfield outlined"
//           label="Password"
//           type="password"
//           variant="outlined"
//           color="#440a67"
//           required="true"
//           onChange={e => setpassword(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <VpnKeyIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Button variant="contained" color="primary" onClick={checkingProps}>
//           Login
//         </Button>

//         <Button className="register" variant="contained" color="primary" onClick={ props.isAuthenticated ? history.push("./home") : null } >
//           Register
//         </Button>
//         {/* {props.isAuthenticated ? history.push("./home") : null} */}
//       </form>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.authReducer.isAuthenticated,
//   errorReducer: state.errorReducer,
// });

// export default connect(mapStateToProps, {register})(Register);
