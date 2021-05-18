import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { get_user_profile_data, sign_in } from "../../redux/actions/index";
export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log("Logged in", response.data.user);
        localStorage.setItem("jwt", response.data.jwt);
        dispatch(get_user_profile_data(response.data.user));
        dispatch(sign_in(true));
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div>
      <Container>
        <Grid container direction="column">
          <Grid item>
            <Typography>Sign ip</Typography>
          </Grid>

          <Grid item>
            <Typography>Please enter your personal info</Typography>
          </Grid>
          <Grid container item direction="column">
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
                onChange={handlePassword}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
              ></TextField>
            </Grid>

            <Grid item>
              <Button
                onClick={handleSignIn}
                variant="outlined"
                fullWidth
                size="large"
              >
                Sign up
              </Button>
            </Grid>
            <Grid container item>
              <Grid item>
                <Button variant="outlined">Sign in</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Sign up</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
