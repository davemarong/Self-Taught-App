import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { get_user_profile_data } from "../../redux/actions/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import Checkbox from "@material-ui/core/Checkbox";

export default function Register() {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    if (username.length > 3 && email.length > 10 && password.length > 3) {
      setLoading(true);

      axios
        .post("https://self-taught-web-dev.herokuapp.com/auth/local/register", {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("Register successful");
          dispatch(get_user_profile_data(response.data.user));
          localStorage.setItem("jwt", response.data.jwt);
          setLoading(false);
          enqueueSnackbar(`Registration successful`, {
            variant: "success",
            autoHideDuration: 4000,
          });
          history.push("/login");
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
          setLoading(false);
          enqueueSnackbar(
            `${error.response.data.data[0].messages[0].message}`,
            {
              variant: "error",
              autoHideDuration: 4000,
            }
          );
        });
    }
  };
  const passwordField = useRef();
  const togglePassword = () => {
    if (passwordField.current.type === "text") {
      passwordField.current.type = "password";
    } else if (passwordField.current.type === "password") {
      passwordField.current.type = "text";
    }
  };
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          border: "1px solid grey",
          borderRadius: 10,
          padding: 20,
          boxShadow: "0 0 4px",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3" align="center">
              Register
            </Typography>
          </Grid>

          <Grid container item direction="column">
            <Grid item>
              <TextField
                onChange={handleUsername}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                name="username"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                onChange={handleEmail}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                inputRef={passwordField}
                onChange={handlePassword}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                type="password"
              ></TextField>
            </Grid>
            <Grid container alignItems="center" item>
              <Typography>Show password</Typography>
              <Checkbox onChange={togglePassword} />
            </Grid>
            {/* <Grid item>
              <TextField
                label="Re enter password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="reEnterPassword"
              ></TextField>
            </Grid> */}
            <Grid item>
              <Button
                onClick={handleSignUp}
                variant="outlined"
                fullWidth
                size="large"
              >
                Sign up
              </Button>
            </Grid>
            {/* <Grid container item>
              <Grid item>
                <Button variant="outlined">Log in</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Register</Button>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid container justify="center" item>
          {loading ? <CircularProgress /> : null}
        </Grid>
      </Container>
    </div>
  );
}
